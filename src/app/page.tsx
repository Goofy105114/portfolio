"use client";

import { useEffect, useState } from "react";
import ThreeField from "@/components/ThreeField";
import CursorDot from "@/components/CursorDot";

const navItems = ["About", "Work", "AI/ML", "GIGCEL", "Journey", "Contact"];
const resumeUrl = "https://docs.google.com/document/d/1zG2knTd5Mjgrvuo0tverLD3LSwO4KuOt1T4pL2u3ues/edit?tab=t.0";
const projects = [
  { number: "01", category: "PRODUCT / MOBILE", title: "MatsyaSetu App", description: "A TypeScript application exploring a focused product experience.", tags: ["TypeScript", "App"], href: "https://github.com/Goofy105114/MatsyaSetu-App", code: "const project = 'matsyasetu-app';" },
  { number: "02", category: "AI / NLP", title: "Python Chatbot", description: "A conversational Python project using natural language toolkit ideas.", tags: ["Python", "NLTK"], href: "https://github.com/Goofy105114/python-chatbot", code: "bot.listen(message);" },
  { number: "03", category: "DATA / HEALTH", title: "HealthSecure", description: "A blockchain-based medical record system exploring decentralized data integrity.", tags: ["Python", "Streamlit"], href: "https://github.com/Goofy105114/health-blockchain", code: "records.verify_integrity();" },
  { number: "04", category: "FULL-STACK", title: "Machine Link", description: "A JavaScript project exploring application development and interaction.", tags: ["JavaScript", "Web"], href: "https://github.com/Goofy105114/machine-link-project", code: "machine.connect(user);" },
];
const learning = ["Python", "NumPy", "Pandas", "Matplotlib", "Scikit-learn", "Statistics", "Mathematics for ML", "Machine Learning", "Deep Learning", "NLP", "Computer Vision", "Generative AI", "LLMs", "MLOps", "Data Engineering"];
const engineering = ["C++", "Python", "JavaScript", "React", "Node.js", "REST APIs", "SQL", "PostgreSQL", "MongoDB", "Git / GitHub", "Cloud", "AWS / GCP", "Docker", "DevOps", "System Design"];

function Arrow() { return <span aria-hidden="true">↗</span>; }

