import React, { useEffect, useState } from 'react';
import './checkBox-style.scss';

export interface CheckboxProps {
  label: string;
  checked: boolean;
  disabled?: boolean;
  value: string;
  onChange: (isChecked: boolean) => void;
  checkboxEventemiter?: (isChecked: boolean) => void;
}

const Checkbox: React.FC<CheckboxProps> = ({
  label,
  checked,
  disabled = false,
  value,
  onChange,
  ...props
}) => {
  const [isChecked, setChecked] = useState(checked);

  useEffect(() => {
    setChecked(checked);
  }, [checked]);

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newChecked = event.target.checked;
    setChecked(newChecked);
    onChange(newChecked);
  };

  return (
    <div>
      <label
        className={`CHECKBOX___container ${disabled ? 'CHECKBOX___disabled' : ''}`}
        aria-disabled={disabled} 
        aria-checked={isChecked} 
      >
        {label && (
          <span id={`checkbox-label-${value}`} className="CHECKBOX___label">
            {label}
          </span>
        )}
        <input
          type="checkbox"
          id={`checkbox-${value}`}
          aria-labelledby={`checkbox-label-${value}`} 
          checked={isChecked}
          onChange={handleCheckboxChange}
          value={value}
          disabled={disabled}
        />
        <span className={`CHECKBOX___checkmark ${disabled ? 'CHECKBOX___disabled' : ''}`}></span>
      </label>
    </div>
  );
};

export default Checkbox;
