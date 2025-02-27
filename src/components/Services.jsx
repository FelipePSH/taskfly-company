"use client";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "@/lib/useInView";
import { Globe, Zap, Smartphone } from "lucide-react";

const services = [
  {
    title: "Web Development",
    description: "Modern, fast, and responsive websites to enhance your online presence.",
    icon: <Globe className="w-12 h-12 text-primary dark:text-blue-400" />,
  },
  {
    title: "Automations",
    description: "Save time with powerful automations and integrations for your business.",
    icon: <Zap className="w-12 h-12 text-primary dark:text-blue-400" />,
  },
  {
    title: "Mobile Apps",
    description: "iOS & Android applications built with cutting-edge technology.",
    icon: <Smartphone className="w-12 h-12 text-primary dark:text-blue-400" />,
  },
];

const Services = () => {
  const servicesRef = useRef(null);
  const isVisible = useInView(servicesRef);

  return (
    <section
      id="services"
      ref={servicesRef}
      className="relative flex flex-col items-center text-center py-20 px-6 bg-white dark:bg-gray-900 transition-colors"
    >
      {/* Título */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1 }}
        className="text-4xl font-display font-bold text-primary dark:text-blue-300"
      >
        Our <span className="text-secondary">Services</span>
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, delay: 0.2 }}
        className="mt-4 max-w-3xl text-lg font-sans text-gray-700 dark:text-gray-300"
      >
        We provide <span className="font-semibold">affordable</span> and high-quality technology solutions, including  
        <span className="font-semibold"> websites, automations, and mobile apps</span>.
      </motion.p>

      {/* Grid de Serviços */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 max-w-6xl">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            className="bg-gray-100 dark:bg-gray-800 p-8 rounded-lg shadow-md transition-colors flex flex-col items-center text-center"
          >
            {service.icon}
            <h3 className="text-2xl font-display font-semibold text-gray-900 dark:text-white mt-4">
              {service.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mt-2 font-sans">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;