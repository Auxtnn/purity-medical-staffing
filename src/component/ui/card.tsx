import { forwardRef } from "react";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "outline" | "filled";
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ variant = "default", className = "", children, ...props }, ref) => {
    const variantStyles = {
      default: "bg-white shadow-md",
      outline: "border border-gray-medium",
      filled: "bg-gray-light",
    };

    return (
      <div
        ref={ref}
        className={`rounded-lg p-6 ${variantStyles[variant]} ${className}`}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = "Card";

export { Card };
