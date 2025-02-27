"use client";
import { motion } from "framer-motion";
import { ReactTyped } from "react-typed";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative flex flex-col justify-center items-center text-center min-h-screen bg-white dark:bg-gray-900 transition-colors px-6 overflow-hidden">
      
      {/* Fundo com ondas */}
      <div className="absolute inset-0">
        <svg
          className="absolute bottom-0 w-full h-auto"
          viewBox="0 0 1440 320"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#7fbbe3"
            fillOpacity="1"
            d="M0,224L48,213.3C96,203,192,181,288,160C384,139,480,117,576,122.7C672,128,768,160,864,186.7C960,213,1056,235,1152,224C1248,213,1344,171,1392,149.3L1440,128V320H1392C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320H0Z"
          ></path>
        </svg>
      </div>

      {/* Logo / Ilustração */}
      <motion.div 
        initial={{ opacity: 0, y: -30 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1 }}
        className="mb-4"
      >
        <Image
          src="/images/icon-normal.svg" // Atualize para um SVG impactante
          alt="TaskFly Logo"
          width={120}
          height={120}
        />
      </motion.div>

      {/* Título com efeito de digitação */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl font-bold text-primary dark:text-blue-300"
      >
        Welcome to <span className="text-secondary">TaskFly</span>
      </motion.h1>
      
      <ReactTyped
        strings={[
          "Innovative Software Solutions.",
          "Cloud & AI Technologies.",
          "Transforming Ideas into Reality."
        ]}
        typeSpeed={60}
        backSpeed={40}
        loop
        className="mt-2 text-lg text-black dark:text-gray-300"
      />

      {/* Subtítulo */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="mt-4 text-lg text-black dark:text-gray-300"
      >
        Empowering your business with cutting-edge technology solutions.
      </motion.p>

      {/* Botão de chamada para ação */}
      <motion.a
        href="#serviços"
        whileHover={{ scale: 1.1 }}
        className="mt-6 bg-primary text-white dark:bg-blue-500 dark:text-gray-900 py-3 px-6 rounded-lg font-medium hover:bg-secondary dark:hover:bg-blue-400 transition"
      >
        Explore Our Services
      </motion.a>
    </section>
  );
};

export default Hero;