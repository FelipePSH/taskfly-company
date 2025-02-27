"use client";
import { motion } from "framer-motion";
import { CheckCircle, Code, Rocket, Lightbulb } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";
import { useInView } from "@/lib/useInView";

const About = () => {
  const aboutRef = useRef(null);
  const isVisible = useInView(aboutRef);

  return (
    <section
      id="about"
      ref={aboutRef}
      className="relative flex flex-col items-center text-center py-20 px-6 bg-gray-100 dark:bg-gray-900 transition-colors"
    >
      {/* Título */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1 }}
        className="text-4xl font-display font-bold text-primary dark:text-blue-300"
      >
        About <span className="text-secondary">TaskFly</span>
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, delay: 0.2 }}
        className="mt-4 max-w-3xl text-lg font-sans text-gray-700 dark:text-gray-300"
      >
        TaskFly is an <span className="font-semibold">independent tech venture</span>, built with passion for
        <span className="font-semibold"> technology, innovation, and problem-solving</span>.  
        With a deep focus on <span className="font-semibold">custom software solutions</span>, we help businesses scale efficiently.
      </motion.p>

      {/* Imagem */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={isVisible ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 1, delay: 0.3 }}
        className="relative w-full max-w-2xl mt-8"
      >
        <Image
          src="/images/profile.jpeg"
          alt="Software Developer"
          width={700}
          height={400}
          className="rounded-lg shadow-lg"
        />
      </motion.div>

      {/* Grid de Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 max-w-6xl">
        
        {/* Card 1 - Expertise */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md transition-colors"
        >
          <Code className="text-primary dark:text-blue-400 w-10 h-10 mb-3 mx-auto" />
          <h3 className="text-xl font-display font-semibold text-gray-900 dark:text-white">Tech Expertise</h3>
          <p className="text-gray-600 dark:text-gray-300 mt-2 font-sans">
            Specialized in <span className="font-semibold">web development, automation, and AI solutions</span>.
          </p>
        </motion.div>

        {/* Card 2 - Personalized Solutions */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md transition-colors"
        >
          <Lightbulb className="text-primary dark:text-blue-400 w-10 h-10 mb-3 mx-auto" />
          <h3 className="text-xl font-display font-semibold text-gray-900 dark:text-white">Custom Solutions</h3>
          <p className="text-gray-600 dark:text-gray-300 mt-2 font-sans">
            Every business is unique, and so is <span className="font-semibold">our approach to problem-solving</span>.
          </p>
        </motion.div>

        {/* Card 3 - Vision */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md transition-colors"
        >
          <Rocket className="text-primary dark:text-blue-400 w-10 h-10 mb-3 mx-auto" />
          <h3 className="text-xl font-display font-semibold text-gray-900 dark:text-white">Vision for the Future</h3>
          <p className="text-gray-600 dark:text-gray-300 mt-2 font-sans">
            We aim to <span className="font-semibold">empower businesses with cutting-edge technology</span>.
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default About;