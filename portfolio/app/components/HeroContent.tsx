"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function HeroContent() {
    const fadeIn = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.5 },
    };

    return (
        <motion.div
            initial="initial"
            animate="animate"
            variants={fadeIn}
            className="text-center space-y-6 md:space-y-8"
        >
            <div className="relative w-28 h-28 md:w-32 md:h-32 mx-auto mb-6 md:mb-8">
                <Image
                    src="/images/hero/profile.jpg"
                    alt="Giannis Katsanakis"
                    fill
                    sizes="128px"
                    className="rounded-full object-cover border-4 border-white dark:border-gray-800 shadow-lg"
                    priority
                />
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
        </motion.div>
    );
}
