import React, { ChangeEvent, useEffect, useState } from 'react';
import './RadioButton-styles.scss';

export interface RadioButtonProps {
  label: string;
  value: any;
  checked?: boolean;
  onChange: (value: any) => void;
  disabled?: boolean;
  name: string;
}

const RadioButton: React.FC<RadioButtonProps> = ({
  label,
  value,
  checked = false,
  onChange,
  disabled = false,
  name,
}) => {
  const [isChecked, setChecked] = useState(checked);

  useEffect(() => {
    setChecked(checked);
  }, [checked]);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (!disabled) {
      setChecked(event.target.checked);
      onChange(value);
    }
  };

  return (
    <div className="RADIOBUTTON___wrapper">
      <label
        className={`RADIOBUTTON___container ${disabled ? 'RADIOBUTTON___disabled' : ''}`}
      >
        <input
          type="radio"
          value={value}
          checked={isChecked}
          onChange={handleInputChange}
          name={name}
          disabled={disabled}
          aria-checked={isChecked}
          aria-label={label}
        />
        <span className="RADIOBUTTON___checkmark" aria-hidden="true"></span>
        <span className="RADIOBUTTON___label">{label}</span>
      </label>
    </div>
  );
};

export default RadioButton;
