import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/app/lib/prisma';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get('id');

  try {
    const portfolio = await prisma.portfolio.findUnique({
      where: { id: Number(id) },
      select: {
        thumbnail: true,
      },
    });

    if (!portfolio || !portfolio.thumbnail) {
      return new NextResponse('Thumbnail not found', { status: 404 });
    }

    const thumbnailData = portfolio.thumbnail;
    const mimeType = 'image/png'; 

    return new NextResponse(thumbnailData, {
      headers: { 'Content-Type': mimeType },
    });
  } catch (error) {
    console.error('Error fetching thumbnail:', error);
    return NextResponse.json({ error: 'Failed to fetch thumbnail' }, { status: 500 });
  }
}