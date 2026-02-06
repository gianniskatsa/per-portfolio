export interface Experience {
  role: string;
  company: string;
  period: string;
  location: string;
  description: string[];
  projects?: {
    name: string;
    bullets: string[];
  }[];
}

export const experience: Experience[] = [
  {
    role: "Senior Software Engineer Consultant",
    company: "Accenture UK & Ireland",
    period: "Jun 2022 - Present",
    location: "London, UK",
    description: [
      "Promoted from Software Engineer Consultant. Delivering enterprise Java solutions across multiple high-profile clients.",
    ],
    projects: [
      {
        name: "Sainsbury's Nectar Loyalty Platform",
        bullets: [
          "Developed enterprise-scale Java 21/Spring Boot 3.x microservices serving 18 million active customers across 600 retail locations",
          "Spearheaded customer rewards engine processing 2 million daily transactions with 15% performance improvement",
          "Designed event-driven architecture with 10+ Spring Boot services using AWS SQS/SNS, PostgreSQL, and DynamoDB",
          "Led legacy system migration delivering 'Year In Review' campaign for 880,000 customers",
          "Built real-time campaign delivery system targeting 10+ million users with auto-scaling infrastructure",
        ],
      },
      {
        name: "UK Home Office – Government Digital Services",
        bullets: [
          "Developing critical government digital services using Java Spring Boot and AWS serverless architecture",
          "Architected event-driven microservices with DynamoDB Streams and AWS SQS",
          "Cut operational costs by 20% through serverless AWS Lambda solutions",
          "Implemented secure data processing pipelines adhering to UK government security standards",
        ],
      },
      {
        name: "Accenture Internal Analytics Platform",
        bullets: [
          "Delivered workforce analytics dashboard for 10,000+ employees with 50% faster insights",
          "Implemented GraphQL queries with AWS AppSync backend integration",
        ],
      },
    ],
  },
  {
    role: "Java Developer",
    company: "Agile Actors",
    period: "Mar 2021 - Jun 2022",
    location: "London, UK (Remote)",
    description: [
      "Client: GfK – European B2B Analytics Platform",
    ],
    projects: [
      {
        name: "GfK Newron",
        bullets: [
          "Developed and maintained Java Spring Boot microservices supporting enterprise market research across 20+ countries",
          "Optimized GraphQL APIs reducing response times and improving query efficiency",
          "Collaborated in Agile/Scrum with cross-functional teams, sprint planning, and code reviews",
        ],
      },
    ],
  },
];
