import { NextRequest, NextResponse } from 'next/server';
import puppeteer from 'puppeteer';

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const url = searchParams.get('url');

    if (!url) {
      return NextResponse.json({ error: 'Website URL is required' }, { status: 400 });
    }

    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url, { waitUntil: 'networkidle0' });

    const thumbnailBuffer = await page.screenshot({ encoding: 'binary' });
    await browser.close();

    const response = new NextResponse(thumbnailBuffer.toString('base64'), {
      headers: {
        'Content-Type': 'image/png',
        'Content-Disposition': 'inline; filename="thumbnail.png"',
      },
    });

    return response;
  } catch (error) {
    console.error('Failed to generate thumbnail:', error);
    return NextResponse.json({ error: 'Failed to generate thumbnail' }, { status: 500 });
  }
}

export const config = {
  runtime: 'edge',
};