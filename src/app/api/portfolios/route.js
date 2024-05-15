import prisma from '../../lib/prisma';

export async function GET(request) {
  try {
    const portfolios = await prisma.portfolio.findMany({
      select: {
        id: true,
        name: true,
        description: true,
        website: true,
        technologies: true,
        github: true,
        email: true,
        twitter: true,
        thumbnail: true, 
        likes: true,
      },
    });

    return new Response(JSON.stringify(portfolios));
  } catch (error) {
    console.error('Error fetching portfolios:', error);
    return new Response('Internal Server Error', { status: 500 });
  }
}
