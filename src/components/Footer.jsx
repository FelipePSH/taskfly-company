"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 py-10 px-6 transition-colors">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between text-center md:text-left">
        
        {/* Logo */}
        <Link href="/">
          <Image
            src="/images/taskfly-inline-logo-light.svg"
            alt="TaskFly Logo"
            width={150}
            height={40}
            className="dark:hidden"
          />
          <Image
            src="/images/taskfly-inline-logo-dark.svg"
            alt="TaskFly Logo"
            width={150}
            height={40}
            className="hidden dark:block"
          />
        </Link>

        {/* Links de Navegação */}
        <nav className="mt-6 md:mt-0 space-x-4">
          {["Home", "About", "Tech Stack", "Services", "Projects", "Contact"].map((item) => (
            <Link 
              key={item} 
              href={`#${item.toLowerCase().replace(" ", "-")}`} 
              className="hover:text-primary dark:hover:text-blue-400 transition"
            >
              {item}
            </Link>
          ))}
        </nav>

        {/* Direitos Autorais */}
        <p className="mt-6 md:mt-0 text-sm">
          © {new Date().getFullYear()} TaskFly. All rights reserved.
        </p>

      </div>
    </footer>
  );
};

export default Footer;