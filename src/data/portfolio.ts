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

export interface FlowStep {
  label: string;
  tool: string;
}

export interface ProjectContent {
  id: string;
  name: string;
  badge: string;
  problem: string;
  approach: string;
  flow: FlowStep[];
  githubUrl?: string;
  liveUrl?: string;
  features?: string[];
  tags: string[];
  metrics: ProjectMetric[];
  caseStudy: ProjectCaseStudy;
}

export interface SkillCategoryContent {
  title: string;
  context?: string;
  /** Learned in coursework / earlier projects, not proven by a featured project. */
  studied?: boolean;
  skills: string[];
}

export interface EducationInfo {
  school: string;
  degree: string;
  major: string;
  period: string;
  location: string;
  summary: string;
  courseworkLabel: string;
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
    lastUpdated: "Last updated: October 2026",
    navigation: {
      brand: "Dinh Nhat Luan",
      education: "Education",
      projects: "Projects",
      skills: "Skills",
      photography: "Photography",
      contact: "Contact",
    },
    hero: {
      title: "AI Engineer & Fullstack Web Developer",
      availabilityLabel: "AI Engineer at Vang Trang Khuyet Social Enterprise · since 09/2026",
      heroIntro: "I build practical AI and web systems, from real-time camera vision and face recognition to semantic search and business automation.",
      subIntro: "Information Systems student, UIT · Graduating 2027 · Ho Chi Minh City",
      viewProjectsBtn: "View Projects",
      githubBtn: "GitHub",
      emailBtn: "Email",
    },
    photography: {
      sectionTag: "Photography",
      title: "Through My Lens",
      description: "A small corner for the nature photographs I capture in my free time.",
    },
    education: {
      sectionTag: "Education",
      title: "Education & Knowledge",
      info: {
        school: "University of Information Technology (UIT), VNU-HCM",
        degree: "Bachelor of Science",
        major: "Information Systems",
        period: "2023 – 2027",
        location: "Ho Chi Minh City, Vietnam",
        summary: "Specializing in information retrieval systems, advanced database administration, data warehousing, and applied machine learning.",
        courseworkLabel: "Relevant coursework & focus areas",
        coursework: [
          "Information Retrieval & Semantic Search",
          "Advanced Database Systems",
          "Data Warehousing & Data Mining"
        ]
      }
    },
    projects: {
      sectionTag: "Projects",
      title: "Featured Engineering Projects",
      techStack: "Tech stack",
      metricsLabel: "Results",
      problemLabel: "Problem",
      approachLabel: "How I solved it",
      flowLabel: "System flow",
      internalRepo: "Internal repository",
      featuresLabel: "Key features",
      viewGithub: "View GitHub",
      viewDemo: "Live Demo",
      viewCaseStudy: "View Case Study",
      closeCaseStudy: "Close",
      caseStudy: {
        label: "Case study",
        problemGoal: "Problem & goal",
        problem: "Problem",
        goal: "Goal",
        roleUsers: "Role & users",
        role: "My role",
        users: "Who it helps",
        solutionArchitecture: "Solution & architecture",
        solution: "Approach",
        architecture: "System flow",
        dataProcessing: "Data flow",
        challenges: "Challenges & trade-offs",
        constraint: "Constraint",
        decision: "Key decision",
        results: "Results & evaluation",
        evaluation: "How it was evaluated",
        outcome: "Outcome",
        lessons: "Lessons & next steps",
        lessonsLearned: "What I learned",
        nextSteps: "Next steps"
      },
      items: [
        {
          id: "smart-vms-camera-ai",
          name: "Smart VMS: Real-time Camera AI",
          badge: "At Vang Trang Khuyet",
          problem: "Cameras across several sites with no one watching; stock detectors missed people lying down or hidden under ceiling cameras.",
          approach: "Fine-tuned YOLO26n on ~500 site images, ran it on CPU with ONNX, tracked people with ByteTrack and pushed real-time alerts.",
          flow: [
            { label: "IP camera", tool: "RTSP" },
            { label: "Live stream", tool: "go2rtc · WebRTC" },
            { label: "Detect people", tool: "YOLO26n · ONNX" },
            { label: "Track", tool: "ByteTrack" },
            { label: "Recognize faces", tool: "SCRFD + ArcFace" },
            { label: "Alerts & stats", tool: "FastAPI · React" }
          ],
          githubUrl: "https://github.com/dustin-dinh/CameraAI",
          tags: ["YOLO26", "ONNX Runtime", "ByteTrack", "FastAPI", "React"],
          metrics: [
            { label: "mAP50 after fine-tune (75-image val set)", value: "0.926" },
            { label: "People found in 15 hardest cases (stock → tuned)", value: "8 → 12" },
            { label: "Cameras connected", value: "19" }
          ],
          caseStudy: {
            problem: "Cameras spread across several sites had no central viewing and no analytics. Off-the-shelf detectors missed people lying down, sitting against the light, or partly hidden under ceiling-mounted cameras.",
            goal: "Answer “is anyone there, how many, where and since when”, then “who is it” for registered people, on a CPU-only server with a strict resource budget.",
            role: "Sole developer: camera streaming, AI worker, data collection & labeling, model fine-tuning, FastAPI backend and React dashboard.",
            users: "Admins who manage sites, cameras, users, AI zones and face profiles; viewers who watch live streams.",
            solution: "go2rtc restreams RTSP cameras to the browser. A Python worker reads a downsampled stream, gates on motion, runs an ONNX person detector, tracks with ByteTrack and applies zone/line rules, while a separate thread matches faces with SCRFD + ArcFace.",
            architecture: "IP Camera (RTSP) → go2rtc (WebRTC/MSE) → AI Worker (FFmpeg → Motion gate → YOLO26n ONNX → ByteTrack → Zone & line rules · SCRFD + ArcFace) → FastAPI + SQLite → SSE / MJPEG → React Dashboard",
            dataProcess: "Collected ~500 frames from 12 cameras, pre-labeled them with larger detectors and corrected by hand, then split by time per camera (425 train / 75 val) to avoid near-duplicate leakage before fine-tuning YOLO26n.",
            challenges: "CPU-only inference, H.265 streams that Chrome WebRTC cannot decode, bursty frames over the Internet, and ceiling cameras that rarely see frontal faces.",
            decisions: "Benchmarked 8+ detectors by recall at precision ≥ 0.85 before choosing; a CPU budget refuses cameras above 80% capacity and auto-degrades FPS under load; face matching runs in memory with NumPy instead of a vector DB.",
            evaluation: "Compared models on 836 labeled people from real clips (recall, precision, latency) plus a held-out validation split; face enrollment detected faces in 314/315 photos.",
            results: "The fine-tuned nano model found 12/15 people on the hardest reference images versus 8/15 for the stock model, reaching mAP50 0.926 while staying light enough for CPU.",
            lessonsLearned: "Bigger models were up to 30× slower for small gains; a nano model fine-tuned on ~500 site images was the effective fix for unusual camera angles.",
            nextSteps: "Calibrate the face threshold on real camera faces, enable WebRTC for H.264 cameras, and scope viewers to their own sites."
          }
        },
        {
          id: "face-checkin-api",
          name: "Face Recognition Check-in API",
          badge: "At Vang Trang Khuyet · Team of 2",
          problem: "Manual ID check-in is slow, and the check-in server has no GPU, so face recognition had to run fast on CPU alone.",
          approach: "Swapped InsightFace buffalo_l for the lighter buffalo_sc (same accuracy on LFW), calibrated the threshold, and matched faces 1:N in Qdrant.",
          flow: [
            { label: "Check-in photo", tool: "FastAPI" },
            { label: "Validate & resize", tool: "OpenCV" },
            { label: "Face embedding", tool: "buffalo_sc · ONNX" },
            { label: "1:N search", tool: "Qdrant cosine" },
            { label: "Result", tool: "ID + confidence" }
          ],
          tags: ["InsightFace", "ONNX Runtime", "Qdrant", "FastAPI", "Docker"],
          metrics: [
            { label: "Identified on LFW (524 probes), same as buffalo_l", value: "98.7%" },
            { label: "False matches in 824 stranger searches", value: "0" },
            { label: "Face inference p50, laptop CPU", value: "55 ms" }
          ],
          caseStudy: {
            problem: "Check-in needs to identify a person from one face photo and link them to their ID number without manual lookup.",
            goal: "Deliver a complete biometric check-in backend that runs in Docker on ordinary CPU servers.",
            role: "Team of two. I optimized the face model for CPU, moved vectors to Qdrant (standalone / Cloud), added S3 storage, deployment, the evaluation suite and the web console.",
            users: "Operators who register and check in people by ID through the REST API or the web console.",
            solution: "Switched from InsightFace buffalo_l to the lightweight buffalo_sc pack, loading only the detection and recognition modules on ONNX Runtime CPU; 512-d embeddings are matched 1:N by cosine similarity in Qdrant.",
            architecture: "Image upload → FastAPI (API key) → Decode & resize ≤ 1080px → InsightFace buffalo_sc (ONNX, CPU) → 512-d embedding → Qdrant cosine top-1 (≥ 0.50) → ID + confidence",
            dataProcess: "Validates upload size, ID format and exactly one face before inference; images go to local disk or S3, vectors to Qdrant with an ID payload index.",
            challenges: "Slow inference on CPU, network latency to a remote vector DB dominating total time, and images lost on ephemeral cloud disks.",
            decisions: "Lightweight model with only the needed modules, capped ONNX threads and input downscaling; an S3 storage backend; the new image is saved before the old vector is replaced so updates never lose data.",
            evaluation: "Reproducible baseline on LFW (240 enrolled people, 524 genuine probes, 824 non-mated searches), pinned by dataset and model SHA-256, with Wilson 95% confidence intervals; 108 automated tests pass.",
            results: "buffalo_sc matched buffalo_l on LFW: 517/524 genuine probes identified (98.7%) and 0 false matches in 824 non-mated searches (95% upper bound 0.46%), with 0 failed extractions vs 5 for buffalo_l; face inference 55 ms p50 on a laptop CPU.",
            lessonsLearned: "Round trips to a remote vector DB can cost more than the model itself, and small evaluation sets give very wide confidence intervals.",
            nextSteps: "Add liveness / anti-spoofing, calibrate the threshold on a larger Vietnamese dataset, and run multiple workers."
          }
        },
        {
          id: "vietnamese-legal-search",
          name: "Vietnamese Legal Semantic Search Engine",
          badge: "Solo project",
          problem: "People ask legal questions in casual, accentless Vietnamese, and keyword search returns the wrong articles.",
          approach: "Fused TF-IDF and E5 vectors with RRF and reranked with a Cross-Encoder; the free-hosting demo runs without the reranker.",
          flow: [
            { label: "Question", tool: "casual / accentless" },
            { label: "Normalize", tool: "underthesea" },
            { label: "Hybrid search", tool: "TF-IDF + E5" },
            { label: "Rank fusion", tool: "RRF" },
            { label: "Rerank (optional)", tool: "Cross-Encoder" },
            { label: "Law article", tool: "FastAPI" }
          ],
          githubUrl: "https://github.com/dustin-dinh/vietnamese-legal-semantic-search",
          liveUrl: "https://legalsearchdemo.vercel.app/",
          tags: ["FastAPI", "Multilingual E5", "Cross-Encoder", "Streamlit"],
          metrics: [
            { label: "Law articles indexed", value: "220" },
            { label: "Self-written test queries passed", value: "33 / 33" },
            { label: "Response time", value: "< 1 s" }
          ],
          caseStudy: {
            problem: "Users finding legal provisions often search using natural conversational Vietnamese, accentless text, or abbreviations, causing standard keyword matching to return irrelevant articles.",
            goal: "Return the right Labor Code article for casual or accentless questions across all 220 provisions, in under a second.",
            role: "Sole AI & Backend Developer: designed the retrieval pipeline, FastAPI services, text normalization, and offline evaluation suite.",
            users: "HR professionals, employees, and legal researchers looking for quick law provision lookups.",
            solution: "Implemented Reciprocal Rank Fusion (RRF) combining Sparse TF-IDF (for exact legal terms) with Multilingual E5 dense embeddings, followed by a Cross-Encoder reranker.",
            architecture: "FastAPI Backend → Preprocessing Pipeline (Normalization & Accent Removal) → Hybrid Retrieval Engine (TF-IDF + Dense Vector) → Reranking Stage → Streamlit UI / REST API.",
            dataProcess: "Scraped and structured 220 provisions from Vietnamese Labor Law. Tokenized text with underthesea, created chunked indices, and generated normalized embeddings.",
            challenges: "Transformer models consume ~2.5GB RAM during cross-encoding inference, exceeding free hosting tier limits (e.g. Railway 1GB RAM limit).",
            decisions: "Architected a modular fallback mechanism: light TF-IDF + E5 vector search on cloud, with optional local Cross-Encoder reranking for high-resource nodes.",
            evaluation: "Checked against 33 self-written queries (casual, accentless and abbreviated phrasing); all 33 return the expected article.",
            results: "Sub-second responses; the live demo runs TF-IDF + E5 with RRF, and the Cross-Encoder reranker is enabled on machines with enough RAM.",
            lessonsLearned: "Legal search needs exact keyword matching for legal terms and semantic matching for casual phrasing; neither one alone covers both.",
            nextSteps: "Integrate vector database (pgvector) for scaling to thousands of legal documents and implement query expansion via LLMs."
          }
        },
        {
          id: "finance-report-automation",
          name: "Finance & Admin Report Automation",
          badge: "At Vang Trang Khuyet · Team project",
          problem: "Income & expense reports were built by hand in formula-heavy Excel, where hidden errors skewed totals unnoticed.",
          approach: "Imports statements and ledgers in batches into PostgreSQL, then aggregates and exports reports in the printed template.",
          flow: [
            { label: "Statements & ledgers", tool: "Excel" },
            { label: "Read & validate", tool: "Python" },
            { label: "Batch storage", tool: "PostgreSQL" },
            { label: "Period roll-up", tool: "FastAPI" },
            { label: "Reports", tool: "React · Excel / PDF" }
          ],
          githubUrl: "https://github.com/dustin-dinh/BaoCaoQuanTri",
          tags: ["React", "FastAPI", "PostgreSQL", "ExcelJS"],
          metrics: [
            { label: "Hidden errors found in old workbook", value: "10" },
            { label: "Report sections automated", value: "11" },
            { label: "Import file types", value: "9" }
          ],
          caseStudy: {
            problem: "The income & expense report was assembled in a multi-sheet Excel workbook full of SUMIFS formulas, where hidden errors such as codes with stray spaces silently dropped expenses from the totals.",
            goal: "Produce reports that match the audited printed template exactly, by month, quarter, half-year and fiscal year, with every number traceable to the import batch it came from.",
            role: "Developer in a small team: report and data-model design, plus the frontend modules.",
            users: "Accountants who import statements and ledgers, and managers who read the reports.",
            solution: "One module per report section (income, expenses, balances, reserves, receivables, payables, loans, project & partner spending, ratios) plus a summary tab with cross-section balance checks and Excel / PDF export.",
            architecture: "Excel upload → Per-type reader → Validation & preview → PostgreSQL batch write → Monthly aggregates → Section modules → FastAPI → React tabs → Excel / PDF export",
            dataProcess: "Six-step import (choose type, upload, check, preview, write, undo); duplicate files are blocked by SHA-256 and duplicate transactions by a full composite key; periods follow the posting date.",
            challenges: "Different bank statement formats, reporting rather than silently fixing errors found in the legacy workbook, and keeping sensitive financial data masked.",
            decisions: "Money stored as integer đồng (never float), accountants' account codes as keys, and sections that show “no data yet” with a reason instead of a misleading 0.",
            evaluation: "Every section is checked against an answer key built from previously audited reports, plus balance checks such as opening + increase − decrease = closing for each sub-ledger.",
            results: "Income & expense, balance and sub-ledger reports are generated automatically by month, quarter, half-year and fiscal year, with import history, role-based access and Excel / PDF export in the printed template.",
            lessonsLearned: "Auditing the legacy workbook showed how formula errors hide in manual Excel reporting: traceability matters more than speed.",
            nextSteps: "Automate statement fetching on a schedule and alert when a balance chain breaks or a week of data is missing."
          }
        },
        {
          id: "mobile-social-network",
          name: "Mobile Social Network App",
          badge: "Team of 2 · Mobile owner",
          problem: "A two-person team had to ship a full-featured Android social app fast, while builds were slow and the bundle heavy.",
          approach: "React Native app on a NestJS API, Socket.IO for realtime chat & notifications, and import fixes that cut modules by 72%.",
          flow: [
            { label: "Android app", tool: "React Native" },
            { label: "API", tool: "NestJS · JWT" },
            { label: "Realtime", tool: "Socket.IO · Push" },
            { label: "Data", tool: "Prisma · PostgreSQL" },
            { label: "Media", tool: "S3 / MinIO" }
          ],
          githubUrl: "https://github.com/dustin-dinh/MobileSocialMedia",
          features: [
            "Email / Google sign-in, email verification & OTP password reset",
            "Following feed with likes, comments & replies",
            "Posts with up to 4 images or video, privacy, repost, save, hashtags & mentions",
            "Reels: short-video feed ranked by recency & engagement",
            "24h stories with reactions & replies",
            "Realtime chat with read receipts, message requests & anonymous chats",
            "Realtime in-app notifications + push",
            "Follow, private accounts, follow requests & people suggestions",
            "User search & profile editing",
            "Block, report, NSFW image blurring & scam warnings",
            "Web admin console for moderation"
          ],
          tags: ["React Native", "NestJS", "PostgreSQL", "Socket.IO"],
          metrics: [
            { label: "Bundle size", value: "8.6 → 2.4 MB" },
            { label: "Android export time", value: "48.7 → 12.3 s" },
            { label: "Mobile tests passing (Jest + live API)", value: "139" }
          ],
          caseStudy: {
            problem: "A two-person team needed to ship a working mobile social network MVP with a clear split between mobile and backend work.",
            goal: "Deliver auth, profiles, following, posts, feed interactions, search and notifications on Android through a coordinated Mobile + Backend implementation.",
            role: "Mobile engineer: UI, navigation, state, API integration and QA automation; later also built Reels, S3 storage, messaging, stories, reactions, private accounts and the admin console on the backend.",
            users: "Vietnamese-speaking social app users, and admins who moderate reports through the web console.",
            solution: "A feature-based Expo app that talks only to a NestJS REST API; Socket.IO for realtime chat & notifications, Expo push for devices, S3-compatible storage for media.",
            architecture: "Expo RN App → REST /api (JWT) + Socket.IO → NestJS modules → Prisma → PostgreSQL · Media → S3 / MinIO · Push → Expo",
            dataProcess: "Each notification is persisted, emitted to the user's socket room and pushed to their devices; chat images pass an on-server ONNX NSFW model; Reels are ranked by recency, engagement and a follow boost.",
            challenges: "A barrel icon import pulled in 4,099 modules and slowed builds; mobile/backend contract drift; Google sign-in and push not working in Expo Go.",
            decisions: "Reels modeled as video posts to reuse likes, comments and notifications; S3-compatible storage to stay provider-agnostic; moderation runs on the server.",
            evaluation: "Jest suites plus functional, regression and E2E cases on Android, and backend smoke scripts (safety 76/76, social 73/73, API 72/72, Reels 28/28).",
            results: "Fixing the icon imports cut modules by 72.8% (4,099 → 1,115), bundle size from 8.6 MB to 2.4 MB and Android export time from 48.7s to 12.3s.",
            lessonsLearned: "A screen existing doesn't mean it is wired to the API: always verify real responses before relying on a contract.",
            nextSteps: "Add refresh tokens, load-more for notifications and search, media moderation for posts and stories, and verify on iOS."
          }
        }
      ]
    },
    skills: {
      sectionTag: "Technical Skills",
      title: "Technical Skills",
      subtitle: "Technologies practiced through real-world engineering projects and academic coursework.",
      categories: [
        {
          title: "AI & Computer Vision",
          context: "Smart VMS · Face Check-in API",
          skills: ["YOLO (Ultralytics)", "ONNX Runtime", "InsightFace (SCRFD, ArcFace)", "ByteTrack", "OpenCV", "Model fine-tuning & evaluation"]
        },
        {
          title: "Search & Retrieval",
          context: "Legal Search · Face Check-in API",
          skills: ["Hybrid retrieval (TF-IDF + E5)", "RRF rank fusion", "Cross-Encoder reranking", "Qdrant", "Offline retrieval evaluation"]
        },
        {
          title: "Backend & Databases",
          context: "Most featured projects",
          skills: ["Python", "FastAPI", "NestJS & Prisma", "PostgreSQL", "SQLite", "Socket.IO", "REST API design"]
        },
        {
          title: "Frontend & Mobile",
          context: "Dashboards · mobile app · this portfolio",
          skills: ["TypeScript", "React", "Next.js", "React Native (Expo)", "Tailwind CSS"]
        },
        {
          title: "DevOps & Tools",
          context: "Several featured projects",
          skills: ["Docker", "Git & GitHub", "go2rtc / WebRTC", "S3 / MinIO", "Pytest", "Jest", "Linux"]
        },
        {
          title: "Studied, not featured here",
          context: "Coursework and earlier projects",
          studied: true,
          skills: ["PySpark", "Apache Kafka", "Apache Airflow", "Laravel", "MySQL", "scikit-learn"]
        }
      ]
    },
    contact: {
      sectionTag: "Contact",
      title: "Let's Connect & Work Together",
      description: "Open to AI Engineer / Fullstack roles. Email is the fastest way to reach me.",
      viewGithub: "View GitHub",
      visitFacebook: "Visit Facebook",
      chatZalo: "Chat on Zalo",
      emailSubject: "Opportunity for Dinh Nhat Luan",
      facebookAria: "Visit Dinh Nhat Luan on Facebook",
      zaloAria: "Contact Dinh Nhat Luan on Zalo"
    },
    footer: {
      builtWith: "Built with Next.js, TypeScript & Tailwind CSS.",
      backToTop: "Back to top"
    }
  },

  vi: {
    lastUpdated: "Cập nhật lần cuối: Tháng 10/2026",
    navigation: {
      brand: "Đinh Nhật Luân",
      education: "Học vấn",
      projects: "Dự án",
      skills: "Kỹ năng",
      photography: "Nhiếp ảnh",
      contact: "Liên hệ",
    },
    hero: {
      title: "Kỹ sư AI & Lập trình viên Fullstack Web",
      availabilityLabel: "AI Engineer tại DNXH Vầng Trăng Khuyết · từ 09/2026",
      heroIntro: "Mình xây dựng hệ thống AI và web thực tế, từ thị giác máy tính trên camera, nhận diện gương mặt đến tìm kiếm ngữ nghĩa và tự động hoá nghiệp vụ.",
      subIntro: "Sinh viên Hệ thống Thông tin, UIT · Tốt nghiệp 2027 · TP. Hồ Chí Minh",
      viewProjectsBtn: "Xem dự án",
      githubBtn: "GitHub",
      emailBtn: "Email",
    },
    photography: {
      sectionTag: "Nhiếp ảnh",
      title: "Qua ống kính của mình",
      description: "Một góc nhỏ lưu lại những khoảnh khắc thiên nhiên mình bắt gặp ngoài giờ học và làm việc.",
    },
    education: {
      sectionTag: "Học vấn",
      title: "Học vấn & Kiến thức",
      info: {
        school: "Trường Đại học Công nghệ Thông tin (UIT), ĐHQG TP.HCM",
        degree: "Cử nhân",
        major: "Hệ thống Thông tin",
        period: "2023 – 2027",
        location: "TP. Hồ Chí Minh, Việt Nam",
        summary: "Tập trung vào truy xuất thông tin, hệ quản trị cơ sở dữ liệu nâng cao, kho dữ liệu và học máy ứng dụng.",
        courseworkLabel: "Các học phần và hướng tập trung",
        coursework: [
          "Truy xuất thông tin & Tìm kiếm ngữ nghĩa",
          "Cơ sở dữ liệu nâng cao",
          "Kho dữ liệu & Khai thác dữ liệu (Data Mining)"
        ]
      }
    },
    projects: {
      sectionTag: "Dự án",
      title: "Một vài dự án tiêu biểu",
      techStack: "Công nghệ",
      metricsLabel: "Kết quả",
      problemLabel: "Vấn đề",
      approachLabel: "Cách giải quyết",
      flowLabel: "Luồng hệ thống",
      internalRepo: "Repo nội bộ",
      featuresLabel: "Tính năng nổi bật",
      viewGithub: "Xem GitHub",
      viewDemo: "Xem demo",
      viewCaseStudy: "Xem chi tiết",
      closeCaseStudy: "Đóng",
      caseStudy: {
        label: "Câu chuyện dự án",
        problemGoal: "Bài toán & mục tiêu",
        problem: "Vấn đề cần giải quyết",
        goal: "Mục tiêu",
        roleUsers: "Vai trò & người dùng",
        role: "Phần việc mình phụ trách",
        users: "Ai sẽ dùng",
        solutionArchitecture: "Giải pháp & kiến trúc",
        solution: "Cách tiếp cận",
        architecture: "Luồng hệ thống",
        dataProcessing: "Dòng dữ liệu",
        challenges: "Thách thức & đánh đổi",
        constraint: "Ràng buộc",
        decision: "Quyết định kỹ thuật",
        results: "Kết quả & đánh giá",
        evaluation: "Cách đánh giá",
        outcome: "Kết quả đạt được",
        lessons: "Điều rút ra & bước tiếp",
        lessonsLearned: "Bài học",
        nextSteps: "Hướng phát triển"
      },
      items: [
        {
          id: "smart-vms-camera-ai",
          name: "Smart VMS: Camera AI thời gian thực",
          badge: "Tại Vầng Trăng Khuyết",
          problem: "Camera ở nhiều địa điểm nhưng không ai theo dõi kịp; mô hình có sẵn bỏ sót người nằm, ngồi khuất dưới camera trần.",
          approach: "Fine-tune YOLO26n trên ~500 ảnh tại chỗ, chạy ONNX trên CPU, theo dõi bằng ByteTrack và cảnh báo thời gian thực.",
          flow: [
            { label: "Camera IP", tool: "RTSP" },
            { label: "Phát trực tiếp", tool: "go2rtc · WebRTC" },
            { label: "Phát hiện người", tool: "YOLO26n · ONNX" },
            { label: "Theo dõi", tool: "ByteTrack" },
            { label: "Nhận diện mặt", tool: "SCRFD + ArcFace" },
            { label: "Cảnh báo & thống kê", tool: "FastAPI · React" }
          ],
          githubUrl: "https://github.com/dustin-dinh/CameraAI",
          tags: ["YOLO26", "ONNX Runtime", "ByteTrack", "FastAPI", "React"],
          metrics: [
            { label: "mAP50 sau fine-tune (tập val 75 ảnh)", value: "0.926" },
            { label: "Người tìm thấy / 15 ca khó (gốc → fine-tune)", value: "8 → 12" },
            { label: "Camera đã kết nối", value: "19" }
          ],
          caseStudy: {
            problem: "Camera đặt ở nhiều địa điểm nhưng không có nơi xem tập trung và không có phân tích. Các mô hình phát hiện có sẵn bỏ sót người nằm, người ngồi ngược sáng hoặc bị che một phần dưới góc camera trần.",
            goal: "Trả lời được “có ai không, bao nhiêu người, ở đâu, từ lúc nào”, sau đó là “đó là ai” với người đã đăng ký, trên máy chủ chỉ có CPU và giới hạn tài nguyên chặt.",
            role: "Mình làm toàn bộ: luồng camera, AI worker, thu thập & gán nhãn dữ liệu, fine-tune mô hình, backend FastAPI và dashboard React.",
            users: "Quản trị viên quản lý địa điểm, camera, người dùng, vùng AI và hồ sơ gương mặt; người xem chỉ theo dõi camera trực tiếp.",
            solution: "go2rtc phát lại luồng RTSP lên trình duyệt. Worker Python đọc luồng đã giảm độ phân giải, lọc theo chuyển động, chạy mô hình phát hiện người ONNX, theo dõi bằng ByteTrack và áp luật vùng/đường đếm; một luồng riêng so khớp gương mặt bằng SCRFD + ArcFace.",
            architecture: "Camera IP (RTSP) → go2rtc (WebRTC/MSE) → AI Worker (FFmpeg → Lọc chuyển động → YOLO26n ONNX → ByteTrack → Luật vùng & đường đếm · SCRFD + ArcFace) → FastAPI + SQLite → SSE / MJPEG → Dashboard React",
            dataProcess: "Thu ~500 khung hình từ 12 camera, gán nhãn sơ bộ bằng mô hình lớn rồi sửa tay, chia train/val theo thời gian từng camera (425 / 75) để tránh rò rỉ ảnh gần giống nhau trước khi fine-tune YOLO26n.",
            challenges: "Chỉ có CPU để suy luận, luồng H.265 mà WebRTC trên Chrome không giải mã được, khung hình đến không đều qua Internet và camera trần hiếm khi thấy mặt chính diện.",
            decisions: "Đo đạc 8+ mô hình theo recall tại precision ≥ 0.85 trước khi chọn; ngân sách CPU từ chối camera vượt 80% và tự giảm FPS khi quá tải; so khớp gương mặt bằng NumPy trong bộ nhớ thay vì vector DB.",
            evaluation: "So sánh các mô hình trên 836 người đã gán nhãn từ clip thực tế (recall, precision, độ trễ) cùng tập validation riêng; bước đăng ký phát hiện được gương mặt ở 314/315 ảnh.",
            results: "Mô hình nano sau fine-tune tìm được 12/15 người ở các ảnh khó nhất, so với 8/15 của mô hình gốc, đạt mAP50 0.926 mà vẫn đủ nhẹ để chạy trên CPU.",
            lessonsLearned: "Mô hình lớn chậm hơn tới 30 lần nhưng chỉ tốt hơn chút ít; fine-tune mô hình nano trên ~500 ảnh tại chỗ mới là cách hiệu quả cho các góc camera đặc thù.",
            nextSteps: "Hiệu chỉnh ngưỡng nhận diện gương mặt trên ảnh camera thật, bật WebRTC cho camera H.264 và giới hạn người xem theo địa điểm."
          }
        },
        {
          id: "face-checkin-api",
          name: "API Điểm danh bằng nhận diện gương mặt",
          badge: "Tại Vầng Trăng Khuyết · Nhóm 2 người",
          problem: "Điểm danh thủ công theo CCCD chậm, và máy chủ không có GPU nên nhận diện phải chạy nhanh chỉ bằng CPU.",
          approach: "Đổi InsightFace buffalo_l sang buffalo_sc nhẹ hơn (chính xác ngang nhau trên LFW), hiệu chỉnh ngưỡng, tìm khuôn mặt 1:N bằng Qdrant.",
          flow: [
            { label: "Ảnh điểm danh", tool: "FastAPI" },
            { label: "Kiểm tra & thu nhỏ", tool: "OpenCV" },
            { label: "Trích đặc trưng", tool: "buffalo_sc · ONNX" },
            { label: "Tìm 1:N", tool: "Qdrant cosine" },
            { label: "Kết quả", tool: "CCCD + độ tin cậy" }
          ],
          tags: ["InsightFace", "ONNX Runtime", "Qdrant", "FastAPI", "Docker"],
          metrics: [
            { label: "Nhận đúng trên LFW (524 lượt), ngang buffalo_l", value: "98.7%" },
            { label: "Nhận nhầm trong 824 lượt tìm người lạ", value: "0" },
            { label: "Suy luận p50, CPU laptop", value: "55 ms" }
          ],
          caseStudy: {
            problem: "Khi điểm danh cần nhận ra một người từ một ảnh gương mặt và gắn với số CCCD mà không phải tra cứu thủ công.",
            goal: "Xây dựng backend điểm danh sinh trắc học hoàn chỉnh, chạy bằng Docker trên máy chủ CPU thông thường.",
            role: "Nhóm 2 người. Mình tối ưu mô hình gương mặt cho CPU, chuyển vector sang Qdrant (standalone / Cloud), thêm lưu trữ S3, triển khai, bộ đánh giá và giao diện web.",
            users: "Người vận hành đăng ký và điểm danh theo CCCD qua REST API hoặc giao diện web.",
            solution: "Chuyển từ InsightFace buffalo_l sang gói nhẹ buffalo_sc, chỉ nạp module phát hiện và nhận diện trên ONNX Runtime CPU; vector 512 chiều được so khớp 1:N bằng cosine trong Qdrant.",
            architecture: "Tải ảnh lên → FastAPI (API key) → Giải mã & thu nhỏ ≤ 1080px → InsightFace buffalo_sc (ONNX, CPU) → Vector 512 chiều → Qdrant cosine top-1 (≥ 0.50) → CCCD + độ tin cậy",
            dataProcess: "Kiểm tra dung lượng ảnh, định dạng CCCD và đúng một khuôn mặt trước khi suy luận; ảnh lưu ở ổ cục bộ hoặc S3, vector lưu trong Qdrant kèm chỉ mục theo CCCD.",
            challenges: "Suy luận chậm trên CPU, độ trễ mạng tới vector DB từ xa chiếm phần lớn thời gian, và ảnh bị mất trên ổ đĩa tạm của cloud.",
            decisions: "Dùng mô hình nhẹ chỉ với module cần thiết, giới hạn luồng ONNX và thu nhỏ ảnh đầu vào; thêm backend lưu trữ S3; lưu ảnh mới trước khi thay vector cũ để cập nhật không bao giờ mất dữ liệu.",
            evaluation: "Baseline tái lập được trên LFW (240 người đăng ký, 524 lượt thử đúng người, 824 lượt tìm người lạ), cố định bằng SHA-256 của dữ liệu và model, kèm khoảng tin cậy Wilson 95%; 108 test tự động đều đạt.",
            results: "buffalo_sc chính xác ngang buffalo_l trên LFW: nhận đúng 517/524 lượt (98.7%), 0 nhận nhầm trong 824 lượt tìm người lạ (cận trên 95% là 0.46%), không lỗi trích xuất ảnh nào so với 5 của buffalo_l; suy luận 55 ms p50 trên CPU laptop.",
            lessonsLearned: "Độ trễ mạng tới vector DB từ xa có thể tốn hơn cả mô hình, và tập đánh giá nhỏ cho khoảng tin cậy rất rộng.",
            nextSteps: "Thêm chống giả mạo (liveness), hiệu chỉnh ngưỡng trên bộ dữ liệu người Việt lớn hơn và chạy nhiều worker."
          }
        },
        {
          id: "vietnamese-legal-search",
          name: "Tìm kiếm ngữ nghĩa Pháp luật Việt Nam",
          badge: "Dự án cá nhân",
          problem: "Người dùng hỏi luật bằng văn nói, không dấu, viết tắt; tìm theo từ khoá trả về sai điều luật.",
          approach: "Kết hợp TF-IDF và vector E5 bằng RRF, xếp lại bằng Cross-Encoder; bản demo miễn phí chạy không có bước xếp lại.",
          flow: [
            { label: "Câu hỏi", tool: "văn nói / không dấu" },
            { label: "Chuẩn hoá", tool: "underthesea" },
            { label: "Tìm kiếm lai", tool: "TF-IDF + E5" },
            { label: "Gộp thứ hạng", tool: "RRF" },
            { label: "Xếp lại (tuỳ chọn)", tool: "Cross-Encoder" },
            { label: "Điều luật", tool: "FastAPI" }
          ],
          githubUrl: "https://github.com/dustin-dinh/vietnamese-legal-semantic-search",
          liveUrl: "https://legalsearchdemo.vercel.app/",
          tags: ["FastAPI", "Multilingual E5", "Cross-Encoder", "Streamlit"],
          metrics: [
            { label: "Điều luật đã index", value: "220" },
            { label: "Câu hỏi test tự soạn đạt", value: "33 / 33" },
            { label: "Thời gian phản hồi", value: "< 1 s" }
          ],
          caseStudy: {
            problem: "Người dùng tìm kiếm điều luật thường nhập câu hỏi tự nhiên bằng tiếng Việt văn nói, văn bản không dấu hoặc viết tắt, khiến thuật toán khớp từ khóa truyền thống trả về kết quả không chính xác.",
            goal: "Trả về đúng điều luật cho câu hỏi văn nói hoặc không dấu trên toàn bộ 220 điều khoản Luật Lao động, trong dưới 1 giây.",
            role: "Mình phụ trách toàn bộ phần AI và Backend: thiết kế pipeline truy xuất, dịch vụ FastAPI, chuẩn hóa văn bản và bộ đánh giá offline.",
            users: "Chuyên viên HR, người lao động và người nghiên cứu pháp lý cần tra cứu nhanh điều luật.",
            solution: "Áp dụng thuật toán dung hợp Reciprocal Rank Fusion (RRF) kết hợp TF-IDF (khớp từ khóa pháp lý chính xác) và Vector embedding Multilingual E5, sau đó tái sắp xếp thứ hạng bằng mô hình Cross-Encoder.",
            architecture: "FastAPI Backend → Pipeline Tiền xử lý (Chuẩn hóa & Bỏ dấu) → Động cơ Truy xuất lai (TF-IDF + Dense Vector) → Tái xếp hạng (Cross-Encoder) → Giao diện Streamlit / REST API.",
            dataProcess: "Thu thập và cấu trúc 220 điều luật từ Bộ luật Lao động. Tách từ bằng underthesea, tạo chỉ mục vector/sparse và chuẩn hóa dữ liệu.",
            challenges: "Mô hình Transformer tiêu tốn ~2.5GB RAM trong quá trình Cross-Encoder inference, vượt quá giới hạn tài nguyên các nền tảng cloud miễn phí (như Railway 1GB RAM).",
            decisions: "Thiết kế cơ chế fallback mô-đun: chạy TF-IDF + E5 vector search nhẹ trên cloud, cho phép bật local Cross-Encoder reranking khi có tài nguyên.",
            evaluation: "Kiểm tra bằng 33 câu hỏi tự soạn (văn nói, không dấu, viết tắt); cả 33 đều trả về đúng điều luật.",
            results: "Phản hồi dưới 1 giây; bản demo chạy TF-IDF + E5 với RRF, còn Cross-Encoder được bật trên máy đủ RAM.",
            lessonsLearned: "Tìm luật cần cả khớp từ khoá chính xác cho thuật ngữ pháp lý lẫn khớp ngữ nghĩa cho câu hỏi văn nói; một cách đơn lẻ không bao được cả hai.",
            nextSteps: "Tích hợp CSDL vector (pgvector) để mở rộng quy mô hàng nghìn tài liệu pháp lý và áp dụng LLM cho mở rộng truy vấn (Query Expansion)."
          }
        },
        {
          id: "finance-report-automation",
          name: "Tự động hoá Báo cáo Tài chính & Hành chính",
          badge: "Tại Vầng Trăng Khuyết · Làm theo nhóm",
          problem: "Báo cáo thu chi lập tay trên Excel đầy công thức; lỗi ẩn làm sai tổng mà không ai phát hiện.",
          approach: "Nhập sao kê và sổ sách theo lô vào PostgreSQL, tự tổng hợp và xuất báo cáo đúng mẫu in.",
          flow: [
            { label: "Sao kê & sổ sách", tool: "Excel" },
            { label: "Đọc & kiểm tra", tool: "Python" },
            { label: "Lưu theo lô", tool: "PostgreSQL" },
            { label: "Tổng hợp theo kỳ", tool: "FastAPI" },
            { label: "Báo cáo", tool: "React · Excel / PDF" }
          ],
          githubUrl: "https://github.com/dustin-dinh/BaoCaoQuanTri",
          tags: ["React", "FastAPI", "PostgreSQL", "ExcelJS"],
          metrics: [
            { label: "Lỗi ẩn phát hiện ở file cũ", value: "10" },
            { label: "Mục báo cáo tự động", value: "11" },
            { label: "Loại file nhập", value: "9" }
          ],
          caseStudy: {
            problem: "Báo cáo thu chi được lập trong workbook Excel nhiều sheet với hàng loạt công thức SUMIFS; lỗi ẩn như mã khoản mục thừa khoảng trắng làm rơi mất khoản chi khỏi tổng mà không ai hay.",
            goal: "Xuất báo cáo khớp đúng mẫu in đã kiểm toán theo tháng, quý, nửa năm và năm tài chính, mỗi con số đều truy được về lô nhập dữ liệu gốc.",
            role: "Lập trình viên trong nhóm nhỏ: thiết kế báo cáo, mô hình dữ liệu và các module frontend.",
            users: "Kế toán nhập sao kê, sổ sách và người quản lý đọc báo cáo.",
            solution: "Mỗi mục báo cáo là một module (thu, chi, số dư, dự phòng, phải thu, phải trả, vay mượn, chi theo dự án & đối tác, chỉ số) cùng tab tổng hợp đối chiếu cân bằng giữa các mục, xuất Excel / PDF.",
            architecture: "Tải Excel → Bộ đọc theo loại file → Kiểm tra & xem trước → Ghi lô vào PostgreSQL → Tổng hợp theo tháng → Module từng mục → FastAPI → Tab React → Xuất Excel / PDF",
            dataProcess: "Nhập 6 bước (chọn loại, tải lên, kiểm tra, xem trước, ghi, hoàn tác); chặn file trùng bằng SHA-256 và giao dịch trùng bằng khoá tổng hợp; kỳ báo cáo tính theo ngày hạch toán.",
            challenges: "Định dạng sao kê khác nhau giữa các ngân hàng, phải báo lỗi chứ không âm thầm sửa lỗi của workbook cũ, và che dữ liệu tài chính nhạy cảm.",
            decisions: "Tiền lưu dạng số nguyên đồng (không dùng float), dùng mã khoản mục của kế toán làm khoá, và mục chưa có dữ liệu hiển thị “chưa có” kèm lý do thay vì số 0 gây hiểu nhầm.",
            evaluation: "Đối chiếu từng mục với đáp án lấy từ các báo cáo đã kiểm toán, kèm kiểm tra cân đối đầu kỳ + tăng − giảm = cuối kỳ cho từng sổ chi tiết.",
            results: "Báo cáo thu chi, số dư và sổ chi tiết được tạo tự động theo tháng, quý, nửa năm và năm tài chính, kèm lịch sử nhập, phân quyền và xuất Excel / PDF đúng mẫu in.",
            lessonsLearned: "Rà soát workbook cũ cho thấy lỗi công thức dễ ẩn trong báo cáo Excel thủ công: khả năng truy vết quan trọng hơn tốc độ.",
            nextSteps: "Tự động lấy sao kê theo lịch và cảnh báo khi chuỗi số dư bị đứt hoặc thiếu dữ liệu một tuần."
          }
        },
        {
          id: "mobile-social-network",
          name: "Ứng dụng Mạng xã hội trên Android",
          badge: "Nhóm 2 người · Phụ trách Mobile",
          problem: "Nhóm 2 người cần ra mắt mạng xã hội Android đủ tính năng trong thời gian ngắn, trong khi build chậm và bundle nặng.",
          approach: "App React Native gọi API NestJS, Socket.IO cho chat & thông báo thời gian thực, sửa cách import giảm 72% module.",
          flow: [
            { label: "App Android", tool: "React Native" },
            { label: "API", tool: "NestJS · JWT" },
            { label: "Thời gian thực", tool: "Socket.IO · Push" },
            { label: "Dữ liệu", tool: "Prisma · PostgreSQL" },
            { label: "Media", tool: "S3 / MinIO" }
          ],
          githubUrl: "https://github.com/dustin-dinh/MobileSocialMedia",
          features: [
            "Đăng nhập email / Google, xác thực email & đặt lại mật khẩu bằng OTP",
            "Bảng tin theo dõi với thích, bình luận & trả lời",
            "Bài viết tối đa 4 ảnh hoặc video, quyền riêng tư, chia sẻ lại, lưu, hashtag & nhắc tên",
            "Reels: video ngắn xếp hạng theo độ mới & tương tác",
            "Story 24h với cảm xúc & trả lời",
            "Chat thời gian thực có trạng thái đã xem, tin nhắn chờ & chat ẩn danh",
            "Thông báo trong app thời gian thực + push",
            "Theo dõi, tài khoản riêng tư, yêu cầu theo dõi & gợi ý kết bạn",
            "Tìm kiếm người dùng & chỉnh sửa hồ sơ",
            "Chặn, báo cáo, làm mờ ảnh nhạy cảm & cảnh báo lừa đảo",
            "Trang web quản trị để kiểm duyệt nội dung"
          ],
          tags: ["React Native", "NestJS", "PostgreSQL", "Socket.IO"],
          metrics: [
            { label: "Dung lượng bundle", value: "8.6 → 2.4 MB" },
            { label: "Thời gian export Android", value: "48.7 → 12.3 s" },
            { label: "Test mobile đạt (Jest + API thật)", value: "139" }
          ],
          caseStudy: {
            problem: "Nhóm 2 người cần ra mắt MVP mạng xã hội di động chạy được, với phần Mobile và Backend tách bạch rõ ràng.",
            goal: "Hoàn thiện đăng nhập, hồ sơ, theo dõi, bài viết, tương tác bảng tin, tìm kiếm và thông báo trên Android qua phối hợp Mobile + Backend.",
            role: "Kỹ sư Mobile: giao diện, điều hướng, state, tích hợp API và tự động hoá kiểm thử; sau đó làm thêm Reels, lưu trữ S3, nhắn tin, story, reaction, tài khoản riêng tư và trang quản trị ở backend.",
            users: "Người dùng mạng xã hội tiếng Việt và quản trị viên xử lý báo cáo vi phạm qua trang web quản trị.",
            solution: "App Expo tổ chức theo tính năng, chỉ giao tiếp qua REST API NestJS; Socket.IO cho chat & thông báo thời gian thực, Expo push cho thiết bị, lưu media trên S3.",
            architecture: "App Expo RN → REST /api (JWT) + Socket.IO → Module NestJS → Prisma → PostgreSQL · Media → S3 / MinIO · Push → Expo",
            dataProcess: "Mỗi thông báo được lưu, phát tới phòng socket của người dùng và đẩy tới thiết bị; ảnh trong chat qua mô hình NSFW ONNX trên server; Reels xếp hạng theo độ mới, tương tác và người đang theo dõi.",
            challenges: "Import icon qua barrel file kéo theo 4,099 module làm build chậm; hợp đồng API giữa mobile và backend lệch nhau; đăng nhập Google và push không chạy trên Expo Go.",
            decisions: "Reels là bài viết dạng video để tái sử dụng like, bình luận và thông báo; lưu trữ chuẩn S3 để dễ đổi nhà cung cấp; kiểm duyệt chạy phía server.",
            evaluation: "Bộ test Jest cùng các ca kiểm thử chức năng, hồi quy và E2E trên Android; script smoke test backend (safety 76/76, social 73/73, API 72/72, Reels 28/28).",
            results: "Sửa cách import icon giảm 72.8% số module (4,099 → 1,115), bundle từ 8.6 MB còn 2.4 MB và thời gian export Android từ 48.7s còn 12.3s.",
            lessonsLearned: "Có màn hình chưa chắc đã nối API: luôn kiểm tra response thật trước khi dựa vào hợp đồng API.",
            nextSteps: "Thêm refresh token, tải thêm cho thông báo và tìm kiếm, kiểm duyệt media cho bài viết và story, và kiểm thử trên iOS."
          }
        }
      ]
    },
    skills: {
      sectionTag: "Kỹ năng",
      title: "Kỹ năng kỹ thuật",
      subtitle: "Những công nghệ mình đã dùng trong dự án thực tế và quá trình học.",
      categories: [
        {
          title: "AI & Thị giác máy tính",
          context: "Smart VMS · API Điểm danh",
          skills: ["YOLO (Ultralytics)", "ONNX Runtime", "InsightFace (SCRFD, ArcFace)", "ByteTrack", "OpenCV", "Fine-tune & đánh giá mô hình"]
        },
        {
          title: "Tìm kiếm & Truy xuất",
          context: "Tìm kiếm Pháp luật · API Điểm danh",
          skills: ["Tìm kiếm lai (TF-IDF + E5)", "Gộp thứ hạng RRF", "Xếp lại bằng Cross-Encoder", "Qdrant", "Bộ đánh giá truy xuất offline"]
        },
        {
          title: "Backend & Cơ sở dữ liệu",
          context: "Hầu hết dự án ở trên",
          skills: ["Python", "FastAPI", "NestJS & Prisma", "PostgreSQL", "SQLite", "Socket.IO", "Thiết kế REST API"]
        },
        {
          title: "Frontend & Mobile",
          context: "Dashboard · app di động · portfolio này",
          skills: ["TypeScript", "React", "Next.js", "React Native (Expo)", "Tailwind CSS"]
        },
        {
          title: "DevOps & Công cụ",
          context: "Nhiều dự án ở trên",
          skills: ["Docker", "Git & GitHub", "go2rtc / WebRTC", "S3 / MinIO", "Pytest", "Jest", "Linux"]
        },
        {
          title: "Đã học, chưa có dự án ở đây",
          context: "Môn học và dự án cũ",
          studied: true,
          skills: ["PySpark", "Apache Kafka", "Apache Airflow", "Laravel", "MySQL", "scikit-learn"]
        }
      ]
    },
    contact: {
      sectionTag: "Liên hệ",
      title: "Kết nối với mình",
      description: "Mình sẵn sàng cho các vị trí AI Engineer / Fullstack. Email là cách nhanh nhất để liên hệ.",
      viewGithub: "Xem GitHub",
      visitFacebook: "Xem Facebook",
      chatZalo: "Nhắn tin qua Zalo",
      emailSubject: "Cơ hội hợp tác với Đinh Nhật Luân",
      facebookAria: "Ghé thăm Facebook của Đinh Nhật Luân",
      zaloAria: "Nhắn tin qua Zalo với Đinh Nhật Luân"
    },
    footer: {
      builtWith: "Xây dựng bằng Next.js, TypeScript & Tailwind CSS.",
      backToTop: "Về đầu trang"
    }
  }
};
