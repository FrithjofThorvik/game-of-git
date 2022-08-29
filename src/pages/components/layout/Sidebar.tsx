import type { FC } from 'react';

interface SidebarProps {}

/**
 * Sidebar component
 * @return {JSX.Element} - The JSX code for Sidebar component
 */
const Sidebar: FC<SidebarProps> = (): JSX.Element => {
  return (
    <div className="absolute top-0 left-0 bottom-0 flex flex-col items-start justify-start py-10 px-5 z-10 w-[12rem] bg-gray">
      {/* TODO: Implement sidebar content */}
      <div className="absolute -right-10 top-0 bottom-0 w-10 bg-gray">
        <div className="w-full h-full rounded-tl-[10rem] border-l border-l-line-gray bg-dark-blue"></div>
      </div>
    </div>
  );
};

export default Sidebar;
