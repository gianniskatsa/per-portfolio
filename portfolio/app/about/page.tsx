"use client";

import { motion } from "framer-motion";

export default function About() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  };

  const experience = [
    {
      role: "Software Engineering Consultant",
      company: "Accenture UK & Ireland",
      period: "Jun 2022 - Present",
      location: "London, UK",
      description: [
        "Specializing in Java enterprise solutions and microservices architecture",
        "Implementing clean code practices and test-driven development",
        "Working with Spring Framework, Hibernate, and PostgreSQL",
        "Deploying applications using Docker, Kubernetes, and Terraform",
      ],
    },
    {
      role: "Junior Java Developer",
      company: "Agile Actors",
      period: "Mar 2021 - Jun 2022",
      location: "Athens, Greece",
      description: [
        "Developed and maintained Java-based applications",
        "Worked with REST APIs and microservices",
        "Implemented unit testing and continuous integration practices",
        "Collaborated in an agile development environment",
      ],
    },
  ];

  const expertise = {
    "Backend Development": [
      "Java (Core Java, Spring Framework, JVM)",
      "Database Management (PostgreSQL, Hibernate ORM)",
      "RESTful API Design and Implementation",
      "Concurrent Programming and Java Concurrency",
    ],
    "DevOps & Cloud": [
      "Container Orchestration (Docker, Kubernetes)",
      "Infrastructure as Code (Terraform)",
      "CI/CD Implementation",
      "Monitoring and Observability (Grafana)",
    ],
    "Best Practices": [
      "Clean Code & Software Design Patterns",
      "Test-Driven Development (TDD)",
      "Microservices Architecture",
      "Agile Methodologies",
    ],
    "Frontend Development": [
      "React.js & Next.js",
      "TypeScript & JavaScript",
      "Modern CSS (Tailwind, Responsive Design)",
      "Frontend Build Tools & Performance",
    ],
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
            Software Engineer based in London, specializing in building scalable enterprise 
            solutions with Java and modern web technologies. Passionate about clean code, 
            microservices architecture, and continuous improvement.
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
                      <div className="flex justify-between text-gray-600 dark:text-gray-300">
                        <span>{job.period}</span>
                        <span>{job.location}</span>
                      </div>
                    </div>
                    <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
                      {job.description.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
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
