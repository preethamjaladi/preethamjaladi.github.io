export type NavItem = {
  label: string
  href: string
}

export type Project = {
  name: string
  problem: string
  description: string
  stack: string[]
  contribution: string
  achievement: string
  category?: string
  highlights?: string[]
  plannedStack?: string[]
  repo?: string
  demo?: string
  note?: string
  meta?: string
  paper?: string
}

export type Experience = {
  title: string
  company: string
  period: string
  description: string[]
  stack: string[]
}

export type SkillGroup = {
  title: string
  items: string[]
}

export const portfolio = {
  name: 'Preetham Jaladi',
  role: 'Full-Stack Developer | AI Engineer',
  valueProp:
    'I’m a full-stack software engineer who builds products that connect modern user experiences with maintainable backend systems and APIs. My work spans AI and general software engineering: clear architecture, high-performance backends, practical AI/ML workflows, and agents that do real work. I turn ambiguous requirements into reliable software, owning the path from architecture through implementation and validation to deliver maintainable, AI-enhanced products.',
  resumeUrl: '/resume.pdf',
  nav: [
    { label: 'Projects', href: '#projects' },
    { label: 'Research', href: '#research' },
    { label: 'Experience', href: '#experience' },
    { label: 'Skills', href: '#skills' },
    { label: 'Contact', href: '#contact' },
    { label: 'Steals', href: '/steals' },
  ] as NavItem[],
  profileLinks: {
    email: 'preethamjaladi@gmail.com',
    linkedin: 'https://www.linkedin.com/in/preethamjaladi',
    github: 'https://github.com/preethamjaladi',
    location: 'New Jersey, USA',
  },
  projects: [
    {
      name: 'Resume Analyzer',
      category: 'AI Engineering / Full Stack',
      problem:
        'Job seekers get vague feedback on how well a resume fits a role. They can’t see which requirements lack evidence, and tools that return a single unexplained AI score give them nothing to check or trust.',
      description:
        'A full-stack, AI powered analyzer that compares a resume with a job description through a multi stage LangGraph workflow: it extracts structured data from both, matches requirements, verifies evidence, and recommends improvements. The score comes from deterministic Python, so the same input always gives the same, explainable result. Users approve, edit, or reject each suggestion before any change is applied.',
      stack: ['Python', 'LangGraph', 'Pydantic', 'Groq', 'FastAPI', 'React', 'TypeScript', 'Structured Outputs', 'Human-in-the-Loop'],
      repo: 'https://github.com/preethamjaladi/resume_analyzer',
      highlights: [
        'Orchestrated resume extraction, requirement matching, evidence verification, and recommendations as a multi-stage LangGraph workflow.',
        'Used Pydantic schemas and Groq-hosted models to turn resume and job-description text into structured data for downstream comparison.',
        'Replaced LLM-generated scoring with a deterministic Python calculation, keeping results consistent and explainable.',
        'Built human-in-the-loop review so users approve, modify, or reject each AI suggestion, served through FastAPI and a React/TypeScript interface, with tests covering matching, scoring, review, and edit application.',
      ],
      contribution: '',
      achievement: '',
    },
    {
      name: 'CalmSpace',
      demo: 'https://calmspace-kv1c.onrender.com',
      repo: 'https://github.com/preethamjaladi/calmspace',
      note: 'CalmSpace is a self-help tool, not a substitute for professional care.',
      category: 'Generative AI / Full Stack',
      problem:
        'People dealing with anxiety need accessible tools for grounding, breathing, and reflecting on their mood, without having to sign up or wade through clutter.',
      description:
        'A Gemini-powered wellness app that gives personalized anxiety-relief guidance alongside interactive grounding exercises, breathing tools, and mood tracking, all in a responsive interface. If the AI service goes down, it falls back to predefined exercises, so users are never left without support.',
      stack: ['Gemini Flash', 'Google Gen AI SDK', 'React', 'TypeScript', 'Node.js', 'Express.js', 'Tailwind CSS'],
      highlights: [
        'Integrated Gemini through the Google Gen AI SDK with context-aware prompts and JSON-schema-constrained guidance responses.',
        'Built Express inference APIs with a deterministic, symptom aware fallback to predefined exercises during AI service outages.',
        'Created responsive breathing and grounding tools, browser audio, and locally persisted mood history.',
        'Deployed as a public live demo.',
      ],
      contribution: '',
      achievement: '',
    },
  ] as Project[],
  research: [
    {
      name: 'Offensive Language Detection in Social Media Using Ensemble Techniques',
      meta: 'ICCPCT 2023 · IEEE · First author · August 2023',
      problem:
        'Social platforms need automated ways to flag offensive and hate-speech content at scale, but it isn’t obvious which classical models and text features hold up best.',
      description:
        'A comparative study of six classifiers (Naive Bayes, SVM, XGBoost, KNN, Decision Tree, and Random Forest) on Twitter data, using bag-of-words and TF-IDF features and evaluated on accuracy, precision, recall, and F1-score.',
      stack: ['Python', 'Scikit-learn', 'NLP', 'TF-IDF', 'Text Classification', 'XGBoost', 'Random Forest'],
      contribution:
        'Developed and evaluated text classification models across six algorithms and two feature representations, comparing them on multiple metrics instead of accuracy alone.',
      achievement:
        'Random Forest with TF-IDF features reached 97% accuracy, the best of the six models tested.',
      paper: 'https://doi.org/10.1109/ICCPCT58313.2023.10245673',
    },
  ] as Project[],
  experience: [
    {
      title: 'AI Engineer Intern',
      company: 'Fifth AI Solutions',
      period: 'January 2026 – Present',
      description: [
        'Full-Stack Development: Architected an AI-powered learning platform using Next.js (React.js), FastAPI, and PostgreSQL, integrating course delivery, student enrollment, assessments, and progress tracking.',
        'Backend Engineering: Developed secure FastAPI REST APIs for authentication, enrollment, and payment verification, supported by relational PostgreSQL database schemas.',
        'AI/LLM Integration: Integrated a Claude-powered conversational AI tutor and engineered RAG pipelines using vector embeddings, semantic retrieval, and grounded responses over educational content.',
        'Infrastructure & AI Interoperability: Developed MCP-compatible service endpoints and containerized applications using Docker, supporting CI/CD deployment and API monitoring.',
      ],
      stack: ['Next.js', 'TypeScript', 'Python', 'FastAPI', 'PostgreSQL', 'RAG', 'MCP', 'Docker'],
    },
  ],
  skills: [
    {
      title: 'AI & Agentic Systems',
      items: [
        'LangGraph',
        'LangChain',
        'Claude API',
        'Gemini API',
        'Groq',
        'Model Context Protocol (MCP)',
        'Tool Calling',
        'Multi-Agent Workflows',
        'Human-in-the-Loop',
        'Structured Outputs',
        'Retrieval-Augmented Generation (RAG)',
        'Vector Embeddings',
        'Semantic Search',
      ],
    },
    {
      title: 'Backend & APIs',
      items: [
        'Python',
        'FastAPI',
        'Pydantic',
        'Java',
        'Spring Boot',
        'Spring Data JPA',
        'Node.js',
        'Express.js',
        'REST APIs',
        'Microservices',
      ],
    },
    {
      title: 'Frontend',
      items: [
        'TypeScript',
        'JavaScript',
        'React',
        'Next.js',
        'Redux Toolkit',
        'Tailwind CSS',
        'Vite',
        'HTML5',
        'CSS3',
      ],
    },
    {
      title: 'Databases & Storage',
      items: ['PostgreSQL', 'MySQL', 'Supabase', 'Vector Databases'],
    },
    {
      title: 'Testing & Reliability',
      items: [
        'Pytest',
        'LLM Evaluation',
        'Schema Validation',
        'Regression Testing',
        'Fallback Mechanisms',
        'Postman',
      ],
    },
    {
      title: 'Cloud & DevOps',
      items: ['Docker', 'GitHub Actions', 'AWS', 'Git', 'GitHub'],
    },
    {
      title: 'Machine Learning',
      items: ['Scikit-learn', 'Pandas', 'NumPy', 'XGBoost', 'Classification Metrics (Precision, Recall, F1)'],
    },
  ] as SkillGroup[],
  education: [
    {
      school: 'New Jersey Institute of Technology',
      degree: 'M.S. Computer Science',
      period: 'Jan 2024 – Dec 2025',
    },
    {
      school: 'Karunya University',
      degree: 'B.Tech Computer Science',
      period: 'Jun 2019 – May 2023',
    },
  ],
} as const
