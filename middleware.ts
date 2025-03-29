import NextAuth from 'next-auth'
import createMiddleware from 'next-intl/middleware'
import { getLocale } from 'next-intl/server'
import { NextRequest, NextResponse } from 'next/server'
import authConfig from './auth.config'
import { routing } from './i18n/routing'
import {
  apiAuthPrefix,
  authRoutes,
  DEFAULT_LOGIN_REDIRECT,
  publicRoutes,
} from './routes'

const { auth } = NextAuth(authConfig)

// Create the next-intl middleware
const intlMiddleware = createMiddleware(routing)

const validateRoute = (
  pathnames: string[],
  locales: typeof routing.locales,
) => {
  return RegExp(
    `^(/(${locales.join('|')}))?(${pathnames
      .flatMap(p => (p === '/' ? ['', '/'] : p))
      .join('|')})/?$`,
    'i',
  )
}

const publicPathnameRegex = validateRoute(publicRoutes, routing.locales)
const authPathnameRegex = validateRoute(authRoutes, routing.locales)

export default auth(async (req: NextRequest) => {
  const { nextUrl } = req
  const isLoggedIn = (req as any).auth
  const locale = await getLocale()

  const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix)
  // const isPublicRoute = addLocaleToPath(publicRoutes, routing.locales).includes(
  //   nextUrl.pathname,
  const isPublicRoute = publicPathnameRegex.test(nextUrl.pathname)

  const isAuthRoute = authPathnameRegex.test(nextUrl.pathname)

  // Handle API authentication routes
  if (isApiAuthRoute) {
    return NextResponse.next()
  }

  // Handle authentication routes
  if (isAuthRoute) {
    if (isLoggedIn) {
      return NextResponse.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl))
    }
    return NextResponse.next()
  }

  // Redirect unauthenticated users to the login page for protected routes
  if (!isLoggedIn && !isPublicRoute) {
    return NextResponse.redirect(new URL(`/${locale}/auth/login`, nextUrl))
  }

  // Apply next-intl middleware for internationalized routing
  const intlResponse = intlMiddleware(req)
  if (intlResponse) {
    return intlResponse
  }

  return NextResponse.next()
})

// Optionally, don't invoke Middleware on some paths
export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
}
