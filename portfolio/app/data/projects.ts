import { Project } from "../types/project";

export const projects: Project[] = [
  {
    id: "portfolio",
    title: "Personal Portfolio",
    description:
      "My personal portfolio website built with Next.js 16, React 19, and Tailwind CSS v4.",
    longDescription:
      "A modern, responsive portfolio website featuring dark/light mode, smooth animations with Framer Motion, and a contact form powered by EmailJS.",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    imageUrl: "/images/hero/london-docklands-hero.jpg",
    githubUrl: "https://github.com/gianniskatsa/per-portfolio",
    liveUrl: "https://portfolio.giannisk.dev",
    featured: true,
    completionDate: "2025-02",
    category: "web",
  },
  {
    id: "microservices-platform",
    title: "Microservices Platform",
    description:
      "Enterprise-grade microservices platform built with Spring Boot and deployed on Kubernetes.",
    technologies: ["Java", "Spring Boot", "Kubernetes", "Docker", "PostgreSQL"],
    imageUrl: "",
    featured: true,
    completionDate: "2024-06",
    category: "backend",
  },
  {
    id: "rest-api-service",
    title: "RESTful API Service",
    description:
      "High-performance REST API with comprehensive test coverage and CI/CD pipeline.",
    technologies: ["Java", "Spring Framework", "Hibernate", "PostgreSQL", "Maven"],
    imageUrl: "",
    featured: false,
    completionDate: "2023-12",
    category: "backend",
  },
];
