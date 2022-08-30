import { DeveloperType, PositionType } from '@prisma/client';

export const defaultJobs = [
  {
    name: 'Fink',
    jobPositions: [
      {
        name: 'Frontend Developer',
        exp: 250,
        salary: 400000,
        positionType: PositionType.INTERN,
        developerType: DeveloperType.FRONTEND_DEVELOPER,
      },
      {
        name: 'Frontend Developer',
        exp: 500,
        salary: 600000,
        positionType: PositionType.FULL_TIME,
        developerType: DeveloperType.FRONTEND_DEVELOPER,
      },
    ],
  },
];
