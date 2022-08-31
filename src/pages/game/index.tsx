import type { NextPage } from 'next';
import { prisma } from '@/utils/prisma';
import { StageWithRelations } from '@/types/interfaces';
import Stages from '@/components/pages/game/Stages';

interface GameServerProps {
  stages: StageWithRelations[];
}

const Game: NextPage<GameServerProps> = ({ stages }) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <Stages stages={stages} />
    </div>
  );
};

export const getServerSideProps = async () => {
  const stages = await prisma.stage.findMany({
    include: {
      exercises: {
        include: {
          tutorials: {},
        },
      },
    },
  });

  return {
    props: {
      stages,
    },
  };
};

export default Game;
