import { motion, useViewportScroll, useTransform } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaSun, FaMoon } from "react-icons/fa"; // Import sun and moon icons
import { useState, useEffect } from "react";

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

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("hero");
  // --- Dark Mode State ---
  const [theme, setTheme] = useState(() => {
    // Initialize theme from localStorage or default to 'light'
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') || 'light';
    }
    return 'light';
  });

  const { scrollYProgress } = useViewportScroll();

  // Effect to apply dark class to HTML element
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    // Save theme preference to localStorage
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Function to toggle theme
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  // Parallax for background blobs
  const blob1Y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const blob2Y = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);

  // Scale for hero title on scroll
  const heroScale = useTransform(scrollYProgress, [0, 0.3], [1, 0.8]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.25], [1, 0]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'skills', 'experience', 'education', 'certifications', 'projects', 'contact'];
      let currentActive = 'hero';
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

  const skills = [
    "Python", "C++", "Shell Scripting", "PowerShell",
    "Linux/UNIX", "Ansible", "DHCP", "DNS", "Active Directory",
    "AWS", "Docker", "GitHub Actions (CI/CD)",
    "TCP/IP", "Firewall",
    "PostgreSQL", "MySQL",
    "HTML", "CSS", "JavaScript", "React",
    "OOP", "Data Structures", "Algorithms", "Design Patterns",
    "Git", "Agile/Scrum", "Security Policy Implementation", "Automation"
  ];

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
      // Added dark mode classes for main container
      className="relative bg-gradient-to-tr from-indigo-50 via-white to-rose-50 text-gray-900 font-sans scroll-smooth overflow-x-hidden min-h-screen
                 dark:from-gray-900 dark:via-gray-950 dark:to-blue-950 dark:text-gray-100"
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

        .grid-overlay {
          background-image:
            repeating-linear-gradient(0deg, rgba(0,0,0,0.02) 0px, rgba(0,0,0,0.02) 1px, transparent 1px, transparent 30px),
            repeating-linear-gradient(90deg, rgba(0,0,0,0.02) 0px, rgba(0,0,0,0.02) 1px, transparent 1px, transparent 30px);
        }
        .dark .grid-overlay {
          background-image:
            repeating-linear-gradient(0deg, rgba(255,255,255,0.03) 0px, rgba(255,255,255,0.03) 1px, transparent 1px, transparent 30px),
            repeating-linear-gradient(90deg, rgba(255,255,255,0.03) 0px, rgba(255,255,255,0.03) 1px, transparent 1px, transparent 30px);
        }
      `}</style>

      {/* Background Blobs with Parallax */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          style={{ y: blob1Y }}
          className="absolute w-[1200px] h-[1200px] bg-gradient-to-tr from-purple-400 via-pink-300 to-yellow-200 opacity-30 blur-[150px] rounded-full top-[-300px] left-[-400px] animate-[spin_45s_linear_infinite,floatY_18s_ease-in-out_infinite]
                     dark:from-purple-600 dark:via-pink-500 dark:to-yellow-400 dark:opacity-20"
        />
        <motion.div
          style={{ y: blob2Y }}
          className="absolute w-[900px] h-[900px] bg-gradient-to-bl from-blue-300 via-purple-200 to-pink-100 opacity-30 blur-[130px] rounded-full bottom-[-250px] right-[-350px] animate-[spin_65s_reverse_linear_infinite,floatY_22s_ease-in-out_infinite]
                     dark:from-blue-600 dark:via-purple-500 dark:to-pink-400 dark:opacity-20"
        />
        <div className="grid-overlay absolute inset-0 -z-10 opacity-75 pointer-events-none" />
      </div>

      {/* Navigation Bar */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        // Added dark mode classes for nav
        className="fixed top-0 left-0 right-0 z-50 bg-white bg-opacity-80 backdrop-filter backdrop-blur-lg shadow-md py-4 px-6 md:px-12 flex justify-between items-center
                   dark:bg-gray-900 dark:bg-opacity-80 dark:shadow-xl dark:shadow-gray-950"
      >
        <div className="flex space-x-6 md:space-x-10 text-gray-700 font-medium text-lg dark:text-gray-300">
          {['hero', 'about', 'skills', 'experience', 'education', 'certifications', 'projects', 'contact'].map((sectionId) => (
            <button
              key={sectionId}
              onClick={() => scrollToSection(sectionId)}
              className={`hover:text-purple-600 transition duration-300
                          ${activeSection === sectionId ? 'text-purple-600 font-bold border-b-2 border-purple-600 dark:text-purple-400 dark:border-purple-400' : ''}`}
            >
              {sectionId.charAt(0).toUpperCase() + sectionId.slice(1)}
            </button>
          ))}
        </div>
        {/* Theme Toggle Button */}
        <button
          onClick={toggleTheme}
          className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200
                     hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-300"
          aria-label="Toggle theme"
        >
          {theme === 'light' ? <FaMoon size={20} /> : <FaSun size={20} />}
        </button>
      </motion.nav>

      {/* Hero Section */}
      <section id="hero" className="flex flex-col items-center justify-center text-center pt-48 pb-32 px-6 min-h-screen">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="space-y-6 max-w-4xl mx-auto"
        >
          <motion.h1
            style={{ scale: heroScale, opacity: heroOpacity }}
            className="text-5xl md:text-7xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500
                       dark:from-purple-400 dark:to-pink-400"
          >
            Naga Sai Rishik Reddy Vaka
          </motion.h1>
          <motion.p
            variants={fadeInUp}
            className="text-xl md:text-2xl text-gray-700 dark:text-gray-300"
          >
            Backend Software Engineer — building fast, automated, scalable infrastructure.
          </motion.p>
          <motion.div
            variants={fadeInUp}
            className="flex justify-center gap-6 text-2xl text-gray-700 dark:text-gray-300"
          >
            <a href="https://github.com/RishikVaka28" target="_blank" rel="noreferrer" className="hover:text-black dark:hover:text-white">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/rishik-reddy-vaka-985048194/" target="_blank" rel="noreferrer" className="hover:text-black dark:hover:text-white">
              <FaLinkedin />
            </a>
            <a href="mailto:rishikvaka28@gmail.com" className="hover:text-black dark:hover:text-white">
              <FaEnvelope />
            </a>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: [0, 15, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="mt-10 text-gray-400 dark:text-gray-500"
          >
            ↓ Scroll
          </motion.div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="px-6 py-24 text-center bg-gray-50 dark:bg-gray-900">
        <motion.h2
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: animConfig.viewAmount }}
          className="text-4xl font-bold mb-10"
        >
          About Me
        </motion.h2>
        <motion.p
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: animConfig.viewAmount }}
          className="text-lg md:text-xl text-gray-800 dark:text-gray-200 max-w-3xl mx-auto leading-relaxed"
        >
          A highly motivated and results-driven **Backend Software Engineer** with over 3 years of experience in Python, C++, and Linux systems, specializing in scalable backend systems, API development, and cloud integration.
          I have a proven track record leading AWS-based backend modernization at Cognizant and streamlining Linux server deployments at Southern Illinois University using Ansible, Docker, and Shell scripting.
          My expertise also includes strong command of OOP, data structures, and algorithms, with hands-on experience in PostgreSQL, MySQL, and Agile collaboration.
          I excel at transforming complex technical challenges into streamlined solutions that directly impact operational efficiency and user experience.
        </motion.p>
      </section>

      {/* Skills Section */}
      <section id="skills" className="px-6 py-24 text-center relative z-10">
        <motion.h2
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: animConfig.viewAmount }}
          className="text-4xl font-bold mb-10"
        >
          Skills
        </motion.h2>
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 max-w-6xl mx-auto"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: animConfig.viewAmount }}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              whileHover={{
                scale: 1.08,
                rotateZ: 1,
                boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.15)",
              }}
              transition={{ type: "spring", stiffness: animConfig.springStiffness, damping: animConfig.springDamping }}
              // Added dark mode classes for skill cards
              className="bg-white border border-gray-200 p-5 rounded-xl shadow-md hover:shadow-xl transition text-lg font-medium text-gray-800 flex items-center justify-center
                         dark:bg-gray-800 dark:border-gray-700 dark:shadow-lg dark:shadow-gray-950 dark:text-gray-200"
            >
              {skill}
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="px-6 py-24 text-center bg-gray-50 dark:bg-gray-900">
        <motion.h2
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: animConfig.viewAmount }}
          className="text-4xl font-bold mb-12"
        >
          Experience
        </motion.h2>
        <div className="max-w-4xl mx-auto space-y-10">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              variants={exp.animation}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, amount: 0.2 }}
              // Added dark mode classes for experience cards
              className="bg-white border border-gray-200 p-6 rounded-xl shadow-md text-left
                         dark:bg-gray-800 dark:border-gray-700 dark:shadow-lg dark:shadow-gray-950"
            >
              <h3 className="text-xl font-semibold mb-1">{exp.role}</h3>
              <p className="text-sm text-gray-500 mb-2 dark:text-gray-400">{exp.company} — {exp.period}</p>
              <ul className="list-disc ml-6 text-sm text-gray-700 space-y-1 dark:text-gray-300">
                {exp.details.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="px-6 py-24 text-center">
        <motion.h2
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: animConfig.viewAmount }}
          className="text-4xl font-bold mb-12"
        >
          Education
        </motion.h2>
        <div className="max-w-4xl mx-auto space-y-10">
          {education.map((edu, idx) => (
            <motion.div
              key={idx}
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, amount: animConfig.viewAmount }}
              // Added dark mode classes for education cards
              className="bg-white border border-gray-200 p-6 rounded-xl shadow-md text-left
                         dark:bg-gray-800 dark:border-gray-700 dark:shadow-lg dark:shadow-gray-950"
            >
              <h3 className="text-xl font-semibold mb-1">{edu.degree}</h3>
              <p className="text-sm text-gray-500 mb-1 dark:text-gray-400">{edu.institution} — {edu.period}</p>
              <p className="text-sm text-gray-700 mb-2 dark:text-gray-300">GPA: {edu.gpa}</p>
              {edu.details.length > 0 && (
                <ul className="list-disc ml-6 text-sm text-gray-700 space-y-1 dark:text-gray-300">
                  {edu.details.map((line, i) => <li key={i}>{line}</li>)}
                </ul>
              )}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="px-6 py-24 text-center bg-gray-50 dark:bg-gray-900">
        <motion.h2
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: animConfig.viewAmount }}
          className="text-4xl font-bold mb-12"
        >
          Certifications
        </motion.h2>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: animConfig.viewAmount }}
        >
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              whileHover={{ scale: 1.05, boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.1)" }}
              transition={{ type: "spring", stiffness: animConfig.springStiffness, damping: animConfig.springDamping }}
              // Added dark mode classes for certification cards
              className="bg-white border border-gray-200 p-5 rounded-xl shadow-md text-left
                         dark:bg-gray-800 dark:border-gray-700 dark:shadow-lg dark:shadow-gray-950"
            >
              <h3 className="text-xl font-semibold mb-1">{cert.name}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">{cert.issuer}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="px-6 py-24 text-center">
        <motion.h2
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: animConfig.viewAmount }}
          className="text-4xl font-bold mb-12"
        >
          Projects
        </motion.h2>
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
              whileHover={{ scale: 1.03, boxShadow: "0px 15px 30px rgba(0, 0, 0, 0.18)" }}
              transition={{ type: "spring", stiffness: animConfig.springStiffness, damping: animConfig.springDamping }}
              // Added dark mode classes for project cards
              className="bg-white border border-gray-200 p-6 rounded-xl shadow-lg text-left flex flex-col h-full
                         dark:bg-gray-800 dark:border-gray-700 dark:shadow-xl dark:shadow-gray-950"
            >
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-sm text-gray-700 mb-4 flex-grow dark:text-gray-300">{project.description}</p>
              <div className="mt-auto">
                <p className="text-xs font-semibold text-gray-600 mb-2 dark:text-gray-400">Technologies:</p>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, i) => (
                    <span key={i} className="bg-purple-100 text-purple-800 text-xs font-medium px-2.5 py-0.5 rounded-full
                                             dark:bg-purple-800 dark:text-purple-100">
                      {tech}
                    </span>
                  ))}
                </div>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-4 inline-block text-purple-600 hover:text-purple-800 transition-colors duration-300 text-sm font-medium
                               dark:text-purple-400 dark:hover:text-purple-300"
                  >
                    View Project &rarr;
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="px-6 py-24 text-center bg-gray-50 dark:bg-gray-900">
        <motion.h2
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: animConfig.viewAmount }}
          className="text-4xl font-bold mb-12"
        >
          Contact Me
        </motion.h2>
        <motion.div
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: animConfig.viewAmount }}
          // Added dark mode classes for contact card
          className="max-w-2xl mx-auto bg-white border border-gray-200 p-8 rounded-xl shadow-md space-y-4
                     dark:bg-gray-800 dark:border-gray-700 dark:shadow-lg dark:shadow-gray-950"
        >
          <p className="text-lg text-gray-700 dark:text-gray-300">Feel free to reach out for collaborations or inquiries!</p>
          <div className="flex items-center justify-center gap-4 text-gray-800 dark:text-gray-200">
            <FaEnvelope className="text-2xl text-purple-600 dark:text-purple-400" />
            <a href="mailto:rishikvaka28@gmail.com" className="text-lg hover:text-purple-700 transition-colors duration-300 dark:hover:text-purple-300">
              rishikvaka28@gmail.com
            </a>
          </div>
          <div className="flex items-center justify-center gap-4 text-gray-800 dark:text-gray-200">
            <FaLinkedin className="text-2xl text-purple-600 dark:text-purple-400" />
            <a href="https://www.linkedin.com/in/rishik-reddy-vaka-985048194/" target="_blank" rel="noreferrer" className="text-lg hover:text-purple-700 transition-colors duration-300 dark:hover:text-purple-300">
              LinkedIn Profile
            </a>
          </div>
          <div className="flex items-center justify-center gap-4 text-gray-800 dark:text-gray-200">
            <FaGithub className="text-2xl text-purple-600 dark:text-purple-400" />
            <a href="https://github.com/RishikVaka28" target="_blank" rel="noreferrer" className="text-lg hover:text-purple-700 transition-colors duration-300 dark:hover:text-purple-300">
              GitHub Profile
            </a>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-sm text-gray-500 bg-white border-t border-gray-100
                         dark:bg-gray-900 dark:border-gray-800 dark:text-gray-400">
        <p>&copy; {new Date().getFullYear()} Rishik Vaka. All rights reserved.</p>
      </footer>
    </motion.div>
  );
}