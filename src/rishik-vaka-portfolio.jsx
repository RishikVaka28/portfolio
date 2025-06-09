import { motion } from "framer-motion";

export default function Portfolio() {
  return (
    <div className="bg-black text-white font-sans">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center py-36 px-6 text-center min-h-screen bg-gradient-to-b from-black via-gray-900 to-gray-800">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-6xl font-bold mb-4 tracking-tight"
        >
          Naga Sai Rishik Reddy Vaka
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-2xl max-w-3xl text-gray-300"
        >
          DevOps & Backend Engineer – Automating infrastructure. Building scalable systems. Delivering clean code.
        </motion.p>
        <div className="mt-10 flex gap-4">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-white px-6 py-3 rounded hover:bg-white hover:text-black transition text-lg"
          >
            Download Resume
          </a>
          <a
            href="#projects"
            className="bg-white text-black px-6 py-3 rounded hover:bg-gray-200 transition text-lg"
          >
            View Projects
          </a>
        </div>
      </section>

      {/* About Section */}
      <section className="px-6 py-24 bg-black text-center">
        <h2 className="text-4xl font-bold mb-6">About Me</h2>
        <p className="max-w-4xl mx-auto text-lg text-gray-400 leading-relaxed">
          I'm Rishik, a DevOps and Backend engineer passionate about building reliable systems with automation and scale in mind.
          With experience in AWS, Docker, Ansible, and Python, I've modernized infrastructure at Cognizant and streamlined Linux deployments at SIU.
          I'm focused on delivering clean architecture and real-world efficiency.
        </p>
      </section>

      {/* Projects Section */}
      <section id="projects" className="px-6 py-24 bg-gradient-to-b from-gray-900 to-gray-950">
        <h2 className="text-4xl font-semibold mb-12 text-center">Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gray-800 border border-gray-700 p-6 rounded-xl shadow-md hover:shadow-2xl transition duration-300"
            >
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-sm text-gray-400 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="bg-gray-700 text-xs px-2 py-1 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline"
              >
                View on GitHub
              </a>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}

const projects = [
  {
    title: "Health Integration Dashboard",
    description:
      "Full-stack app integrating Oura Ring API, PostgreSQL backend, and data visualized via Dash + Plotly.",
    tags: ["Python", "Dash", "PostgreSQL", "API", "Plotly"],
    link: "https://github.com/RishikVaka28/oura-dashboard",
  },
  {
    title: "Stock Market Dashboard",
    description:
      "Real-time financial visualization using Flask, Alpha Vantage API, and HTML/CSS/JS.",
    tags: ["Flask", "JavaScript", "API", "HTML", "CSS"],
    link: "https://github.com/RishikVaka28/stock-dashboard",
  },
  {
    title: "Breast Cancer Detection",
    description:
      "ML model using Keras, SVM, and Matplotlib for predictive cancer classification.",
    tags: ["Keras", "SVM", "Matplotlib", "ML"],
    link: "https://github.com/RishikVaka28/cancer-detector",
  },
  {
    title: "Currency Converter API",
    description:
      "RESTful Flask API providing real-time currency exchange conversion.",
    tags: ["Flask", "REST API", "Backend"],
    link: "https://github.com/RishikVaka28/currency-api",
  },
  {
    title: "Gender Detection Model",
    description:
      "Keras and TensorFlow based classification model to identify gender from input traits.",
    tags: ["Keras", "TensorFlow", "ML"],
    link: "https://github.com/RishikVaka28/gender-detection",
  },
  {
    title: "Product Showcase Website",
    description:
      "Responsive static website using HTML and CSS to showcase headphone products.",
    tags: ["HTML", "CSS", "Frontend"],
    link: "https://github.com/RishikVaka28/headphone-showcase",
  },
];