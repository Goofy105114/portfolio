import Link from "next/link";

const techStack = [
  "Python",
  "C++",
  "JavaScript",
  "SQL",
  "HTML",
  "CSS",
  "React",
  "PostgreSQL",
  "MongoDB",
  "AWS",
  "Git",
  "GitHub",
  "DevOps",
  "System Design",
];

const projects = [
  {
    title: "MatsyaSetu App",
    description:
      "Built a product-focused TypeScript app experience focused on user-first interaction and real-world workflow thinking.",
    tags: ["TypeScript", "Product", "UX"],
  },
  {
    title: "Python Chatbot",
    description:
      "Explored conversational interfaces and NLP workflows using Python-based experimentation and foundational language understanding concepts.",
    tags: ["Python", "NLP", "Chatbot"],
  },
  {
    title: "HealthSecure",
    description:
      "Worked on a data and security-focused health application concept exploring integrity, traceability, and trust in digital records.",
    tags: ["Python", "Security", "HealthTech"],
  },
  {
    title: "Machine Link",
    description:
      "Explored full-stack product thinking and application architecture through a JavaScript-based project direction.",
    tags: ["JavaScript", "Full-Stack", "Web"],
  },
];

export default function ResumePage() {
  return (
    <main className="resume-shell">
      <div className="resume-wrap">
        <div className="resume-topbar">
          <Link href="/" className="brand" aria-label="Back to portfolio home">
            <span className="brand-mark">G</span>
            <span>GOOFY<span className="brand-dot">.</span></span>
          </Link>
          <a className="button button-outline" href="https://docs.google.com/document/d/1zG2knTd5Mjgrvuo0tverLD3LSwO4KuOt1T4pL2u3ues/edit?tab=t.0" target="_blank" rel="noreferrer">
            Open resume <span>↗</span>
          </a>
        </div>

        <article className="resume-card">
          <header className="resume-header">
            <div>
              <p className="resume-badge">Portfolio Resume</p>
              <h1 className="resume-name">Ankit Verma</h1>
              <p className="resume-role">AI / ML • Software Engineering • Visual Storytelling</p>
            </div>
            <div className="resume-meta">
              <span>ankit105114@gmail.com</span>
              <span>GitHub / Goofy105114</span>
              <span>LinkedIn / ankitverma10</span>
            </div>
          </header>

          <div className="resume-grid">
            <section className="resume-section">
              <h3>Summary</h3>
              <p className="resume-summary">
                Computer Science student exploring AI/ML, data-driven systems, and thoughtful software
                engineering. I enjoy building meaningful products, learning through practical projects,
                and connecting technical work with clarity, story, and user experience.
              </p>
            </section>

            <section className="resume-section">
              <h3>Contact</h3>
              <div className="resume-contacts">
                <a href="mailto:ankit105114@gmail.com">ankit105114@gmail.com</a>
                <a href="https://github.com/Goofy105114" target="_blank" rel="noreferrer">github.com/Goofy105114</a>
                <a href="https://www.linkedin.com/in/ankitverma10/" target="_blank" rel="noreferrer">linkedin.com/in/ankitverma10</a>
                <a href="https://www.youtube.com/@Gigcel" target="_blank" rel="noreferrer">youtube.com/@Gigcel</a>
              </div>
            </section>

            <section className="resume-section">
              <h3>Core Projects</h3>
              {projects.map((project) => (
                <div key={project.title} className="resume-project">
                  <h4>{project.title}</h4>
                  <p>{project.description}</p>
                  <div className="tag-row">
                    {project.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                </div>
              ))}
            </section>

            <section className="resume-section">
              <h3>Tech Stack</h3>
              <div className="resume-skills">
                {techStack.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </section>

            <section className="resume-section">
              <h3>Education</h3>
              <div className="resume-edu">
                <p>
                  Computer Science student with a focus on software development, system thinking,
                  machine learning, and applied data science.
                </p>
              </div>
            </section>

            <section className="resume-section">
              <h3>Focus</h3>
              <ul className="resume-list">
                <li>AI / ML fundamentals and practical implementation</li>
                <li>Full-stack product development and clean interfaces</li>
                <li>Data-driven system design and engineering workflows</li>
                <li>Learning through building, storytelling, and iteration</li>
              </ul>
            </section>
          </div>
        </article>
      </div>
    </main>
  );
}
