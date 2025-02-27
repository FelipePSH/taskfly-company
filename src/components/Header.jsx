"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { Menu, X, Moon, Sun } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const Header = ({ toggleDarkMode, darkMode }) => {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-white dark:bg-gray-900 shadow-md fixed w-full top-0 z-50 transition-colors">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between py-4">
        
        {/* Logo */}
        <Link href="/">
          <Image
            src={darkMode ? "/images/taskfly-inline-logo-dark.svg" : "/images/taskfly-inline-logo-light.svg"}
            alt="TaskFly Logo"
            width={150}
            height={40}
            priority
          />
        </Link>

        <nav className="hidden md:flex space-x-6">
          {["Home", "About", "Tech Stack", "Services", "Projects", "Contact"].map((item) => (
            <Link 
              key={item} 
              href={`#${item.toLowerCase()}`} 
              className="text-black dark:text-white hover:text-primary"
            >
              {item}
            </Link>
          ))}
        </nav>

        {/* Botão de Dark Mode */}
        <button 
          onClick={toggleDarkMode} 
          className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 transition"
        >
          {darkMode ? <Sun className="w-6 h-6 text-yellow-400" /> : <Moon className="w-6 h-6 text-gray-900 dark:text-white" />}
        </button>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <button onClick={() => setOpen(!open)}>
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Dropdown Mobile */}
      {open && (
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 w-full bg-white dark:bg-gray-900 shadow-md p-4 space-y-4 md:hidden transition-colors"
        >
          {["Home", "About", "Tech Stack", "Services", "Projects", "Contact"].map((item) => (
            <Link 
              key={item} 
              href={`#${item.toLowerCase()}`} 
              className="block text-secondary dark:text-white hover:text-primary"
            >
              {item}
            </Link>
          ))}
        </motion.div>
      )}
    </header>
  );
};

export default Header;