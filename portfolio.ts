// =====================================================================
//  Portfolio content — all editable data lives here.
//  Update URLs, descriptions, and statuses as real details arrive.
// =====================================================================

export type SkillCategory = {
  title: string;
  icon: string;
  skills: string[];
};

export const personalInfo = {
  fullName: 'Hamathi Thazin A',
  displayName: 'Hamathi Thazin',
  title: 'Aspiring Software Developer | Python Developer | AI/ML Enthusiast',
  shortTitle: 'Aspiring Software Developer',
  subtitle: ['Python', 'Artificial Intelligence', 'Machine Learning', 'Web Development'],
  tagline: 'Building solutions, exploring technology, and growing one project at a time.',
  intro:
    "I'm Hamathi Thazin A, a final-year BCA student graduating in 2027. I'm focused on software development, Python programming, and the world of AI and machine learning. I learn by building, and I'm always exploring new ways to turn ideas into working software.",
  email: 'hamathithazin.718@gmail.com',
  emailSubject: 'Portfolio Inquiry from [Your Name]',
  github: 'https://github.com/hamathithazin718-blip',
  githubHandle: 'hamathithazin718-blip',
  linkedin: 'https://www.linkedin.com/in/hamathi-t-2b7725397/',
  resumeUrl: null as string | null, // <-- Replace with your resume PDF URL (e.g. '/resume.pdf')
  // Portfolio repository — configurable source-code link for this site itself.
  portfolioRepoUrl: 'https://github.com/hamathithazin718-blip',
  // Live demo — local dev URL for now; replace with public deployment URL once deployed.
  portfolioLiveUrl: 'http://localhost:5173/' as string | null,
  footerTagline: 'Designed with purpose. Built with curiosity.',
};

export const aboutCards = [
  { label: 'Education', value: 'Bachelor of Computer Applications (BCA)' },
  { label: 'Graduation', value: 'Expected 2027' },
  { label: 'Primary Interest', value: 'Software Development' },
  { label: 'Technical Interests', value: 'Python, AI/ML, and Web Technologies' },
];

