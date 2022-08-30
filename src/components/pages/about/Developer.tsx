import type { FC } from 'react';

interface IDeveloperProps {
  name: string;
  imageSrc: string;
  position: string;
  description: string;
}

/**
 * Developer component
 * @return {JSX.Element} - The JSX code for Developer component
 */
const Developer: FC<IDeveloperProps> = ({
  name,
  imageSrc,
  position,
  description,
}): JSX.Element => {
  return (
    <div className="flex flex-col justify-start items-center p-5 box-gray">
      <img src={imageSrc} alt={name} className="rounded-full w-16 mb-2" />
      <div className="quaternary-heading">{name}</div>
      <div className="content-text">{position}</div>
      <div className="content-text mt-5 text-center">{description}</div>
    </div>
  );
};

export default Developer;
