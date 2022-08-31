import type { FC } from 'react';
import { Tutorial } from '@prisma/client';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

interface TutorialProps {
  tutorials: Tutorial[];
  completed?: boolean;
}

/**
 * Tutorial component
 * @return {JSX.Element} - The JSX code for Tutorial component
 */
const Tutorial: FC<TutorialProps> = ({ tutorials, completed }): JSX.Element => {
  if (tutorials.length === 0) return <></>;
  return (
    <div className="flex justify-center items-center">
      <div className="flex flex-col justify-center items-center relative">
        <a
          className={`flex justify-center items-center rounded-full w-12 h-12 text-[2rem] box-blue border-4 text-light-blue transition duration-500 hover:ease-in-out hover:border-light-blue ${
            completed && 'border-light-blue'
          }`}
          href={`/game/tutorials/${tutorials[0].exerciseId}`}
        >
          <InfoOutlinedIcon fontSize="inherit" />
        </a>
        <div className="flex flex-col justify-center items-center absolute -bottom-7 -translate-x-1/2 left-1/2 w-64">
          <h3 className="content-text">{completed ? 'Completed' : '0/1'}</h3>
        </div>
      </div>
      <div
        className={`border-b border-8 w-10 ${
          completed ? 'border-light-blue' : 'border-line-blue'
        }`}
      ></div>
    </div>
  );
};

export default Tutorial;
