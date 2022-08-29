import type { FC } from 'react';
import { useUser } from '@auth0/nextjs-auth0';
import character from '@/assets/images/student.png';

interface CharacterSidebarProps {}

/**
 * CharacterSidebar component
 * @return {JSX.Element} - The JSX code for CharacterSidebar component
 */
const CharacterSidebar: FC<CharacterSidebarProps> = (): JSX.Element => {
  const user = useUser();
  const userPosition = 'Student';
  const userLevel = 0;

  return (
    <div className="absolute top-0 right-0 bottom-0 flex flex-col justify-start items-center py-10 px-5 z-10 w-[18rem] bg-gray">
      <div className="flex flex-col justify-center items-center">
        <div className="flex justify-center items-center box-blue rounded-full shadow-lg">
          <img
            src={character.src}
            alt="Character"
            className="w-24 rounded-full"
          />
        </div>
        <div className="tertiary-heading mt-3">{user.user?.name}</div>
        <div className="quarternary-heading text-light-gray">
          {userPosition}
        </div>
        <div className="flex justify-center items-center box-green small-text rounded-full px-3 py-1 border-2 mt-2">
          Lvl {userLevel}
        </div>
      </div>
      <div className="absolute -left-10 top-0 bottom-0 w-10 bg-gray">
        <div className="w-full h-full rounded-tr-[10rem] border-r border-r-line-gray bg-dark-blue"></div>
      </div>
    </div>
  );
};

export default CharacterSidebar;
