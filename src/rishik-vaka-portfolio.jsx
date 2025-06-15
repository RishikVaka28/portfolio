import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const slideInLeft = {
  initial: { opacity: 0, x: -50 },
  animate: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const slideInRight = {
  initial: { opacity: 0, x: 50 },
  animate: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const staggerContainer = {
  initial: {},
  animate: {
    transition: { staggerChildren: 0.15 },
  },
};

export default function Portfolio() {
  const skills = [
    "Python", "C++", "Bash", "JavaScript",
    "Linux", "Ansible", "Shell Scripting", "Docker",
    "REST APIs", "PostgreSQL", "MySQL",
    "Git", "GitHub Actions", "CI/CD",
    "HTML", "CSS", "React",
    "OOP", "Data Structures", "Algorithms", "Networking"
  ];

  const experiences = [
    {
      role: "Student System Administrator",
      company: "Southern Illinois University (SIU)",
      period: "Aug 2023 – May 2025",
      details: [
        "Automated Linux provisioning reducing setup time by 70%.",
        "Managed Hyper-V, VMware, and secure deployments.",
        "Maintained CI/CD for Linux workflows and user management."
      ],
      animation: slideInLeft
    },
    {
      role: "Programmer Analyst Trainee",
      company: "Cognizant",
      period: "Jun 2022 – Jul 2023",
      details: [
        "Trained in software engineering and Linux systems.",
        "Supported AWS EC2 migration and Linux deployment testing.",
        "Maintained COBOL/JCL code, monitored systems, contributed to documentation."
      ],
      animation: slideInRight
    }
  ];

  return (
    <motion.div
      initial="initial"
      animate="animate"
      className="relative bg-gradient-to-tr from-indigo-50 via-white to-rose-50 text-gray-900 font-sans scroll-smooth overflow-x-hidden min-h-screen"
    >
      {/* Keyframes */}
      <style>{`
        @keyframes floatY {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(30px); }
        }
      `}</style>

      {/* Animated Background Blobs */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute w-[1000px] h-[1000px] bg-gradient-to-tr from-purple-400 via-pink-300 to-yellow-200 opacity-40 blur-[120px] rounded-full top-[-250px] left-[-300px] animate-[spin_40s_linear_infinite,floatY_16s_ease-in-out_infinite]" />
        <div className="absolute w-[800px] h-[800px] bg-gradient-to-bl from-blue-300 via-purple-200 to-pink-100 opacity-40 blur-[100px] rounded-full bottom-[-200px] right-[-250px] animate-[spin_60s_reverse_linear_infinite,floatY_20s_ease-in-out_infinite]" />
      </div>

      {/* Hero Section */}
      <section id="hero" className="flex flex-col items-center justify-center text-center pt-48 pb-32 px-6 min-h-screen">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          className="space-y-6"
        >
          <motion.h1
            variants={fadeInUp}
            whileInView={{ scale: 1.05 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-7xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500"
          >
            Rishik Vaka
          </motion.h1>
          <motion.p
            variants={fadeInUp}
            className="text-xl md:text-2xl text-gray-700 max-w-2xl"
          >
            DevOps & Backend Engineer — building fast, automated, scalable infrastructure.
          </motion.p>
          <motion.div
            variants={fadeInUp}
            className="flex justify-center gap-6 text-2xl text-gray-700"
          >
            <a href="https://github.com/RishikVaka28" target="_blank" rel="noreferrer" className="hover:text-black">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/rishik-reddy-vaka-985048194/" target="_blank" rel="noreferrer" className="hover:text-black">
              <FaLinkedin />
            </a>
            <a href="mailto:rishikvaka28@gmail.com" className="hover:text-black">
              <FaEnvelope />
            </a>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: [0, 15, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="mt-10 text-gray-400"
          >
            ↓ Scroll
          </motion.div>
        </motion.div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="px-6 py-24 text-center relative z-10">
        <motion.h2
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          className="text-4xl font-bold mb-10"
        >
          Skills
        </motion.h2>
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-6xl mx-auto"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              whileHover={{ scale: 1.08, rotate: 0.3 }}
              transition={{ type: "spring", stiffness: 250 }}
              className="bg-white border border-gray-200 p-5 rounded-xl shadow-md hover:shadow-xl transition text-lg font-medium text-gray-800"
            >
              {skill}
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="px-6 py-24 text-center">
        <motion.h2
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
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
              transition={{ duration: 0.6 }}
              className="bg-white border border-gray-200 p-6 rounded-xl shadow-md text-left"
            >
              <h3 className="text-xl font-semibold mb-1">{exp.role}</h3>
              <p className="text-sm text-gray-500 mb-2">{exp.company} — {exp.period}</p>
              <ul className="list-disc ml-6 text-sm text-gray-700 space-y-1">
                {exp.details.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>
    </motion.div>
  );
}