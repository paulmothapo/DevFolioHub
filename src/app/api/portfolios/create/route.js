import prisma from '../../../lib/prisma';
import puppeteer from "puppeteer";
import path from "path";

const THUMBNAIL_WIDTH = 640;
const THUMBNAIL_HEIGHT = 360;
const THUMBNAIL_DIR = "public/thumbnails";

export async function POST(request) {
  const { name, description, website, technologies, thumbnail, github, email, twitter } = await request.json();
  
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.setViewport({ width: THUMBNAIL_WIDTH, height: THUMBNAIL_HEIGHT });
  await page.goto(website, { waitUntil: "networkidle0" });

  const thumbnailPath = path.join(THUMBNAIL_DIR, `${Date.now()}.png`);
  await page.screenshot({ path: thumbnailPath });

  await browser.close();


  const portfolio = await prisma.portfolio.create({
    data: {
      name,
      email,
      description,
      website,
      technologies,
      thumbnail: path.basename(thumbnailPath),
      github,
      twitter,
    },
  });
  return new Response(JSON.stringify(portfolio), { status: 201 });
}