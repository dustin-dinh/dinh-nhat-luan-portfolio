export type Language = "en" | "vi";

export interface ProjectContent {
  id: string;
  name: string;
  description: string;
  githubUrl: string;
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
  resumePath: "/resume.pdf"
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
      education: "Education",
      contact: "Contact",
      resume: "Resume"
    },
    hero: {
      title: "AI Engineer Intern | Information Retrieval & Backend Developer",
      availabilityLabel: "Open to AI, Data & Backend Internship Opportunities",
      heroIntro: "Hi, I'm Luan! An Information Systems student passionate about information retrieval, backend web development, and applied AI.",
      viewProjectsBtn: "View Projects",
      downloadResumeBtn: "Download Resume",
      githubBtn: "GitHub",
      emailBtn: "Email"
    },
    about: {
      sectionTag: "About Me",
      title: "My Journey & Engineering Focus",
      whoIAmTitle: "Who I Am",
      bio: "I am an Information Systems student at the University of Information Technology (VNU-HCM) who loves building practical, data-driven software. My core interest lies in backend development, information retrieval, and applied AI. I enjoy turning complex challenges—like natural language legal queries or e-commerce logic—into clean, reproducible applications with well-structured APIs. I am eager to join a team as an intern to learn, collaborate, and contribute to real-world products.",
      coreInterestLabel: "Core Interest",
      coreInterestValue: "Backend Systems & IR Search",
      mindsetLabel: "Mindset",
      mindsetValue: "Project-based & Reproducible",
      practicalTitle: "Practical Development",
      practicalSubtitle: "Building software that solves real tasks",
      practicalDesc: "I focus on clean APIs, normalized database designs, and reliable testing rather than unnecessary complexity.",
      academicTitle: "Academic Foundation",
      collaborationTitle: "Learning & Teamwork",
      collaborationSubtitle: "Ready for internship roles",
      collaborationDesc: "Eager to learn from experienced engineers, accept feedback, and contribute effectively to team projects."
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
      items: [
        {
          id: "vietnamese-legal-search",
          name: "Vietnamese Legal Semantic Search Engine",
          description: "A hybrid information-retrieval system for finding Vietnamese labor-law provisions from natural-language queries, including accentless text and common abbreviations.",
          githubUrl: "https://github.com/dustin-dinh/vietnamese-legal-semantic-search",
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
      ]
    },
    education: {
      sectionTag: "Academic Background",
      title: "Education & Qualifications",
      institution: "VNU-HCM University of Information Technology",
      degree: "Bachelor's program in Information Systems",
      major: "Information Systems",
      period: "2023–2026",
      englishLevel: "TOEIC 700 / B2 equivalent",
      courseworkTitle: "Relevant Coursework",
      coursework: [
        "Database Systems",
        "Web Application Development",
        "Object-Oriented Programming",
        "Software Engineering"
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
      downloadResume: "Download Resume",
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
      education: "Học vấn",
      contact: "Liên hệ",
      resume: "Tải CV"
    },
    hero: {
      title: "AI Engineer Intern | Lập trình viên Backend & Hệ thống tìm kiếm",
      availabilityLabel: "Đang tìm kiếm cơ hội thực tập về AI, Dữ liệu và Backend",
      heroIntro: "Xin chào, tôi là Luân! Sinh viên ngành Hệ thống Thông tin đam mê truy xuất thông tin, phát triển Backend và ứng dụng AI.",
      viewProjectsBtn: "Xem dự án",
      downloadResumeBtn: "Tải CV",
      githubBtn: "GitHub",
      emailBtn: "Email"
    },
    about: {
      sectionTag: "Giới thiệu",
      title: "Hành trình & Định hướng kỹ thuật",
      whoIAmTitle: "Tôi là ai",
      bio: "Tôi là sinh viên ngành Hệ thống Thông tin tại Trường Đại học Công nghệ Thông tin (ĐHQG-HCM) yêu thích xây dựng phần mềm thực tiễn hướng dữ liệu. Định hướng chính của tôi là phát triển Backend, hệ thống truy xuất thông tin và AI ứng dụng. Tôi thích biến các bài toán phức tạp—như tìm kiếm điều khoản luật lao động bằng ngôn ngữ tự nhiên hay xử lý quy trình thương mại điện tử—thành ứng dụng sạch, có thể tái lập và có API thiết kế chuẩn xác. Tôi rất mong muốn gia nhập đội ngũ thực tập để học hỏi, hợp tác và đóng góp vào sản phẩm thực tế.",
      coreInterestLabel: "Lĩnh vực chính",
      coreInterestValue: "Hệ thống Backend & Tìm kiếm IR",
      mindsetLabel: "Tư duy làm việc",
      mindsetValue: "Thực hành dự án & Tái lập tốt",
      practicalTitle: "Phát triển thực tiễn",
      practicalSubtitle: "Xây dựng phần mềm giải quyết công việc thực tế",
      practicalDesc: "Tôi tập trung vào thiết kế API sạch, cơ sở dữ liệu chuẩn hóa và kiểm thử tin cậy thay vì những phức tạp không cần thiết.",
      academicTitle: "Nền tảng học thuật",
      collaborationTitle: "Học hỏi & Làm việc nhóm",
      collaborationSubtitle: "Sẵn sàng cho vị trí thực tập",
      collaborationDesc: "Luôn sẵn sàng học hỏi từ các kỹ sư giàu kinh nghiệm, tiếp thu phản hồi và đóng góp hiệu quả cho các dự án chung."
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
      items: [
        {
          id: "vietnamese-legal-search",
          name: "Vietnamese Legal Semantic Search Engine",
          description: "Hệ thống truy xuất lai giúp tìm điều khoản Luật Lao động Việt Nam bằng câu hỏi tự nhiên, hỗ trợ cả văn bản không dấu và từ viết tắt.",
          githubUrl: "https://github.com/dustin-dinh/vietnamese-legal-semantic-search",
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
            "Pytest & Ruff",
            "Linux CLI",
            "VS Code & DBeaver",
            "Artifact versioning"
          ]
        }
      ]
    },
    education: {
      sectionTag: "Nền tảng học thuật",
      title: "Học vấn & Bằng cấp",
      institution: "Trường Đại học Công nghệ Thông tin - ĐHQG-HCM",
      degree: "Chương trình Cử nhân ngành Hệ thống Thông tin",
      major: "Hệ thống Thông tin",
      period: "2023–2026",
      englishLevel: "TOEIC 700 / Tương đương B2",
      courseworkTitle: "Môn học tiêu biểu",
      coursework: [
        "Cơ sở dữ liệu",
        "Phát triển ứng dụng Web",
        "Lập trình hướng đối tượng",
        "Công nghệ phần mềm"
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
      downloadResume: "Tải CV",
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
