import type { FC } from 'react';
import { StageWithRelations } from '@/types/interfaces';
import Stage from './stages/Stage';

interface StagesProps {
  stages: StageWithRelations[];
}

/**
 * Stages component
 * @return {JSX.Element} - The JSX code for Stages component
 */
const Stages: FC<StagesProps> = ({ stages }): JSX.Element => {
  return (
    <div className="flex flex-col justify-start items-center">
      {stages.map((stage) => (
        <Stage stage={stage} key={stage.id} />
      ))}
    </div>
  );
};

export default Stages;
