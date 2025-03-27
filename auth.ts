import NextAuth, { DefaultSession } from 'next-auth'

import { PrismaAdapter } from '@auth/prisma-adapter'
import { UserRole } from './app/types/enums'
import authConfig from './auth.config'
import { getTwoFactorConfirmationByUserId } from './data/two-factor-confirmation'
import { getUserById } from './data/user'
import prisma from './lib/prisma'

declare module 'next-auth' {
  interface Session {
    user: {
      role: UserRole
      isTwoFactorEnabled: boolean
    } & DefaultSession['user']
  }
}

export const { auth, handlers, signIn, signOut } = NextAuth({
  debug: false,
  pages: {
    signIn: '/auth/login',
    error: '/auth/error',
  },
  events: {
    async linkAccount({ user }) {
      await prisma.user.update({
        where: { id: user.id },
        data: { emailVerified: new Date() },
      })
    },
  },
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      console.log('SIGN IN')
      // try {
      //   return true // ✅ Allow sign-in
      // } catch (error) {
      //   console.error('Sign-in error:', error)
      //   if (
      //     error instanceof Error &&
      //     error.message.includes('OAuthAccountNotLinked')
      //   ) {
      //     throw new Error('OAuthAccountNotLinked')
      //   }
      //   return false
      // }

      // Allow OAuth without email verification
      if (account?.provider !== 'credentials') return true

      if (!user.id) return false

      const existingUser = await getUserById(user.id)

      if (!existingUser || !existingUser.emailVerified) {
        return false
      }

      if (existingUser.isTwoFactorEnabled) {
        const twoFactorConfirmation = await getTwoFactorConfirmationByUserId(
          existingUser.id,
        )

        if (!twoFactorConfirmation) return false

        await prisma.twoFactorConfirmation.delete({
          where: { id: twoFactorConfirmation.id },
        })
      }

      return true
    },
    async session({ token, session, user }) {
      if (token.sub && session.user) {
        session.user.id = token.sub
      }

      if (token.role && session.user) {
        session.user.role = token.role as UserRole
      }

      if (session.user) {
        session.user.isTwoFactorEnabled = token.isTwoFactorEnabled as boolean
      }

      if (user) {
        session.user.id = user.id
      }

      return session
    },
    async jwt({ token }) {
      if (!token.sub) return token

      const existingUser = await getUserById(token.sub)

      if (!existingUser) return token

      token.role = existingUser.role
      token.isTwoFactorEnabled = existingUser.isTwoFactorEnabled

      return token
    },
  },

  adapter: PrismaAdapter(prisma),
  session: { strategy: 'jwt' },
  ...authConfig,
})
