// Seed script for Creation model
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  await prisma.creation.createMany({
    data: [
      {
        title: 'NFT Alpha',
        description: 'First NFT',
        image: 'https://placehold.co/300x300/alpha',
        published: true,
        creatorId: 1,
      },
      {
        title: 'NFT Beta',
        description: 'Second NFT',
        image: 'https://placehold.co/300x300/beta',
        published: true,
        creatorId: 1,
      },
      {
        title: 'NFT Gamma',
        description: 'Third NFT',
        image: 'https://placehold.co/300x300/gamma',
        published: true,
        creatorId: 1,
      },
      {
        title: 'NFT Delta',
        description: 'Fourth NFT',
        image: 'https://placehold.co/300x300/delta',
        published: true,
        creatorId: 1,
      },
      {
        title: 'NFT Epsilon',
        description: 'Fifth NFT',
        image: 'https://placehold.co/300x300/epsilon',
        published: true,
        creatorId: 1,
      },
    ],

  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
