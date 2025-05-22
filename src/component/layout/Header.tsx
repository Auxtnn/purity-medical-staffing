"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { Hospital } from "lucide-react";
import PurityMedicalLogo from "./Logo";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navItems = [
    { title: "Home", href: "/" },
    { title: "About", href: "/about" },
    { title: "Services", href: "/services" },
    {
      title: "Healthcare",
      children: [
        { title: "Healthcare Facilities", href: "/for-facilities" },
        { title: "Healthcare Professionals", href: "/for-professionals" },
      ],
    },
    { title: "Jobs", href: "/jobs" },
    { title: "Resources", href: "/resources" },
    { title: "Contact", href: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="relative z-10">
          <PurityMedicalLogo />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-6">
          {navItems.map((item, i) => (
            <div key={`desktop-${item.title}`} className="relative group">
              {item.children ? (
                <div className="flex items-center cursor-pointer text-gray-dark hover:text-primary">
                  <span className="font-medium">{item.title}</span>
                  <ChevronDown size={16} className="ml-1" />
                  <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                    <div className="bg-white rounded-md shadow-lg py-2 w-64">
                      {item.children.map((child) => (
                        <Link
                          key={child.title}
                          href={child.href}
                          className="block px-4 py-2 text-sm hover:bg-gray-light hover:text-primary"
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
                  className="font-medium text-gray-dark hover:text-primary transition-colors"
                >
                  {item.title}
                </Link>
              )}
            </div>
          ))}
          <Link href="/contact" className="btn btn-primary btn-md">
            Get Started
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="lg:hidden relative z-10"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Navigation */}
        <motion.div
          initial={false}
          animate={isOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: "100%" }}
          transition={{ duration: 0.3 }}
          className={`fixed top-0 right-0 bottom-0 w-full max-w-xs bg-white shadow-xl z-40 overflow-y-auto lg:hidden`}
        >
          <div className="p-6 pt-16">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item, i) => (
                <div key={`mobile-${item.title}`}>
                  {item.children ? (
                    <div className="space-y-2">
                      <div className="font-medium text-lg text-gray-dark">
                        {item.title}
                      </div>
                      <div className="pl-4 border-l-2 border-gray-medium space-y-2">
                        {item.children.map((child) => (
                          <Link
                            key={child.title}
                            href={child.href}
                            className="block text-gray hover:text-primary"
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
                      className="font-medium text-lg text-gray-dark hover:text-primary"
                      onClick={toggleMenu}
                    >
                      {item.title}
                    </Link>
                  )}
                </div>
              ))}
              <Link
                href="/contact"
                className="btn btn-primary btn-md w-full mt-4"
                onClick={toggleMenu}
              >
                Get Started
              </Link>
            </nav>
          </div>
        </motion.div>
      </div>
    </header>
  );
};

export default Header;
