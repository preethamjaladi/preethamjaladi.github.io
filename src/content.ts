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
      name: 'ResumeMatch',
      category: 'AI Engineering / Full Stack',
      problem:
        'Job seekers need a clear view of how their resume aligns with a role and which requirements need stronger evidence.',
      description:
        'An AI-powered resume analysis workflow that evaluates resumes against job descriptions, identifies skill gaps, calculates compatibility scores, and generates personalized recommendations through LangGraph.',
      stack: ['Python', 'LangGraph', 'Pydantic', 'Groq', 'Structured Outputs'],
      plannedStack: ['FastAPI', 'Next.js', 'TypeScript', 'Supabase', 'PostgreSQL'],
      highlights: [
        'Orchestrated resume extraction, job requirement analysis, skill comparison, scoring, and recommendations in a sequential LangGraph workflow.',
        'Used Pydantic schemas and Groq-hosted models to structure resume and job-description text for downstream comparison.',
        'Implemented a deterministic skill-coverage calculation in Python and generated a readable analysis report from the comparison results.',
      ],
      contribution: '',
      achievement: '',
    },
    {
      name: 'CalmSpace',
      demo: 'https://calmspace-kv1c.onrender.com',
      category: 'Generative AI / Full Stack',
      problem:
        'People experiencing anxiety need accessible tools for grounding, breathing, and reflecting on their mood.',
      description:
        'An AI-powered wellness application providing personalized anxiety-relief guidance, interactive grounding exercises, breathing tools, and mood tracking through a responsive interface.',
      stack: ['Gemini Flash', 'Google Gen AI SDK', 'React', 'TypeScript', 'Node.js', 'Express.js', 'Tailwind CSS'],
      highlights: [
        'Integrated Gemini through the Google Gen AI SDK with context-aware prompts and JSON-schema-constrained guidance responses.',
        'Built Express inference APIs with a deterministic, symptom-aware fallback for access to predefined exercises during AI service outages.',
        'Created responsive breathing and grounding tools, browser audio, and locally persisted mood history for supportive wellness use.',
      ],
      contribution: '',
      achievement: '',
    },
    {
      name: 'Machine Learning Research Project',
      problem:
        'Classification workflows often require careful evaluation and clear reporting so model quality is measurable and actionable.',
      description:
        'A research-oriented machine learning project focused on data preparation, feature selection, model comparison, and evaluation metrics for classification tasks.',
      stack: ['Python', 'Scikit-learn', 'Machine Learning', 'Evaluation', 'Data Pipelines'],
      contribution:
        'Handled preprocessing, model selection, and result analysis to compare approaches against practical metrics and documented methodological tradeoffs.',
      achievement:
        'Produced an interpretable evaluation workflow that surfaced model strengths, weaknesses, and the most relevant metrics for decision-making.',
      repo: 'https://github.com/your-username/ml-research',
      demo: 'https://example.com/ml-research-demo',
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
