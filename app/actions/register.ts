'use server'
import { getUserByEmail } from '@/data/user'
import { sendVerificationEmail } from '@/lib/mail'
import prisma from '@/lib/prisma'
import { generateVerificationToken } from '@/lib/tokens'
import bcrypt from 'bcryptjs'
import * as z from 'zod'
import { RegisterSchema } from '../schemas'

export const register = async (values: z.infer<typeof RegisterSchema>) => {
  const validatedFields = RegisterSchema.safeParse(values)

  console.log('validatedFields', validatedFields)

  if (!validatedFields.success) {
    return { error: 'Invalid fields!' }
  }

  const { name, lastname, email, password } = values

  const userExists = await getUserByEmail(email)

  if (userExists) {
    return { error: 'User with provided email already exists' }
  }

  const hashedPassword = await bcrypt.hash(password, 10)

  await prisma.user.create({
    data: {
      email,
      name,
      lastname,
      password: hashedPassword,
    },
  })

  const verificationToken = await generateVerificationToken(email)
  await sendVerificationEmail(verificationToken.email, verificationToken.token)

  return { success: 'Confirmation email sent!' }
}
