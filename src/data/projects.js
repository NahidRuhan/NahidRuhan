export const PROJECTS = [
  {
    id: "type-code",
    name: "Type Code",
    tagline: "Type-Along Coding Education Platform",
    description:
      "A SaaS coding education platform where students learn by typing real code line-by-line against a live compiler with instant keystroke feedback. Covers C, C++, Python, Java, and OOP across 432+ chapters. Includes a Practice IDE powered by CodeMirror, viva-recap quizzes for exam prep, teacher-managed rooms with live-proctored coding contests featuring tab-switch anti-cheat via Supabase Realtime, an achievements system, and dedicated admin and teacher panels. Monetized through SSLCommerz-powered subscription plans with a subscription-based pricing model.",
    stack: ["Next.js", "React", "Supabase", "PostgreSQL", "CodeMirror", "Tailwind CSS"],
    live: "https://type-code-nine.vercel.app",
    github: null,
    highlight: "Expected Launch: November 2026",
    year: "2025",
    type: "ONGOING",
    image: "/typecode.png",
    challenges: "Implementing a real-time code execution pipeline across multiple languages (C, C++, Python, Java) while maintaining security and reliability was the core challenge. Building a robust Wandbox fallback system and integrating SSLCommerz for payments in a Next.js App Router architecture with Supabase RLS required careful architectural planning.",
    futurePlans: "Launch with a custom domain and flip SSLCommerz to live mode for real payments. Add analytics, an onboarding flow, and an automated test suite. Build a mobile-friendly code editor experience for on-the-go learning."
  },
  {
    id: "elarose",
    name: "ElaRose",
    tagline: "Clothing Brand E-commerce Platform",
    description:
      "Full-stack commercial platform that boosted brand sales by 30% and drives ~BDT 50,000 in monthly revenue through an optimized catalog and seamless COD flow.",
    stack: ["Next.js", "Node.js", "MongoDB", "Tailwind", "Firebase", "Cloudinary"],
    live: "https://ela-rose-fornt-end-production.vercel.app/",
    github: null,
    highlight: "+30% sales",
    year: "2024",
    type: "FULL STACK",
    image: "/elarose.png",
    challenges: "Handling real-time inventory updates during flash sales required a robust transactional approach to prevent overselling. Additionally, optimizing the Cash-on-Delivery (COD) flow to reduce drop-offs involved extensive UX testing and iterations.",
    futurePlans: "Implement an AI-powered product recommendation engine based on user browsing history, and integrate an automated SMS gateway for real-time order tracking updates."
  },
  {
    id: "basha-khuji",
    name: "Basha Khuji",
    tagline: "Property Rental Management Platform",
    description: "A full-stack property rental platform supporting 3 isolated user roles (tenants, landlords, admins). Features end-to-end lease payments via Stripe and a highly responsive, debounced search engine using URL-driven state management.",
    stack: ["Next.js", "TypeScript", "Shadcn", "Zod", "Zustand", "Node.js", "Prisma", "PostgreSQL", "Stripe"],
    live: "https://basha-khuji.vercel.app",
    github: "https://github.com/NahidRuhan/Basha-Khuji-frontend",
    highlight: "Full-Stack System",
    year: "2026",
    type: "FULL STACK",
    image: "/basha-khuji.png",
    challenges: "Building a complex booking lifecycle with role-specific approvals was technically demanding. Additionally, syncing React state with Next.js URL parameters for the multi-parameter search engine while implementing debouncing required meticulous architectural planning.",
    futurePlans: "Integrate real-time WebSockets for seamless messaging and notifications between tenants and landlords, and implement an automated AI-driven property valuation tool."
  },
  {
    id: "aeronyx-aviation",
    name: "Aeronyx Aviation Limited",
    tagline: "Premium Aviation & Flight Services Platform",
    description:
      "A modern, high-performance platform for private charter bookings, airport services, and flight management with a focus on luxury UI/UX.",
    stack: ["Next.js", "React", "Tailwind CSS", "Neon PostgreSQL"],
    live: "https://aeronyx-aviation-limited.vercel.app/",
    github: null,
    highlight: "Aviation",
    year: "2024",
    type: "FULL STACK",
    image: "/aeronyx.png",
    challenges: "Building an immersive UI with complex video and image assets required aggressive optimization for fast page loads. Implementing a flexible layout for various flight services was a key focus.",
    futurePlans: "Integrate a real-time flight tracking API and an automated dynamic cost estimation engine for private charters."
  },
  {
    id: "spread-fast",
    name: "Spread Fast",
    tagline: "Courier Delivery & Management System",
    description:
      "Serverless logistics platform with smart rider dispatching, real-time tracking, RBAC via Firebase Admin SDK, and Stripe checkout with optimistic UI.",
    stack: ["React", "Express", "MongoDB", "Stripe", "TanStack Query", "Firebase"],
    live: "https://spread-fast.web.app/",
    github: "https://github.com/NahidRuhan/Spread-Fast-Client",
    highlight: "Real-time",
    year: "2023",
    type: "FULL STACK",
    image: "/spreadfast.png",
    challenges: "Building a reliable real-time tracking system for dispatchers and customers was complex due to WebSocket connection drops. Managing Role-Based Access Control (RBAC) securely across a serverless architecture also required careful architectural planning.",
    futurePlans: "Develop a native mobile application using React Native for riders to manage deliveries on the go, and introduce route optimization algorithms to minimize delivery times."
  },
  {
    id: "graduate-consultancy",
    name: "Graduate Consultancy",
    tagline: "Digital Front Door for Consultancy Firm",
    description:
      "A modern, high-performance website serving as the digital front door for the firm. Features blazing fast SSR/SSG, SEO optimization, and lead-generating contact forms.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "React"],
    live: "https://next-graduate-consultancy.vercel.app/",
    github: "https://github.com/NahidRuhan/next-graduate-consultancy",
    highlight: "SEO Optimized",
    year: "2023",
    type: "FRONTEND",
    image: "/graduate-consultancy.png",
    challenges: "Achieving a perfect 100 Lighthouse score for SEO and Performance required aggressive asset optimization, careful font loading strategies, and minimizing client-side JavaScript payloads.",
    futurePlans: "Integrate a headless CMS (like Sanity or Contentful) to allow the consultancy team to easily publish blog posts and case studies without developer intervention."
  },
  {
    id: "blog-api",
    name: "Blog API",
    tagline: "Modular Blog Backend with Subscriptions",
    description:
      "A comprehensive RESTful API for a blog platform featuring user authentication, advanced post filtering, comment moderation, RBAC, and Stripe integration for premium subscriptions.",
    stack: ["TypeScript", "Node.js", "Express", "PostgreSQL", "Prisma", "JWT", "Stripe"],
    live: "https://blog-api-plum-nine.vercel.app",
    github: "https://github.com/NahidRuhan/blog-api",
    highlight: "Stripe Integration",
    year: "2024",
    type: "BACKEND",
    image: "/blog.png",
    challenges: "Implementing a secure JWT-based authentication system with HTTP-only cookies and integrating Stripe webhooks for managing premium subscriptions required careful architectural planning.",
    futurePlans: "Build a modern frontend client (Next.js) to consume this API, and implement real-time notifications for post comments using WebSockets."
  },
  {
    id: "karaoke-maker",
    name: "Ruhan's Karaoke Maker",
    tagline: "AI-Powered Audio Stem Separator",
    description:
      "Full-stack web application that utilizes Facebook's Demucs AI model to isolate vocals, drums, and bass from uploaded songs with a synchronized multi-track playback UI.",
    stack: ["React", "Node.js", "Python", "PyTorch", "FFmpeg", "Tailwind CSS"],
    live: null,
    github: "https://github.com/NahidRuhan/Ruhans-Karaoke-Maker",
    highlight: "Demucs AI",
    year: "2022",
    type: "AI/ML",
    image: "/karaoke.png",
    challenges: "Bridging the gap between a Node.js server and a Python-based PyTorch machine learning model was tricky. Handling large audio file uploads and processing them asynchronously without timing out the client requests required implementing a robust background job queue.",
    futurePlans: "Deploy the AI processing backend to a scalable GPU cloud instance (like AWS EC2 or RunPod) to drastically reduce processing times, and add support for exporting individual stems."
  },
  {
    id: "recipe-manager",
    name: "Recipe Manager",
    tagline: "Recipe Sharing & Social Platform",
    description:
      "A full-stack recipe management application featuring user authentication, recipe saving, and a social system allowing users to follow others for culinary inspiration.",
    stack: ["PHP", "MySQL", "HTML", "CSS"],
    live: "https://recipemanager.infinityfreeapp.com/",
    github: "https://github.com/NahidRuhan/recipe-save-with-php-sql",
    highlight: "Social Features",
    year: "2022",
    type: "FULL STACK",
    image: "/recipe.png",
    challenges: "Building a custom MVC architecture from scratch in PHP without using modern frameworks was a great learning experience but presented challenges in routing and state management across sessions.",
    futurePlans: "Rewrite the entire application using a modern tech stack (Next.js + Prisma + PostgreSQL) to improve performance, developer experience, and code maintainability."
  },
  {
    id: "issue-tracker-api",
    name: "Issue Tracker API",
    tagline: "REST API for Tracking Git Issues",
    description:
      "Strongly-typed REST API with PostgreSQL, JWT auth, RBAC, dynamic query filtering and a centralized error-handling architecture.",
    stack: ["TypeScript", "Node.js", "Express", "PostgreSQL", "JWT"],
    live: "https://issue-tracking-api.vercel.app/",
    github: "https://github.com/NahidRuhan/Issue-tracker-API",
    highlight: "Typed API",
    year: "2023",
    type: "BACKEND",
    image: "/issue.png",
    challenges: "Designing a robust and scalable database schema for issues, comments, and role-based permissions was challenging. Implementing complex dynamic query filters (e.g., filtering by status, assignee, and tags simultaneously) required writing efficient SQL queries.",
    futurePlans: "Build a modern frontend client (React/Next.js) to consume this API, and implement webhooks to integrate seamlessly with GitHub repositories for automated issue syncing."
  }
];