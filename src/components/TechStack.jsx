"use client";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "@/lib/useInView";
import Image from "next/image";

const techs = [
  {
    name: "Next.js",
    description: "A React framework for building fast, SEO-friendly, and scalable web applications.",
    icon: "/icons/nextjs.svg",
  },
  {
    name: "Vercel",
    description: "A cloud platform for frontend deployment, providing high performance and scalability.",
    icon: "/icons/vercel.svg",
  },
  {
    name: "Supabase",
    description: "An open-source alternative to Firebase with built-in authentication, database, and APIs.",
    icon: "/icons/supabase.svg",
  },
  {
    name: "Kotlin",
    description: "A modern programming language for Android development, known for safety and conciseness.",
    icon: "/icons/kotlin.svg",
  },
  {
    name: "TypeScript",
    description: "A strongly typed programming language that builds on JavaScript, enhancing developer productivity.",
    icon: "/icons/typescript.svg",
  },
];

const TechStack = () => {
  const techRef = useRef(null);
  const isVisible = useInView(techRef);

  return (
    <section
      id="tech stack"
      ref={techRef}
      className="relative flex flex-col items-center text-center py-20 px-6 bg-white dark:bg-gray-900 transition-colors"
    >
      {/* Título */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1 }}
        className="text-4xl font-display font-bold text-primary dark:text-blue-300"
      >
        Our <span className="text-secondary">Tech Stack</span>
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, delay: 0.2 }}
        className="mt-4 max-w-3xl text-lg font-sans text-gray-700 dark:text-gray-300"
      >
        We use <span className="font-semibold">modern technologies</span> to build  
        <span className="font-semibold"> scalable, efficient, and high-performance applications</span>.
      </motion.p>

      {/* Grid de Tecnologias */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 mt-12 max-w-6xl">
        {techs.map((tech, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md transition-colors flex flex-col items-center text-center"
          >
            {/* Ícone */}
            <Image src={tech.icon} alt={tech.name} width={50} height={50} className="mb-4" />

            {/* Nome */}
            <h3 className="text-xl font-display font-semibold text-gray-900 dark:text-white">
              {tech.name}
            </h3>

            {/* Descrição */}
            <p className="text-gray-600 dark:text-gray-300 mt-2 font-sans">{tech.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TechStack;