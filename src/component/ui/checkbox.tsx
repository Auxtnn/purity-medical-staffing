import { forwardRef } from "react";

export interface CheckboxProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> {
  label: string;
  error?: string;
}

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ label, error, className = "", ...props }, ref) => {
    return (
      <div className="flex items-start mb-2">
        <div className="flex items-center h-5">
          <input
            ref={ref}
            type="checkbox"
            className={`h-4 w-4 rounded border-gray-medium text-primary focus:ring-primary ${className}`}
            {...props}
          />
        </div>
        <div className="ml-3 text-sm">
          <label htmlFor={props.id} className="text-gray-dark cursor-pointer">
            {label}
          </label>
          {error && <p className="text-error text-sm mt-1">{error}</p>}
        </div>
      </div>
    );
  }
);

Checkbox.displayName = "Checkbox";

export { Checkbox };
