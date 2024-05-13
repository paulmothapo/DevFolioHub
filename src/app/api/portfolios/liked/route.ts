import { NextRequest, NextResponse } from 'next/server'
import prisma from '@/app/lib/prisma'

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url)
  const id = Number(searchParams.get('id'))
  const userId = Number(searchParams.get('userId'))

  try {
    const liked = await prisma.like.findUnique({
      where: {
        portfolioId_userId: {
          portfolioId: id,
          userId
        }
      }
    })
    return NextResponse.json({ liked: !!liked })
  } catch (error) {
    console.error('Error checking like status:', error)
    return NextResponse.json({ error: 'Failed to check like status' }, { status: 500 })
  }
}