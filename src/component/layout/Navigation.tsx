import Link from "next/link";
import { ChevronRight } from "lucide-react";

type BreadcrumbProps = {
  items: {
    label: string;
    href: string;
  }[];
};

export const Breadcrumb = ({ items }: BreadcrumbProps) => {
  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <ol className="flex items-center space-x-2 text-sm">
        <li>
          <Link
            href="/"
            className="text-gray hover:text-primary transition-colors"
          >
            Home
          </Link>
        </li>
        {items.map((item, i) => (
          <li key={i} className="flex items-center">
            <ChevronRight size={14} className="text-gray mx-1" />
            {i === items.length - 1 ? (
              <span className="text-primary font-medium">{item.label}</span>
            ) : (
              <Link
                href={item.href}
                className="text-gray hover:text-primary transition-colors"
              >
                {item.label}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};
