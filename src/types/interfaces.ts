import {
  Alternative,
  Exercise,
  Question,
  Solution,
  Stage,
  Tutorial,
} from '@prisma/client';

export type StageWithRelations = Stage & {
  exercises: (Exercise & {
    tutorials: Tutorial[];
  })[];
};

export type ExerciseWithRelations = Exercise & {
  tutorials: Tutorial[];
};

export type QuestionWithRelations = Question & {
  solutions: Solution[];
  alternatives: Alternative[];
};
