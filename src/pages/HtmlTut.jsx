import { useEffect, useState } from "react";
import "../styles/TutorialPage.css";

function HtmlTut({ title, topics }) {
  const [active, setActive] = useState(topics[0].id);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Active topic track kare on scroll
  useEffect(() => {
    const sections = topics
      .map((t) => document.getElementById(`topic-${t.id}`))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.dataset.id);
        });
      },
      { rootMargin: "0px 0px -60% 0px" }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [topics]);

  const scrollTo = (id) => {
    const el = document.getElementById(`topic-${id}`);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setSidebarOpen(false);
    }
  };

  return (
    <div className="tutorial-page">
      <button
        className="sidebar-toggle"
        onClick={() => setSidebarOpen((s) => !s)}
      >
        ☰ Topics
      </button>

      <div className="tutorial-layout">
        {/* Sidebar */}
        <aside className={`tutorial-sidebar ${sidebarOpen ? "open" : ""}`}>
          <div className="sidebar-head">
            <h3>{title} Topics</h3>
            <button className="close" onClick={() => setSidebarOpen(false)}>
              ✕
            </button>
          </div>
          <nav>
            <ul>
              {topics.map((t) => (
                <li key={t.id}>
                  <button
                    className={t.id === active ? "active" : ""}
                    onClick={() => scrollTo(t.id)}
                  >
                    {t.title}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </aside>

        {/* Content */}
        <main className="tutorial-content">
          <header className="tutorial-hero">
            <h1>{title} Tutorial</h1>
            <p>Explore the basics of {title} step by step.</p>
            <button className="btn" onClick={() => scrollTo(topics[0].id)}>
              Start Learning
            </button>
          </header>

          {topics.map((t) => (
            <section
              key={t.id}
              id={`topic-${t.id}`}
              data-id={t.id}
              className="topic-section"
            >
              <h2>{t.title}</h2>
              <p>{t.content}</p>
              {t.code && (
                <div className="code-sample">
                  <pre>{t.code}</pre>
                </div>
              )}
            </section>
          ))}

          <footer className="tutorial-footer">
            <p>End of {title} Tutorial 🚀</p>
          </footer>
        </main>
      </div>
    </div>
  );
}
export default HtmlTut;