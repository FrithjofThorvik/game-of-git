import { prisma } from '../utils/prisma';
import { defaultJobs } from '../assets/mocks/defaultJobs';

const deleteAllJobs = async () => {
  await prisma.jobPositionForUser.deleteMany();
  await prisma.jobPosition.deleteMany();
  await prisma.job.deleteMany();
};

const updateJobs = async () => {
  // Delete all jobs
  await deleteAllJobs();

  // Create jobs
  for (let i = 0; i < defaultJobs.length; i++) {
    const job = defaultJobs[i];
    const newJob = await prisma.job.create({
      data: {
        name: job.name,
      },
    });

    // Create job positions
    for (let j = 0; j < job.jobPositions.length; j++) {
      const position = job.jobPositions[j];
      const newPosition = await prisma.jobPosition.create({
        data: {
          name: position.name,
          exp: position.exp,
          salary: position.salary,
          positionType: position.positionType,
          developerType: position.developerType,
          job: {
            connect: {
              id: newJob.id,
            },
          },
        },
      });
    }
  }
};

updateJobs();
