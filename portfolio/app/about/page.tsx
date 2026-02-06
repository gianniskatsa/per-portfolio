"use client";

import { motion } from "framer-motion";
import { experience } from "../data/experience";
import { expertise } from "../data/skills";

export default function About() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  };

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
            About Me
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Senior Software Engineer with 5+ years of experience specializing in Java, Spring Boot,
            and microservices architecture. Expert in building enterprise-scale distributed systems
            using clean code principles, TDD/BDD methodologies, and domain-driven design. Strong
            advocate for code quality, automated testing, and Agile delivery.
          </p>
        </motion.div>
      </section>

      {/* Professional Experience */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            variants={fadeIn}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <h2 className="text-3xl font-bold text-center mb-12">
              Professional Experience
            </h2>
            <div className="space-y-8">
              {experience.map((job, index) => (
                <motion.div
                  key={job.company}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8"
                >
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <h3 className="text-2xl font-semibold">{job.role}</h3>
                      <p className="text-blue-600 dark:text-blue-400 text-lg">{job.company}</p>
                      <div className="flex flex-col sm:flex-row sm:justify-between text-gray-600 dark:text-gray-300 gap-1">
                        <span>{job.period}</span>
                        <span>{job.location}</span>
                      </div>
                    </div>
                    <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
                      {job.description.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                    {job.projects && (
                      <div className="space-y-4 mt-4">
                        {job.projects.map((project) => (
                          <div key={project.name} className="pl-4 border-l-2 border-blue-500 dark:border-blue-400">
                            <h4 className="font-medium text-gray-800 dark:text-gray-200 mb-2">
                              {project.name}
                            </h4>
                            <ul className="space-y-1 text-gray-600 dark:text-gray-300 text-sm">
                              {project.bullets.map((bullet, bi) => (
                                <li key={bi} className="flex gap-2">
                                  <span className="text-blue-500 mt-1.5 shrink-0">&#8226;</span>
                                  <span>{bullet}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Technical Expertise */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            variants={fadeIn}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <h2 className="text-3xl font-bold text-center mb-12">
              Technical Expertise
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {Object.entries(expertise).map(([category, items], categoryIndex) => (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: categoryIndex * 0.2 }}
                  viewport={{ once: true }}
                  className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 space-y-4"
                >
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                    {category}
                  </h3>
                  <ul className="space-y-3">
                    {items.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-center text-gray-600 dark:text-gray-300"
                      >
                        <svg
                          className="w-5 h-5 mr-2 text-blue-600 dark:text-blue-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
