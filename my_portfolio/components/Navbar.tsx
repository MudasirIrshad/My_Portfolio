"use client";

import React, { useState } from "react";
import { ModeToggle } from "./ToggleTheme";
import { Button } from "./ui/button";
import { Code2Icon, HomeIcon, User2Icon, Menu, X } from "lucide-react";
import Link from "next/link";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navItems = [
    { label: "Home", icon: <HomeIcon className="mr-2 h-4 w-4" />, href: "/" },
    {
      label: "About",
      icon: <User2Icon className="mr-2 h-4 w-4" />,
      href: "/about",
    },
    {
      label: "Projects",
      icon: <Code2Icon className="mr-2 h-4 w-4" />,
      href: "/projects",
    },
  ];

  return (
    <nav className="w-full px-4 py-2 fixed top-0 z-50 backdrop-blur-md bg-white/30 dark:bg-black/30 border-b border-gray-200 dark:border-gray-700 shadow-sm">
      <div className="max-w-7xl mx-auto relative">
        {/* Top bar */}
        <div className="flex items-center justify-between">
          {/* Logo or Brand Name */}
          <div className="text-lg font-semibold">MyPortfolio</div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            {navItems.map((item) => (
              <Link key={item.label} href={item.href}>
                <Button variant="outline" className="flex items-center gap-2">
                  {item.icon}
                  {item.label}
                </Button>
              </Link>
            ))}
          </div>

          {/* Right Side - Theme Toggle & Hamburger */}
          <div className="flex items-center space-x-2">
            <ModeToggle />
            <button
              onClick={toggleMenu}
              className="md:hidden focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <div className="absolute top-full left-0 w-full bg-white dark:bg-black shadow-md z-40 px-4 py-4 space-y-2 md:hidden">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)}
              >
                <Button
                  variant="outline"
                  className="w-full flex items-center gap-2"
                >
                  {item.icon}
                  {item.label}
                </Button>
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
