import bcrypt from 'bcryptjs'
import type { NextAuthConfig } from 'next-auth'
import Credentials from 'next-auth/providers/credentials'
import Github from 'next-auth/providers/github'
import Google from 'next-auth/providers/google'
import { LoginSchema } from './app/schemas'

export default {
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    Github({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
    Credentials({
      async authorize(credentials) {
        const validatedFields = LoginSchema.safeParse(credentials)

        if (validatedFields.success) {
          const { email, password } = validatedFields.data

          try {
            const res = await fetch(
              `http://${process.env.NEXT_PUBLIC_SITE_URL}/api/auth/login`,
              {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                  email: email,
                  password: password,
                }),
              },
            )

            if (!res.ok) {
              throw new Error('Invalid credentials')
            }

            const user = await res.json()

            if (!res || !user.data.password) {
              // throw new Error('User not found')
              return null
            }

            console.log('user', user)

            const passwordsMatch = await bcrypt.compare(
              password,
              user.data.password,
            )

            if (passwordsMatch) return user.data

            // throw new Error('Invalid credentials')

            // if (passwordsMatch) return JSON.parse(JSON.stringify(user))
          } catch (error) {
            console.error('Auth error:', error)
            throw new Error('Authentication failed')
          }
        }

        return null
      },
    }),
  ],
} satisfies NextAuthConfig
