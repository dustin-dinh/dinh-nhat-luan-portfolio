# CV Profile: Dinh Nhat Luan (Đinh Nhật Luân)

Source data for writing a CV, resume or cover letter. Every fact below comes from the portfolio content (`src/data/portfolio.ts`) or from the project repositories themselves.

**Rules for any agent using this file**

1. Use only facts written here. Do not invent numbers, dates, team sizes, employers, or titles.
2. Keep each metric's context (test-set size, what was measured). A number without its context overstates it.
3. Respect §9 "Do not claim". Ask the owner for anything in §10 "Missing information" instead of guessing.
4. Prefer the ready-made bullets in §5 and §6; they are already checked against the sources.
5. Default CV language: English. Vietnamese names and wording are given where they exist.

---

## 1. Identity and contact

| Field | Value |
|---|---|
| Name | Dinh Nhat Luan (Vietnamese: Đinh Nhật Luân) |
| Location | Ho Chi Minh City, Vietnam |
| Email | nhatluan.dinh.2901@gmail.com |
| Phone / Zalo | 0388 744 779 (from https://zalo.me/0388744779) |
| GitHub | https://github.com/dustin-dinh |
| Portfolio | https://dinh-nhat-luan-portfolio.vercel.app |
| LinkedIn | none yet |
| Facebook | personal account; do **not** put it on a CV |

## 2. Target role and headline

- **Target:** AI Engineer / Fullstack Web Developer, intern or fresher level.
- **Headline (EN):** AI Engineer & Fullstack Web Developer
- **Headline (VI):** Kỹ sư AI & Lập trình viên Fullstack Web
- **Focus areas:** computer vision on CPU-only servers, face recognition, information retrieval / semantic search, business-process automation, fullstack web and mobile.

## 3. Summary (ready to use)

**EN:** Information Systems student at UIT (graduating 2027) working as an AI Engineer & Fullstack Web developer at Vang Trang Khuyet Social Enterprise since 09/2026. I build practical AI and web systems end to end: real-time person detection and face recognition that run on CPU-only servers, hybrid semantic search, and automated finance reporting, with FastAPI, React and PostgreSQL.

**VI:** Sinh viên Hệ thống Thông tin, UIT (tốt nghiệp 2027), hiện là AI Engineer & Fullstack Web tại Doanh nghiệp xã hội Vầng Trăng Khuyết từ 09/2026. Mình xây dựng trọn vẹn các hệ thống AI và web thực tế: phát hiện người và nhận diện gương mặt thời gian thực chạy trên máy chủ chỉ có CPU, tìm kiếm ngữ nghĩa lai, và tự động hoá báo cáo tài chính, với FastAPI, React và PostgreSQL.

## 4. Education

| Field | Value |
|---|---|
| School | University of Information Technology (UIT), Vietnam National University – Ho Chi Minh City (VNU-HCM) |
| Degree | Bachelor of Science, Information Systems |
| Period | 2023 – 2027 (expected graduation 2027) |
| GPA | not provided (see §10) |
| Relevant coursework | Information Retrieval & Semantic Search; Advanced Database Systems; Data Warehousing & Data Mining |

## 5. Work experience

### AI Engineer & Fullstack Web Developer, Vang Trang Khuyet Social Enterprise
*Vietnamese: AI Engineer & Fullstack Web, Doanh nghiệp xã hội (DNXH) Vầng Trăng Khuyết · Ho Chi Minh City · 09/2026 – present*

The three work projects are **Smart VMS** (§6.1), the **Face Recognition Check-in API** (§6.2) and **Finance & Admin Report Automation** (§6.4).

Ready-made bullets:
- Built a self-hosted camera AI system (Smart VMS) that detects, tracks and counts people and recognizes registered faces in real time on a CPU-only server, in a system with 19 connected cameras.
- Fine-tuned a YOLO26n person detector on ~500 on-site images, reaching mAP50 0.926 and detecting 12/15 people on the hardest reference images versus 8/15 for the stock model.
- Optimized a face-recognition check-in API for CPU by switching InsightFace buffalo_l to the lighter buffalo_sc with no accuracy loss on LFW (517/524 identified, 98.7%; 0 false matches in 824 stranger searches) and 55 ms face inference (p50, laptop CPU).
- Built a web app that automates the organization's income & expense and administrative reporting from imported bank statements and ledgers (React, FastAPI, PostgreSQL), replacing a formula-heavy Excel workbook.

## 6. Projects

Order = importance for an AI Engineer CV. Each project lists: context, problem, solution, the owner's contribution, stack, results (with how each number was measured), and ready-made CV bullets.

### 6.1 Smart VMS: Real-time Camera AI
*VI: Smart VMS: Camera AI thời gian thực*

- **Context:** at Vang Trang Khuyet; sole developer (only committer in the repo).
- **Link:** https://github.com/dustin-dinh/CameraAI
- **Problem:** cameras spread across several sites had no central viewing and no analytics. Off-the-shelf detectors missed people lying down, sitting against the light, or partly hidden under ceiling-mounted cameras.
- **Solution:**
  - go2rtc restreams RTSP cameras to the browser over WebRTC/MSE.
  - A Python worker reads a downsampled stream, skips frames with no motion, and runs a YOLO26n person detector through ONNX Runtime on CPU.
  - People are tracked with ByteTrack, and zone and line-crossing rules generate events.
  - A separate thread recognizes registered faces with SCRFD + ArcFace.
  - FastAPI + SQLite stores events and stats, pushed to a React dashboard over SSE.
- **Flow:** IP camera (RTSP) → go2rtc (WebRTC) → YOLO26n (ONNX, CPU) → ByteTrack → SCRFD + ArcFace → FastAPI → React dashboard.
- **Own contribution:** everything:
  - camera streaming and the AI worker
  - data collection, pre-labeling and manual correction
  - fine-tuning (Colab, 100 epochs, imgsz 640)
  - backend, dashboard, and the CPU budget / auto-degrade logic
- **Stack:** Python, FastAPI, YOLO26 (fine-tuned), ONNX Runtime, ByteTrack, InsightFace (SCRFD + ArcFace), go2rtc / WebRTC, React, Vite, Tailwind CSS, SQLite, Docker Compose.
- **Results:**

  | Metric | Value | How it was measured |
  |---|---|---|
  | mAP50 after fine-tuning (75-image val set, self-labeled) | 0.926 | best validation epoch on a held-out split of 75 images (425 train / 75 val, split by time per camera) |
  | People found in the 15 hardest cases | 8 → 12 | stock YOLO26n vs fine-tuned, on the 4 hardest reference images (15 people in total) |
  | Cameras connected | 19 | cameras registered in the deployed system; AI analysis is enabled per camera within the CPU budget (not on all 19) |
  | Model benchmark | 836 labeled people | 8+ detectors compared by recall at precision ≥ 0.85 and latency before choosing |

- **Key decisions:**
  - Measured candidate detectors before choosing; larger models were up to 30× slower for small gains.
  - A CPU budget rule refuses to enable a camera above 80% capacity and lowers FPS automatically under load.
  - Face matching runs in memory with NumPy instead of a vector database.
- **CV bullets:**
  - Built a self-hosted video-analytics system that detects, tracks and counts people and recognizes registered faces in real time on CPU only (YOLO26n + ByteTrack + SCRFD/ArcFace, ONNX Runtime, FastAPI, React).
  - Collected and labeled ~500 on-site frames and fine-tuned YOLO26n (mAP50 0.926), raising detection on the hardest ceiling-camera cases from 8/15 to 12/15 people.
  - Designed a CPU budget and auto-degrade mechanism so AI-enabled cameras share one CPU-only server without overload.

### 6.2 Face Recognition Check-in API
*VI: API Điểm danh bằng nhận diện gương mặt*

- **Context:** at Vang Trang Khuyet; team of 2. A teammate built the first working version; the owner did the optimization and production work listed below.
- **Link:** none public (do not add one).
- **Problem:** check-in had to identify a person from a single face photo and link them to their national ID (CCCD) without manual lookup. The server has no GPU, so recognition had to be fast on CPU alone.
- **Solution:**
  - Replaced InsightFace buffalo_l with the lightweight buffalo_sc pack (SCRFD-500M detector + MobileFaceNet recognizer, files `det_500m.onnx` / `w600k_mbf.onnx`), loading only the detection and recognition modules.
  - Calibrated the score scale and threshold on LFW for both models before switching.
  - Runs on ONNX Runtime CPU with capped threads; input images are downscaled to ≤ 1080 px.
  - 512-d embeddings are matched 1:N by cosine similarity in Qdrant (threshold 0.50).
- **Flow:** check-in photo → FastAPI (API key) → validate & resize → InsightFace buffalo_sc (ONNX, CPU) → Qdrant 1:N cosine → ID + confidence.
- **Own contribution:**
  - CPU optimization of the face model
  - moving vectors to a standalone Qdrant / Qdrant Cloud
  - an S3 storage backend
  - Render deployment
  - the evaluation suite (threshold sweep, Top-1, FAR, FRR, EER, latency percentiles) and a reproducible LFW baseline pinned by dataset and model SHA-256
  - the web console
  - a fix so updates save the new image before replacing the old vector (no data loss)
- **Stack:** Python, FastAPI, InsightFace (buffalo_sc), ONNX Runtime (CPU), Qdrant, S3-compatible storage, Docker.
- **Results:**

  | Metric | Value | How it was measured |
  |---|---|---|
  | Identification rate (TAR) | 98.7% (517/524), same as buffalo_l | LFW: 240 enrolled people, 524 genuine probes, at the calibrated score 70 |
  | False matches | 0 / 824 non-mated searches (Wilson 95% upper bound 0.46%) | same LFW run |
  | Failed face extractions | 0 (buffalo_l: 5) | same dataset |
  | Face inference p50 / p95 | 55 ms / 76 ms | `/bench/identify` n=100, laptop CPU (Ryzen 5 PRO 4650U), Qdrant local; full request p50 60 ms |
  | Automated tests | 108 passed | baseline run 2026-10-01 |
  | API endpoints | 16 | register, batch register, identify, update, delete, health, benchmarks, eval |

- **CV bullets:**
  - Optimized a face-recognition check-in API for CPU-only servers by switching InsightFace buffalo_l → buffalo_sc with identical LFW accuracy (98.7%, 0 false matches in 824 searches) and 55 ms face inference (p50).
  - Built a reproducible evaluation baseline on LFW (dataset and model pinned by SHA-256, Wilson 95% intervals, 108 tests) plus Qdrant 1:N search and S3 image storage.

### 6.3 Vietnamese Legal Semantic Search Engine
*VI: Hệ thống tìm kiếm ngữ nghĩa pháp luật Việt Nam*

- **Context:** solo project.
- **Links:** https://github.com/dustin-dinh/vietnamese-legal-semantic-search · live demo https://legalsearchdemo.vercel.app/
- **Problem:** people search legal provisions with casual Vietnamese, accentless text or abbreviations, so keyword matching returns the wrong articles.
- **Solution:**
  - Normalizes text and removes accents.
  - Combines sparse TF-IDF with Multilingual E5 dense embeddings using Reciprocal Rank Fusion (RRF).
  - Reranks with a Cross-Encoder.
  - Served via FastAPI with a Streamlit UI.
  - The Cross-Encoder is optional on low-RAM hosting; it uses ~2.5 GB RAM.
- **Flow:** question → normalize (underthesea) → TF-IDF + E5 → RRF → Cross-Encoder → law article (FastAPI).
- **Own contribution:** everything: retrieval pipeline, FastAPI service, normalization, offline evaluation (33 self-written queries).
- **Stack:** Python, FastAPI, Streamlit, TF-IDF, Multilingual E5, Cross-Encoder, underthesea, Pytest, Docker.
- **Results:**

  | Metric | Value | How it was measured |
  |---|---|---|
  | Articles indexed | 220 | provisions of the Vietnamese Labor Code |
  | Self-written test queries passed | 33 / 33 | owner-written offline query suite; every query returned the expected article |
  | Response time | < 1 s | per query |

- **CV bullets:**
  - Built a hybrid legal search engine over 220 Vietnamese Labor Code articles, fusing TF-IDF and Multilingual E5 with RRF and reranking with a Cross-Encoder (FastAPI, live demo).
  - Wrote an offline evaluation suite of 33 self-written queries (casual, accentless, abbreviated); all return the expected article with sub-second responses.

### 6.4 Finance & Admin Report Automation
*VI: Tự động hoá Báo cáo Tài chính & Hành chính (repo: BaoCaoQuanTri)*

- **Context:** at Vang Trang Khuyet; developer in a small team. The owner's part covered report design, the data model, and frontend modules.
- **Link:** https://github.com/dustin-dinh/BaoCaoQuanTri
- **Problem:** the organization's income & expense report was built by hand in a multi-sheet Excel workbook full of SUMIFS formulas, and hidden errors (e.g. account codes with stray spaces) silently dropped expenses from totals.
- **Solution:**
  - Imports bank statements and accounting ledgers in 6 steps: choose type, upload, check, preview, write, undo.
  - Stores each import as a batch in PostgreSQL.
  - Aggregates by month, quarter, half-year and fiscal year.
  - Generates each report section as its own module.
  - Exports Excel / PDF in the audited printed template.
- **Flow:** statements & ledgers (Excel) → read & validate → PostgreSQL (by batch) → period roll-up (FastAPI) → reports (React, Excel / PDF).
- **Key decisions:**
  - Money is stored as integer đồng, never float.
  - Accountants' account codes are the keys.
  - Duplicate files are blocked by SHA-256 and duplicate transactions by a composite key.
  - A section with no data shows "no data yet" with a reason instead of 0.
- **Stack:** React 19, TypeScript, Vite, Tailwind CSS, FastAPI, PostgreSQL, ExcelJS.
- **Results:**

  | Metric | Value | How it was measured |
  |---|---|---|
  | Hidden errors found in the legacy workbook | 10 | audit of the old Excel report during data mapping |
  | Report sections automated | 11 + summary | income, expenses, balances, reserves, receivables, payables, loans, project & partner spending, ratios |
  | Import file types supported | 9 | Excel formats |
  | Database tables designed | 19 | ERD |

- **CV bullets:**
  - Automated an organization's income & expense and administrative reporting: imports bank statements and ledgers into PostgreSQL and generates 11 report sections by month, quarter, half-year and fiscal year with Excel / PDF export.
  - Audited the legacy Excel workbook and found 10 hidden formula errors; designed traceable, batch-based imports (SHA-256 duplicate blocking, integer money).

### 6.5 Mobile Social Network App
*VI: Ứng dụng Mạng xã hội trên Android (repo: MobileSocialMedia)*

- **Context:** team of 2; the owner was the mobile engineer and later also built several backend modules.
- **Link:** https://github.com/dustin-dinh/MobileSocialMedia
- **Platform note:** built with React Native (Expo), tested on Android. It is **not** a native Kotlin/Java app.
- **Problem:** a two-person team had to ship a full-featured social network MVP quickly with a clear Mobile/Backend split, while builds were slow and the bundle heavy.
- **Solution:**
  - The Expo app talks only to a NestJS REST API (JWT).
  - Socket.IO carries realtime chat and notifications; Expo push sends device notifications.
  - Media is stored in S3-compatible storage (MinIO).
  - Data is in PostgreSQL via Prisma.
- **Own contribution:**
  - Mobile: all UI, navigation, state, API integration and QA automation.
  - Backend: Reels, S3 storage, direct messages, stories, reactions, private accounts, and the web admin console.
- **Features:**
  - email / Google sign-in, email verification, OTP password reset
  - following feed with likes, comments and replies
  - posts with up to 4 images or video, privacy, repost, save, hashtags and mentions
  - Reels ranked by recency and engagement
  - 24h stories
  - realtime chat with read receipts, message requests and anonymous chats
  - realtime notifications and push
  - follow, private accounts and suggestions
  - search and profiles
  - moderation: block, report, NSFW image blurring with an ONNX model, scam warnings
  - web admin console
- **Stack:** React Native (Expo), TypeScript, NestJS, Prisma, PostgreSQL, Socket.IO, S3 / MinIO, Jest.
- **Results:**

  | Metric | Value | How it was measured |
  |---|---|---|
  | Bundle size | 8.6 MB → 2.4 MB | after fixing barrel icon imports |
  | Metro modules | 4,099 → 1,115 (−72.8%) | same fix |
  | Android export time | 48.7 s → 12.3 s | same fix |
  | Mobile tests | 139 passing | Jest 100 passed (39 live suites skipped in mock mode) + live API suites 20/20, 14/14, 5/5 |
  | Backend smoke tests | 249 / 249 passed | safety 76, social 73, API 72, Reels 28 (shared backend; not only the owner's modules) |
  | Mobile screens / API routes | ~33 / 98 | counted in the code |

- **CV bullets:**
  - Built the React Native (Expo) client of a social network (feed, Reels, 24h stories, realtime chat & notifications) on a NestJS + PostgreSQL backend in a two-person team.
  - Cut the app bundle from 8.6 MB to 2.4 MB and Android export time from 48.7 s to 12.3 s by fixing icon imports (−72.8% Metro modules).
  - Implemented backend modules for Reels, S3 media storage, messaging, stories and an admin console.

### 6.6 Earlier projects (removed from the portfolio; use only if relevant)

These are the only evidence for the Kafka / PySpark / Airflow / Laravel skills in §7. The text comes from the earlier portfolio and has not been re-verified against the repos.

- **Big Data Healthcare Streaming Pipeline:** https://github.com/dustin-dinh/big-data-healthcare-streaming-pipeline
  - A Dockerized local pipeline that replays Fitbit/SEMA telemetry through Kafka.
  - PySpark Structured Streaming processes the data into Medallion layers (Bronze–Silver–Gold) in PostgreSQL, shown on Grafana dashboards.
  - Stack: PySpark, Apache Kafka, Spark Structured Streaming, PostgreSQL, Grafana, Airflow, Docker.
- **Furniture Shop Web Application:** https://github.com/dustin-dinh/furniture-shop-web-application
  - Fullstack e-commerce: product catalog, cart, Stripe checkout, order tracking, admin.
  - Stack: React 19, Laravel 12, MySQL, Sanctum, Stripe, Vite.

## 7. Skills

Grouped for a CV. The evidence column says which project proves each skill; drop any skill whose only evidence the target role doesn't care about.

| Group | Skills | Evidence |
|---|---|---|
| AI & Computer Vision | YOLO (Ultralytics, YOLO26), ONNX Runtime, InsightFace (SCRFD, ArcFace, buffalo_sc), ByteTrack, OpenCV, model fine-tuning & evaluation | 6.1, 6.2 |
| Information Retrieval | hybrid retrieval, semantic search, TF-IDF + dense embeddings (E5), RRF, Cross-Encoder reranking, vector search (Qdrant), offline retrieval evaluation | 6.2, 6.3 |
| Languages | Python, TypeScript, JavaScript, SQL | all |
| Backend | FastAPI, NestJS + Prisma, REST APIs, Socket.IO | 6.1–6.5 |
| Data & Databases | PostgreSQL, SQLite, relational design, pandas, NumPy | 6.1, 6.4, 6.5 |
| Studied (coursework / earlier projects only) | PySpark, Apache Kafka, Apache Airflow, Laravel, MySQL, scikit-learn | 6.6; list under a separate "Familiar with" line, never as core skills |
| Frontend & Mobile | React, Next.js, React Native (Expo), Tailwind CSS, Vite | 6.1, 6.4, 6.5, portfolio |
| DevOps & Tools | Docker / Docker Compose, Git & GitHub, Pytest, Ruff, Jest, Linux CLI, go2rtc / WebRTC, S3 / MinIO | all |

## 8. Short project lines (for a one-page CV)

- **Smart VMS:** real-time person detection, tracking and face recognition on CPU in a 19-camera system; fine-tuned YOLO26n mAP50 0.926.
- **Face Check-in API:** CPU-optimized InsightFace buffalo_sc + Qdrant 1:N search; 98.7% identified on LFW, 55 ms face inference (p50).
- **Legal Semantic Search:** TF-IDF + E5 hybrid with RRF and Cross-Encoder over 220 Labor Code articles; live demo.
- **Finance Report Automation:** bank statements → PostgreSQL → 11 auto-generated report sections with Excel/PDF export.
- **Mobile Social Network:** React Native + NestJS social app; bundle 8.6 → 2.4 MB.

## 9. Do not claim

- Do not call the mobile app a native Android (Kotlin/Java) app.
- Face API: always state LFW numbers with the dataset and sample size (524 genuine / 824 non-mated). Do not write "FAR = 0%" alone, do not present LFW accuracy as accuracy on real employees, and do not claim production latency or RPS (only a laptop benchmark exists). Do not use the old "Top-1 100%" figure (5 probes).
- Do not present 33/33 as an accuracy percentage; it is an owner-written test suite.
- Do not claim the Face Check-in API was a solo project, or link a public repo for it.
- Do not include the organization's financial amounts, account numbers, or any data from its reports.
- Do not invent dates for projects (see §10).
- Do not list Facebook on a CV.
- Do not claim AI runs on all 19 Smart VMS cameras: 19 are connected; AI is enabled per camera within the CPU budget.

## 10. Missing information (ask the owner)

- GPA
- LinkedIn URL
- Start/end month of each project
- English level / certificates (IELTS, TOEIC, …)
- Awards, certifications, extracurriculars
- Whether the earlier projects in §6.6 should appear on the CV
