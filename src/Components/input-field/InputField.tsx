import { ChangeEvent, FC, useEffect, useState } from 'react';
import './InputField.scss';

type InputType = "text" | "email" | "number" | "password" | "file" | "range" | "search";

export type InputProps = {
  onChange: (value: string | number) => void;
  type?: InputType;
  label: string;
  value: string | number;
  disabled?: boolean;
  required?: boolean;
  placeholder: string;
  errorMsg: string;
  isError: boolean;
  onFocus?: (value: string | number) => void;
  onBlur?: (value: string | number) => void;
  onkeyDown?: (value: string | number) => void;
  onkeyup?: (value: string | number) => void;
};

const Input: FC<InputProps> = ({ 
  onChange, 
  type = "text", 
  label, 
  value, 
  disabled = false, 
  required = false, 
  placeholder, 
  errorMsg, 
  isError, 
  onFocus, 
  onBlur, 
  onkeyDown, 
  onkeyup 
}) => {
  const [input, setInput] = useState(value);
  const [inputError, setInputError] = useState(isError);

  useEffect(() => setInput(value), [value]);
  useEffect(() => setInputError(isError), [isError]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setInput(newValue);
    onChange(newValue);
  };

  const inputClass = `INPUT____INPUT_field ${inputError ? 'error' : ''}`;

  return (
    <div className="INPUT____input-box">
      {label && (
        <label className="INPUT____label">
          {label} {required && <span className="INPUT____required">*</span>}
        </label>
      )}
      <input
        className={inputClass}
        type={type}
        value={input}
        onChange={handleChange}
        placeholder={placeholder}
        disabled={disabled}
        required={required}
        onFocus={() => onFocus?.(input)}
        onBlur={() => onBlur?.(input)}
        onKeyDown={() => onkeyDown?.(input)}
        onKeyUp={() => onkeyup?.(input)}
        aria-invalid={inputError ? "true" : "false"}
      />
      {inputError && <p className="INPUT____error">{errorMsg}</p>}
    </div>
  );
};

export default Input;
