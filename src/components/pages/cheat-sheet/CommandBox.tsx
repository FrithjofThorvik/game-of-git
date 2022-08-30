import type { FC } from 'react';

interface ICommandBoxProps {
  title: string;
  children: JSX.Element | JSX.Element[];
}

/**
 * CommandBox component
 * @return {JSX.Element} - The JSX code for CommandBox component
 */
const CommandBox: FC<ICommandBoxProps> = ({ title, children }): JSX.Element => {
  return (
    <div className="my-10">
      <div className="tertiary-heading mb-3">{title}</div>
      <div className="flex flex-col items-start justify-center p-5 box-blue rounded-lg">
        {children}
      </div>
    </div>
  );
};

export default CommandBox;
