import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaCode, FaServer, FaCloud } from "react-icons/fa";

export default function Portfolio() {
  return (
    <div className="relative bg-gradient-to-tr from-white via-gray-100 to-white text-gray-900 font-sans scroll-smooth overflow-x-hidden">
      {/* Animated Background Blobs */}
      <div className="absolute top-0 left-0 w-[700px] h-[700px] bg-gradient-to-tr from-purple-400 via-pink-300 to-yellow-200 opacity-20 blur-3xl rounded-full animate-pulse -z-10" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-blue-200 via-purple-300 to-pink-200 opacity-20 blur-3xl rounded-full animate-pulse -z-10" />

      {/* Navbar */}
      <motion.nav
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
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
        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500"
        >
          Rishik Vaka
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-xl md:text-2xl text-gray-700 max-w-2xl mb-8"
        >
          DevOps & Backend Engineer — building fast, automated, scalable infrastructure.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="flex gap-6 text-2xl text-gray-700"
        >
          <a href="https://github.com/RishikVaka28" target="_blank" rel="noreferrer" className="hover:text-black"><FaGithub /></a>
          <a href="https://www.linkedin.com/in/rishik-reddy-vaka-985048194/" target="_blank" rel="noreferrer" className="hover:text-black"><FaLinkedin /></a>
          <a href="mailto:rishikvaka28@gmail.com" className="hover:text-black"><FaEnvelope /></a>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="px-6 py-32 text-center">
        <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="text-4xl font-bold mb-10">About Me</motion.h2>
        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.1 }} className="max-w-4xl mx-auto text-lg text-gray-700 leading-relaxed">
          I’m Rishik, a Backend & DevOps Engineer with 3+ years of experience creating cloud-native, scalable infrastructure. I specialize in automation, CI/CD, and efficient deployment workflows using Python, Docker, AWS, and Ansible.
        </motion.p>
      </section>

      {/* Skills Section */}
      <section id="skills" className="px-6 py-24 bg-gradient-to-bl from-white via-gray-100 to-white text-center">
        <motion.h2 whileInView={{ opacity: 1 }} initial={{ opacity: 0 }} transition={{ duration: 0.5 }} className="text-4xl font-bold mb-10">Skills</motion.h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {[
            { name: "Python", icon: <FaCode /> },
            { name: "Docker", icon: <FaServer /> },
            { name: "AWS", icon: <FaCloud /> },
            { name: "Ansible" }, { name: "Linux" }, { name: "CI/CD" }, { name: "PostgreSQL" },
            { name: "GitHub Actions" }, { name: "Shell Scripting" }, { name: "PowerShell" },
            { name: "HTML/CSS/JS" }, { name: "OOP & DSA" }
          ].map(skill => (
            <motion.div key={skill.name} whileHover={{ scale: 1.05 }} whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 20 }} transition={{ duration: 0.5 }}
              className="bg-white border border-gray-200 p-6 rounded-xl shadow hover:shadow-xl transition flex flex-col items-center justify-center">
              <div className="text-3xl mb-2 text-purple-600">{skill.icon}</div>
              <div className="font-medium text-gray-800">{skill.name}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="px-6 py-24 bg-white text-center">
        <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5 }} className="text-4xl font-bold mb-12">Experience</motion.h2>
        <div className="max-w-4xl mx-auto space-y-10">
          <motion.div whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: -50 }} transition={{ duration: 0.6 }}
            className="bg-gray-50 border border-gray-200 p-6 rounded-xl shadow-md text-left">
            <h3 className="text-xl font-semibold">Student System Administrator – SIU</h3>
            <p className="text-sm text-gray-500 mb-2">Aug 2023 – May 2025</p>
            <ul className="text-sm text-gray-700 list-disc ml-6 space-y-1">
              <li>Automated Linux provisioning (70% faster deployments).</li>
              <li>Managed Hyper-V + VMware and security configurations.</li>
              <li>Enforced CI pipelines and reduced manual overhead.</li>
            </ul>
          </motion.div>
          <motion.div whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: 50 }} transition={{ duration: 0.6 }}
            className="bg-gray-50 border border-gray-200 p-6 rounded-xl shadow-md text-left">
            <h3 className="text-xl font-semibold">Programmer Analyst Trainee – Cognizant</h3>
            <p className="text-sm text-gray-500 mb-2">Jun 2022 – Jul 2023</p>
            <ul className="text-sm text-gray-700 list-disc ml-6 space-y-1">
              <li>Completed training in software engineering and Linux admin.</li>
              <li>Worked on migrating legacy systems to AWS EC2 and testing workflows.</li>
              <li>Maintained COBOL/JCL code; monitored Linux servers and CI/CD jobs.</li>
              <li>Participated in QA and documentation for internal tools.</li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="px-6 py-24 bg-gradient-to-t from-white via-gray-100 to-white text-center">
        <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5 }} className="text-4xl font-bold mb-12">Education</motion.h2>
        <div className="max-w-4xl mx-auto space-y-10">
          <motion.div whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 30 }} transition={{ duration: 0.6 }}
            className="bg-white border border-gray-200 p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold">M.S. in Computer Science – Southern Illinois University (SIU)</h3>
            <p className="text-sm text-gray-500">Aug 2023 – May 2025 (Expected)</p>
            <p className="text-sm text-gray-700 mt-2">GPA: 3.81 / 4.0</p>
            <p className="text-sm text-gray-600 mt-1">Thesis: Robot Intention Recognition using RNNs, Transformers, and Bayesian Inference</p>
          </motion.div>
          <motion.div whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 30 }} transition={{ duration: 0.6 }}
            className="bg-white border border-gray-200 p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold">B.Tech in Computer Science – GITAM University</h3>
            <p className="text-sm text-gray-500">Jul 2018 – May 2022</p>
            <p className="text-sm text-gray-700 mt-2">GPA: 7.74 / 10</p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}