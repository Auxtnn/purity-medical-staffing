// components/ui/button.tsx
import { forwardRef } from "react";
import Link from "next/link";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
  isLoading?: boolean;
  href?: string;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className = "",
      variant = "primary",
      size = "md",
      fullWidth = false,
      isLoading = false,
      href,
      children,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "btn inline-flex items-center justify-center rounded-lg font-bold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-[1.02] active:scale-[0.98] shadow-sm hover:shadow-md";

    const variantStyles = {
      primary:
        "bg-gradient-to-r from-primary to-primary-dark text-white hover:from-primary-dark hover:to-primary hover:shadow-primary/25 focus:ring-primary border border-primary/20",
      secondary:
        "bg-gradient-to-r from-accent to-accent-dark text-white hover:from-accent-dark hover:to-accent hover:shadow-accent/25 focus:ring-accent border border-accent/20",
      outline:
        "border-2 border-primary text-primary hover:bg-primary hover:text-white hover:border-primary-dark focus:ring-primary bg-transparent hover:shadow-primary/15",
      ghost:
        "text-primary hover:bg-primary/10 hover:text-primary-dark focus:ring-primary bg-transparent border border-transparent hover:border-primary/20",
    };

    const sizeStyles = {
      sm: "h-9 px-4 py-2 text-sm tracking-wide",
      md: "h-11 px-6 py-2.5 text-sm tracking-wide",
      lg: "h-13 px-8 py-3 text-base tracking-wide",
    };

    const widthStyles = fullWidth ? "w-full" : "";

    const combinedStyles = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${widthStyles} ${className}`;

    const content = (
      <>
        {isLoading && (
          <svg
            className="animate-spin -ml-1 mr-2 h-4 w-4 text-current"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        )}
        <span className="relative z-10">{children}</span>
      </>
    );

    // If href is provided, render as Link
    if (href) {
      // Check if it's an external link
      const isExternal =
        href.startsWith("http") ||
        href.startsWith("mailto:") ||
        href.startsWith("tel:");

      if (isExternal) {
        return (
          <a
            href={href}
            className={combinedStyles}
            target={href.startsWith("http") ? "_blank" : undefined}
            rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
            {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
          >
            {content}
          </a>
        );
      }

      // For internal links, wrap the styled element with Link
      return (
        <Link href={href} passHref legacyBehavior>
          <a className={combinedStyles}>{content}</a>
        </Link>
      );
    }

    // Default button behavior
    return (
      <button
        ref={ref}
        className={combinedStyles}
        disabled={isLoading || props.disabled}
        {...props}
      >
        {content}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button };