export default function Home() {
  const [activeSection, setActiveSection] = useState("Home");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const sections = ["home", ...navItems.map((item) => item.toLowerCase().replace("/", "-"))];
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
      if (entry.isIntersecting) setActiveSection(entry.target.id === "home" ? "Home" : navItems.find((item) => item.toLowerCase().replace("/", "-") === entry.target.id) || "Home");
    }), { rootMargin: "-35% 0px -55%" });
    sections.forEach((id) => { const node = document.getElementById(id); if (node) observer.observe(node); });
    return () => observer.disconnect();
  }, []);

  return (
    <main>
      <CursorDot />
      <nav className="nav-shell" aria-label="Primary navigation">
        <a className="brand" href="#home" onClick={() => setMenuOpen(false)}><span className="brand-mark">G</span><span>GOOFY<span className="brand-dot">.</span></span></a>
        <button className="menu-toggle" aria-expanded={menuOpen} aria-label="Toggle navigation" onClick={() => setMenuOpen(!menuOpen)}><span /><span /></button>
        <div className={`nav-links ${menuOpen ? "is-open" : ""}`}>{navItems.map((item) => <a key={item} className={activeSection === item ? "active" : ""} href={`#${item.toLowerCase().replace("/", "-")}`} onClick={() => setMenuOpen(false)}>{item}</a>)}</div>
        <a className="nav-contact" href="#contact">Let&apos;s talk <Arrow /></a>
      </nav>

      <section className="hero section-wrap" id="home"><ThreeField /><div className="hero-copy reveal"><p className="eyebrow"><span className="status-dot" /> Open to learning, building &amp; collaborating</p><h1>Building intelligent<br /><em>things.</em><br />Telling meaningful<br /><em>stories.</em></h1><p className="hero-intro">Computer Science student exploring AI/ML, Data Science, software engineering, and visual storytelling.</p><div className="hero-actions"><a className="button button-primary" href="#work">View my work <Arrow /></a><a className="button button-outline" href={resumeUrl} target="_blank" rel="noreferrer">Resume <Arrow /></a><a className="text-link" href="#contact">Let&apos;s connect <Arrow /></a></div></div><div className="hero-art" aria-label="Abstract visualization of data, code, and a camera frame" role="img"><div className="art-orbit orbit-one" /><div className="art-orbit orbit-two" /><div className="art-core"><span>01</span><b>ML</b><span>11</span></div><div className="art-label label-top">neural_network <i>●</i></div><div className="art-label label-bottom">frame_001 / explore</div><div className="art-lines"><span /><span /><span /><span /><span /></div></div><div className="scroll-cue"><span>Scroll to explore</span><i /></div></section>

      <section className="intro-band section-wrap" id="about"><div className="section-kicker">01 / About</div><div className="about-layout"><h2>A curious mind,<br /><em>under construction.</em></h2><div className="about-body"><p>My journey started with software development: learning how small ideas become things people can use. Over time, the questions got bigger.</p><p>Now I&apos;m moving toward AI/ML and Data Science, learning how data, mathematics, and thoughtful engineering can make systems more useful. Alongside it all, I make room for a camera, a cut, and a good story.</p><span className="signature">Ankit Verma <small>/ 2026</small></span></div></div><div className="timeline" aria-label="My learning evolution">{["Coding", "Web Development", "Full-Stack", "Data", "AI / ML", "Engineering"].map((item, index) => <div className="timeline-item" key={item}><span>0{index + 1}</span><b>{item}</b>{index < 5 && <i />}</div>)}</div></section>

      <section className="work section-wrap" id="work"><div className="section-heading"><div><div className="section-kicker">02 / Selected work</div><h2>Ideas becoming<br /><em>real things.</em></h2></div><p>Real repositories, different directions.<br />Hover a project to inspect the thinking.</p></div><div className="project-list">{projects.map((project) => <a className="project-card" key={project.number} href={project.href} target="_blank" rel="noreferrer"><div className="project-info"><div className="project-meta"><span>{project.number}</span><span>{project.category}</span></div><h3>{project.title}</h3><p>{project.description}</p><div className="tag-row">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div></div><div className="project-code"><span className="code-label">hover / source</span><code>{project.code}</code><span className="code-arrow">↗</span></div></a>)}</div><a className="archive-link" href="https://github.com/Goofy105114?tab=repositories" target="_blank" rel="noreferrer">View all repositories <Arrow /></a></section>

      <section className="ai-section section-wrap" id="ai-ml"><div className="section-heading"><div><div className="section-kicker accent">03 / The technical direction</div><h2>Learning to make<br /><em>machines useful.</em></h2></div><p>Progress isn&apos;t a percentage.<br />It&apos;s a practice.</p></div><div className="ai-layout"><div className="ai-note"><span className="big-index">01</span><p>The strongest part of engineering is knowing what you still need to learn. This is my current map.</p><div className="legend"><span><i className="legend-building" /> Building</span><span><i className="legend-learning" /> Learning</span></div></div><div className="skill-cloud">{learning.map((skill, index) => <span className={index < 5 ? "skill building" : index < 11 ? "skill active" : "skill"} key={skill}>{skill}<sup>{index < 5 ? "B" : index < 11 ? "L" : ""}</sup></span>)}</div></div></section>

      <section className="engineering section-wrap"><div className="section-heading compact"><div><div className="section-kicker">04 / The craft</div><h2>Systems, interfaces,<br /><em>and everything between.</em></h2></div></div><div className="engineering-grid"><div><p className="small-label">Engineering toolkit</p><div className="tool-list">{engineering.map((tool, index) => <span key={tool}><b>{String(index + 1).padStart(2, "0")}</b>{tool}<i className={index < 4 ? "comfortable" : index < 9 ? "building" : "learning"} /></span>)}</div></div><div className="engineering-aside"><div className="code-window"><div className="window-bar"><i /><i /><i /><span>direction.ts</span></div><pre><code><span>const</span> direction = {`{`}{"\n"}  focus: <em>&quot;AI / ML&quot;</em>,{"\n"}  craft: <em>&quot;software&quot;</em>,{"\n"}  language: <em>&quot;cinema&quot;</em>,{"\n"}  status: <em>&quot;learning&quot;</em>{"\n"}{`}`};</code></pre></div><p>Tools change. The curiosity stays.</p></div></div></section>

      <section className="youtube section-wrap" id="gigcel"><div className="youtube-top"><div><div className="section-kicker warm">05 / GIGCEL</div><h2>A small space<br />for <em>stories.</em></h2></div><a className="youtube-link" href="https://www.youtube.com/@Gigcel" target="_blank" rel="noreferrer">Visit channel <Arrow /></a></div><div className="youtube-line"><span className="youtube-play">▶</span><div><b>GIGCEL</b><p>Something I&apos;ve started: cinematography, editing, and visual storytelling.</p></div><span className="youtube-handle">@Gigcel</span></div></section>

      <section className="currently section-wrap"><div className="section-kicker accent">07 / Currently</div><div className="currently-layout"><h2>What I&apos;m<br /><em>chasing now.</em></h2><div className="currently-list">{["Deepening Python", "Mathematics for Machine Learning", "Statistics & Data Science", "Machine Learning", "AI Engineering", "Building projects"].map((item, index) => <div key={item}><span>0{index + 1}</span><b>{item}</b><i>↗</i></div>)}</div></div></section>

      <section className="journey section-wrap" id="journey"><div className="section-heading compact"><div><div className="section-kicker">08 / My journey</div><h2>Still early.<br /><em>Already moving.</em></h2></div><p>A timeline of the things<br />that keep pulling me forward.</p></div><div className="milestones">{["Computer Science education", "Development projects", "AI / ML learning", "Open-source / GitHub", "GIGCEL", "Personal projects"].map((item, index) => <div className="milestone" key={item}><span>0{index + 1}</span><div><h3>{item}</h3><p>In progress <i>—</i> details to be documented as the work grows.</p></div></div>)}</div></section>

      <section className="github section-wrap"><div className="github-top"><div><div className="section-kicker">09 / Open notebook</div><h2>Find me in<br /><em>the open.</em></h2></div><a className="button button-outline" href="https://github.com/Goofy105114" target="_blank" rel="noreferrer">GitHub profile <Arrow /></a></div><div className="github-panel"><div className="github-profile"><span className="github-avatar">G</span><div><b>Goofy105114</b><p>Code, experiments, and things I&apos;m figuring out.</p></div></div><a className="github-repos" href="https://github.com/Goofy105114?tab=repositories" target="_blank" rel="noreferrer"><span>Browse repositories</span><Arrow /></a></div></section>

      <section className="contact section-wrap" id="contact"><div className="section-kicker warm">10 / Start a conversation</div><h2>Have an idea<br /><em>worth building?</em></h2><p>I&apos;m always interested in interesting problems, ambitious projects, and people building something meaningful.</p><div className="hero-actions" style={{ justifyContent: "flex-start", marginTop: "32px" }}><a className="button button-outline" href={resumeUrl} target="_blank" rel="noreferrer">View resume <Arrow /></a><a className="contact-email" href="mailto:ankit105114@gmail.com">ankit105114@gmail.com <Arrow /></a></div><div className="contact-footer"><span>ANKIT VERMA / GOOFY</span><div><a href="https://github.com/Goofy105114" target="_blank" rel="noreferrer">GitHub</a><a href="https://www.linkedin.com/in/ankitverma10/" target="_blank" rel="noreferrer">LinkedIn</a><a href="https://www.youtube.com/@Gigcel" target="_blank" rel="noreferrer">YouTube / GIGCEL</a></div><small>© 2026 / Built with curiosity.</small></div></section>
    </main>
  );
}
