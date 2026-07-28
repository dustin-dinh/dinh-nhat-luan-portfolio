export type Language = "en" | "vi";

export interface ProjectContent {
  id: string;
  name: string;
  description: string;
  githubUrl: string;
  liveUrl?: string;
  tags: string[];
}

export interface SkillCategoryContent {
  title: string;
  skills: string[];
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
      currently: "Currently",
      projects: "Projects",
      skills: "Skills",
      photography: "Photography",
      contact: "Contact",
    },
    hero: {
      title: "AI Engineer Intern | Information Retrieval & Backend Developer",
      availabilityLabel: "Open to AI, Data & Backend Internship Opportunities",
      heroIntro: "Hi, I'm Luan! An Information Systems student passionate about information retrieval, backend web development, and applied AI.",
      viewProjectsBtn: "View Projects",
      githubBtn: "GitHub",
      emailBtn: "Email"
    },
    about: {
      sectionTag: "About Me",
      title: "Who I Am",
      whoIAmTitle: "Who I Am",
      bio: "I am currently a student at the University of Information Technology (UIT), and technology is my main passion. I major in Information Systems and have been deeply interested in this field since grade 10. I am looking for an internship where I can learn in a real engineering environment while contributing the skills and experience gained through personal projects. Beyond technology, I also enjoy photography, especially capturing nature.",
      coreInterestLabel: "Core Interest",
      coreInterestValue: "Data Systems, AI & Backend",
      mindsetLabel: "Current Goal",
      mindsetValue: "Seeking an internship opportunity"
    },
    photography: {
      sectionTag: "Beyond Technology",
      title: "Through My Lens",
      description: "A small corner for the nature photographs I capture in my free time."
    },
    currently: {
      sectionTag: "Focus",
      title: "Currently",
      items: [
        "Improving the deployment and user experience of the Vietnamese Legal Search project",
        "Learning more about practical LLM APIs, retrieval systems, and agent workflows",
        "Looking for internship opportunities in AI, Data, or Backend Engineering"
      ]
    },
    projects: {
      sectionTag: "Portfolio Highlights",
      title: "Featured Engineering Projects",
      subtitle: "A concise look at what I built, the stack behind it, and the source code.",
      techStack: "Tech stack",
      viewGithub: "View GitHub",
      viewDemo: "Live Demo",
      items: [
        {
          id: "big-data-healthcare",
          name: "Big Data Healthcare Streaming Pipeline",
          description: "A Dockerized local research platform that replays Fitbit/SEMA data through Kafka, processes micro-batches with Spark Structured Streaming and a Bronze–Silver–Gold architecture, serves analytics through PostgreSQL and Grafana, and supports Spark MLlib experiments.",
          githubUrl: "https://github.com/dustin-dinh/big-data-healthcare-streaming-pipeline",
          tags: [
            "PySpark",
            "Kafka",
            "Spark Streaming",
            "Spark MLlib",
            "PostgreSQL",
            "Grafana",
            "Airflow",
            "Docker"
          ]
        },
        {
          id: "vietnamese-legal-search",
          name: "Vietnamese Legal Semantic Search Engine",
          description: "A hybrid information-retrieval system for finding Vietnamese labor-law provisions from natural-language queries, including accentless text and common abbreviations.",
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
          ]
        },
        {
          id: "furniture-shop-app",
          name: "Furniture Shop Web Application",
          description: "A full-stack furniture e-commerce platform covering product discovery, persistent carts, checkout, order workflows, and administration.",
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
          ]
        }
      ]
    },
    skills: {
      sectionTag: "Capabilities",
      title: "Technical Skills",
      subtitle: "Technologies and concepts practiced through hands-on project implementations and coursework.",
      categories: [
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
            "PySpark",
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
      description: "I am currently open to AI, Data, and Backend Internship opportunities. Whether you have a project idea, a job opportunity, or just want to chat about software engineering, I'd love to hear from you!",
      sendEmail: "Send Email",
      viewGithub: "View GitHub",
      visitFacebook: "Visit Facebook",
      chatZalo: "Chat on Zalo",
      emailSubject: "Internship Opportunity for Dinh Nhat Luan",
      closingMsg: "I am always open to discussing internship roles, technology projects, or ideas we can build together.",
      facebookAria: "Visit Dinh Nhat Luan on Facebook",
      zaloAria: "Contact Dinh Nhat Luan on Zalo"
    },
    footer: {
      builtWith: "Built with Next.js, TypeScript & Tailwind CSS. Ready for Vercel.",
      backToTop: "Back to top"
    }
  },

  vi: {
    lastUpdated: "Cập nhật lần cuối: Tháng 7/2026",
    navigation: {
      brand: "Đinh Nhật Luân",
      about: "Giới thiệu",
      currently: "Hiện tại",
      projects: "Dự án",
      skills: "Kỹ năng",
      photography: "Nhiếp ảnh",
      contact: "Liên hệ",
    },
    hero: {
      title: "AI Engineer Intern | Lập trình viên Backend & Hệ thống tìm kiếm",
      availabilityLabel: "Đang tìm kiếm cơ hội thực tập về AI, Dữ liệu và Backend",
      heroIntro: "Xin chào, tôi là Luân! Sinh viên ngành Hệ thống Thông tin trường Đại Học Công Nghệ Thông Tin, tôi thích công nghệ, viết code, âm nhạc và nhiếp ảnh",
      viewProjectsBtn: "Xem dự án",
      githubBtn: "GitHub",
      emailBtn: "Email"
    },
    about: {
      sectionTag: "Giới thiệu",
      title: "Tôi là ai",
      whoIAmTitle: "Tôi là ai",
      bio: "Mình hiện tại đang là sinh viên của Trường Đại học Công nghệ Thông tin (UIT), công nghệ chính là niềm đam mê của mình. Chuyên ngành của mình là Hệ thống Thông tin và mình đã có niềm đam mê rất lớn với lĩnh vực này từ năm lớp 10. Mình đang tìm kiếm cơ hội thực tập để được học hỏi trong môi trường kỹ thuật thực tế, đồng thời đóng góp bằng những kỹ năng và kinh nghiệm đã tích lũy từ các dự án cá nhân. Ngoài đam mê công nghệ, mình còn có hứng thú với nhiếp ảnh, nhất là ảnh thiên nhiên.",
      coreInterestLabel: "Lĩnh vực chính",
      coreInterestValue: "Hệ thống dữ liệu, AI & Backend",
      mindsetLabel: "Mục tiêu hiện tại",
      mindsetValue: "Tìm kiếm cơ hội thực tập"
    },
    photography: {
      sectionTag: "Ngoài công nghệ",
      title: "Qua ống kính của mình",
      description: "Một góc nhỏ dành cho những khoảnh khắc thiên nhiên mình ghi lại trong thời gian rảnh."
    },
    currently: {
      sectionTag: "Định hướng",
      title: "Hiện tại",
      items: [
        "Tiếp tục tối ưu khả năng triển khai và trải nghiệm người dùng cho dự án tìm kiếm pháp luật Việt Nam",
        "Tìm hiểu thêm về LLM API, hệ thống truy xuất thông tin và agent workflow",
        "Tìm kiếm cơ hội thực tập về AI, Dữ liệu hoặc Backend"
      ]
    },
    projects: {
      sectionTag: "Dự án tiêu biểu",
      title: "Dự án nổi bật",
      subtitle: "Tóm tắt ngắn gọn về sản phẩm, công nghệ sử dụng và mã nguồn của từng dự án.",
      techStack: "Công nghệ",
      viewGithub: "Xem GitHub",
      viewDemo: "Xem demo",
      items: [
        {
          id: "big-data-healthcare",
          name: "Big Data Healthcare Streaming Pipeline",
          description: "Nền tảng nghiên cứu chạy local bằng Docker, phát lại dữ liệu Fitbit/SEMA qua Kafka, xử lý micro-batch bằng Spark Structured Streaming theo kiến trúc Bronze–Silver–Gold, phục vụ phân tích qua PostgreSQL/Grafana và hỗ trợ thí nghiệm Spark MLlib.",
          githubUrl: "https://github.com/dustin-dinh/big-data-healthcare-streaming-pipeline",
          tags: [
            "PySpark",
            "Kafka",
            "Spark Streaming",
            "Spark MLlib",
            "PostgreSQL",
            "Grafana",
            "Airflow",
            "Docker"
          ]
        },
        {
          id: "vietnamese-legal-search",
          name: "Vietnamese Legal Semantic Search Engine",
          description: "Hệ thống truy xuất lai giúp tìm điều khoản Luật Lao động Việt Nam bằng câu hỏi tự nhiên, hỗ trợ cả văn bản không dấu và từ viết tắt.",
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
          ]
        },
        {
          id: "furniture-shop-app",
          name: "Furniture Shop Web Application",
          description: "Nền tảng thương mại điện tử nội thất full-stack hỗ trợ tìm sản phẩm, giỏ hàng, thanh toán, quản lý đơn hàng và trang quản trị.",
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
          ]
        }
      ]
    },
    skills: {
      sectionTag: "Năng lực",
      title: "Kỹ năng kỹ thuật",
      subtitle: "Các công nghệ và khái niệm được rèn luyện qua các dự án thực tế và học phần đại học.",
      categories: [
        {
          title: "AI & Truy xuất thông tin",
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
      description: "Tôi hiện đang tìm kiếm các cơ hội thực tập về AI, Dữ liệu và Backend. Nếu bạn có ý tưởng dự án, cơ hội công việc hoặc muốn trao đổi về lập trình phần mềm, hãy liên hệ với tôi!",
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
      builtWith: "Xây dựng bằng Next.js, TypeScript & Tailwind CSS. Sẵn sàng cho Vercel.",
      backToTop: "Về đầu trang"
    }
  }
};
