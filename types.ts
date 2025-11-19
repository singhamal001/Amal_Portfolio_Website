export interface Job {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  details: string[];
}

export interface SkillCategory {
  name: string;
  skills: string[];
}

export interface ResumeData {
  name: string;
  title: string;
  contact: {
    phone: string;
    email: string;
    location: string;
    linkedin: string;
    github: string;
  };
  summary: string;
  experience: Job[];
  skills: SkillCategory[];
  education: {
    degree: string;
    institution: string;
    details: string;
  }[];
  awards: string[];
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}