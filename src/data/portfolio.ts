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
  linkedinPlaceholder: string;
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
  linkedinPlaceholder: "https://linkedin.com/in/dustin-dinh",
  availabilityLabel: "Open to AI, Data, and Backend Internship Opportunities",
  bio: "I am an Information Systems student at the University of Information Technology with hands-on experience building Vietnamese information retrieval systems and data-driven web applications. I work mainly with Python, FastAPI, semantic search, retrieval evaluation, SQL, REST APIs, and reproducible testing.",
  heroIntro: "Information Systems student specializing in high-accuracy Vietnamese information retrieval systems, AI engineering, and robust backend web applications.",
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
    description: "A Vietnamese legal information retrieval system that helps users search labor-law provisions using natural Vietnamese questions, including accentless text and abbreviations.",
    githubUrl: "https://github.com/dustin-dinh/vietnamese-legal-semantic-search",
    demoUrl: "#", // Centralized placeholder when live demo is unavailable
    tags: [
      "Python",
      "FastAPI",
      "Streamlit",
      "TF-IDF",
      "E5",
      "Cross-Encoder",
      "scikit-learn",
      "Docker",
      "Pytest"
    ],
    keyHighlights: [
      "Built a retrieval-only pipeline over 220 legal articles and 228 chunks combining TF-IDF and multilingual E5 embeddings.",
      "Applied weighted Reciprocal Rank Fusion (RRF) and Cross-Encoder reranking.",
      "Achieved Hit@5 of 0.90 and MRR@5 of 0.7244 on a locked 80-query test set.",
      "Exposed system via FastAPI & Streamlit; passed 33 offline pytest cases and corpus audit."
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
    description: "A decoupled furniture e-commerce application with a React frontend, Laravel REST API, normalized MySQL database, customer workflows, administration workflows, and online checkout.",
    githubUrl: "https://github.com/dustin-dinh/furniture-shop-web-application",
    demoUrl: "#", // Centralized placeholder when live demo is unavailable
    tags: [
      "React",
      "Laravel",
      "PHP",
      "MySQL",
      "REST API",
      "Sanctum",
      "Stripe",
      "Vite"
    ],
    keyHighlights: [
      "Decoupled full-stack architecture with React 19 frontend and Laravel 12 REST API.",
      "Complete customer & admin workflows: filtered catalog, persistent cart, and Stripe/COD checkout.",
      "Administration portal for product, category, user, order management, and dashboard reporting.",
      "Robust backend with 14 controllers, 9 Eloquent models, 14 migrations, and ~40 API route declarations."
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
      "TF-IDF",
      "Dense embeddings",
      "Vector search",
      "Query normalization",
      "Reranking",
      "Confidence filtering",
      "Hit@K evaluation",
      "MRR evaluation",
      "Retrieval and RAG foundations"
    ]
  },
  {
    title: "Programming & Data",
    skills: [
      "Python",
      "SQL",
      "JavaScript",
      "pandas",
      "NumPy",
      "scikit-learn",
      "JSON and CSV processing",
      "Data validation",
      "Basic ETL",
      "Data pipelines"
    ]
  },
  {
    title: "Backend & Databases",
    skills: [
      "FastAPI",
      "Streamlit",
      "PostgreSQL",
      "pgvector",
      "MySQL",
      "Laravel",
      "REST APIs",
      "Relational database design",
      "Database normalization"
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
    title: "Engineering Tools & DevOps",
    skills: [
      "Git",
      "GitHub",
      "Docker",
      "Pytest",
      "Ruff",
      "Linux CLI",
      "Artifact versioning",
      "Reproducible testing",
      "VS Code",
      "DBeaver",
      "Jupyter"
    ]
  }
];
