import React, { useState, ReactNode } from 'react';
import './DropdownBox.scss';
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

export interface DropdownProps {
  title: string;
  content: ReactNode | any; // Use `content` prop instead of `children`
  width?: string;
  left?: string;
  right?: string;
}

const DropdownMenu: React.FC<DropdownProps> = ({ 
  title, 
  content, 
  width = '200px', 
  left, 
  right 
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      setIsOpen((prev) => !prev);
    } else if (event.key === 'Escape' && isOpen) {
      setIsOpen(false);
    }
  };

  return (
    <span 
      className="dropdown-menu"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
      onBlur={() => setIsOpen(false)} 
      tabIndex={0} 
      role="menu" 
      aria-haspopup="true" 
      aria-expanded={isOpen} 
      onKeyDown={handleKeyDown}
    >
      <span className="dropdown-header" aria-label={title}>
        <span>{title}</span>
        {isOpen ? <IoIosArrowUp aria-hidden="true" /> : <IoIosArrowDown aria-hidden="true" />}
      </span>
      {isOpen && (
        <div 
          className="dropdown-content"
          style={{ width, left, right }}
          role="menuitem" 
          aria-labelledby="dropdown-header" 
        >
          {content}
        </div>
      )}
    </span>
  );
};

export default DropdownMenu;
