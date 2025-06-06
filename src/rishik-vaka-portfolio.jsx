import { motion } from "framer-motion";

export default function Portfolio() {
  return (
    <div className="bg-gray-950 text-white min-h-screen font-sans">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center py-24 px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold mb-4"
        >
          Naga Sai Rishik Reddy Vaka
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-xl max-w-2xl"
        >
          Backend & DevOps Engineer | Python • AWS • Docker • Linux • Automation
        </motion.p>
        <div className="mt-8 flex gap-4">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-white px-4 py-2 rounded hover:bg-white hover:text-black transition"
          >
            Download Resume
          </a>
          <a
            href="#projects"
            className="bg-white text-black px-4 py-2 rounded hover:bg-gray-200 transition"
          >
            View Projects
          </a>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="px-6 py-16 bg-gray-900">
        <h2 className="text-3xl font-semibold mb-12 text-center">Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gray-800 border border-gray-700 p-6 rounded shadow-md hover:shadow-xl transition duration-300"
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
