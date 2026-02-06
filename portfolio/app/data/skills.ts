// Short skill tags used on the Home page
export const skillTags: Record<string, string[]> = {
  Languages: ["Java", "Kotlin", "SQL", "JavaScript", "TypeScript", "Python", "Groovy"],
  Frameworks: ["Spring Boot", "Spring WebFlux", "Hibernate", "REST APIs", "GraphQL", "React", "Next.js"],
  "Cloud (AWS)": ["Lambda", "S3", "RDS", "SQS/SNS", "DynamoDB", "AppSync", "CloudWatch"],
  "DevOps & CI/CD": ["Docker", "Kubernetes", "GitLab CI/CD", "CircleCI", "GitHub Actions"],
  Databases: ["PostgreSQL", "MySQL", "MSSQL", "DynamoDB"],
  Observability: ["New Relic", "CloudWatch", "Prometheus", "Grafana"],
  Practices: ["TDD", "BDD", "DDD", "Clean Code", "Pair Programming", "Trunk-based Dev"],
};

// Detailed expertise used on the About page
export const expertise: Record<string, string[]> = {
  "Backend Development": [
    "Java (8+, 11, 17, 21) & Kotlin",
    "Spring Boot, Spring WebFlux, Hibernate ORM",
    "RESTful API & GraphQL Design",
    "Microservices & Event-Driven Architecture",
    "Concurrent Programming & Java Concurrency",
  ],
  "Cloud & DevOps": [
    "AWS (Lambda, S3, RDS, SQS, SNS, DynamoDB, AppSync)",
    "Container Orchestration (Docker, Kubernetes)",
    "CI/CD (GitLab CI/CD, CircleCI, GitHub Actions)",
    "Observability (New Relic, Prometheus, Grafana, CloudWatch)",
  ],
  "Best Practices": [
    "Test-Driven Development (TDD) & Behaviour-Driven Development (BDD)",
    "Domain-Driven Design (DDD)",
    "Clean Code & Software Design Patterns",
    "Agile / Scrum & Trunk-based Development",
  ],
  "Frontend Development": [
    "React.js & Next.js",
    "TypeScript & JavaScript",
    "Modern CSS (Tailwind, Responsive Design)",
    "Frontend Build Tools & Performance",
  ],
};
