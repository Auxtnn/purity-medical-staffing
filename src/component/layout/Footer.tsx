import Link from "next/link";
import Image from "next/image";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
} from "lucide-react";
import PurityMedicalLogo from "./Logo";

const Footer = () => {
  return (
    <footer className="bg-gray-dark text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and About */}
          <div>
            <Link href="/">
              <PurityMedicalLogo />
            </Link>
            <p className="text-gray-medium mt-4">
              Building healthier communities, one member at a time. Your partner
              in providing quality care.
            </p>
            <div className="flex space-x-4 mt-6">
              <a
                href="#"
                aria-label="Facebook"
                className="text-gray-medium hover:text-white transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="text-gray-medium hover:text-white transition-colors"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="text-gray-medium hover:text-white transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="text-gray-medium hover:text-white transition-colors"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-gray-medium hover:text-white transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-gray-medium hover:text-white transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/jobs"
                  className="text-gray-medium hover:text-white transition-colors"
                >
                  Job Listings
                </Link>
              </li>
              <li>
                <Link
                  href="/for-facilities"
                  className="text-gray-medium hover:text-white transition-colors"
                >
                  For Healthcare Facilities
                </Link>
              </li>
              <li>
                <Link
                  href="/for-professionals"
                  className="text-gray-medium hover:text-white transition-colors"
                >
                  For Healthcare Professionals
                </Link>
              </li>
              <li>
                <Link
                  href="/resources"
                  className="text-gray-medium hover:text-white transition-colors"
                >
                  Resources
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Phone size={18} className="mr-2 text-accent mt-1" />
                <span>541-224-6807</span>
              </li>
              <li className="flex items-start">
                <Mail size={18} className="mr-2 text-accent mt-1" />
                <span>info@puritymedicalstaffing.com</span>
              </li>
              <li className="flex items-start">
                <MapPin
                  size={18}
                  className="mr-2 text-accent mt-1 flex-shrink-0"
                />
                <span>Serving healthcare facilities nationwide</span>
              </li>
            </ul>
            <div className="mt-6">
              <h4 className="text-base font-medium mb-2">24/7 Availability</h4>
              <p className="text-gray-medium">
                We're here for you around the clock — because healthcare never
                sleeps.
              </p>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Stay Updated</h3>
            <p className="text-gray-medium mb-4">
              Subscribe to our newsletter for the latest job opportunities and
              healthcare staffing insights.
            </p>
            <form className="mt-4">
              <div className="flex flex-col space-y-2">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="px-4 py-2 bg-gray-dark border border-gray text-white rounded focus:outline-none focus:border-accent"
                />
                <button type="submit" className="btn btn-secondary btn-md">
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray pt-8 mt-12">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-medium text-sm">
              &copy; {new Date().getFullYear()} Purity Care Solutions LLC. All
              rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0 text-sm">
              <Link
                href="/privacy-policy"
                className="text-gray-medium hover:text-white transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms-of-service"
                className="text-gray-medium hover:text-white transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
