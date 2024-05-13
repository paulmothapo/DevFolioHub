import puppeteer from "puppeteer";
import path from "path";
import fs from "fs";

const THUMBNAIL_WIDTH = 640;
const THUMBNAIL_HEIGHT = 360;
const THUMBNAIL_DIR = "public/thumbnails";

export const generateThumbnail = async (website: string): Promise<string> => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.setViewport({ width: THUMBNAIL_WIDTH, height: THUMBNAIL_HEIGHT });
  await page.goto(website, { waitUntil: "networkidle0" });

  const thumbnailPath = path.join(THUMBNAIL_DIR, `${Date.now()}.png`);
  await page.screenshot({ path: thumbnailPath });

  await browser.close();

  return thumbnailPath;
};