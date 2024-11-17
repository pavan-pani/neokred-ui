import React, { MouseEventHandler } from 'react';
import './Button.scss';

type ButtonProps = {
  label: string;
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  customClass?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

const Button: React.FC<ButtonProps> = ({
  label,
  size = 'medium',
  disabled = false,
  customClass = '',
  onClick,
}) => {
  return (
    <button
      className={`button ${size} ${customClass}`}
      onClick={onClick}
      disabled={disabled}
      aria-disabled={disabled} 
      role="button"
    >
      {label}
    </button>
  );
};

export default Button;




