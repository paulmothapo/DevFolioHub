import { NextResponse } from 'next/server'
import prisma from '@/app/lib/prisma'

export async function GET() {
  try {
    const portfolios = await prisma.portfolio.findMany({
      orderBy: { likes: 'desc' },
      select: {
        id: true,
        name: true,
        technologies: true,
        thumbnail: true,
        likes: true,
      },
    })

    const response = NextResponse.json(portfolios)

    response.headers.set('Cache-Control', 'max-age=3600, s-maxage=3600')

    return response
  } catch (error) {
    console.error('Error fetching portfolios:', error)
    return NextResponse.json({ error: 'Failed to fetch portfolios' }, { status: 500 })
  }
}

