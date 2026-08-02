export type Language = "en" | "vi";

export interface ProjectMetric {
  label: string;
  value: string;
}

export interface ProjectCaseStudy {
  problem: string;
  goal: string;
  role: string;
  users: string;
  solution: string;
  architecture: string;
  dataProcess: string;
  challenges: string;
  decisions: string;
  evaluation: string;
  results: string;
  lessonsLearned: string;
  nextSteps: string;
}

export interface ProjectContent {
  id: string;
  name: string;
  description: string;
  githubUrl: string;
  liveUrl?: string;
  tags: string[];
  metrics: ProjectMetric[];
  caseStudy: ProjectCaseStudy;
}

export interface SkillCategoryContent {
  title: string;
  context?: string;
  skills: string[];
}

export interface JourneyStep {
  title: string;
  period: string;
  subtitle: string;
  description: string;
  highlights: string[];
}

export interface EducationInfo {
  school: string;
  degree: string;
  major: string;
  period: string;
  location: string;
  summary: string;
  coursework: string[];
}

export const personalInfo = {
  name: "Dinh Nhat Luan",
  location: "Ho Chi Minh City, Vietnam",
  email: "nhatluan.dinh.2901@gmail.com",
  github: "https://github.com/dustin-dinh",
  facebook: "https://www.facebook.com/immayoungbigbois.raw",
  zaloUrl: "https://zalo.me/0388744779",
  linkedinUrl: "", // Kept empty when unverified
};

