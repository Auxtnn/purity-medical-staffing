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
  Clock,
  Shield,
  Award,
  ArrowRight,
} from "lucide-react";
import PurityMedicalLogo from "./Logo";
import { Button } from "../ui/button";

const Footer = () => {
  return (
    <footer className="bg-primary text-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-white/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2"></div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="pt-16 pb-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {/* Logo and About */}
              <div>
                <Link href="/" className="inline-block mb-6">
                  <PurityMedicalLogo />
                </Link>
                <p className="text-white/80 mb-6 leading-relaxed">
                  Building healthier communities through exceptional healthcare
                  staffing. Your trusted partner in delivering quality care.
                </p>

                {/* Trust Indicators */}
                <div className="space-y-3 mb-8">
                  <div className="flex items-center text-sm text-white/70">
                    <Shield size={16} className="mr-2 text-white" />
                    <span>Fully Licensed & Insured</span>
                  </div>
                  <div className="flex items-center text-sm text-white/70">
                    <Award size={16} className="mr-2 text-white" />
                    <span>JCAHO Compliant Staffing</span>
                  </div>
                  <div className="flex items-center text-sm text-white/70">
                    <Clock size={16} className="mr-2 text-white" />
                    <span>24/7 Support Available</span>
                  </div>
                </div>

                {/* Social Links */}
                <div className="flex space-x-4">
                  <a
                    href="#"
                    aria-label="Facebook"
                    className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white/70 hover:text-white hover:bg-white/20 transition-all duration-300 hover:scale-110"
                  >
                    <Facebook size={18} />
                  </a>
                  <a
                    href="#"
                    aria-label="Twitter"
                    className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white/70 hover:text-white hover:bg-white/20 transition-all duration-300 hover:scale-110"
                  >
                    <Twitter size={18} />
                  </a>
                  <a
                    href="#"
                    aria-label="LinkedIn"
                    className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white/70 hover:text-white hover:bg-white/20 transition-all duration-300 hover:scale-110"
                  >
                    <Linkedin size={18} />
                  </a>
                  <a
                    href="#"
                    aria-label="Instagram"
                    className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white/70 hover:text-white hover:bg-white/20 transition-all duration-300 hover:scale-110"
                  >
                    <Instagram size={18} />
                  </a>
                </div>
              </div>

              {/* Quick Links */}
              <div>
                <h3 className="text-xl font-bold mb-6 text-white">
                  Quick Links
                </h3>
                <ul className="space-y-3">
                  <li>
                    <Link
                      href="/about"
                      className="text-white/70 hover:text-white transition-colors duration-300 flex items-center group"
                    >
                      <ArrowRight
                        size={14}
                        className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      />
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services"
                      className="text-white/70 hover:text-white transition-colors duration-300 flex items-center group"
                    >
                      <ArrowRight
                        size={14}
                        className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      />
                      Services
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/jobs"
                      className="text-white/70 hover:text-white transition-colors duration-300 flex items-center group"
                    >
                      <ArrowRight
                        size={14}
                        className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      />
                      Job Opportunities
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/for-facilities"
                      className="text-white/70 hover:text-white transition-colors duration-300 flex items-center group"
                    >
                      <ArrowRight
                        size={14}
                        className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      />
                      For Healthcare Facilities
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/for-professionals"
                      className="text-white/70 hover:text-white transition-colors duration-300 flex items-center group"
                    >
                      <ArrowRight
                        size={14}
                        className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      />
                      For Healthcare Professionals
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/contact"
                      className="text-white/70 hover:text-white transition-colors duration-300 flex items-center group"
                    >
                      <ArrowRight
                        size={14}
                        className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      />
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Contact Information */}
              <div>
                <h3 className="text-xl font-bold mb-6 text-white">
                  Contact Us
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start group">
                    <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center mr-3 flex-shrink-0 group-hover:bg-white/20 transition-colors duration-300">
                      <Phone size={18} className="text-white" />
                    </div>
                    <div>
                      <p className="text-white font-medium">541-224-6807</p>
                      <p className="text-white/70 text-sm">Call us anytime</p>
                    </div>
                  </li>
                  <li className="flex items-start group">
                    <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center mr-3 flex-shrink-0 group-hover:bg-white/20 transition-colors duration-300">
                      <Mail size={18} className="text-white" />
                    </div>
                    <div>
                      <p className="text-white font-medium">
                        info@puritymedicalstaffing.com
                      </p>
                      <p className="text-white/70 text-sm">Send us an email</p>
                    </div>
                  </li>
                  <li className="flex items-start group">
                    <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center mr-3 flex-shrink-0 group-hover:bg-white/20 transition-colors duration-300">
                      <MapPin size={18} className="text-white" />
                    </div>
                    <div>
                      <p className="text-white font-medium">
                        Nationwide Coverage
                      </p>
                      <p className="text-white/70 text-sm">
                        Serving healthcare facilities everywhere
                      </p>
                    </div>
                  </li>
                </ul>

                <div className="mt-8 p-4 bg-white/10 rounded-xl border border-white/20">
                  <div className="flex items-center mb-2">
                    <Clock size={18} className="text-white mr-2" />
                    <h4 className="text-base font-semibold text-white">
                      24/7 Availability
                    </h4>
                  </div>
                  <p className="text-white/80 text-sm">
                    We're here for you around the clock — because healthcare
                    never sleeps.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 bg-primary-dark/20">
          <div className="container mx-auto px-4 py-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
                <p className="text-white/70 text-sm">
                  &copy; {new Date().getFullYear()} Purity Care Solutions LLC.
                  All rights reserved.
                </p>
                <div className="hidden md:block w-1 h-1 bg-white/40 rounded-full"></div>
                <p className="text-white/70 text-sm">
                  Proudly serving healthcare professionals nationwide
                </p>
              </div>

              <div className="flex items-center space-x-6 text-sm">
                <Link
                  href="/privacy-policy"
                  className="text-white/70 hover:text-white transition-colors duration-300"
                >
                  Privacy Policy
                </Link>
                <div className="w-1 h-1 bg-white/40 rounded-full"></div>
                <Link
                  href="/terms-of-service"
                  className="text-white/70 hover:text-white transition-colors duration-300"
                >
                  Terms of Service
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
