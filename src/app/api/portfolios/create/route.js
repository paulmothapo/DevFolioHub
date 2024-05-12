import prisma from '../../../lib/prisma';

export async function POST(request) {
  const { name, description, website, technologies, thumbnail } = await request.json();
  const portfolio = await prisma.portfolio.create({
    data: {
      name,
      description,
      website,
      technologies,
      thumbnail,
    },
  });
  return new Response(JSON.stringify(portfolio), { status: 201 });
}