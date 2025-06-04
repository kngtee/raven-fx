import { forwardRef, type ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "text";
  size?: "small" | "medium" | "large";
  fullWidth?: boolean;
  loading?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      variant = "primary",
      size = "medium",
      fullWidth = false,
      loading = false,
      className = "",
      disabled,
      ...props
    },
    ref
  ) => {
    const buttonClasses = `
      button-component
      ${variant}
      ${size}
      ${fullWidth ? "full-width" : ""}
      ${loading ? "loading" : ""}
      ${className}
    `.trim();

    return (
      <button
        ref={ref}
        className={buttonClasses}
        disabled={disabled || loading}
        {...props}
      >
        {loading && <span className="loader" />}
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
