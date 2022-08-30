import type { FC } from 'react';

interface ICommandProps {
  command: string;
  description: string;
}

/**
 * Command component
 * @return {JSX.Element} - The JSX code for Command component
 */
const Command: FC<ICommandProps> = ({ command, description }): JSX.Element => {
  return (
    <div className="my-2">
      <div className="text-light-blue">{command}</div>
      <div className="content-text">{description}</div>
    </div>
  );
};

export default Command;
