import prisma from '../../../lib/prisma';
import puppeteer from "puppeteer";
import path from "path";
import fs from "fs";

const THUMBNAIL_WIDTH = 640;
const THUMBNAIL_HEIGHT = 360;

export async function POST(request) {
  const { name, description, website, technologies, github, email, twitter } = await request.json();
  
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.setViewport({ width: THUMBNAIL_WIDTH, height: THUMBNAIL_HEIGHT });
  await page.goto(website, { waitUntil: "networkidle0" });

  // Generate screenshot as a data URL
  const screenshotBuffer = await page.screenshot({ encoding: "base64" });
  const dataURL = `data:image/png;base64,${screenshotBuffer.toString("base64")}`;

  await browser.close();

  const portfolio = await prisma.portfolio.create({
    data: {
      name,
      email,
      description,
      website,
      technologies,
      thumbnail: dataURL, // Store thumbnail as data URL
      github,
      twitter,
    },
  });

  return new Response(JSON.stringify(portfolio), { status: 201 });
}
