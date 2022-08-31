import type { FC } from 'react';
import type { ExerciseWithRelations } from '@/types/interfaces';
import Exercise from './exercises/Exercise';

interface ExercisesProps {
  exercises: ExerciseWithRelations[];
}

/**
 * Exercises component
 * @return {JSX.Element} - The JSX code for Exercises component
 */
const Exercises: FC<ExercisesProps> = ({ exercises }): JSX.Element => {
  return (
    <div className="flex justify-center items-center w-full mt-10 mb-12">
      {exercises.map((exercise, i) => (
        <Exercise
          exercise={exercise}
          isLast={i === exercises.length - 1}
          key={exercise.id}
        />
      ))}
    </div>
  );
};

export default Exercises;
