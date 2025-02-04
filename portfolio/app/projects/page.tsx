"use client";

import { motion } from "framer-motion";

export default function Projects() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  };

  const projects = [
    {
      title: "Enterprise Java Application",
      description: "Microservices-based system using Spring Boot and Kubernetes",
      technologies: ["Java", "Spring Boot", "PostgreSQL", "Docker", "Kubernetes"],
      status: "In Development",
    },
    {
      title: "Portfolio Website",
      description: "Personal portfolio built with Next.js and TypeScript",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
      status: "Completed",
    },
  ];

  return (
    <div className="min-h-screen py-20">
      {/* Hero Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="initial"
          animate="animate"
          variants={fadeIn}
          className="text-center space-y-8 mb-16"
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-gray-100">
            Projects
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A showcase of my technical projects, demonstrating expertise in Java enterprise solutions,
            microservices architecture, and modern web development.
          </p>
        </motion.div>
      </section>

      {/* Projects Grid */}
      <section className="py-12 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden"
              >
                <div className="p-6 space-y-4">
                  <h3 className="text-2xl font-semibold">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {project.description}
                  </p>
                  <div className="space-y-2">
                    <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">
                      Technologies
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-sm bg-blue-50 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex justify-between items-center pt-4">
                    <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                      Status: {project.status}
                    </span>
                    <button className="text-blue-600 dark:text-blue-400 hover:underline text-sm font-medium">
                      Learn More →
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial="initial"
            whileInView="animate"
            variants={fadeIn}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold">Interested in Collaborating?</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              I'm always open to discussing new projects and opportunities.
              Let's work together to build something amazing.
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-medium transition-colors">
              Get in Touch
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
