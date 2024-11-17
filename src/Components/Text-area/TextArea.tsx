import React, { ChangeEvent, FC, useEffect, useState } from 'react';
import './TextArea-styles.scss';

export interface TextareaProps {
    value: string;
    onChange: (value: string) => void;
    label?: string;
    disabled?: boolean;
    required?: boolean;
    placeholder: string;
    errorMsg: string;
    isError: boolean;
    onFocus?: (value: string) => void;
    onBlur?: (value: string) => void;
    onKeyDown?: (event: React.KeyboardEvent<HTMLTextAreaElement>) => void;
    onKeyUp?: (event: React.KeyboardEvent<HTMLTextAreaElement>) => void;
}

const Textarea: FC<TextareaProps> = ({
    value,
    onChange,
    label,
    disabled = false,
    required = false,
    placeholder,
    errorMsg,
    isError,
    onFocus,
    onBlur,
    onKeyDown,
    onKeyUp,
}) => {
    const [input, setInput] = useState(value);
    const [inputError, setInputError] = useState(isError);

    useEffect(() => setInput(value), [value]);
    useEffect(() => setInputError(isError), [isError]);

    const handleInputChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        const inputValue = event.target.value;
        setInput(inputValue);
        onChange(inputValue);
    };

    const textareaClass = `TEXTAREA___textarea ${inputError ? 'error' : ''}`;

    return (
        <div className="TEXTAREA___container">
            {label && (
                <label className="TEXTAREA___label">
                    {label} {required && <span className="TEXTAREA___span">*</span>}
                </label>
            )}
            <textarea
                className={textareaClass}
                value={input}
                onChange={handleInputChange}
                maxLength={1000}
                placeholder={placeholder}
                disabled={disabled}
                required={required}
                onFocus={(e) => onFocus && onFocus(input)}
                onBlur={(e) => onBlur && onBlur(input)}
                onKeyDown={(e) => onKeyDown && onKeyDown(e)}
                onKeyUp={(e) => onKeyUp && onKeyUp(e)}
                aria-invalid={inputError ? 'true' : 'false'}
                aria-required={required}
                aria-label={label || 'Textarea'}
            />
            <div className="TEXTAREA___text">Maximum Characters is 1000</div>
            {inputError && <p className="TEXTAREA___error" role="alert">{errorMsg}</p>}
        </div>
    );
};

export default Textarea;
