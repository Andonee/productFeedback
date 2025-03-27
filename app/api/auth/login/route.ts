import prisma from '@/lib/prisma'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  const body = await req.json()

  const { email, password } = body
  try {
    if (!email) {
      return NextResponse.json(
        { error: 'You must pass email' },
        { status: 500 },
      )
    }

    const user = await prisma.user.findUnique({
      where: { email: email }, // Replace with dynamic authentication logic
    })

    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 })
    }
    return NextResponse.json({ data: user }, { status: 200 })
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 },
    )
  }
}
