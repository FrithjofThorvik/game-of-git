import type { FC } from 'react';
import { StageWithRelations } from '@/types/interfaces';
import Exercises from './Exercises';
import FlagOutlinedIcon from '@mui/icons-material/FlagOutlined';

interface StageProps {
  stage: StageWithRelations;
}

/**
 * Stage component
 * @return {JSX.Element} - The JSX code for Stage component
 */
const Stage: FC<StageProps> = ({ stage }): JSX.Element => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex justify-center items-center rounded-full w-20 h-20 text-[3rem] border-8 border-light-blue text-light-blue">
        <FlagOutlinedIcon fontSize="inherit" />
      </div>
      <h1 className="quaternary-heading mt-2">{stage.name}</h1>
      <h3 className="content-text">{stage.description}</h3>
      <Exercises exercises={stage.exercises} />
    </div>
  );
};

export default Stage;
