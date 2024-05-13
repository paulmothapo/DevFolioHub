import { NextRequest, NextResponse } from 'next/server'
import prisma from '@/app/lib/prisma' 

export async function POST(req: NextRequest) {
  const { id } = await req.json()

  try {
    const portfolio = await prisma.portfolio.update({
      where: { id: Number(id) },
      data: { likes: { increment: 1 } }
    })
    return NextResponse.json(portfolio)
  } catch (error) {
    console.error('Error liking portfolio:', error)
    return NextResponse.json({ error: 'Failed to like portfolio' }, { status: 500 })
  }
}