// Seed script for Creation model
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  await prisma.creation.createMany({
    data: [
      {
        title: 'NFT Alpha',
        description: 'First NFT',
        image: 'https://media.printler.com/media/photo/130728.jpg?rmode=crop&width=300&height=400',
        published: true,
        creatorId: 1,
      },
      {
        title: 'NFT Beta',
        description: 'Second NFT',
      image: 'https://media.printler.com/media/photo/130728.jpg?rmode=crop&width=300&height=400',
        published: true,
        creatorId: 1,
      },
      {
        title: 'NFT Gamma',
        description: 'Third NFT',
         image: 'https://media.printler.com/media/photo/130728.jpg?rmode=crop&width=300&height=400',
        published: true,
        creatorId: 1,
      },
      {
        title: 'NFT Delta',
        description: 'Fourth NFT',
         image: 'https://media.printler.com/media/photo/130728.jpg?rmode=crop&width=300&height=400',
        published: true,
        creatorId: 1,
      },
      {
        title: 'NFT Epsilon',
        description: 'Fifth NFT',
         image: 'https://media.printler.com/media/photo/130728.jpg?rmode=crop&width=300&height=400',
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
