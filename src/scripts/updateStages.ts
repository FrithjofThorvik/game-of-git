import { prisma } from '../utils/prisma';
import { defaultStages } from '../assets/mocks/deafultStages';

const deleteAllStages = async () => {
  await prisma.stageCompletedByUser.deleteMany();
  await prisma.exerciseCompletedByUser.deleteMany();
  await prisma.solution.deleteMany();
  await prisma.alternative.deleteMany();
  await prisma.question.deleteMany();
  await prisma.tutorial.deleteMany();
  await prisma.exercise.deleteMany();
  await prisma.stage.deleteMany();
};

const updateStages = async () => {
  // Delete all stages
  await deleteAllStages();

  // Create default stages
  for (let i = 0; i < defaultStages.length; i++) {
    const stage = defaultStages[i];
    const newStage = await prisma.stage.create({
      data: {
        name: stage.name,
        description: stage.description,
      },
    });

    // Create stage exercises
    for (let j = 0; j < stage.exercises.length; j++) {
      const exercise = stage.exercises[j];
      const newExercise = await prisma.exercise.create({
        data: {
          name: exercise.name,
          stage: {
            connect: {
              id: newStage.id,
            },
          },
        },
      });

      // Create exercise tutorials
      for (let k = 0; k < exercise.tutorials.length; k++) {
        const tutorial = exercise.tutorials[k];
        await prisma.tutorial.create({
          data: {
            title: tutorial.title,
            description: tutorial.description,
            image: tutorial.image || null,
            code: tutorial.code || null,
            exercise: {
              connect: {
                id: newExercise.id,
              },
            },
          },
        });
      }

      // Create exercise questions
      for (let k = 0; k < exercise.questions.length; k++) {
        const question = exercise.questions[k];
        const newQuestion = await prisma.question.create({
          data: {
            text: question.text,
            exercise: {
              connect: {
                id: newExercise.id,
              },
            },
          },
        });

        // Create question solutions
        for (let p = 0; p < question.solutions.length; p++) {
          const solution = question.solutions[p];
          await prisma.solution.create({
            data: {
              value: solution.value,
              question: {
                connect: {
                  id: newQuestion.id,
                },
              },
            },
          });
        }

        // Create question alternatives
        for (let p = 0; p < question.alternatives.length; p++) {
          const alternative = question.alternatives[p];
          await prisma.alternative.create({
            data: {
              value: alternative.value,
              question: {
                connect: {
                  id: newQuestion.id,
                },
              },
            },
          });
        }
      }
    }
  }
};

updateStages();
