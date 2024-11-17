import React, { useState, FC } from 'react';
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import './accordion-styles.scss';

interface AccordionSection {
  title: string;
  content: React.ReactNode;
}

interface AccordionProps {
  sections: AccordionSection[];
}

const Accordion: FC<AccordionProps> = ({ sections }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleSection = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const handleKeyDown = (event: React.KeyboardEvent, index: number) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      toggleSection(index);
    }
  };

  return (
    <div className="ACCORDION___accordion">
      {sections.map((section, index) => (
        <div key={index} className="ACCORDION___accordion-section">
          <div
            className={`ACCORDION___accordion-header ${activeIndex === index ? 'ACCORDION___active' : ''}`}
            onClick={() => toggleSection(index)}
            onKeyDown={(event) => handleKeyDown(event, index)}
            role="button"
            tabIndex={0}
            aria-expanded={activeIndex === index}
            aria-controls={`accordion-content-${index}`}
            id={`accordion-header-${index}`}
          >
            <span>{section.title}</span>
            <span className="ACCORDION___arrow">
              {activeIndex === index ? <IoIosArrowUp /> : <IoIosArrowDown />}
            </span>
          </div>
          {activeIndex === index && (
            <div
              className="ACCORDION___accordion-content"
              id={`accordion-content-${index}`}
              role="region"
              aria-labelledby={`accordion-header-${index}`}
            >
              {section.content}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
