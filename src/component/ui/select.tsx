import { forwardRef } from "react";
import { ChevronDown } from "lucide-react";

export interface SelectOption {
  value: string;
  label: string;
}

export interface SelectProps
  extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, "onChange"> {
  label?: string;
  options: SelectOption[];
  error?: string;
  fullWidth?: boolean;
  placeholder?: string;
  onChange?: (value: string) => void;
}

const Select = forwardRef<HTMLSelectElement, SelectProps>(
  (
    {
      label,
      options,
      error,
      fullWidth = false,
      placeholder,
      className = "",
      onChange,
      ...props
    },
    ref
  ) => {
    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
      if (onChange) {
        onChange(e.target.value);
      }
    };

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
        <div className="relative">
          <select
            ref={ref}
            className={`appearance-none w-full px-4 py-2 pr-10 border ${
              error ? "border-error" : "border-gray-medium"
            } rounded-md focus:outline-none focus:ring-2 focus:ring-primary ${className}`}
            onChange={handleChange}
            {...props}
          >
            {placeholder && (
              <option value="" disabled>
                {placeholder}
              </option>
            )}
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
            <ChevronDown size={18} className="text-gray" />
          </div>
        </div>
        {error && <p className="text-error text-sm">{error}</p>}
      </div>
    );
  }
);

Select.displayName = "Select";

export { Select };
