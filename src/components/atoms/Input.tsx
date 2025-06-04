import { forwardRef, type InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  className?: string;
  fullWidth?: boolean;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, className, fullWidth, ...props }, ref) => {
    const inputClasses = `input-component ${error ? "error" : ""} ${
      fullWidth ? "full-width" : ""
    } ${className || ""}`;

    return (
      <div className={`input-wrapper ${fullWidth ? "full-width" : ""}`}>
        {label && <label className="input-label">{label}</label>}
        <input ref={ref} className={inputClasses} {...props} />
        {error && <span className="error-message">{error}</span>}
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;
