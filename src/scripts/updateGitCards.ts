import { prisma } from '../utils/prisma';
import { defaultGitCards } from '../assets/mocks/defaultGitCards';

const deleteAllGitCards = async () => {
  await prisma.gitCardForUser.deleteMany();
  await prisma.gitCardLevel.deleteMany();
  await prisma.gitCard.deleteMany();
};

const updateGitCards = async () => {
  // Delete all git cards
  await deleteAllGitCards();

  // Create git cards
  for (let i = 0; i < defaultGitCards.length; i++) {
    const gitCard = defaultGitCards[i];
    const newGitCard = await prisma.gitCard.create({
      data: {
        name: gitCard.name,
      },
    });

    // Create git card levels
    for (let j = 0; j < gitCard.levels.length; j++) {
      const gitCardLevel = gitCard.levels[j];
      await prisma.gitCardLevel.create({
        data: {
          level: gitCardLevel.level,
          command: gitCardLevel.command,
          cost: gitCardLevel.cost,
          exp: gitCardLevel.exp,
          gitCard: {
            connect: {
              id: newGitCard.id,
            },
          },
        },
      });
    }
  }
};

updateGitCards();
