import { ResumeData } from './types';

export const ACCENT_COLOR = '#D97757';

export const RESUME: ResumeData = {
  name: "Amal Singh",
  title: "GenAI Specialist & Full Stack Developer",
  contact: {
    phone: "+918187877802",
    email: "singhamal1710@gmail.com",
    location: "Gurugram, Haryana, India",
    linkedin: "https://www.linkedin.com/in/amal-singh-genai",
    github: "https://github.com/singhamal001"
  },
  summary: "AI & ML Engineer and Full Stack Developer with a proven track record in end-to-end GenAI pipelines, advanced RAG architectures, and ML model training. Skilled in designing and implementing scalable AI initiatives, transforming unstructured data into structured intelligence using modern web technologies.",
  experience: [
    {
      id: "benori",
      role: "Tech Analyst",
      company: "Benori",
      location: "Gurugram, India",
      period: "Mar 2025 — Present",
      details: [
        "Designed large-scale GenAI data pipelines leveraging LangChain, LangGraph, and Prefect for enterprise-scale processing.",
        "Developed structured systems with domain-specific QA, integrating advanced retrieval and quality-control layers.",
        "Led development of a knowledge search & chatbot platform on Azure using Agile practices.",
        "Built multi-modal GenAI pipelines combining text, images, and tabular data."
      ]
    },
    {
      id: "aimil",
      role: "Senior Engineer (Data Science)",
      company: "AIMIL LTD",
      location: "New Delhi, India",
      period: "Sep 2024 — Mar 2025",
      details: [
        "Built computer vision models for diabetic retinopathy & glaucoma detection (96%+ recall).",
        "Designed a video-based vitals prediction pipeline with MLflow monitoring (±5 BPM accuracy).",
        "Automated PII extraction replacing regex with an OCR + LLM pipeline."
      ]
    },
    {
      id: "freelance",
      role: "AI Engineer, Freelance",
      company: "Self-Employed",
      location: "Hyderabad, India",
      period: "Jun 2024 — Aug 2024",
      details: [
        "Automated sales/HR workflows using Google Sheets, Apify, Apollo.ai, OpenAI Whisper.",
        "Engineered an intelligent LangGraph-based RAG chatbot for a PropTech startup."
      ]
    },
    {
      id: "predli",
      role: "Data Scientist Intern",
      company: "Predli",
      location: "Remote (Stockholm)",
      period: "Mar 2024 — Jun 2024",
      details: [
        "Built a multi-user agentic chatbot using LLMs and NLP to facilitate automated conflict resolution."
      ]
    }
  ],
  skills: [
    {
      name: "Programming & Full Stack",
      skills: ["Python", "React", "TypeScript", "Node.js", "FastAPI", "LangChain", "LangGraph", "AutoGen", "Hugging Face", "Vector DBs"]
    },
    {
      name: "ML & AI Methods",
      skills: ["Generative AI", "RAG", "LLMs", "PEFT", "Fine-Tuning", "Deep Learning", "Computer Vision", "Predictive Analytics"]
    },
    {
      name: "MLOps & Cloud",
      skills: ["Azure", "Docker", "Model Monitoring", "Orchestration", "DevOps", "CI/CD"]
    }
  ],
  education: [
    {
      degree: "Post Graduate Diploma, AI, ML and Data Science",
      institution: "Plaksha University, Mohali",
      details: "GPA: 8.77"
    },
    {
      degree: "Bachelors of Business Administration (Business Analytics)",
      institution: "GITAM University, Hyderabad",
      details: "GPA: 8.77"
    }
  ],
  awards: [
    "Best Employee of the Quarter (x2), Benori (May 2025)"
  ]
};

export const GEMINI_SYSTEM_PROMPT = `You are the AI assistant for Amal Singh's portfolio website. 
Your goal is to represent Amal professionally and enthusiastically as a GenAI Specialist and Full Stack Developer. 

INSTRUCTIONS:
1. Use **bold text** for key technologies, project names, or achievements to make the response easy to scan.
2. Use bullet points for lists to improve readability.
3. Keep answers concise but impactful.
4. **CRITICAL**: At the end of every response, creatively and wittily invite the user to scroll down to the **Skills** or **Experience** sections to see more proofs of his work. Vary this invitation so it doesn't sound robotic. 
   Example: "Curious about the stack behind this? Scroll down to the **Skills** section to inspect my arsenal."
   Example: "That's just the tip of the iceberg. Check out the **Experience** timeline below for the full story."

Resume Context:
${JSON.stringify(RESUME)}
`;