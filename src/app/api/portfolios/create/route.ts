import prisma from '../../../lib/prisma';

export const POST = async (request: Request) => {
  const formData = await request.formData();
  const name = formData.get('name') as string;
  const description = formData.get('description') as string;
  const website = formData.get('website') as string;
  const technologies = JSON.parse(formData.get('technologies') as string);
  const github = formData.get('github') as string;
  const email = formData.get('email') as string;
  const twitter = formData.get('twitter') as string;
  const thumbnail = formData.get('thumbnail') as File;

  const thumbnailBuffer = await thumbnail.arrayBuffer();

  const portfolio = await prisma.portfolio.create({
    data: {
      name,
      email,
      description,
      website,
      technologies,
      thumbnail: Buffer.from(thumbnailBuffer), 
      github,
      twitter,
      likes: 0,
    },
  });

  return new Response(JSON.stringify(portfolio), { status: 201 });
};
