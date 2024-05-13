import { NextRequest, NextResponse } from 'next/server'
import prisma from '@/app/lib/prisma'

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url)
  const id = searchParams.get('id')

  try {
    const portfolio = await prisma.portfolio.findUnique({
      where: { id: Number(id) },
      select: {
        name: true,
        description: true,
        website: true,
        thumbnail: true,
        github: true,
        twitter: true,
        email: true,
        technologies: true,
        createdAt: true,
        updatedAt: true,
        likes: true
      }
    })
    return NextResponse.json(portfolio)
  } catch (error) {
    console.error('Error fetching portfolio details:', error)
    return NextResponse.json({ error: 'Failed to fetch portfolio details' }, { status: 500 })
  }
}


