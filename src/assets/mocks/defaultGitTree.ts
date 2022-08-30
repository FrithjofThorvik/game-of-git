import { GitTree } from '@/types/interfaces';

export const defaultGitTree: GitTree = {
  branches: [
    {
      target: 'C1',
      id: 'main',
    },
  ],
  commits: [
    {
      parents: [],
      id: 'C0',
      root: true,
    },
    {
      parents: ['C0'],
      id: 'C1',
    },
  ],
  HEAD: {
    target: 'main',
    id: 'HEAD',
  },
};
