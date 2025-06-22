import { motion, useViewportScroll, useTransform, AnimatePresence } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaSun, FaMoon } from "react-icons/fa";
import { useState, useEffect, useRef } from "react";

// --- Animation Configuration ---
const animConfig = {
  duration: 0.8,
  springStiffness: 120,
  springDamping: 20,
  staggerChildren: 0.12,
  viewAmount: 0.3,
};

// --- Framer Motion Variants ---
const fadeInUp = {
  initial: { opacity: 0, y: 100, scale: 0.95 },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: animConfig.springStiffness, damping: animConfig.springDamping },
  },
};

const slideInLeft = {
  initial: { opacity: 0, x: -100 },
  animate: {
    opacity: 1,
    x: 0,
    transition: { type: "spring", stiffness: animConfig.springStiffness, damping: animConfig.springDamping },
  },
};

const slideInRight = {
  initial: { opacity: 0, x: 100 },
  animate: {
    opacity: 1,
    x: 0,
    transition: { type: "spring", stiffness: animConfig.springStiffness, damping: animConfig.springDamping },
  },
};

const staggerContainer = {
  initial: {},
  animate: {
    transition: { staggerChildren: animConfig.staggerChildren },
  },
};

const typingVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.05, staggerChildren: 0.05 } },
};

const characterVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
};

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("root");
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') || 'dark';
    }
    return 'dark';
  });

  const [selectedSkillCategory, setSelectedSkillCategory] = useState("All");

  const { scrollYProgress } = useViewportScroll();

  // Hero typing text
  const heroDescription = "Backend Software Engineer — building fast, automated, scalable infrastructure.";
  const [typedText, setTypedText] = useState(heroDescription);
  const [isTypingComplete, setIsTypingComplete] = useState(true);

  useEffect(() => {
    setTypedText(heroDescription);
    setIsTypingComplete(true);
  }, [heroDescription]);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const geom1Y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const geom2Y = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);

  const heroScale = useTransform(scrollYProgress, [0, 0.3], [1, 0.8]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.25], [1, 0]);

  useEffect(() => {
    const sections = ['root', 'stack', 'builds', 'connect'];
    let currentActive = 'root';

    const handleScroll = () => {
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            currentActive = sections[i];
            break;
          }
        }
      }
      setActiveSection(currentActive);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };


  const allSkills = [
    { name: "Python", category: "Languages" },
    { name: "C++", category: "Languages" },
    { name: "Shell Scripting", category: "Scripting" },
    { name: "PowerShell", category: "Scripting" },
    { name: "Linux/UNIX", category: "Operating Systems" },
    { name: "Ansible", category: "DevOps" },
    { name: "DHCP", category: "Networking" },
    { name: "DNS", category: "Networking" },
    { name: "Active Directory", category: "System Administration" },
    { name: "AWS", category: "Cloud" },
    { name: "Docker", category: "DevOps" },
    { name: "GitHub Actions (CI/CD)", category: "DevOps" },
    { name: "TCP/IP", category: "Networking" },
    { name: "Firewall", category: "Security" },
    { name: "PostgreSQL", category: "Databases" },
    { name: "MySQL", category: "Databases" },
    { name: "HTML", category: "Frontend" },
    { name: "CSS", category: "Frontend" },
    { name: "JavaScript", category: "Frontend" },
    { name: "React", category: "Frontend" },
    { name: "OOP", category: "Fundamentals" },
    { name: "Data Structures", category: "Fundamentals" },
    { name: "Algorithms", category: "Fundamentals" },
    { name: "Design Patterns", category: "Fundamentals" },
    { name: "Git", category: "Development Tools" },
    { name: "Agile/Scrum", category: "Methodologies" },
    { name: "Security Policy Implementation", category: "Security" },
    { name: "Automation", category: "DevOps" },
  ];

  const skillCategories = ["All", ...new Set(allSkills.map(skill => skill.category))].sort();

  const filteredSkills = selectedSkillCategory === "All"
    ? allSkills
    : allSkills.filter(skill => skill.category === selectedSkillCategory);


  const experiences = [
    {
      role: "Student System Administrator",
      company: "Southern Illinois University Carbondale",
      period: "Aug 2023 – May 2025",
      details: [
        "Engineered and deployed automated provisioning and configuration solutions for Linux servers by implementing automation tools like Ansible, Python, and Shell scripting, achieving a 70% reduction in deployment times and enhanced operational efficiency.",
        "Proactively diagnosed and resolved complex hardware and software issues on Linux systems, ensuring high system availability and reducing downtime by 90% through proactive solutions.",
        "Designed and enforced robust security policies and procedures aligned with industry standards, significantly improving system security and mitigating vulnerabilities.",
        "Automated repetitive administrative workflows using PowerShell, enhancing operational efficiency by 30% and optimizing resource utilization.",
        "Configured and maintained virtualized environments using VMware and Hyper-V, optimizing resource allocation and ensuring seamless performance across workloads."
      ],
      animation: slideInLeft
    },
    {
      role: "Programmer Analyst Trainee",
      company: "Cognizant Technology Solutions",
      period: "Jun 2022 – Jul 2023",
      details: [
        "Contributed to backend development projects for an insurance client (Lincoln Financial Group) at Cognizant Technology Solutions.",
        "Migrated mainframe applications to AWS EC2, performing detailed inventory analysis and executing end-to-end testing to ensure seamless functionality in the cloud environment.",
        "Developed and optimized COBOL programs, PROCs, and JCL scripts to support migration and enhance application performance.",
        "Handled Linux server management including upgrades, installations, configuration, and monitoring, ensuring high system reliability and performance."
      ],
      animation: slideInRight
    },
    {
      role: "Intern",
      company: "Cognizant Technology Solutions Ltd",
      period: "Jan 2022 – Jun 2022",
      details: [
        "Responsible for Upgrade, installs, configuration and administration and monitoring on Linux servers.",
        "Excellent in patches and packages installation on Linux/Unix Environment.",
        "Built, configured and deployed Virtual machines and templates.",
        "Monitored Linux server for CPU Utilization, Memory Utilization, and Disk Utilization for performance monitoring.",
        "Worked with team members to promote great customer service and pleasant work environment.",
        "Collaborated with support team to assist client stakeholders with emergent technical issues and develop effective solutions."
      ],
      animation: slideInLeft
    }
  ];

  const education = [
    {
      institution: "Southern Illinois University Carbondale",
      degree: "M.S. in Computer Science",
      period: "Aug 2023 – May 2025",
      gpa: "3.81 / 4.00",
      details: ["Thesis: Robot Intention Recognition for Near Future Collision Avoidance - Developed a real-time intent prediction model using RNNs, Transformers, and Bayesian Inference for autonomous collision avoidance."]
    },
    {
      institution: "GITAM DEEMED TO BE UNIVERSITY",
      degree: "B.Tech in Computer Science",
      period: "Jul 2018 – May 2022",
      gpa: "7.74 / 10",
      details: []
    }
  ];

  const certifications = [
    {
      name: "Docker Foundations Professional Certificate",
      issuer: "LinkedIn Learning And Docker",
    },
    {
      name: "Ansible Essentials",
      issuer: "N/A",
    },
    {
      name: "Ubuntu Linux Professional Certificate",
      issuer: "Canonical",
    },
    {
      name: "Getting started with Google Cloud",
      issuer: "N/A",
    },
  ];

  const projects = [
    {
      title: "Stock Market Dashboard",
      description: "Real-time data application using Flask, Alpha Vantage API, and HTML/CSS/JS for financial visualization.",
      techStack: ["Flask", "Alpha Vantage API", "HTML", "CSS", "JavaScript"],
      link: null
    },
    {
      title: "Health Integration Dashboard",
      description: "Full-stack application integrating Oura Ring API, with backend in Python and analytics via PostgreSQL, Dash, and Plotly.",
      techStack: ["Python", "Oura Ring API", "PostgreSQL", "Dash", "Plotly"],
      link: null
    },
    {
      title: "Breast Cancer Detection",
      description: "Predictive model using Keras, SVM, and Matplotlib for high-accuracy medical classification.",
      techStack: ["Keras", "SVM", "Matplotlib", "Python"],
      link: null
    },
    {
      title: "Currency Converter API",
      description: "RESTful API built with Python and Flask for real-time exchange rate conversion.",
      techStack: ["Python", "Flask", "REST API"],
      link: null
    },
    {
      title: "Gender Detection Model",
      description: "Built using TensorFlow and Keras to classify gender traits from input data.",
      techStack: ["TensorFlow", "Keras", "Python"],
      link: null
    },
    {
      title: "Product Showcase Website",
      description: "Responsive static site using HTML and CSS to display headphone brand products.",
      techStack: ["HTML", "CSS"],
      link: null
    }
  ];

  return (
    <motion.div
      initial="initial"
      animate="animate"
      className="relative bg-gray-950 text-gray-100 font-sans scroll-smooth overflow-x-hidden min-h-screen"
    >
      <style>{`
        @keyframes floatY {
          0%, 100% {
            transform: translateY(0px) rotateZ(0deg);
          }
          50% {
            transform: translateY(30px) rotateZ(3deg);
          }
        }

        @keyframes bounceY {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        /* Techie grid pattern with subtle glow */
        .tech-grid-background {
          background-image:
            repeating-linear-gradient(0deg, rgba(30,255,255,0.02) 0px, rgba(30,255,255,0.02) 1px, transparent 1px, transparent 40px), /* Cyan grid lines */
            repeating-linear-gradient(90deg, rgba(30,255,255,0.02) 0px, rgba(30,255,255,0.02) 1px, transparent 1px, transparent 40px);
          background-size: 40px 40px;
          opacity: 0.2; /* Make it subtle */
        }

        /* Subtle glowing border on hover/focus for techie elements */
        .tech-glow-border:hover, .tech-glow-border:focus-within {
            box-shadow: 0 0 15px rgba(0, 255, 255, 0.4), inset 0 0 10px rgba(0, 255, 255, 0.2); /* Cyan glow */
            border-color: #00FFFF;
        }
        .dark .tech-glow-border:hover, .dark .tech-glow-border:focus-within {
            box-shadow: 0 0 15px rgba(0, 255, 255, 0.4), inset 0 0 10px rgba(0, 255, 255, 0.2);
            border-color: #00FFFF;
        }

        /* Adjusted link colors for techie theme */
        .tech-link {
          color: #00FFFF; /* Electric blue */
        }
        .tech-link:hover {
          color: #00BFFF; /* Slightly darker blue on hover */
        }

        /* Particle/Starfield Background */
        .particle {
            position: absolute;
            background: rgba(255, 255, 255, 0.8);
            border-radius: 50%;
            animation: twinkle 10s infinite ease-in-out, moveStar 20s linear infinite;
            opacity: 0;
            z-index: -2;
        }

        @keyframes twinkle {
            0%, 100% { opacity: 0; transform: scale(0.5); }
            50% { opacity: 0.7; transform: scale(1.2); }
        }

        @keyframes moveStar {
            from { transform: translateY(0); }
            to { transform: translateY(-100vh); }
        }

        /* Glitch effect on hover for cards (skills, projects, etc.) */
        .glitch-effect:hover {
            animation: glitch 0.5s infinite;
        }
        @keyframes glitch {
            0% { transform: translate(0, 0); }
            20% { transform: translate(-2px, 2px); }
            40% { transform: translate(-2px, -2px); }
            60% { transform: translate(2px, 2px); }
            80% { transform: translate(2px, -2px); }
            100% { transform: translate(0, 0); }
        }

        /* Heading underline effect */
        .heading-underline::after {
          content: '';
          display: block;
          width: 0;
          height: 3px;
          background: linear-gradient(90deg, #00FFFF, #8A2BE2);
          margin: 8px auto 0;
          transition: width 0.6s ease-out;
        }

        .heading-underline.active::after {
          width: 100%;
        }

        /* Hero description typing effect */
        .typing-cursor {
          display: inline-block;
          background-color: #00FFFF;
          width: 2px;
          height: 1.2em;
          margin-left: 2px;
          vertical-align: middle;
          animation: blink 1s step-end infinite;
        }

        @keyframes blink {
          from, to { background-color: transparent }
          50% { background-color: #00FFFF; }
        }
      `}</style>

      {/* Background Geometric Elements (replacing blobs) with Parallax */}
      <div className="absolute inset-0 -z-10 overflow-hidden tech-grid-background">
        {/* Faint, stretched geometric shapes/lines with parallax */}
        <motion.div
          style={{ y: geom1Y }}
          className="absolute w-[800px] h-[800px] bg-gradient-to-tr from-purple-800 to-cyan-500 opacity-10 blur-[120px] rounded-full top-[-200px] left-[-300px] transform rotate-45 animate-[spin_60s_linear_infinite]"
        />
        <motion.div
          style={{ y: geom2Y }}
          className="absolute w-[600px] h-[600px] bg-gradient-to-bl from-blue-700 to-purple-500 opacity-10 blur-[100px] rounded-full bottom-[-150px] right-[-250px] transform -rotate-45 animate-[spin_80s_reverse_linear_infinite]"
        />
        {/* Subtle Particle/Starfield - Generate a few particles */}
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 3 + 1}px`, // 1-4px
              height: `${Math.random() * 3 + 1}px`,
              animationDelay: `${Math.random() * 10}s`, // Stagger animation start
              animationDuration: `${Math.random() * 15 + 10}s`, // Vary movement speed
            }}
          />
        ))}
      </div>

      {/* Navigation Bar */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="fixed top-0 left-0 right-0 z-50 bg-gray-900 bg-opacity-80 backdrop-filter backdrop-blur-lg shadow-xl shadow-gray-950 py-4 px-6 md:px-12 flex justify-between items-center border-b border-gray-700"
      >
        <div className="flex space-x-6 md:space-x-10 text-gray-300 font-medium text-lg">
          {['root', 'stack', 'builds', 'connect'].map((sectionId) => (
            <button
              key={sectionId}
              onClick={() => scrollToSection(sectionId)}
              className={`hover:text-cyan-400 transition duration-300
                          ${activeSection === sectionId ? 'text-cyan-400 font-bold border-b-2 border-cyan-400' : ''}`}
            >
              {sectionId.charAt(0).toUpperCase() + sectionId.slice(1)}
            </button>
          ))}
        </div>
        {/* Theme Toggle Button (still useful even if dark is default) */}
        <button
          onClick={toggleTheme}
          className="p-2 rounded-full bg-gray-700 text-gray-200
                     hover:bg-gray-600 transition-colors duration-300"
          aria-label="Toggle theme"
        >
          {theme === 'light' ? <FaMoon size={20} /> : <FaSun size={20} />}
        </button>
      </motion.nav>

      {/* Hero Section -> Root Section */}
      <section id="root" className="flex flex-col items-center justify-center text-center pt-48 pb-32 px-6 min-h-screen">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="space-y-6 max-w-4xl mx-auto"
        >
          <motion.h1
            style={{ scale: heroScale, opacity: heroOpacity }}
            className="text-5xl md:text-7xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400"
          >
            Naga Sai Rishik Reddy Vaka
          </motion.h1>
          <motion.p
            variants={typingVariants}
            initial="initial"
            animate="animate"
            className="text-xl md:text-2xl text-gray-300 min-h-[3rem]" // min-h to prevent layout shift
          >
            {typedText.split('').map((char, index) => (
              <motion.span key={index} variants={characterVariants}>
                {char}
              </motion.span>
            ))}
            {isTypingComplete && <span className="typing-cursor"></span>} {/* Only show cursor when typing */}
          </motion.p>
          <motion.div
            variants={fadeInUp}
            className="flex justify-center gap-6 text-2xl text-gray-300"
          >
            <a href="https://github.com/RishikVaka28" target="_blank" rel="noreferrer" className="hover:text-cyan-400">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/rishik-reddy-vaka-985048194/" target="_blank" rel="noreferrer" className="hover:text-cyan-400">
              <FaLinkedin />
            </a>
            <a href="mailto:rishikvaka28@gmail.com" className="hover:text-cyan-400">
              <FaEnvelope />
            </a>
          </motion.div>
          {/* Enhanced Scroll Indicator Animation */}
          <motion.div
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: [0, 15, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
            className="mt-10 text-gray-500 animate-[bounceY_1.5s_infinite]"
          >
            <span className="text-3xl tech-link">↓</span> Scroll
          </motion.div>
        </motion.div>
      </section>

      {/* About & Skills Section -> Stack Section */}
      <section id="stack" className="px-6 py-24 text-center bg-gray-900 border-t border-b border-gray-800">
        <motion.h2
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: animConfig.viewAmount }}
          className="text-4xl font-bold mb-10 text-cyan-400 heading-underline"
        >
          About My Stack
        </motion.h2>
        <motion.p
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: animConfig.viewAmount }}
          className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-12"
        >
          A highly motivated and results-driven <strong className="text-cyan-300">Backend Software Engineer</strong> with over 3 years of experience in Python, C++, and Linux systems, specializing in scalable backend systems, API development, and cloud integration.
          I have a proven track record leading AWS-based backend modernization at Cognizant and streamlining Linux server deployments at Southern Illinois University using Ansible, Docker, and Shell scripting.
          My expertise also includes strong command of OOP, data structures, and algorithms, with hands-on experience in PostgreSQL, MySQL, and Agile collaboration.
          I excel at transforming complex technical challenges into streamlined solutions that directly impact operational efficiency and user experience.
        </motion.p>

        <motion.h3
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: animConfig.viewAmount }}
          className="text-3xl font-bold mb-8 text-purple-400 heading-underline"
        >
          My Technical Arsenal
        </motion.h3>

        {/* Skill Category Filter Dropdown */}
        <motion.div
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: animConfig.viewAmount }}
          className="mb-8 max-w-xs mx-auto"
        >
          <label htmlFor="skill-category" className="sr-only">Filter skills by category</label>
          <select
            id="skill-category"
            value={selectedSkillCategory}
            onChange={(e) => setSelectedSkillCategory(e.target.value)}
            className="w-full p-3 border border-gray-700 rounded-md shadow-sm bg-gray-800 text-gray-200
                       focus:ring-cyan-500 focus:border-cyan-500 tech-glow-border"
          >
            {skillCategories.map(category => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 max-w-6xl mx-auto"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          key={selectedSkillCategory}
          viewport={{ once: true, amount: animConfig.viewAmount }}
        >
          <AnimatePresence> {/* Enable exit animations for filtered items */}
            {filteredSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                variants={fadeInUp}
                whileHover={{
                  scale: 1.08,
                  rotateZ: 1,
                  boxShadow: "0 0 20px rgba(0, 255, 255, 0.4)",
                  borderColor: "#00FFFF"
                }}
                exit={{ opacity: 0, scale: 0.8, transition: { duration: 0.2 } }} // Exit animation
                transition={{ type: "spring", stiffness: animConfig.springStiffness, damping: animConfig.springDamping }}
                className="bg-gray-800 border border-gray-700 p-5 rounded-md shadow-md transition text-lg font-medium text-gray-200 flex items-center justify-center
                          hover:shadow-cyan-500/30 tech-glow-border glitch-effect"
              >
                {skill.name}
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* Experience, Education & Certifications, Projects Section -> Builds Section */}
      <section id="builds" className="px-6 py-24 text-center bg-gray-950">
        <motion.h2
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: animConfig.viewAmount }}
          className="text-4xl font-bold mb-12 text-cyan-400 heading-underline"
        >
          My Builds & Accomplishments
        </motion.h2>

        {/* Experience Sub-section */}
        <motion.h3
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: animConfig.viewAmount }}
          className="text-3xl font-bold mb-8 mt-16 text-purple-400 heading-underline"
        >
          Professional Experience
        </motion.h3>
        <div className="max-w-4xl mx-auto space-y-10">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              variants={exp.animation}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, amount: 0.2 }}
              className="bg-gray-800 border border-gray-700 p-6 rounded-md shadow-md text-left tech-glow-border glitch-effect"
            >
              <h3 className="text-xl font-semibold mb-1 text-gray-100">{exp.role}</h3>
              <p className="text-sm text-gray-400 mb-2">{exp.company} — {exp.period}</p>
              <ul className="list-disc ml-6 text-sm text-gray-300 space-y-1">
                {exp.details.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Education Sub-section */}
        <motion.h3
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: animConfig.viewAmount }}
          className="text-3xl font-bold mb-8 mt-16 text-purple-400 heading-underline"
        >
          Education & Certifications
        </motion.h3>
        <div className="max-w-4xl mx-auto space-y-10">
          {education.map((edu, idx) => (
            <motion.div
              key={idx}
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, amount: animConfig.viewAmount }}
              className="bg-gray-800 border border-gray-700 p-6 rounded-md shadow-md text-left tech-glow-border glitch-effect"
            >
              <h3 className="text-xl font-semibold mb-1 text-gray-100">{edu.degree}</h3>
              <p className="text-sm text-gray-400 mb-1">{edu.institution} — {edu.period}</p>
              <p className="text-sm text-gray-300 mb-2">GPA: {edu.gpa}</p>
              {edu.details.length > 0 && (
                <ul className="list-disc ml-6 text-sm text-gray-300 space-y-1">
                  {edu.details.map((line, i) => <li key={i}>{line}</li>)}
                </ul>
              )}
            </motion.div>
          ))}
        </div>

        {/* Certifications within Education & Certifications sub-section */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-8"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: animConfig.viewAmount }}
        >
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(0, 255, 255, 0.3)", borderColor: "#00FFFF" }}
              transition={{ type: "spring", stiffness: animConfig.springStiffness, damping: animConfig.springDamping }}
              className="bg-gray-800 border border-gray-700 p-5 rounded-md shadow-md text-left tech-glow-border glitch-effect"
            >
              <h3 className="text-xl font-semibold mb-1 text-gray-100">{cert.name}</h3>
              <p className="text-sm text-gray-400">{cert.issuer}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Projects Sub-section */}
        <motion.h3
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: animConfig.viewAmount }}
          className="text-3xl font-bold mb-8 mt-16 text-purple-400 heading-underline"
        >
          Key Projects
        </motion.h3>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: animConfig.viewAmount }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              whileHover={{ scale: 1.03, boxShadow: "0 0 20px rgba(0, 255, 255, 0.4)", borderColor: "#00FFFF" }}
              transition={{ type: "spring", stiffness: animConfig.springStiffness, damping: animConfig.springDamping }}
              className="bg-gray-800 border border-gray-700 p-6 rounded-md shadow-lg text-left flex flex-col h-full tech-glow-border glitch-effect"
            >
              <h3 className="text-xl font-semibold mb-2 text-gray-100">{project.title}</h3>
              <p className="text-sm text-gray-300 mb-4 flex-grow">{project.description}</p>
              <div className="mt-auto">
                <p className="text-xs font-semibold text-gray-400 mb-2">Technologies:</p>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, i) => (
                    <span key={i} className="bg-purple-800 text-purple-100 text-xs font-medium px-2.5 py-0.5 rounded-full border border-purple-600">
                      {tech}
                    </span>
                  ))}
                </div>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-4 inline-block text-cyan-400 hover:text-cyan-300 transition-colors duration-300 text-sm font-medium"
                  >
                    View Project &rarr;
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Contact Section -> Connect Section (Icons Only) */}
      <section id="connect" className="px-6 py-24 text-center bg-gray-900 border-t border-gray-800">
        <motion.h2
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: animConfig.viewAmount }}
          className="text-4xl font-bold mb-12 text-cyan-400 heading-underline"
        >
          Let's Connect
        </motion.h2>
        <motion.div
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: animConfig.viewAmount }}
          className="max-w-xl mx-auto bg-gray-800 border border-gray-700 p-8 rounded-md shadow-lg space-y-6 tech-glow-border glitch-effect"
        >
          <p className="text-lg text-gray-300">Feel free to reach out for collaborations or inquiries!</p>
          <div className="flex items-center justify-center gap-8 text-gray-200">
            <a href="mailto:rishikvaka28@gmail.com" className="hover:text-cyan-400 transition-colors duration-300" aria-label="Email">
              <FaEnvelope size={40} />
            </a>
            <a href="https://www.linkedin.com/in/rishik-reddy-vaka-985048194/" target="_blank" rel="noreferrer" className="hover:text-cyan-400 transition-colors duration-300" aria-label="LinkedIn">
              <FaLinkedin size={40} />
            </a>
            <a href="https://github.com/RishikVaka28" target="_blank" rel="noreferrer" className="hover:text-cyan-400 transition-colors duration-300" aria-label="GitHub">
              <FaGithub size={40} />
            </a>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-sm text-gray-500 bg-gray-950 border-t border-gray-800">
        <p>&copy; {new Date().getFullYear()} Rishik Vaka. All rights reserved.</p>
      </footer>
    </motion.div>
  );
}