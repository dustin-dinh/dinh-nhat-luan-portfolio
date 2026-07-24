export interface Project {
  id: string;
  name: string;
  category: string;
  description: string;
  githubUrl: string;
  demoUrl: string;
  tags: string[];
  keyHighlights: string[];
  allDetails: string[];
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
  major: string;
  englishLevel: string;
  coursework: string[];
}

export interface PersonalInfo {
  name: string;
  title: string;
  location: string;
  email: string;
  github: string;
  linkedinUrl: string;
  availabilityLabel: string;
  bio: string;
  heroIntro: string;
  resumePath: string;
}

export const personalInfo: PersonalInfo = {
  name: "Dinh Nhat Luan",
  title: "AI Engineer Intern | Information Retrieval & Backend Developer",
  location: "Ho Chi Minh City, Vietnam",
  email: "nhatluan.dinh.2901@gmail.com",
  github: "https://github.com/dustin-dinh",
  linkedinUrl: "", // Unverified LinkedIn URL kept empty
  availabilityLabel: "Open to AI, Data & Backend Internship Opportunities",
  bio: "I am an Information Systems student at the University of Information Technology (VNU-HCM) who loves building practical, data-driven software. My core interest lies in backend development, information retrieval, and applied AI. I enjoy turning complex challenges—like natural language legal queries or e-commerce logic—into clean, reproducible applications with well-structured APIs. I am eager to join a team as an intern to learn, collaborate, and contribute to real-world products.",
  heroIntro: "Hi, I'm Luan! An Information Systems student passionate about information retrieval, backend web development, and applied AI.",
  resumePath: "/resume.pdf"
};

export const educationInfo: Education = {
  institution: "VNU-HCM University of Information Technology",
  degree: "Bachelor's program in Information Systems",
  period: "2023–2026",
  major: "Information Systems",
  englishLevel: "TOEIC 700 / B2 equivalent",
  coursework: [
    "Database Systems",
    "Web Application Development",
    "Object-Oriented Programming",
    "Software Engineering"
  ]
};

export const projectsData: Project[] = [
  {
    id: "vietnamese-legal-search",
    name: "Vietnamese Legal Semantic Search Engine",
    category: "Information Retrieval / NLP / Backend",
    description: "A specialized search system helping users find relevant Vietnamese labor-law provisions using natural language queries, including accentless text and common abbreviations.",
    githubUrl: "https://github.com/dustin-dinh/vietnamese-legal-semantic-search",
    demoUrl: "", // Empty string when demo is unavailable
    tags: [
      "Python",
      "FastAPI",
      "Streamlit",
      "TF-IDF",
      "Multilingual E5",
      "Cross-Encoder",
      "Pytest",
      "Docker"
    ],
    keyHighlights: [
      "Built a hybrid search pipeline combining accented & accentless TF-IDF with Multilingual E5 embeddings.",
      "Applied Reciprocal Rank Fusion (RRF) and Cross-Encoder reranking for high relevance.",
      "Achieved Hit@5 of 0.90 and MRR@5 of 0.7244 on a locked 80-query evaluation set.",
      "Exposed system via FastAPI REST endpoints and Streamlit demo interface."
    ],
    allDetails: [
      "Built a retrieval-only pipeline over 220 legal articles and 228 chunks.",
      "Combined accented and accentless TF-IDF retrieval.",
      "Used multilingual E5 embeddings for semantic retrieval.",
      "Applied weighted Reciprocal Rank Fusion.",
      "Used Cross-Encoder reranking.",
      "Returned original legal provisions with article, PDF page, and source metadata.",
      "Achieved Hit@5 of 0.90.",
      "Achieved MRR@5 of 0.7244 on a locked 80-query test set.",
      "Added confidence thresholds, clarification behavior, and out-of-scope abstention.",
      "Exposed the retrieval system using FastAPI and Streamlit.",
      "Verified 30 out of 30 versioned artifacts.",
      "Passed a 10 out of 10 corpus audit.",
      "Passed 33 offline pytest cases."
    ]
  },
  {
    id: "furniture-shop-app",
    name: "Furniture Shop Web Application",
    category: "Full-stack Web Development",
    description: "A full-featured e-commerce platform built with a React frontend and Laravel REST API, handling customer shopping workflows, admin management, and checkout.",
    githubUrl: "https://github.com/dustin-dinh/furniture-shop-web-application",
    demoUrl: "", // Empty string when demo is unavailable
    tags: [
      "React 19",
      "Laravel 12",
      "PHP",
      "MySQL",
      "REST API",
      "Sanctum",
      "Stripe",
      "Vite"
    ],
    keyHighlights: [
      "Decoupled full-stack architecture with React 19 frontend and Laravel 12 REST API.",
      "Complete customer experience: product catalog filters, persistent cart, and Stripe/COD checkout.",
      "Admin portal for managing products, categories, users, orders, and sales reporting.",
      "Normalized MySQL database schema with 14 controllers and 40 REST route declarations."
    ],
    allDetails: [
      "React 19 frontend.",
      "Laravel 12 REST API.",
      "MySQL relational database.",
      "Laravel Sanctum authentication.",
      "Customer and administrator workflows.",
      "Filtered and paginated product catalog.",
      "Persistent shopping cart.",
      "COD and Stripe checkout.",
      "Order history.",
      "Administration for products, categories, users, orders, and shipping charges.",
      "Dashboard reporting.",
      "Temporary image uploads with large and small image processing.",
      "14 controllers.",
      "9 Eloquent models.",
      "14 migrations.",
      "56 JSX files.",
      "Approximately 40 API route declarations.",
      "All 64 PHP files passed syntax checks."
    ]
  }
];

export const skillCategories: SkillCategory[] = [
  {
    title: "AI & Information Retrieval",
    skills: [
      "Hybrid retrieval",
      "Semantic search",
      "TF-IDF & Embeddings",
      "Vector search",
      "Reranking & RRF",
      "Hit@K & MRR evaluation",
      "Query normalization"
    ]
  },
  {
    title: "Programming & Data",
    skills: [
      "Python",
      "SQL",
      "JavaScript",
      "pandas & NumPy",
      "scikit-learn",
      "JSON / CSV processing",
      "Data pipelines"
    ]
  },
  {
    title: "Backend & Databases",
    skills: [
      "FastAPI",
      "PostgreSQL & pgvector",
      "MySQL",
      "Laravel REST APIs",
      "Streamlit",
      "Relational design"
    ]
  },
  {
    title: "Frontend Development",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Vite"
    ]
  },
  {
    title: "Engineering & Tools",
    skills: [
      "Git & GitHub",
      "Docker",
      "Pytest & Ruff",
      "Linux CLI",
      "VS Code & DBeaver",
      "Artifact versioning"
    ]
  }
];
