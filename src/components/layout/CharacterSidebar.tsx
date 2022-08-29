import type { FC } from 'react';

interface CharacterSidebarProps {}

/**
 * CharacterSidebar component
 * @return {JSX.Element} - The JSX code for CharacterSidebar component
 */
const CharacterSidebar: FC<CharacterSidebarProps> = (): JSX.Element => {
  return (
    <div className="absolute top-0 right-0 bottom-0 flex flex-col justify-start items-center py-10 px-5 z-10 w-[12rem] bg-gray">
      {/* TODO: Implement character */}
      <div className="absolute -left-10 top-0 bottom-0 w-10 bg-gray">
        <div className="w-full h-full rounded-tr-[10rem] border-r border-r-line-gray bg-dark-blue"></div>
      </div>
    </div>
  );
};

export default CharacterSidebar;
