import type { FC } from 'react';

interface ButtonProps {
  children: JSX.Element | string;
  onClick: () => void;
  className?: string;
}

/**
 * Button component
 * @return {JSX.Element} - The JSX code for Button component
 */
const Button: FC<ButtonProps> = ({
  children,
  onClick,
  className,
}): JSX.Element => {
  return (
    <button
      className={`${
        className || ''
      } flex justify-center items-center py-1 px-5 button-text rounded-lg bg-light-blue hover:bg-hover-light-blue hover:cursor-pointer`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
