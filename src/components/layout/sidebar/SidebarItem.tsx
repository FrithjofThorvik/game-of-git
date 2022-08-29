import type { FC } from 'react';
import { useRouter } from 'next/router';

interface SidebarItemProps {
  text: string;
  icon: JSX.Element;
  link?: string;
  onClick?: () => void;
  disabled?: boolean;
}

/**
 * SidebarItem component
 * @return {JSX.Element} - The JSX code for SidebarItem component
 */
const SidebarItem: FC<SidebarItemProps> = ({
  text,
  icon,
  link,
  disabled,
  onClick,
}): JSX.Element => {
  const router = useRouter();
  const isActive = router.pathname === link;

  return (
    <a
      href={!disabled ? link || '' : ''}
      onClick={!disabled ? onClick : undefined}
      className={`flex justify-start items-center w-full hover:cursor-pointer ${
        isActive ? 'text-light-blue' : 'text-light-gray'
      } ${disabled ? 'text-opacity-30 content-text' : 'link-text'}`}
    >
      <div className="flex justify-center items-center mr-2 p-2 rounded-lg bg-dark-gray scale-90">
        {icon}
      </div>
      <div>{text}</div>
    </a>
  );
};

export default SidebarItem;
