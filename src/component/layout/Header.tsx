"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { Hospital } from "lucide-react";
import PurityMedicalLogo from "./Logo";
import { Button } from "../ui/button";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Determine if current page should have transparent header initially
  const isHomePage = pathname === "/";
  const shouldStartTransparent = isHomePage; // Add other pages here if they have dark hero sections

  useEffect(() => {
    const handleScroll = () => {
      // Only update scroll state if mobile menu is closed
      if (!isOpen) {
        const isScrolled = window.scrollY > 10;
        if (isScrolled !== scrolled) {
          setScrolled(isScrolled);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled, isOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    // Cleanup function to restore scroll when component unmounts
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navItems = [
    { title: "Home", href: "/" },
    { title: "About", href: "/about" },
    { title: "Services", href: "/services" },
    { title: "Resources", href: "/resources" },
    {
      title: "Healthcare",
      children: [
        { title: "Healthcare Facilities", href: "/for-facilities" },
        { title: "Healthcare Professionals", href: "/for-professionals" },
      ],
    },
    { title: "Jobs", href: "/jobs" },
    { title: "Contact", href: "/contact" },
  ];

  // Determine header appearance based on page and scroll state
  const getHeaderStyles = () => {
    if (shouldStartTransparent) {
      // Home page behavior - transparent until scrolled
      return scrolled
        ? "bg-white/95 backdrop-blur-md shadow-lg py-3"
        : "bg-transparent py-4";
    } else {
      // Other pages - always have background but lighter when not scrolled
      return scrolled
        ? "bg-white/95 backdrop-blur-md shadow-lg py-3"
        : "bg-white/90 backdrop-blur-sm shadow-sm py-4";
    }
  };

  // Determine text color based on page and scroll state
  const getTextStyles = () => {
    if (shouldStartTransparent && !scrolled) {
      // Home page, not scrolled - white text
      return "text-white hover:text-primary";
    } else {
      // All other cases - dark text
      return "text-gray-700 hover:text-primary";
    }
  };

  // Determine mobile menu button styles
  const getMobileButtonStyles = () => {
    if (isOpen) {
      return "text-gray-700 hover:bg-gray-100 bg-white/90";
    } else if (shouldStartTransparent && !scrolled) {
      return "text-white hover:bg-white/10";
    } else {
      return "text-gray-700 hover:bg-gray-100";
    }
  };

  return (
    <header
      className={`fixed top-0 w-full z-[9999] transition-all duration-300 ${getHeaderStyles()}`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="relative z-10">
            <PurityMedicalLogo />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item, i) => (
              <div key={`desktop-${item.title}`} className="relative group">
                {item.children ? (
                  <div
                    className={`flex items-center cursor-pointer transition-colors duration-300 ${getTextStyles()}`}
                  >
                    <span className="font-medium">{item.title}</span>
                    <ChevronDown
                      size={16}
                      className="ml-1 transition-transform group-hover:rotate-180 duration-300"
                    />
                    <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                      <div className="bg-white rounded-lg shadow-xl py-3 w-64 border border-gray-100">
                        {item.children.map((child) => (
                          <Link
                            key={child.title}
                            href={child.href}
                            className="block px-4 py-3 text-sm text-gray-600 hover:bg-primary/5 hover:text-primary transition-colors duration-200"
                          >
                            {child.title}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className={`font-medium transition-colors duration-300 ${getTextStyles()}`}
                  >
                    {item.title}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden lg:block">
            <Button
              href="/jobs"
              variant="primary"
              size="md"
              className="font-semibold"
            >
              Quick Apply
            </Button>
          </div>

          {/* Mobile Right Section */}
          <div className="flex items-center space-x-4 lg:hidden">
            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className={`relative z-[10000] p-2 rounded-lg transition-colors duration-300 ${getMobileButtonStyles()}`}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Overlay */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 bg-black/50 z-[9998] lg:hidden"
          onClick={toggleMenu}
        />
      )}

      {/* Mobile Navigation */}
      <motion.div
        initial={false}
        animate={isOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: "100%" }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="fixed top-0 right-0 w-full max-w-sm bg-white shadow-2xl z-[9999] lg:hidden"
        style={{
          height: "100vh",

          minHeight: "100vh",
          overflowY: "auto",
        }}
      >
        <div className="p-6 pt-20 min-h-full flex flex-col">
          <nav className="flex flex-col space-y-6 flex-1">
            {navItems.map((item, i) => (
              <div key={`mobile-${item.title}`}>
                {item.children ? (
                  <div className="space-y-3">
                    <div className="font-semibold text-lg text-gray-900 border-b border-gray-200 pb-2">
                      {item.title}
                    </div>
                    <div className="pl-4 space-y-3">
                      {item.children.map((child) => (
                        <Link
                          key={child.title}
                          href={child.href}
                          className="block text-gray-600 hover:text-primary transition-colors duration-200 py-1"
                          onClick={toggleMenu}
                        >
                          {child.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className="font-medium text-lg text-gray-900 hover:text-primary transition-colors duration-200 block py-2"
                    onClick={toggleMenu}
                  >
                    {item.title}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Additional CTA in Mobile Menu */}
          <div className="mt-8 pt-6 border-t border-gray-200">
            <Link
              href="/contact"
              className="block w-full text-center py-3 bg-gray-50 text-primary font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200"
              onClick={toggleMenu}
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </motion.div>
    </header>
  );
};

export default Header;
