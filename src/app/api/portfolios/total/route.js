import prisma from '../../../lib/prisma';

export async function GET(request) {
  try {
    const portfolioCount = await prisma.portfolio.count();
    return new Response(JSON.stringify({ count: portfolioCount }), {
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error fetching portfolio count:', error);
    return new Response(JSON.stringify({ error: 'Failed to fetch portfolio count' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
