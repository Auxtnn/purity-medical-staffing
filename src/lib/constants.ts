export const COMPANY_INFO = {
  name: "Purity Medical Staffing",
  tagline: "Building Healthier Communities, One Member at a Time",
  phone: "541-224-6807",
  email: "info@puritymedicalstaffing.com",
  address: {
    street: "123 Healthcare Avenue",
    city: "Portland",
    state: "OR",
    zip: "97201",
  },
  hours: {
    office: "Monday - Friday: 8:00 AM - 5:00 PM",
    support: "24/7 Support Available",
  },
  social: {
    facebook: "#",
    twitter: "#",
    linkedin: "#",
    instagram: "#",
  },
};

export interface MenuItem {
  title: string;
  href?: string;
  children?: MenuItem[];
}

export const NAVIGATION_ITEMS: MenuItem[] = [
  { title: "Home", href: "/" },
  { title: "About", href: "/about" },
  { title: "Services", href: "/services" },
  {
    title: "For",
    children: [
      { title: "Healthcare Facilities", href: "/for-facilities" },
      { title: "Healthcare Professionals", href: "/for-professionals" },
    ],
  },
  { title: "Jobs", href: "/jobs" },
  { title: "Resources", href: "/resources" },
  { title: "Contact", href: "/contact" },
];
