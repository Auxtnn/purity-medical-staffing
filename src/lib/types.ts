export interface MenuItem {
  title: string;
  href?: string;
  children?: MenuItem[];
}

export interface SEOData {
  title: string;
  description: string;
  keywords?: string[];
  image?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  inquiryType: string;
  message: string;
}

export interface NewsletterSubscription {
  email: string;
  firstName?: string;
  lastName?: string;
  preferences: string[];
}
