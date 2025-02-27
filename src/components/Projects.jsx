"use client";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "@/lib/useInView";
import Image from "next/image";
import { CheckCircle, Globe, Smartphone, BarChart3 } from "lucide-react";
import Link from "next/link";

const projects = [
  {
    name: "OzCleaner",
    description: "A complete cleaning service platform with online booking, SMS notifications, and dynamic pricing calculator.",
    image: "/images/ozcleaner-mockup.png",
    link: "https://www.ozcleaner.com",
    features: [
      "100% SEO Score",
      "Online Booking with Cal.com",
      "SMS Notifications for Customers",
      "Dynamic Pricing Calculator",
      "Custom Branding & Logo Design",
    ],
  },
];

const Projects = () => {
  const projectsRef = useRef(null);
  const isVisible = useInView(projectsRef);

  return (
    <section
      id="projects"
      ref={projectsRef}
      className="relative flex flex-col items-center text-center py-20 px-6 bg-gray-100 dark:bg-gray-900 transition-colors"
    >
      {/* Título */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1 }}
        className="text-4xl font-display font-bold text-primary dark:text-blue-300"
      >
        Our <span className="text-secondary">Projects</span>
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, delay: 0.2 }}
        className="mt-4 max-w-3xl text-lg font-sans text-gray-700 dark:text-gray-300"
      >
        Here are some of the projects we have developed, integrating <span className="font-semibold">cutting-edge technology</span> to provide the best experience.
      </motion.p>

      {/* Grid de Projetos */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 max-w-6xl">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md transition-colors"
          >
            {/* Imagem do Projeto */}
            <Image
              src={project.image}
              alt={project.name}
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />

            {/* Nome do Projeto */}
            <h3 className="text-2xl font-display font-semibold text-gray-900 dark:text-white mt-4">
              {project.name}
            </h3>

            {/* Descrição */}
            <p className="text-gray-600 dark:text-gray-300 mt-2 font-sans">{project.description}</p>

            {/* Features */}
            <ul className="mt-4 text-left space-y-2">
              {project.features.map((feature, i) => (
                <li key={i} className="flex items-center text-gray-700 dark:text-gray-300 font-sans">
                  <CheckCircle className="w-5 h-5 text-primary dark:text-blue-400 mr-2" />
                  {feature}
                </li>
              ))}
            </ul>

            {/* Link do Projeto */}
            <Link href={project.link} target="_blank">
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="mt-6 bg-primary text-white dark:bg-blue-500 dark:text-gray-900 py-3 px-6 rounded-lg font-medium hover:bg-secondary dark:hover:bg-blue-400 transition"
              >
                Visit Website
              </motion.button>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;