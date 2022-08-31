import type { FC } from 'react';
import type { ExerciseWithRelations } from '@/types/interfaces';
import FlagOutlinedIcon from '@mui/icons-material/FlagOutlined';
import Tutorial from './Tutorial';

interface ExerciseProps {
  exercise: ExerciseWithRelations;
  completed?: boolean;
  isLast?: boolean;
}

/**
 * Exercise component
 * @return {JSX.Element} - The JSX code for Exercise component
 */
const Exercise: FC<ExerciseProps> = ({
  exercise,
  completed,
  isLast,
}): JSX.Element => {
  return (
    <div className="flex justify-center items-center">
      <Tutorial tutorials={exercise.tutorials} />
      <div className="flex flex-col justify-center items-center relative">
        <a
          className={`flex justify-center items-center rounded-full w-20 h-20 text-[3rem] box-blue border-8 text-light-blue transition duration-500 hover:ease-in-out hover:border-light-blue ${
            completed && 'border-light-blue'
          }`}
          href={`/game/exercises/${exercise.id}`}
        >
          <FlagOutlinedIcon fontSize="inherit" />
        </a>
        <div className="flex flex-col justify-center items-center absolute -bottom-14 -translate-x-1/2 left-1/2 w-64">
          <h1 className="quaternary-heading text-center">{exercise.name}</h1>
          <h3 className="content-text">{completed ? 'Completed' : '0/1'}</h3>
        </div>
      </div>
      {!isLast && (
        <div
          className={`border-b border-8 w-10 ${
            completed ? 'border-light-blue' : 'border-line-blue'
          }`}
        ></div>
      )}
    </div>
  );
};

export default Exercise;
