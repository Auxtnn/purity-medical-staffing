import { forwardRef } from "react";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?:
    | "default"
    | "primary"
    | "secondary"
    | "outline"
    | "success"
    | "error"
    | "warning";
  size?: "sm" | "md" | "lg";
}

const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  (
    { variant = "default", size = "md", className = "", children, ...props },
    ref
  ) => {
    const variantStyles = {
      default: "bg-gray-medium text-gray-dark",
      primary: "bg-primary text-white",
      secondary: "bg-accent text-white",
      outline: "border border-gray-medium text-gray-dark",
      success: "bg-success text-white",
      error: "bg-error text-white",
      warning: "bg-warning text-gray-dark",
    };

    const sizeStyles = {
      sm: "text-xs px-2 py-0.5",
      md: "text-sm px-2.5 py-0.5",
      lg: "text-sm px-3 py-1",
    };

    return (
      <span
        ref={ref}
        className={`inline-flex items-center rounded-full font-medium ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
        {...props}
      >
        {children}
      </span>
    );
  }
);

Badge.displayName = "Badge";

export { Badge };
