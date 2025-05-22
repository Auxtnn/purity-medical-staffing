import { forwardRef } from "react";
import { Container, ContainerProps } from "./container";

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  containerProps?: ContainerProps;
  containerSize?: ContainerProps["size"];
  bgColor?: "white" | "light" | "dark" | "primary" | "accent";
}

const Section = forwardRef<HTMLElement, SectionProps>(
  (
    {
      containerProps,
      containerSize = "lg",
      bgColor = "white",
      className = "",
      children,
      ...props
    },
    ref
  ) => {
    const bgStyles = {
      white: "bg-white",
      light: "bg-gray-light",
      dark: "bg-gray-dark text-white",
      primary: "bg-primary text-white",
      accent: "bg-accent text-white",
    };

    return (
      <section
        ref={ref}
        className={`py-12 md:py-14 ${bgStyles[bgColor]} ${className}`}
        {...props}
      >
        <Container size={containerSize} {...containerProps}>
          {children}
        </Container>
      </section>
    );
  }
);

Section.displayName = "Section";

export { Section };
