
import { NextRequest, NextResponse } from 'next/server'
import prisma from '@/app/lib/prisma'

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url)
  const id = searchParams.get('id')

  try {
    const portfolio = await prisma.portfolio.findUnique({
      where: { id: Number(id) },
      select: { likes: true }
    })
    return NextResponse.json({ likes: portfolio?.likes || 0 })
  } catch (error) {
    console.error('Error fetching like count:', error)
    return NextResponse.json({ error: 'Failed to fetch like count' }, { status: 500 })
  }
}