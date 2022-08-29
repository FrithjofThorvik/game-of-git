import type { FC } from 'react';

interface SidebarSectionProps {
  title: string;
  children: JSX.Element | JSX.Element[];
}

/**
 * SidebarSection component
 * @return {JSX.Element} - The JSX code for SidebarSection component
 */
const SidebarSection: FC<SidebarSectionProps> = ({
  title,
  children,
}): JSX.Element => {
  return (
    <div className="w-full mb-10">
      <div className="quarternary-heading mb-3">{title}</div>
      <div className="space-y-3">{children}</div>
    </div>
  );
};

export default SidebarSection;
