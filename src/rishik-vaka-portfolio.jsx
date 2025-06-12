import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaCode, FaServer, FaCloud } from "react-icons/fa";

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export default function Portfolio() {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      className="relative bg-white text-gray-900 font-sans scroll-smooth overflow-x-hidden"
    >
      {/* Navbar */}
      <motion.nav
        variants={fadeInUp}
        className="fixed top-0 left-0 w-full z-50 px-8 py-4 flex justify-between items-center bg-white/70 backdrop-blur-md border-b border-gray-200 shadow-sm"
      >
        <h1 className="text-xl font-bold tracking-tight">Rishik</h1>
        <ul className="hidden md:flex gap-6 text-sm font-medium">
          <li><a href="#about" className="hover:text-purple-600 transition">About</a></li>
          <li><a href="#skills" className="hover:text-purple-600 transition">Skills</a></li>
          <li><a href="#experience" className="hover:text-purple-600 transition">Experience</a></li>
          <li><a href="#education" className="hover:text-purple-600 transition">Education</a></li>
        </ul>
      </motion.nav>

      {/* Hero Section */}
      <section id="hero" className="flex flex-col items-center justify-center text-center pt-48 pb-32 px-6 min-h-screen">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="space-y-6"
        >
          <motion.h1
            variants={fadeInUp}
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
            className="flex gap-6 text-2xl text-gray-700"
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
        </motion.div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="px-6 py-24 text-center">
        <motion.h2
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="text-4xl font-bold mb-10"
        >
          Skills
        </motion.h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {[
            { name: "Python", icon: <FaCode /> },
            { name: "Docker", icon: <FaServer /> },
            { name: "AWS", icon: <FaCloud /> },
            { name: "Ansible" }, { name: "Linux" }, { name: "CI/CD" },
            { name: "PostgreSQL" }, { name: "GitHub Actions" },
            { name: "Shell Scripting" }, { name: "PowerShell" },
            { name: "HTML/CSS/JS" }, { name: "OOP & DSA" }
          ].map((skill, index) => (
            <motion.div
              key={index}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ scale: 1.05, rotate: 1 }}
              className="bg-white border border-gray-200 p-6 rounded-xl shadow hover:shadow-xl transition flex flex-col items-center justify-center"
            >
              <div className="text-3xl mb-2 text-purple-600">{skill.icon}</div>
              <div className="font-medium text-gray-800">{skill.name}</div>
            </motion.div>
          ))}
        </div>
      </section>
    </motion.div>
  );
}