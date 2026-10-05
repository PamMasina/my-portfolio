const PORTFOLIO = {
  profile: {
    name: "Andile Pamela Masina",
    shortName: "APM",
    role: "Data Analytics Intern",
    tagline: "Final year ICT student at CPUT, currently interning with the Data Academy at Capaciti and turning numbers into answers.",
    availability: "Seeking graduate roles",
    email: "masinaa55@gmail.com",
    location: "South Africa",
    resumeUrl: "Andile-Masina-Resume.pdf",
    resumeLabel: "Download CV"
  },

  about: [
    "I'm Andile Pamela Masina, a final year Diploma student at the Cape Peninsula University of Technology. I study Information and Communication Technology: Application Development, with Python and Data Analytics as my electives. Data is where my real interest sits.",
    "I want to work in data. Whether that turns out to be a data analyst, a business analyst, or a data specialist, I want to be the person who takes a messy dataset and turns it into something people can actually act on. I enjoy all of it, the cleaning, the modelling, and the moment a chart finally tells you something.",
    "Alongside my studies I'm doing an internship as a Data Analytics Intern with the Data Academy at Capaciti. The work covers the whole arc: cleaning and preparing data, querying it in SQL, analysing it in Python and Excel, building the dashboards, and then presenting what I found to people who aren't technical. It's the job I want to grow into, and I'm getting a feel for it every day.",
    "The work I'm proudest of so far straddles both sides of what I love: HandyHub, a cross platform neighbourhood services marketplace I built on Expo and Supabase, and a set of Power BI dashboards covering catalogue, e commerce and supermarket sales data.",
    "Everything I know, I've learned by building things. This site is part of that, somewhere to keep track of what I've built and how far I've come."
  ],

  facts: [
    { label: "Institution", value: "Cape Peninsula University of Technology" },
    { label: "Qualification", value: "Diploma in ICT: Application Development" },
    { label: "Year of study", value: "Final year" },
    { label: "Electives", value: "Python, Data Analytics" },
    { label: "Current internship", value: "Data Analytics Intern, Data Academy at Capaciti" },
    { label: "Career direction", value: "Data Analyst, Business Analyst or Data Specialist" }
  ],

  socials: [
    { label: "GitHub", url: "https://github.com/PamMasina", icon: "github" },
    { label: "LinkedIn", url: "https://www.linkedin.com/in/andile-masina-a099ba220/", icon: "linkedin" },
    { label: "Email", url: "mailto:masinaa55@gmail.com", icon: "mail" }
  ],

  skills: [
    {
      category: "Analytics",
      items: ["Power BI", "DAX", "Data Modelling", "Excel", "Data Cleaning"]
    },
    {
      category: "Frontend",
      items: ["React", "React Native", "Expo", "Angular", "Tailwind CSS"]
    },
    {
      category: "Backend & Data",
      items: ["Python", "SQL", "PostgreSQL", "Supabase", "REST APIs", "Node.js"]
    },
    {
      category: "Languages",
      items: ["Python", "JavaScript", "TypeScript", "Java", "HTML", "CSS"]
    },
    {
      category: "Tools",
      items: ["Git", "GitHub", "Postman", "VS Code", "Vercel", "Render"]
    }
  ],

  projects: [
    {
      title: "HandyHub",
      description: "A neighbourhood services marketplace connecting local clients with skilled workers such as plumbers, cleaners and electricians. Built as one cross platform app for Android, iOS and web, with Supabase handling auth, a Postgres database behind row level security, and realtime chat between clients and workers.",
      image: "",
      tech: ["Expo", "React Native", "TypeScript", "Supabase", "NativeWind"],
      liveUrl: "https://handyhub-mobile.vercel.app",
      repoUrl: "https://github.com/PamMasina/handyhub-mobile",
      featured: true
    },
    {
      title: "Netflix Content Analysis Dashboard",
      description: "An interactive Power BI dashboard exploring how Netflix's content strategy has evolved, built from a dataset of around 8,800 titles. It surfaces the shift toward episodic content after 2015, and lets you slice the catalogue by genre, country, rating and release year.",
      image: "https://raw.githubusercontent.com/PamMasina/netflix-content-analysis-dashboard/main/dashboard_preview.png",
      tech: ["Power BI", "DAX", "Data Modelling"],
      liveUrl: "",
      repoUrl: "https://github.com/PamMasina/netflix-content-analysis-dashboard",
      featured: true
    },
    {
      title: "Olist E-commerce Analytics",
      description: "An interactive Power BI dashboard analysing Olist's e commerce sales performance and delivery metrics, covering revenue, order volumes, and where the fulfilment process slows down between order and delivery.",
      image: "https://raw.githubusercontent.com/PamMasina/Olist-ecommerce-analytics/main/Dashboard-preview.png",
      tech: ["Power BI", "DAX", "Data Modelling"],
      liveUrl: "",
      repoUrl: "https://github.com/PamMasina/Olist-ecommerce-analytics",
      featured: true
    },
    {
      title: "Supermarket Sales Analysis",
      description: "An end to end analysis of supermarket sales data: cleaning the raw dataset in Excel, then modelling it in Power BI with a dashboard that filters by city, product category and time period. Food and Beverages turned out to be the biggest revenue driver.",
      image: "",
      tech: ["Power BI", "Excel", "Data Cleaning"],
      liveUrl: "",
      repoUrl: "https://github.com/PamMasina/Supermarket-Sales-Analysis",
      featured: false
    },
    {
      title: "Mzansi Travel AI",
      description: "An AI travel assistant for South Africa. Visitors ask a chatbot in plain language about destinations, food, transport, safety and trip planning, and get answers grounded in a curated knowledge base of South African travel content instead of a generic reply. A group project where I focused on the frontend and the chat interface.",
      image: "",
      tech: ["React", "TypeScript", "TanStack Start", "Tailwind CSS", "Vercel AI SDK"],
      liveUrl: "https://mzansi-ai-guide.lovable.app",
      repoUrl: "https://github.com/PamMasina/mzansi-ai-guide",
      featured: false
    },
    {
      title: "Ubuntu Store",
      description: "A marketplace for campus communities, where students, local vendors and nearby residents can buy, sell and trade goods in a verified environment. Part of a five person team. I handled QA and community liaison while the others built the React and Express/Supabase stack with PayFast payments.",
      image: "",
      tech: ["React", "Vite", "Node.js", "Express", "Supabase", "PayFast"],
      liveUrl: "",
      repoUrl: "https://github.com/PamMasina/Ubuntu-store",
      featured: false
    },
    {
      title: "ClinicConnect",
      description: "A mobile app for booking clinic appointments, using Supabase for authentication and data, with maps and location services to help patients find nearby facilities. A team assignment where I forked the group repository to build and maintain my section.",
      image: "",
      tech: ["Expo", "React Native", "Supabase", "React Navigation"],
      liveUrl: "",
      repoUrl: "https://github.com/PamMasina/ClinicConnect",
      featured: false
    },
    {
      title: "CareerWise",
      description: "A career guidance platform with an Angular front end and its own backend service. Another team assignment, where I forked the group repository to update and maintain the part I owned.",
      image: "",
      tech: ["Angular", "TypeScript", "Node.js"],
      liveUrl: "",
      repoUrl: "https://github.com/PamMasina/CareerWise",
      featured: false
    },
    {
      title: "Student Enrollment System",
      description: "A student enrollment system split into a client application and a separate server module with its own database connection, built with Java and Maven.",
      image: "",
      tech: ["Java", "Maven"],
      liveUrl: "",
      repoUrl: "https://github.com/PamMasina/enrollment_system_app",
      featured: false
    },
    {
      title: "Local NGO Website",
      description: "A website built for a local non profit. My first front end project, and the one that taught me how layout and styling actually behave in a real browser.",
      image: "",
      tech: ["HTML", "CSS"],
      liveUrl: "",
      repoUrl: "https://github.com/PamMasina/Local-NGO-website",
      featured: false
    }
  ],

  contact: {
    formEndpoint: "",
    successMessage: "Thanks, your message is on its way.",
    errorMessage: "Something went wrong. Please email me directly instead."
  }
};