// ---------------------------------------------------------------------
// Navigation — order drives both desktop + mobile menu.
// ---------------------------------------------------------------------
export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Certificates', href: '#certificates' },
  { label: 'Internships', href: '#internships' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

// ---------------------------------------------------------------------
// Skills — grouped categories for the overview, plus a detailed map for
// the interactive modal that opens when a skill is clicked.
// ---------------------------------------------------------------------
export const skillCategories: SkillCategory[] = [
  {
    title: 'Programming Languages',
    icon: 'Code2',
    skills: ['Python', 'Java', 'C++'],
  },
  {
    title: 'Web Development',
    icon: 'Globe',
    skills: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    title: 'Databases & Tools',
    icon: 'Database',
    skills: ['SQL', 'DBMS'],
  },
  {
    title: 'AI & Computer Science',
    icon: 'BrainCircuit',
    skills: [
      'Artificial Intelligence',
      'Machine Learning',
      'OpenCV',
      'Data Structures & Algorithms',
    ],
  },
];

export type SkillDetail = {
  id: string;
  name: string;
  icon: string;
  category: string;
  description: string;
  experience: string; // verified knowledge/experience — no invented proficiency
  relatedProjects: string[]; // titles of related projects
  relatedCertificates: string[]; // titles of related certificates
  // Optional verification link — only set when a real one exists.
  certificateVerificationUrl?: string | null;
};

export const skillDetails: SkillDetail[] = [
  {
    id: 'python',
    name: 'Python',
    icon: 'Code2',
    category: 'Programming Languages',
    description:
      'Python is my primary programming language. I use it for academic projects, scripting, and exploring AI/ML libraries.',
    experience:
      'Used in my Image Steganography project (LSB + RC6) and in ongoing AI/ML study. Comfortable with core syntax, functions, and standard libraries.',
    relatedProjects: ['Image Steganography', 'AI/ML Internship', 'CodeAlpha Hangman Game — Task 1'],
    relatedCertificates: [],
    certificateVerificationUrl: null,
  },
  {
    id: 'java',
    name: 'Java',
    icon: 'Coffee',
    category: 'Programming Languages',
    description:
      'Java is part of my BCA coursework. I use it to practice object-oriented programming concepts.',
    experience: 'Studied as part of my academic curriculum — OOP fundamentals, basic syntax, and small programs.',
    relatedProjects: [],
    relatedCertificates: [],
    certificateVerificationUrl: null,
  },
  {
    id: 'cpp',
    name: 'C++',
    icon: 'Binary',
    category: 'Programming Languages',
    description:
      'C++ supports my understanding of programming fundamentals and data structures.',
    experience: 'Studied as part of my academic curriculum — control structures, functions, and basic data structures.',
    relatedProjects: [],
    relatedCertificates: [],
    certificateVerificationUrl: null,
  },
  {
    id: 'sql',
    name: 'SQL',
    icon: 'Database',
    category: 'Databases & Tools',
    description: 'SQL for querying and managing relational databases.',
    experience: 'Practicing queries and database design as part of my DBMS coursework.',
    relatedProjects: ['Student Enrollment & Course Management System'],
    relatedCertificates: [],
    certificateVerificationUrl: null,
  },
  {
    id: 'html',
    name: 'HTML',
    icon: 'FileCode',
    category: 'Web Development',
    description: 'The markup foundation of every web page I build.',
    experience: 'Used in personal web projects, including this portfolio website.',
    relatedProjects: ['Personal Portfolio Website'],
    relatedCertificates: [],
    certificateVerificationUrl: null,
  },
  {
    id: 'css',
    name: 'CSS',
    icon: 'Palette',
    category: 'Web Development',
    description: 'Styling and responsive layout design, including Tailwind CSS.',
    experience: 'Used Tailwind CSS to build this portfolio and styled personal projects.',
    relatedProjects: ['Personal Portfolio Website'],
    relatedCertificates: [],
    certificateVerificationUrl: null,
  },
  {
    id: 'javascript',
    name: 'JavaScript',
    icon: 'Braces',
    category: 'Web Development',
    description: 'Adding interactivity to web pages and building React components.',
    experience: 'Learning JavaScript alongside React for front-end development.',
    relatedProjects: ['Personal Portfolio Website'],
    relatedCertificates: [],
    certificateVerificationUrl: null,
  },
  {
    id: 'ai',
    name: 'Artificial Intelligence',
    icon: 'BrainCircuit',
    category: 'AI & Computer Science',
    description: 'Fundamentals of AI — problem solving, search, and intelligent systems.',
    experience: 'Currently studying AI fundamentals as part of my learning journey.',
    relatedProjects: ['AI/ML Internship'],
    relatedCertificates: [],
    certificateVerificationUrl: null,
  },
  {
    id: 'ml',
    name: 'Machine Learning',
    icon: 'BrainCircuit',
    category: 'AI & Computer Science',
    description: 'Core ML concepts — supervised and unsupervised learning, model evaluation.',
    experience: 'Currently studying ML concepts and applying them in my AI/ML internship.',
    relatedProjects: ['AI/ML Internship'],
    relatedCertificates: [],
    certificateVerificationUrl: null,
  },
  {
    id: 'opencv',
    name: 'OpenCV',
    icon: 'Eye',
    category: 'AI & Computer Science',
    description: 'Computer vision library for image and video processing.',
    experience: 'Exploring OpenCV as part of my AI/ML learning journey.',
    relatedProjects: ['AI/ML Internship'],
    relatedCertificates: [],
    certificateVerificationUrl: null,
  },
  {
    id: 'dbms',
    name: 'DBMS',
    icon: 'Database',
    category: 'Databases & Tools',
    description: 'Database management systems — modeling, normalization, and queries.',
    experience: 'Studying DBMS concepts and applying them in academic projects.',
    relatedProjects: ['Student Enrollment & Course Management System'],
    relatedCertificates: [],
    certificateVerificationUrl: null,
  },
  {
    id: 'dsa',
    name: 'Data Structures & Algorithms',
    icon: 'Network',
    category: 'AI & Computer Science',
    description: 'Core data structures and algorithmic problem-solving.',
    experience: 'Actively practicing to strengthen problem-solving for technical interviews.',
    relatedProjects: [],
    relatedCertificates: [],
    certificateVerificationUrl: null,
  },
];

// ---------------------------------------------------------------------
// Projects — all URLs configurable. null => "Link coming soon" state.
// ---------------------------------------------------------------------
export type Project = {
  title: string;
  description: string;
  longDescription?: string;
  tech: string[];
  status: 'Completed' | 'Academic' | 'Planned' | 'In Development';
  repoUrl: string | null; // null => "Link coming soon", button disabled
  liveUrl: string | null; // null => no live demo button
  demoVideoUrl: string | null; // null => no demo video
  screenshots?: string[]; // image URLs; empty/undefined => none
  highlights?: string[];
};

export const projects: Project[] = [
  {
    title: 'Image Steganography',
    description:
      'A Python project focused on hiding information inside images using Least Significant Bit (LSB) steganography combined with RC6 encryption.',
    longDescription:
      'The project embeds secret data into the least significant bits of image pixels, with RC6 encryption applied to the payload for an added layer of security. It explores the trade-off between payload capacity and visual imperceptibility.',
    tech: ['Python', 'LSB Steganography', 'RC6'],
    status: 'Completed',
    repoUrl: 'https://github.com/hamathithazin718-blip/Image-Steganography',
    liveUrl: null,
    demoVideoUrl: null,
    highlights: [
      'LSB-based embedding into image pixels',
      'RC6 encryption of the payload',
      'Python implementation',
    ],
  },
  {
    title: 'AI/ML Internship',
    description:
      'A collection of AI and Machine Learning tasks and projects completed as part of my AI/ML internship — exploring core ML concepts and practical implementations.',
    longDescription:
      'Repository of work produced during my AI/ML internship, covering foundational machine learning concepts, exercises, and applied Python implementations.',
    tech: ['Python', 'Machine Learning', 'AI'],
    status: 'In Development',
    repoUrl: 'https://github.com/hamathithazin718-blip/AI-ML-Internship',
    liveUrl: null,
    demoVideoUrl: null,
    highlights: [
      'Machine learning exercises and implementations',
      'AI fundamentals applied in Python',
    ],
  },
  {
    title: 'Salesforce Administrator with AI AgentForce',
    description:
      'A project exploring Salesforce administration combined with AI AgentForce capabilities — configuring org settings and AI-driven agent features.',
    longDescription:
      'Covers Salesforce administrator workflows alongside AI AgentForce features, including configuration, user management, and AI agent setup.',
    tech: ['Salesforce', 'AgentForce', 'AI'],
    status: 'In Development',
    repoUrl: 'https://github.com/hamathithazin718-blip/Salesforce-Administrator-with-AI-AgentForce',
    liveUrl: null,
    demoVideoUrl: null,
    highlights: [
      'Salesforce admin configuration',
      'AI AgentForce integration',
    ],
  },
  {
    title: 'CodeAlpha Hangman Game — Task 1',
    description:
      'A Hangman game built as Task 1 of the CodeAlpha Python Programming internship — a command-line/Python word-guessing game.',
    longDescription:
      'Built as the first task of the CodeAlpha Python Programming internship. A classic Hangman game implemented in Python to practice core programming concepts like loops, conditionals, and string handling.',
    tech: ['Python'],
    status: 'Completed',
    repoUrl: 'https://github.com/hamathithazin718-blip/CodeAlpha_Hangman-game',
    liveUrl: null,
    demoVideoUrl: null,
    highlights: [
      'Python implementation',
      'CodeAlpha internship Task 1',
      'Classic word-guessing game logic',
    ],
  },
  {
    title: 'Personal Portfolio Website',
    description:
      'This portfolio website, built to showcase my technical skills, projects, internships, certificates, education, and professional contact details.',
    longDescription:
      'A responsive personal portfolio built with React, TypeScript, Vite, and Tailwind CSS. Includes interactive skill cards, project showcases, certificates, and internship sections — with light/dark theme support.',
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
    status: 'In Development',
    repoUrl: 'https://github.com/hamathithazin718-blip',
    // Local dev URL for now — replace with the public deployment URL once deployed.
    liveUrl: 'http://localhost:5173/',
    demoVideoUrl: null,
    highlights: [
      'Responsive light/dark themed design',
      'Interactive skills with detail modals',
      'Configurable project and certificate data',
    ],
  },
];

// ---------------------------------------------------------------------
// Certificates — structured data. Set status to "In Progress" until
// actually completed. Only set verificationUrl/fileUrl when real.
// ---------------------------------------------------------------------
export type Certificate = {
  id: string;
  name: string;
  issuer: string;
  completionDate: string | null; // null while in progress
  relatedSkill: string;
  status: 'Completed' | 'In Progress';
  fileUrl?: string | null; // image or PDF of the certificate
  verificationUrl?: string | null; // official verification link
};

export const certificates: Certificate[] = [
  // No certificates have been confirmed yet.
  // Add real entries here as you complete them, e.g.:
  // {
  //   id: 'python-basics',
  //   name: 'Python Basics',
  //   issuer: 'Coursera',
  //   completionDate: '2026-08-15',
  //   relatedSkill: 'Python',
  //   status: 'Completed',
  //   fileUrl: '/certificates/python-basics.pdf',
  //   verificationUrl: 'https://verify.example.com/abc123',
  // },
];

// ---------------------------------------------------------------------
// Internships — only include confirmed details. Status reflects reality.
// ---------------------------------------------------------------------
export type Internship = {
  id: string;
  organization: string;
  role: string;
  startDate: string; // ISO date
  endDate: string | null; // null while ongoing
  status: 'Ongoing' | 'Upcoming' | 'Completed' | 'Confirmed';
  responsibilities: string[];
  technologies: string[];
  relatedProjects: string[];
  repoUrl?: string | null; // optional GitHub repository link for the internship work
  notes?: string;
};

export const internships: Internship[] = [
  {
    id: 'codealpha-python',
    organization: 'CodeAlpha',
    role: 'Python Programming Intern',
    startDate: '2026-10-20',
    endDate: '2026-11-20',
    // Today is 2026-10-20 — the internship has started, so it is Ongoing.
    status: 'Ongoing',
    responsibilities: [
      'Python programming tasks and exercises',
      'Building small Python applications',
      'Applying Python concepts to practical problems',
    ],
    technologies: ['Python'],
    relatedProjects: ['CodeAlpha Hangman Game — Task 1'],
    repoUrl: 'https://github.com/hamathithazin718-blip/CodeAlpha_Hangman-game',
    notes: 'Dates subject to confirmation against the supplied internship details.',
  },
  {
    id: 'aiml-internship',
    organization: 'AI/ML Internship',
    role: 'AI/ML Intern',
    startDate: '2026-10-20',
    endDate: null,
    status: 'Ongoing',
    responsibilities: [
      'Machine learning exercises and model implementations',
      'Exploring AI fundamentals through practical Python projects',
      'Building and documenting ML task submissions',
    ],
    technologies: ['Python', 'Machine Learning', 'AI'],
    relatedProjects: ['AI/ML Internship'],
    repoUrl: 'https://github.com/hamathithazin718-blip/AI-ML-Internship',
    notes: 'Dates subject to confirmation against the supplied internship details.',
  },
];

// ---------------------------------------------------------------------
// Learning journey + future goals (kept from existing implementation).
// ---------------------------------------------------------------------
export const learningPriorities = [
  { title: 'Python Programming', icon: 'Code2' },
  { title: 'SQL & Database Concepts', icon: 'Database' },
  { title: 'Data Structures & Algorithms', icon: 'Network' },
  { title: 'Software Development Fundamentals', icon: 'Layers' },
  { title: 'AI & Machine Learning', icon: 'BrainCircuit' },
  { title: 'Web Development', icon: 'Globe' },
];

export const futureGoals = [
  'Building practical Python applications',
  'Strengthening coding and problem-solving skills',
  'Developing a personal collection of quality projects',
  'Improving database and web development skills',
  'Preparing for technical interviews',
  'Seeking suitable internships and entry-level roles',
  'Growing into a capable software developer',
];

export const education = {
  degree: 'Bachelor of Computer Applications (BCA)',
  graduation: 'Expected 2027',
  status: 'Final-year student',
  description:
    'My BCA studies provide a foundation in programming, databases, computer science fundamentals, and software development — supporting my journey toward a career in software engineering and AI.',
};
