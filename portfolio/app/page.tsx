"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
import { experience } from "./data/experience";
import { skillTags } from "./data/skills";

// Dynamic import with SSR disabled to prevent hydration mismatch
const HeroContent = dynamic(() => import("./components/HeroContent"), {
  ssr: false,
  loading: () => (
    <div className="text-center space-y-6 md:space-y-8">
      <div className="relative w-28 h-28 md:w-32 md:h-32 mx-auto mb-6 md:mb-8">
        <div className="w-full h-full rounded-full bg-gray-200 dark:bg-gray-700 border-4 border-white dark:border-gray-800 shadow-lg" />
      </div>
      <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
        Giannis Katsanakis
      </h1>
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-200 mt-3 md:mt-4">
        Senior Software Engineer
      </h2>
      <p className="text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
        Building enterprise-scale distributed systems with Java, Spring Boot, and AWS
      </p>
      <div className="flex justify-center">
        <Link
          href="/contact"
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-medium transition-colors"
        >
          Contact Me
        </Link>
      </div>
    </div>
  ),
});

export default function Home() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] md:h-[60vh] flex items-center justify-center overflow-hidden py-20 md:py-0">
        <div className="absolute inset-0">
          <Image
            src="/images/hero/london-docklands-hero.jpg"
            alt="London Docklands Cityscape"
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-blue-50/80 to-white/80 dark:from-gray-900/90 dark:to-gray-800/90 z-0" />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <HeroContent />
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <motion.div
            initial="initial"
            whileInView="animate"
            variants={fadeIn}
            viewport={{ once: true }}
            className="text-center space-y-6"
          >
            <h2 className="text-3xl sm:text-4xl font-bold">
              About Me
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
              Senior Software Engineer with 5+ years of experience specializing in Java, Spring Boot, and microservices
              architecture. Expert in building enterprise-scale distributed systems using clean code principles, TDD/BDD
              methodologies, and domain-driven design. Proven track record in DevOps practices, Kubernetes orchestration,
              and AWS cloud-native solutions.
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
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <motion.div
            initial="initial"
            whileInView="animate"
            variants={fadeIn}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
              Technical Skills
            </h2>
            <div className="space-y-6">
              {Object.entries(skillTags).map(([category, categorySkills], categoryIndex) => (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: categoryIndex * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white dark:bg-gray-900 rounded-xl p-5 flex flex-col sm:flex-row sm:items-center gap-3"
                >
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400 sm:w-40 shrink-0">
                    {category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {categorySkills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1.5 text-sm bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
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
                    <div className="flex flex-col sm:flex-row sm:justify-between text-gray-600 dark:text-gray-300 text-sm gap-1">
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