export const portfolioContent = {
  en: {
    lastUpdated: "Last updated: July 2026",
    navigation: {
      brand: "Dinh Nhat Luan",
      about: "About",
      journey: "Journey",
      education: "Education",
      currently: "Currently",
      projects: "Projects",
      skills: "Skills",
      photography: "Photography",
      contact: "Contact",
    },
    hero: {
      title: "AI Engineer Intern | Information Retrieval & Backend Developer",
      availabilityLabel: "Open to AI, Data & Backend Internship Opportunities",
      heroIntro: "I build practical data systems and AI-powered applications — from real-time streaming pipelines to semantic search.",
      subIntro: "Hi, I'm Luan! An Information Systems student at UIT passionate about Information Retrieval, Data Pipelines, and Backend Engineering.",
      viewProjectsBtn: "View Projects",
      githubBtn: "GitHub",
      emailBtn: "Email",
    },
    about: {
      sectionTag: "About Me",
      title: "Who I Am",
      whoIAmTitle: "Who I Am",
      bio: "I am currently a student at the University of Information Technology (UIT), majoring in Information Systems. My interest in technology began in high school and grew into a passion for building practical data pipelines and information retrieval systems. I am seeking an internship where I can apply my engineering background, learn from senior mentors, and contribute to real-world AI & Data products.",
      coreInterestLabel: "Core Interest",
      coreInterestValue: "Data Systems, AI & Backend",
      mindsetLabel: "Current Goal",
      mindsetValue: "Seeking Data/AI/Backend Internship",
    },
    photography: {
      sectionTag: "Beyond Technology",
      title: "Through My Lens",
      description: "A small corner for the nature photographs I capture in my free time.",
    },
    journey: {
      sectionTag: "Career Progression",
      title: "My Growth Journey",
      subtitle: "An intentional evolution from foundational Information Systems to Data Engineering and Applied AI.",
      steps: [
        {
          title: "Information Systems Foundation",
          period: "2022 - 2023",
          subtitle: "University of Information Technology (UIT)",
          description: "Built strong foundations in database design, SQL querying, system analysis, and computer science fundamentals.",
          highlights: ["Relational Database Design", "SQL Optimization", "Data Structures & Algorithms"]
        },
        {
          title: "Full-Stack & Backend Web Development",
          period: "2023 - 2024",
          subtitle: "Web Application Architecture",
          description: "Developed RESTful web applications using Laravel, React, and MySQL, focusing on web security, API design, and persistent state management.",
          highlights: ["REST APIs & Sanctum Auth", "React 19 & State Flow", "PHP Laravel 12 Architecture"]
        },
        {
          title: "Data Engineering & Streaming Pipelines",
          period: "2024 - 2025",
          subtitle: "Real-Time & Micro-batch Systems",
          description: "Explored distributed data processing by creating local streaming pipelines using Apache Kafka, PySpark, and Dockerized Medallion (Bronze-Silver-Gold) architectures.",
          highlights: ["Apache Kafka Message Bus", "PySpark Structured Streaming", "Grafana & PostgreSQL Analytics"]
        },
        {
          title: "Applied AI & Information Retrieval",
          period: "2025 - Present",
          subtitle: "Semantic Search & Vector Systems",
          description: "Focused on solving practical search challenges using hybrid retrieval (TF-IDF + Dense Embeddings), reranking models, evaluation metrics (Hit@K, MRR), and FastAPI services.",
          highlights: ["Hybrid Search & Cross-Encoders", "FastAPI & Vector Search", "33/33 Offline Test Evaluation"]
        }
      ]
    },
    education: {
      sectionTag: "Academic Background",
      title: "Education & Knowledge",
      subtitle: "Academic training at VNU-HCM University of Information Technology.",
      info: {
        school: "University of Information Technology (UIT) — VNU-HCM",
        degree: "Bachelor of Science",
        major: "Information Systems",
        period: "2022 – Present",
        location: "Ho Chi Minh City, Vietnam",
        summary: "Specializing in information retrieval systems, advanced database administration, data warehousing, and applied machine learning.",
        coursework: [
          "Information Retrieval & Semantic Search",
          "Advanced Database Systems",
          "Data Warehousing & Data Mining",
          "Object-Oriented Programming (Python/C++)",
          "Software Engineering Methodologies",
          "Web Application Development"
        ]
      }
    },
    currently: {
      sectionTag: "Focus",
      title: "Currently Working On",
      items: [
        "Improving deployment latency and evaluation metrics for the Vietnamese Legal Search project",
        "Exploring LLM APIs, multi-stage retrieval workflows, and Agentic Data Pipelines",
        "Seeking Data, AI, or Backend Internship opportunities in Ho Chi Minh City"
      ]
    },
    projects: {
      sectionTag: "Portfolio Highlights",
      title: "Featured Engineering Projects",
      subtitle: "Engineered with focus on measurable metrics, clean backend architecture, and problem-solving.",
      techStack: "Tech stack",
      viewGithub: "View GitHub",
      viewDemo: "Live Demo",
      viewCaseStudy: "View Case Study",
      closeCaseStudy: "Close",
      items: [
        {
          id: "vietnamese-legal-search",
          name: "Vietnamese Legal Semantic Search Engine",
          description: "A hybrid information-retrieval system for searching Vietnamese labor-law provisions from natural-language queries, featuring accentless query support and rank fusion.",
          githubUrl: "https://github.com/dustin-dinh/vietnamese-legal-semantic-search",
          liveUrl: "https://legalsearchdemo.vercel.app/",
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
          metrics: [
            { label: "Law Articles Indexed", value: "220" },
            { label: "Offline Tests Passed", value: "33 / 33" },
            { label: "Retrieval Method", value: "Hybrid (RRF)" }
          ],
          caseStudy: {
            problem: "Users finding legal provisions often search using natural conversational Vietnamese, accentless text, or abbreviations, causing standard keyword matching to return irrelevant articles.",
            goal: "Build a high-precision retrieval system capable of searching ~220 Vietnamese Labor Code provisions under 500ms response time.",
            role: "Sole AI & Backend Developer — designed the retrieval pipeline, FastAPI services, text normalization, and offline evaluation suite.",
            users: "HR professionals, employees, and legal researchers looking for quick law provision lookups.",
            solution: "Implemented Reciprocal Rank Fusion (RRF) combining Sparse TF-IDF (for exact legal terms) with Multilingual E5 dense embeddings, followed by a Cross-Encoder reranker.",
            architecture: "FastAPI Backend → Preprocessing Pipeline (Normalization & Accent Removal) → Hybrid Retrieval Engine (TF-IDF + Dense Vector) → Reranking Stage → Streamlit UI / REST API.",
            dataProcess: "Scraped and structured 220 provisions from Vietnamese Labor Law. Tokenized text with underthesea, created chunked indices, and generated normalized embeddings.",
            challenges: "Transformer models consume ~2.5GB RAM during cross-encoding inference, exceeding free hosting tier limits (e.g. Railway 1GB RAM limit).",
            decisions: "Architected a modular fallback mechanism: light TF-IDF + E5 vector search on cloud, with optional local Cross-Encoder reranking for high-resource nodes.",
            evaluation: "Evaluated using Hit@K and Mean Reciprocal Rank (MRR) across 33 representative query test suites, reaching 100% test pass rate.",
            results: "Sub-second query responses with significantly higher recall than pure BM25 or pure dense vector search.",
            lessonsLearned: "Hybrid retrieval outperforms single-model approaches when handling domain-specific legal terminology mixed with casual search terms.",
            nextSteps: "Integrate vector database (pgvector) for scaling to thousands of legal documents and implement query expansion via LLMs."
          }
        },
        {
          id: "big-data-healthcare",
          name: "Big Data Healthcare Streaming Pipeline",
          description: "A Dockerized local streaming pipeline replaying Fitbit/SEMA telemetry via Kafka, processing micro-batches with PySpark (Bronze-Silver-Gold), and serving Grafana dashboards.",
          githubUrl: "https://github.com/dustin-dinh/big-data-healthcare-streaming-pipeline",
          tags: [
            "PySpark",
            "Apache Kafka",
            "Spark Streaming",
            "Spark MLlib",
            "PostgreSQL",
            "Grafana",
            "Airflow",
            "Docker"
          ],
          metrics: [
            { label: "Architecture", value: "Medallion" },
            { label: "Processing", value: "Micro-batch" },
            { label: "Storage", value: "PostgreSQL" }
          ],
          caseStudy: {
            problem: "Continuous health telemetry (heart rate, step counts, sleep data) requires scalable ingestion, data quality refinement, and low-latency visualization.",
            goal: "Create a reproducible local Big Data architecture mimicking enterprise healthcare streaming environments.",
            role: "Data Engineer — configured Kafka topics, written Spark Structured Streaming jobs, Medallion layer schemas, and Grafana panels.",
            users: "Data scientists and healthcare analysts examining real-time stress and activity anomalies.",
            solution: "Designed a 3-tier Medallion lakehouse (Bronze for raw JSON logs, Silver for cleaned/deduplicated records, Gold for aggregated metrics) backed by Spark & PostgreSQL.",
            architecture: "Telemetry Simulator → Apache Kafka Broker → PySpark Structured Streaming → PostgreSQL Medallion Tables → Grafana Visualization Dashboards.",
            dataProcess: "Streamed Fitbit & SEMA sensor events into Kafka. Spark jobs extracted timestamps, handled missing sensor metrics, and computed 5-minute windowed averages.",
            challenges: "Managing stateful windowed aggregations without memory leaks in PySpark during local Docker execution.",
            decisions: "Configured explicit watermark thresholds in Spark Structured Streaming to discard late-arriving events cleanly.",
            evaluation: "Verified zero data loss across simulated 10,000+ message bursts and confirmed sub-2s latency on Grafana charts.",
            results: "Successfully built a containerized end-to-end streaming data pipeline running seamlessly with single-command `docker-compose up`.",
            lessonsLearned: "Structuring data into Bronze-Silver-Gold layers drastically simplifies data governance and analytics query complexity.",
            nextSteps: "Add Apache Iceberg format for time-travel queries and scale Kafka cluster nodes."
          }
        },
        {
          id: "furniture-shop-app",
          name: "Furniture Shop Web Application",
          description: "A full-stack e-commerce application featuring product catalog discovery, persistent carts, Stripe payment integration, order tracking, and administrative controls.",
          githubUrl: "https://github.com/dustin-dinh/furniture-shop-web-application",
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
          metrics: [
            { label: "Framework", value: "Laravel + React" },
            { label: "Security", value: "Sanctum Auth" },
            { label: "Payments", value: "Stripe API" }
          ],
          caseStudy: {
            problem: "E-commerce shoppers expect immediate UI feedback, reliable order processing, and secure checkout workflows.",
            goal: "Deliver a modern full-stack web application demonstrating production-ready backend standards and responsive frontend interfaces.",
            role: "Full-Stack Developer — built relational database schemas, REST API endpoints, user authentication, and React components.",
            users: "Online retail customers browsing furniture items and store administrators managing inventory.",
            solution: "Decoupled architecture using Laravel 12 RESTful API with Laravel Sanctum token security and React 19 SPA frontend.",
            architecture: "React 19 Frontend (Vite) → REST API Gateway → Laravel 12 Controllers & Middleware → MySQL Database + Stripe Payment Webhooks.",
            dataProcess: "Normalized relational schema for users, products, categories, cart items, orders, and payment transactions.",
            challenges: "Ensuring cart state consistency between guest local storage and authenticated user database records.",
            decisions: "Implemented seamless cart synchronization logic upon user login using Sanctum bearer tokens.",
            evaluation: "Tested checkout flows with Stripe CLI webhooks, verifying transaction state accuracy across multiple currencies.",
            results: "Complete functional e-commerce system with dynamic product filtering, cart management, and admin inventory control.",
            lessonsLearned: "Strict API specification and type safety between React and Laravel significantly reduce runtime bugs.",
            nextSteps: "Implement Elasticsearch / Meilisearch for instant product search and auto-complete."
          }
        }
      ]
    },
    skills: {
      sectionTag: "Capabilities",
      title: "Technical Skills",
      subtitle: "Technologies practiced through real-world engineering projects and academic coursework.",
      categories: [
        {
          title: "AI & Information Retrieval",
          context: "Applied in Vietnamese Legal Search Engine (Hybrid Search & Evaluation)",
          skills: [
            "Hybrid retrieval",
            "Semantic search",
            "TF-IDF & Dense Embeddings",
            "Vector search",
            "Reranking & RRF",
            "Hit@K & MRR evaluation",
            "Query normalization"
          ]
        },
        {
          title: "Programming & Data Science",
          context: "Applied in PySpark pipelines and statistical data processing",
          skills: [
            "Python",
            "SQL",
            "JavaScript",
            "PySpark",
            "pandas & NumPy",
            "scikit-learn",
            "JSON / CSV processing",
            "Data pipelines"
          ]
        },
        {
          title: "Backend & Databases",
          context: "Applied in FastAPI services and relational schema design",
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
          context: "Applied in portfolio and full-stack React web apps",
          skills: [
            "React",
            "Next.js",
            "TypeScript",
            "Tailwind CSS",
            "Vite"
          ]
        },
        {
          title: "DevOps & Engineering Tools",
          context: "Applied in Dockerized streaming & CI/CD workflows",
          skills: [
            "Git & GitHub",
            "Docker",
            "Apache Kafka",
            "Apache Airflow",
            "Pytest & Ruff",
            "Linux CLI",
            "VS Code & DBeaver",
            "Artifact versioning"
          ]
        }
      ]
    },
    contact: {
      sectionTag: "Get In Touch",
      title: "Let's Connect & Work Together",
      description: "I am currently open to AI, Data, and Backend Internship opportunities. Whether you have a project idea, an internship opportunity, or want to discuss software engineering, feel free to reach out!",
      sendEmail: "Send Email",
      viewGithub: "View GitHub",
      visitFacebook: "Visit Facebook",
      chatZalo: "Chat on Zalo",
      emailSubject: "Internship Opportunity for Dinh Nhat Luan",
      closingMsg: "I am always open to discussing internship roles, engineering projects, or ideas we can build together.",
      facebookAria: "Visit Dinh Nhat Luan on Facebook",
      zaloAria: "Contact Dinh Nhat Luan on Zalo"
    },
    footer: {
      builtWith: "Built with Next.js, TypeScript & Tailwind CSS. Designed for clarity & performance.",
      backToTop: "Back to top"
    }
  },

  vi: {
    lastUpdated: "Cập nhật lần cuối: Tháng 7/2026",
    navigation: {
      brand: "Đinh Nhật Luân",
      about: "Giới thiệu",
      journey: "Hành trình",
      education: "Học vấn",
      currently: "Hiện tại",
      projects: "Dự án",
      skills: "Kỹ năng",
      photography: "Nhiếp ảnh",
      contact: "Liên hệ",
    },
    hero: {
      title: "AI Engineer Intern | Lập trình viên Backend & Hệ thống truy xuất",
      availabilityLabel: "Đang tìm kiếm cơ hội thực tập về AI, Dữ liệu và Backend",
      heroIntro: "Tôi xây dựng các hệ thống dữ liệu thực tế và ứng dụng AI — từ pipeline luồng dữ liệu thời gian thực đến truy xuất thông tin ngữ nghĩa.",
      subIntro: "Xin chào, tôi là Luân! Sinh viên ngành Hệ thống Thông tin trường UIT, đam mê Truy xuất thông tin, Pipeline Dữ liệu và Kỹ thuật Backend.",
      viewProjectsBtn: "Xem dự án",
      githubBtn: "GitHub",
      emailBtn: "Email",
    },
    about: {
      sectionTag: "Giới thiệu",
      title: "Tôi là ai",
      whoIAmTitle: "Tôi là ai",
      bio: "Mình hiện là sinh viên Trường Đại học Công nghệ Thông tin (UIT), chuyên ngành Hệ thống Thông tin. Đam mê công nghệ của mình bắt đầu từ thời phổ thông và dần định hình thành định hướng xây dựng các pipeline xử lý dữ liệu và hệ thống truy xuất thông tin thực tế. Mình đang tìm kiếm cơ hội thực tập để rèn luyện trong môi trường kỹ thuật thực tế, học hỏi từ các anh chị đi trước và đóng góp vào các sản phẩm AI & Data thực tế.",
      coreInterestLabel: "Lĩnh vực chính",
      coreInterestValue: "Hệ thống dữ liệu, AI & Backend",
      mindsetLabel: "Mục tiêu hiện tại",
      mindsetValue: "Tìm kiếm cơ hội thực tập Data/AI/Backend",
    },
    photography: {
      sectionTag: "Ngoài công nghệ",
      title: "Qua ống kính của mình",
      description: "Một góc nhỏ dành cho những khoảnh khắc thiên nhiên mình ghi lại trong thời gian rảnh.",
    },
    journey: {
      sectionTag: "Hành trình phát triển",
      title: "Quá trình phát triển",
      subtitle: "Sự chuyển mình có chủ đích từ nền tảng Hệ thống thông tin đến Kỹ thuật dữ liệu và Applied AI.",
      steps: [
        {
          title: "Nền tảng Hệ thống Thông tin",
          period: "2022 - 2023",
          subtitle: "Trường Đại học Công nghệ Thông tin (UIT)",
          description: "Xây dựng nền tảng vững chắc về thiết kế cơ sở dữ liệu, tối ưu câu lệnh SQL, phân tích hệ thống và tư duy thuật toán.",
          highlights: ["Thiết kế CSDL quan hệ", "Tối ưu câu lệnh SQL", "Cấu trúc dữ liệu & Giải thuật"]
        },
        {
          title: "Phát triển Web & Backend",
          period: "2023 - 2024",
          subtitle: "Kiến trúc ứng dụng Web",
          description: "Xây dựng các ứng dụng web chuẩn RESTful với Laravel, React và MySQL; chú trọng đến bảo mật web, thiết kế API và quản lý trạng thái.",
          highlights: ["REST API & Bảo mật Sanctum", "React 19 & Luồng dữ liệu", "Kiến trúc Laravel 12"]
        },
        {
          title: "Kỹ thuật Dữ liệu & Pipeline thời gian thực",
          period: "2024 - 2025",
          subtitle: "Hệ thống Streaming & Micro-batch",
          description: "Nghiên cứu xử lý dữ liệu phân tán thông qua pipeline luồng chạy local bằng Docker, sử dụng Apache Kafka, PySpark và kiến trúc Medallion (Bronze-Silver-Gold).",
          highlights: ["Apache Kafka Message Bus", "PySpark Structured Streaming", "Grafana & PostgreSQL Analytics"]
        },
        {
          title: "Applied AI & Truy xuất thông tin (IR)",
          period: "2025 - Hiện tại",
          subtitle: "Tìm kiếm ngữ nghĩa & Hệ thống Vector",
          description: "Tập trung giải quyết bài toán tìm kiếm thực tế với truy xuất lai (TF-IDF + Dense Embeddings), mô hình Cross-Encoder, bộ đánh giá offline (Hit@K, MRR) và FastAPI.",
          highlights: ["Tìm kiếm lai & Cross-Encoders", "FastAPI & Vector Search", "Đánh giá 33/33 Test Cases"]
        }
      ]
    },
    education: {
      sectionTag: "Học vấn & Nền tảng",
      title: "Học vấn & Kiến thức",
      subtitle: "Quá trình đào tạo chính quy tại Trường Đại học Công nghệ Thông tin - ĐHQG TP.HCM.",
      info: {
        school: "Trường Đại học Công nghệ Thông tin (UIT) — ĐHQG TP.HCM",
        degree: "Cử nhân",
        major: "Hệ thống Thông tin",
        period: "2022 – Hiện tại",
        location: "TP. Hồ Chí Minh, Việt Nam",
        summary: "Chuyên sâu về hệ thống truy xuất thông tin, quản trị cơ sở dữ liệu nâng cao, kho dữ liệu và học máy ứng dụng.",
        coursework: [
          "Truy xuất thông tin & Tìm kiếm ngữ nghĩa",
          "Cơ sở dữ liệu nâng cao",
          "Kho dữ liệu & Khai thác dữ liệu (Data Mining)",
          "Lập trình hướng đối tượng (Python/C++)",
          "Phương pháp Phát triển Phần mềm",
          "Phát triển Ứng dụng Web"
        ]
      }
    },
    currently: {
      sectionTag: "Định hướng",
      title: "Hiện tại đang thực hiện",
      items: [
        "Tối ưu độ trễ triển khai và các chỉ số đánh giá cho dự án Tìm kiếm Pháp luật Việt Nam",
        "Tìm hiểu thêm về LLM API, hệ thống truy xuất đa tầng và Agentic Data Pipelines",
        "Tìm kiếm cơ hội thực tập về AI, Dữ liệu hoặc Backend tại TP. Hồ Chí Minh"
      ]
    },
    projects: {
      sectionTag: "Dự án tiêu biểu",
      title: "Dự án nổi bật",
      subtitle: "Được xây dựng chú trọng vào số liệu đo lường, kiến trúc backend sạch và giải quyết bài toán thực tế.",
      techStack: "Công nghệ",
      viewGithub: "Xem GitHub",
      viewDemo: "Xem demo",
      viewCaseStudy: "Xem Case Study",
      closeCaseStudy: "Đóng",
      items: [
        {
          id: "vietnamese-legal-search",
          name: "Vietnamese Legal Semantic Search Engine",
          description: "Hệ thống truy xuất thông tin lai hỗ trợ tìm kiếm điều khoản Luật Lao động Việt Nam từ câu hỏi tự nhiên, hỗ trợ tìm kiếm không dấu và thuật toán dung hợp thứ hạng.",
          githubUrl: "https://github.com/dustin-dinh/vietnamese-legal-semantic-search",
          liveUrl: "https://legalsearchdemo.vercel.app/",
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
          metrics: [
            { label: "Điều luật index", value: "220" },
            { label: "Test offline đạt", value: "33 / 33" },
            { label: "Phương pháp truy xuất", value: "Truy xuất lai (RRF)" }
          ],
          caseStudy: {
            problem: "Người dùng tìm kiếm điều luật thường nhập câu hỏi tự nhiên bằng tiếng Việt văn nói, văn bản không dấu hoặc viết tắt, khiến thuật toán khớp từ khóa truyền thống trả về kết quả không chính xác.",
            goal: "Xây dựng hệ thống truy xuất độ chính xác cao trên ~220 điều khoản Luật Lao động Việt Nam với thời gian phản hồi dưới 500ms.",
            role: "Lập trình viên AI & Backend duy nhất — thiết kế pipeline truy xuất, dịch vụ FastAPI, chuẩn hóa văn bản và bộ đánh giá offline.",
            users: "Chuyên viên HR, người lao động và người nghiên cứu pháp lý cần tra cứu nhanh điều luật.",
            solution: "Áp dụng thuật toán dung hợp Reciprocal Rank Fusion (RRF) kết hợp TF-IDF (khớp từ khóa pháp lý chính xác) và Vector embedding Multilingual E5, sau đó tái sắp xếp thứ hạng bằng mô hình Cross-Encoder.",
            architecture: "FastAPI Backend → Pipeline Tiền xử lý (Chuẩn hóa & Bỏ dấu) → Động cơ Truy xuất lai (TF-IDF + Dense Vector) → Tái xếp hạng (Cross-Encoder) → Giao diện Streamlit / REST API.",
            dataProcess: "Thu thập và cấu trúc 220 điều luật từ Bộ luật Lao động. Tách từ bằng underthesea, tạo chỉ mục vector/sparse và chuẩn hóa dữ liệu.",
            challenges: "Mô hình Transformer tiêu tốn ~2.5GB RAM trong quá trình Cross-Encoder inference, vượt quá giới hạn tài nguyên các nền tảng cloud miễn phí (như Railway 1GB RAM).",
            decisions: "Thiết kế cơ chế fallback mô-đun: chạy TF-IDF + E5 vector search nhẹ trên cloud, cho phép bật local Cross-Encoder reranking khi có tài nguyên.",
            evaluation: "Đánh giá bằng bộ chỉ số Hit@K và Mean Reciprocal Rank (MRR) trên 33 bộ test case truy vấn thực tế, đạt tỷ lệ vượt qua 100%.",
            results: "Thời gian phản hồi dưới 1 giây với độ phủ (Recall) cao hơn rõ rệt so với chỉ dùng thuần BM25 hoặc thuần Dense Vector Search.",
            lessonsLearned: "Phương pháp truy xuất lai (Hybrid Retrieval) vượt trội hơn truy xuất đơn mô hình khi xử lý thuật ngữ chuyên ngành kết hợp từ ngữ tự do.",
            nextSteps: "Tích hợp CSDL vector (pgvector) để mở rộng quy mô hàng nghìn tài liệu pháp lý và áp dụng LLM cho mở rộng truy vấn (Query Expansion)."
          }
        },
        {
          id: "big-data-healthcare",
          name: "Big Data Healthcare Streaming Pipeline",
          description: "Nền tảng nghiên cứu chạy local bằng Docker, phát lại dữ liệu Fitbit/SEMA qua Kafka, xử lý micro-batch bằng PySpark theo kiến trúc Medallion (Bronze-Silver-Gold) và trực quan hóa qua Grafana.",
          githubUrl: "https://github.com/dustin-dinh/big-data-healthcare-streaming-pipeline",
          tags: [
            "PySpark",
            "Apache Kafka",
            "Spark Streaming",
            "Spark MLlib",
            "PostgreSQL",
            "Grafana",
            "Airflow",
            "Docker"
          ],
          metrics: [
            { label: "Kiến trúc", value: "Medallion" },
            { label: "Kiểu xử lý", value: "Micro-batch" },
            { label: "Lưu trữ", value: "PostgreSQL" }
          ],
          caseStudy: {
            problem: "Dữ liệu đo đạc sức khỏe liên tục (nhịp tim, số bước chân, giấc ngủ) đòi hỏi khả năng tiếp nhận quy mô lớn, làm sạch dữ liệu và trực quan hóa với độ trễ thấp.",
            goal: "Xây dựng kiến trúc Big Data mô phỏng môi trường dữ liệu y tế doanh nghiệp có thể chạy và kiểm thử dễ dàng trên máy cá nhân qua Docker.",
            role: "Data Engineer — cấu hình các topic Kafka, viết script Spark Structured Streaming, thiết kế schema 3 tầng Medallion và dashboard Grafana.",
            users: "Các nhà khoa học dữ liệu và nhà phân tích y tế muốn theo dõi bất thường về mức độ căng thẳng và vận động.",
            solution: "Thiết kế Lakehouse 3 tầng Medallion (Bronze chứa log thô, Silver làm sạch/lọc trùng, Gold tổng hợp chỉ số) dựa trên Spark & PostgreSQL.",
            architecture: "Giả lập Sensor telemetry → Kafka Broker → PySpark Structured Streaming → PostgreSQL Medallion Tables → Dashboard Grafana.",
            dataProcess: "Đưa luồng sự kiện từ sensor Fitbit & SEMA vào Kafka. Job Spark trích xuất mốc thời gian, xử lý dữ liệu thiếu và tính trung bình trượt theo cửa sổ 5 phút.",
            challenges: "Quản lý trạng thái cửa sổ thời gian (stateful windowed aggregations) tránh rò rỉ bộ nhớ trong PySpark khi chạy Docker local.",
            decisions: "Thiết lập ngưỡng watermark rõ ràng trong Spark Structured Streaming để loại bỏ các sự kiện đến muộn một cách sạch sẽ.",
            evaluation: "Xác minh không mất mát dữ liệu qua đợt mô phỏng 10,000+ tin nhắn và đạt độ trễ cập nhật dưới 2 giây trên Grafana.",
            results: "Tạo thành công pipeline xử lý dữ liệu luồng hoàn chỉnh, khởi động đơn giản bằng một câu lệnh `docker-compose up`.",
            lessonsLearned: "Tổ chức dữ liệu theo các tầng Bronze-Silver-Gold giúp đơn giản hóa quản trị dữ liệu và giảm phức tạp khi truy vấn phân tích.",
            nextSteps: "Thêm định dạng Apache Iceberg cho truy vấn time-travel và mở rộng các node cluster Kafka."
          }
        },
        {
          id: "furniture-shop-app",
          name: "Furniture Shop Web Application",
          description: "Nền tảng thương mại điện tử nội thất full-stack hỗ trợ tìm sản phẩm, giỏ hàng duy trì, thanh toán Stripe, theo dõi đơn hàng và trang quản trị.",
          githubUrl: "https://github.com/dustin-dinh/furniture-shop-web-application",
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
          metrics: [
            { label: "Framework", value: "Laravel + React" },
            { label: "Bảo mật", value: "Sanctum Auth" },
            { label: "Thanh toán", value: "Stripe API" }
          ],
          caseStudy: {
            problem: "Khách hàng mua sắm trực tuyến yêu cầu giao diện phản hồi tức thì, xử lý đơn hàng đáng tin cậy và quy trình thanh toán an toàn.",
            goal: "Xây dựng ứng dụng web full-stack hiện đại thể hiện chuẩn mực backend sản xuất và giao diện frontend phản hồi linh hoạt.",
            role: "Full-Stack Developer — thiết kế CSDL quan hệ, các API RESTful, xác thực người dùng và các component React.",
            users: "Khách hàng mua nội thất trực tuyến và quản trị viên cửa hàng quản lý kho hàng.",
            solution: "Kiến trúc tách biệt giữa Laravel 12 RESTful API bảo mật bằng token Sanctum và React 19 SPA frontend.",
            architecture: "React 19 Frontend (Vite) → REST API Gateway → Controller & Middleware Laravel 12 → CSDL MySQL + Stripe Payment Webhooks.",
            dataProcess: "Cấu trúc CSDL quan hệ chuẩn hóa cho người dùng, sản phẩm, danh mục, giỏ hàng, đơn hàng và giao dịch thanh toán.",
            challenges: "Đảm bảo tính đồng bộ của giỏ hàng giữa local storage của khách vãng lai và CSDL người dùng đã đăng nhập.",
            decisions: "Xây dựng logic đồng bộ giỏ hàng khi người dùng đăng nhập thành công thông qua Sanctum bearer token.",
            evaluation: "Kiểm thử luồng thanh toán với Stripe CLI webhooks, đảm bảo độ chính xác của trạng thái giao dịch.",
            results: "Hệ thống TMĐT hoàn chỉnh với lọc sản phẩm động, quản lý giỏ hàng và quản lý kho cho admin.",
            lessonsLearned: "Quy định rõ ràng về API contract và type safety giữa React và Laravel giúp giảm thiểu tối đa lỗi runtime.",
            nextSteps: "Tích hợp Elasticsearch / Meilisearch để tìm kiếm sản phẩm tức thì và gợi ý từ khóa."
          }
        }
      ]
    },
    skills: {
      sectionTag: "Năng lực",
      title: "Kỹ năng kỹ thuật",
      subtitle: "Các công nghệ được rèn luyện qua các dự án kỹ thuật thực tế và học phần đại học.",
      categories: [
        {
          title: "AI & Truy xuất thông tin",
          context: "Đã áp dụng trong Hệ thống Tìm kiếm Pháp luật Việt Nam (Hybrid Search & Evaluation)",
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
          title: "Lập trình & Dữ liệu",
          context: "Đã áp dụng trong các pipeline PySpark và xử lý dữ liệu thống kê",
          skills: [
            "Python",
            "SQL",
            "JavaScript",
            "PySpark",
            "pandas & NumPy",
            "scikit-learn",
            "Xử lý JSON / CSV",
            "Data pipelines"
          ]
        },
        {
          title: "Backend & Cơ sở dữ liệu",
          context: "Đã áp dụng trong các dịch vụ FastAPI và thiết kế CSDL quan hệ",
          skills: [
            "FastAPI",
            "PostgreSQL & pgvector",
            "MySQL",
            "Laravel REST APIs",
            "Streamlit",
            "Thiết kế CSDL quan hệ"
          ]
        },
        {
          title: "Phát triển Frontend",
          context: "Đã áp dụng trong portfolio và các ứng dụng web React",
          skills: [
            "React",
            "Next.js",
            "TypeScript",
            "Tailwind CSS",
            "Vite"
          ]
        },
        {
          title: "Công cụ & DevOps",
          context: "Đã áp dụng trong môi trường Docker streaming & quy trình CI/CD",
          skills: [
            "Git & GitHub",
            "Docker",
            "Apache Kafka",
            "Apache Airflow",
            "Pytest & Ruff",
            "Linux CLI",
            "VS Code & DBeaver",
            "Artifact versioning"
          ]
        }
      ]
    },
    contact: {
      sectionTag: "Liên hệ",
      title: "Liên hệ với tôi",
      description: "Tôi hiện đang tìm kiếm các cơ hội thực tập về AI, Dữ liệu và Backend. Nếu bạn có ý tưởng dự án, cơ hội thực tập hoặc muốn trao đổi về lập trình phần mềm, hãy liên hệ với tôi!",
      sendEmail: "Gửi email",
      viewGithub: "Xem GitHub",
      visitFacebook: "Xem Facebook",
      chatZalo: "Nhắn tin qua Zalo",
      emailSubject: "Cơ hội thực tập dành cho Đinh Nhật Luân",
      closingMsg: "Tôi luôn sẵn sàng trao đổi về cơ hội thực tập, dự án công nghệ hoặc những ý tưởng có thể cùng nhau phát triển.",
      facebookAria: "Ghé thăm Facebook của Đinh Nhật Luân",
      zaloAria: "Nhắn tin qua Zalo với Đinh Nhật Luân"
    },
    footer: {
      builtWith: "Xây dựng bằng Next.js, TypeScript & Tailwind CSS. Tối ưu cho hiệu năng và trải nghiệm người dùng.",
      backToTop: "Về đầu trang"
    }
  }
};
