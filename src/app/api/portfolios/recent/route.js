import prisma from '../../../lib/prisma';

export async function GET(request) {
  const portfolios = await prisma.portfolio.findMany();
  return new Response(JSON.stringify(portfolios));
}