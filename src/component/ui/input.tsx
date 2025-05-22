import { forwardRef } from "react";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  fullWidth?: boolean;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, fullWidth = false, className = "", ...props }, ref) => {
    return (
      <div className={`${fullWidth ? "w-full" : ""} space-y-2 mb-4`}>
        {label && (
          <label
            htmlFor={props.id}
            className="block text-sm font-medium text-gray-dark"
          >
            {label}
          </label>
        )}
        <input
          ref={ref}
          className={`w-full px-4 py-2 border ${
            error ? "border-error" : "border-gray-medium"
          } rounded-md focus:outline-none focus:ring-2 focus:ring-primary ${className}`}
          {...props}
        />
        {error && <p className="text-error text-sm">{error}</p>}
      </div>
    );
  }
);

Input.displayName = "Input";

export { Input };
