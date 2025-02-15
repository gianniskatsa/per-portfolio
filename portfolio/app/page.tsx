"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  };

  const skills = {
    Backend: ["Java", "Spring Framework", "Microservices", "Hibernate", "PostgreSQL", "REST APIs"],
    Frontend: ["React", "Next.js", "TypeScript", "JavaScript", "HTML/CSS", "Tailwind CSS"],
    DevOps: ["Docker", "Kubernetes", "Terraform", "AWS", "CI/CD", "Maven"],
    Practices: ["Clean Code", "TDD", "Concurrent Programming"]
  };

  const experience = [
    {
      role: "Software Engineering Consultant",
      company: "Accenture UK & Ireland",
      period: "June 2022 - Present",
      location: "London, UK",
    },
    {
      role: "Junior Java Developer",
      company: "Agile Actors",
      period: "March 2021 - June 2022",
      location: "Athens, Greece",
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/hero/london-docklands-hero.jpg" 
            alt="London Docklands Cityscape"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-blue-50/80 to-white/80 dark:from-gray-900/90 dark:to-gray-800/90 z-0" />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial="initial"
            animate="animate"
            variants={fadeIn}
            className="text-center space-y-8"
          >
            <div className="relative w-32 h-32 mx-auto mb-8">
              <Image
                src="/images/hero/profile.jpg"
                alt="Giannis Katsanakis"
                fill
                className="rounded-full object-cover border-4 border-white dark:border-gray-800 shadow-lg"
                priority
              />
            </div>
            <h1 className="text-4xl sm:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
              Giannis Katsanakis
            </h1>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 dark:text-gray-200 mt-4">
              Software Engineer
            </h2>
            <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Building scalable enterprise solutions with Java and modern web technologies
            </p>
            <div className="flex justify-center">
              <Link
                href="/contact"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-medium transition-colors"
              >
                Contact Me
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            variants={fadeIn}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          >
            <div className="space-y-6">
              <h2 className="text-3xl sm:text-4xl font-bold">
                About Me
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                I'm a Software Engineer based in London, specializing in Java enterprise solutions and modern web technologies. 
                With experience at Accenture UK, I focus on building scalable microservices, implementing clean code practices, 
                and delivering robust solutions using Spring Framework and cloud technologies.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline"
              >
                Learn more about my journey
                <svg
                  className="ml-2 w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </div>
            <div className="space-y-6">
              {Object.entries(skills).map(([category, categorySkills], categoryIndex) => (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: categoryIndex * 0.2 }}
                  viewport={{ once: true }}
                  className="space-y-3"
                >
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">{category}</h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {categorySkills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: skillIndex * 0.1 + categoryIndex * 0.2 }}
                        viewport={{ once: true }}
                        className="bg-gray-50 dark:bg-gray-800 p-3 rounded-lg text-center"
                      >
                        <span className="font-medium text-sm">{skill}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            variants={fadeIn}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div className="text-center">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Professional Experience
              </h2>
              <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                My journey in software engineering across different roles and companies.
              </p>
            </div>
            <div className="space-y-8">
              {experience.map((job, index) => (
                <motion.div
                  key={job.company}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6"
                >
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold">{job.role}</h3>
                    <p className="text-blue-600 dark:text-blue-400">{job.company}</p>
                    <div className="flex justify-between text-gray-600 dark:text-gray-300 text-sm">
                      <span>{job.period}</span>
                      <span>{job.location}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
