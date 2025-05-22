import { Breadcrumb } from "./Navigation";

type PageHeaderProps = {
  title: string;
  subtitle?: string;
  breadcrumbItems?: {
    label: string;
    href: string;
  }[];
};

export const PageHeader = ({
  title,
  subtitle,
  breadcrumbItems,
}: PageHeaderProps) => {
  return (
    <div className="bg-primary text-white py-12 md:py-20">
      <div className="container">
        {breadcrumbItems && <Breadcrumb items={breadcrumbItems} />}
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
          {title}
        </h1>
        {subtitle && (
          <p className="text-lg md:text-xl max-w-3xl opacity-90">{subtitle}</p>
        )}
      </div>
    </div>
  );
};
