// import { useState } from "react";
// import "../styles/TutorialPage.css";

// function TutorialPage() {
//   // Sidebar topics
//   const topics = [
//     { id: "intro", title: "Introduction" },
//     { id: "tags", title: "Basic Tags" },
//     { id: "forms", title: "Forms" },
//     { id: "tables", title: "Tables" },
//     { id: "media", title: "Media Elements" },
//   ];

//   const [activeTopic, setActiveTopic] = useState("intro");

//   // Scroll to section
//   const handleScroll = (id) => {
//     setActiveTopic(id);
//     document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
//   };

//   return (
//     <div className="tutorial-pagee">
//       {/* Sidebar */}
//       <aside className="sidebar">
//         <h2>HTML Topics</h2>
//         <ul>
//           {topics.map((topic) => (
//             <li
//               key={topic.id}
//               className={activeTopic === topic.id ? "active" : ""}
//               onClick={() => handleScroll(topic.id)}
//             >
//               {topic.title}
//             </li>
//           ))}
//         </ul>
//       </aside>

//       {/* Main Content */}
//       <main className="content">
//         <section id="intro">
//           <h2>Introduction to HTML</h2>
//           <p>
//             HTML (HyperText Markup Language) is the standard language for
//             creating web pages. It describes the structure of a web page using
//             tags and elements.
//           </p>
//         </section>

//         <section id="tags">
//           <h2>Basic Tags</h2>
//           <p>
//             Some important tags are: <code>&lt;h1&gt;</code>,
//             <code>&lt;p&gt;</code>, <code>&lt;a&gt;</code>,
//             <code>&lt;img&gt;</code>.
//           </p>
//         </section>

//         <section id="forms">
//           <h2>Forms</h2>
//           <p>
//             HTML forms are used to collect user input. Example:
//             <code>&lt;form&gt;&lt;input type="text"&gt;&lt;/form&gt;</code>
//           </p>
//         </section>

//         <section id="tables">
//           <h2>Tables</h2>
//           <p>
//             Tables are created using <code>&lt;table&gt;</code>,
//             <code>&lt;tr&gt;</code>, <code>&lt;td&gt;</code>.
//           </p>
//         </section>

//         <section id="media">
//           <h2>Media Elements</h2>
//           <p>
//             HTML supports images, audio, and video using
//             <code>&lt;img&gt;</code>, <code>&lt;audio&gt;</code>,
//             <code>&lt;video&gt;</code>.
//           </p>
//         </section>
//       </main>
//     </div>
//   );
// }

// export default TutorialPage;

// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import { getTutorialByLink } from "../services/api.js";
// import "../styles/TutorialPage.css";

// function TutorialPage() {
//   const { slug } = useParams(); // route hase /tutorial/:slug
//   const [tutorial, setTutorial] = useState(null);
//   const [activeTopic, setActiveTopic] = useState("");

//   useEffect(() => {
//     const fetchTutorial = async () => {
//       try {
//         const res = await getTutorialByLink(slug); // backend ma GET /api/tutorials/link/:slug
//         setTutorial(res.data);

//         // default active topic
//         if (res.data.sections && res.data.sections.length > 0) {
//           setActiveTopic(res.data.sections[0].title);
//         }
//       } catch (err) {
//         console.error("Error loading tutorial:", err);
//       }
//     };
//     fetchTutorial();
//   }, [slug]);

//   if (!tutorial) return <p>Loading...</p>;

//   const handleScroll = (title) => {
//     setActiveTopic(title);
//     document.getElementById(title)?.scrollIntoView({ behavior: "smooth" });
//   };

//   return (
//     <div className="tutorial-pagee">
//       {/* Sidebar */}
//       <aside className="sidebar">
//         <h2>{tutorial.title} Topics</h2>
//         <ul>
//           {tutorial.sections?.map((s, i) => (
//             <li
//               key={i}
//               className={activeTopic === s.title ? "active" : ""}
//               onClick={() => handleScroll(s.title)}
//             >
//               {s.title}
//             </li>
//           ))}
//         </ul>
//       </aside>

//       {/* Content */}
//       <main className="content">
//         {tutorial.sections?.map((s, i) => (
//           <section id={s.title} key={i}>
//             <h2>{s.title}</h2>
//             <p>{s.content}</p>
//           </section>
//         ))}
//       </main>
//     </div>
//   );
// }

// export default TutorialPage;

// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import { getTutorialByLink } from "../services/api.js";
// import "../styles/TutorialPage.css";
// import hljs from "highlight.js";
// import "highlight.js/styles/github.css";

// function TutorialPage() {
//   const { slug } = useParams(); // route hase /tutorial/:slug
//   const [tutorial, setTutorial] = useState(null);
//   const [activeTopic, setActiveTopic] = useState("");

//   useEffect(() => {
//     const fetchTutorial = async () => {
//       try {
//         const res = await getTutorialByLink(slug);
//         setTutorial(res.data);

//         // default active topic
//         if (res.data.sections && res.data.sections.length > 0) {
//           setActiveTopic(res.data.sections[0].title);
//         }
//       } catch (err) {
//         console.error("Error loading tutorial:", err);
//       }
//     };
//     fetchTutorial();
//   }, [slug]);

//   // Highlight code whenever tutorial content changes
//   useEffect(() => {
//     hljs.highlightAll();
//   }, [tutorial]);

//   if (!tutorial) return <p>Loading...</p>;

//   const handleScroll = (title) => {
//     setActiveTopic(title);
//     document.getElementById(title)?.scrollIntoView({ behavior: "smooth" });
//   };

//   return (
//     <div className="tutorial-pagee">
//       {/* Sidebar */}
//       <aside className="sidebar">
//         <h2>{tutorial.title} Topics</h2>
//         <ul>
//           {tutorial.sections?.map((s, i) => (
//             <li
//               key={i}
//               className={activeTopic === s.title ? "active" : ""}
//               onClick={() => handleScroll(s.title)}
//             >
//               {s.title}
//             </li>
//           ))}
//         </ul>
//       </aside>

//       {/* Content */}
//       <main className="content">
//         {tutorial.sections?.map((s, i) => (
//           <section id={s.title} key={i}>
//             <h2>{s.title}</h2>
//             <div
//               className="tutorial-section-content"
//               dangerouslySetInnerHTML={{ __html: s.content }}
//             />
//           </section>
//         ))}
//       </main>
//     </div>
//   );
// }

// export default TutorialPage;


// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import { getTutorialByLink } from "../services/api.js";
// import "../styles/TutorialPage.css";
// import hljs from "highlight.js";
// import "highlight.js/styles/github.css";


// function TutorialPage() {
//   const { slug } = useParams();
//   const [tutorial, setTutorial] = useState(null);
//   const [activeTopic, setActiveTopic] = useState("");

//   useEffect(() => {
//     const fetchTutorial = async () => {
//       try {
//         const res = await getTutorialByLink(slug);
//         setTutorial(res.data);

//         if (res.data.sections && res.data.sections.length > 0) {
//           setActiveTopic(res.data.sections[0].title);
//         }
//       } catch (err) {
//         console.error("Error loading tutorial:", err);
//       }
//     };
//     fetchTutorial();
//   }, [slug]);

//   useEffect(() => {
//     hljs.highlightAll();

//     // Add copy buttons to all <pre> blocks
//     const codeBlocks = document.querySelectorAll("pre");
//     codeBlocks.forEach((block) => {
//       // Avoid duplicating buttons
//       if (block.querySelector(".copy-btn")) return;

//       const button = document.createElement("button");
//       button.innerText = "📋 Copy";
//       button.className = "copy-btn";
//       button.addEventListener("click", () => {
//         const code = block.innerText;
//         navigator.clipboard.writeText(code).then(() => {
//           button.innerText = "✅ Copied";
//           setTimeout(() => (button.innerText = "📋 Copy"), 2000);
//         });
//       });
//       block.style.position = "relative";
//       block.appendChild(button);
//     });
//   }, [tutorial]);

//   if (!tutorial) return <p>Loading...</p>;

//   const handleScroll = (title) => {
//     setActiveTopic(title);
//     document.getElementById(title)?.scrollIntoView({ behavior: "smooth" });
//   };

//   return (
//     <div className="tutorial-pagee">
//       <aside className="sidebar">
//         <h2>{tutorial.title} Topics</h2>
//         <ul>
//           {tutorial.sections?.map((s, i) => (
//             <li
//               key={i}
//               className={activeTopic === s.title ? "active" : ""}
//               onClick={() => handleScroll(s.title)}
//             >
//               {s.title}
//             </li>
//           ))}
//         </ul>
//       </aside>

//       <main className="content">
//         {tutorial.sections?.map((s, i) => (
//           <section id={s.title} key={i}>
//             <h2>{s.title}</h2>
//             <div
//               className="tutorial-section-content"
//               dangerouslySetInnerHTML={{ __html: s.content }}
//             />
//           </section>
//         ))}
//       </main>
//     </div>
//   );
// }

// export default TutorialPage;

// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import { getTutorialByLink } from "../services/api.js";
// import "../styles/TutorialPage.css";
// import hljs from "highlight.js";
// import "highlight.js/styles/github.css";

// function TutorialPage() {
//   const { slug } = useParams();
//   const [tutorial, setTutorial] = useState(null);
//   const [activeTopic, setActiveTopic] = useState("");

//   useEffect(() => {
//     const fetchTutorial = async () => {
//       try {
//         const res = await getTutorialByLink(slug);
//         setTutorial(res.data);

//         if (res.data.sections && res.data.sections.length > 0) {
//           setActiveTopic(res.data.sections[0].title);
//         }
//       } catch (err) {
//         console.error("Error loading tutorial:", err);
//       }
//     };
//     fetchTutorial();
//   }, [slug]);

//   // Highlight code and add copy buttons after content renders
//   useEffect(() => {
//     if (!tutorial) return;

//     // Transform all <pre> blocks to <pre><code> for hljs
//     const contentBlocks = document.querySelectorAll(".tutorial-section-content pre");
//     contentBlocks.forEach((pre) => {
//       if (!pre.querySelector("code")) {
//         const code = document.createElement("code");
//         code.innerHTML = pre.innerHTML;
//         pre.innerHTML = "";
//         pre.appendChild(code);
//       }

//       // Highlight the code
//       hljs.highlightElement(pre.querySelector("code"));

//       // Add copy button if not already
//       if (!pre.querySelector(".copy-btn")) {
//         const button = document.createElement("button");
//         button.innerText = "📋 Copy";
//         button.className = "copy-btn";
//         button.addEventListener("click", () => {
//           navigator.clipboard.writeText(pre.innerText).then(() => {
//             button.innerText = "✅ Copied";
//             setTimeout(() => (button.innerText = "📋 Copy"), 2000);
//           });
//         });
//         pre.style.position = "relative";
//         pre.appendChild(button);
//       }
//     });
//   }, [tutorial]);

//   if (!tutorial) return <p>Loading...</p>;

//   const handleScroll = (title) => {
//     setActiveTopic(title);
//     document.getElementById(title)?.scrollIntoView({ behavior: "smooth" });
//   };

//   return (
//     <div className="tutorial-pagee">
//       <aside className="sidebar">
//         <h2>{tutorial.title} Topics</h2>
//         <ul>
//           {tutorial.sections?.map((s, i) => (
//             <li
//               key={i}
//               className={activeTopic === s.title ? "active" : ""}
//               onClick={() => handleScroll(s.title)}
//             >
//               {s.title}
//             </li>
//           ))}
//         </ul>
//       </aside>

//       <main className="content">
//         {tutorial.sections?.map((s, i) => (
//           <section id={s.title} key={i}>
//             <h2>{s.title}</h2>
//             <div
//               className="tutorial-section-content"
//               dangerouslySetInnerHTML={{ __html: s.content }}
//             />
//           </section>
//         ))}
//       </main>
//     </div>
//   );
// }

// export default TutorialPage;

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getTutorialByLink } from "../services/api.js";
import "../styles/TutorialPage.css";
import hljs from "highlight.js";
import "highlight.js/styles/github.css";

function TutorialPage() {
  const { slug } = useParams();
  const [tutorial, setTutorial] = useState(null);
  const [activeTopic, setActiveTopic] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTutorial = async () => {
      try {
        setLoading(true);

        // ✅ Force fresh API call (prevent cache)
        const res = await getTutorialByLink(`${slug}?t=${Date.now()}`);

        if (res.data) {
          setTutorial(res.data);
          if (res.data.sections && res.data.sections.length > 0) {
            setActiveTopic(res.data.sections[0].title);
          }
        }
      } catch (err) {
        console.error("Error loading tutorial:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchTutorial();
  }, [slug]);

  // ✅ Highlight code + add copy button after render
  useEffect(() => {
    if (!tutorial) return;

    const contentBlocks = document.querySelectorAll(".tutorial-section-content pre");
    contentBlocks.forEach((pre) => {
      if (!pre.querySelector("code")) {
        const code = document.createElement("code");
        code.innerHTML = pre.innerHTML;
        pre.innerHTML = "";
        pre.appendChild(code);
      }

      hljs.highlightElement(pre.querySelector("code"));

      if (!pre.querySelector(".copy-btn")) {
        const button = document.createElement("button");
        button.innerText = "📋 Copy";
        button.className = "copy-btn";
        button.addEventListener("click", () => {
          navigator.clipboard.writeText(pre.innerText).then(() => {
            button.innerText = "✅ Copied";
            setTimeout(() => (button.innerText = "📋 Copy"), 2000);
          });
        });
        pre.style.position = "relative";
        pre.appendChild(button);
      }
    });
  }, [tutorial]);

  const handleScroll = (title) => {
    setActiveTopic(title);
    document.getElementById(title)?.scrollIntoView({ behavior: "smooth" });
  };

  // ✅ Show better loading indicator
  if (loading) {
    return (
      <div className="tutorial-loading">
        <p>Loading latest tutorial...</p>
      </div>
    );
  }

  if (!tutorial) {
    return <p>❌ Tutorial not found or failed to load.</p>;
  }

  return (
    <div className="tutorial-pagee">
      <aside className="sidebar">
        <h2>{tutorial.title} Topics</h2>
        <ul>
          {tutorial.sections?.map((s, i) => (
            <li
              key={i}
              className={activeTopic === s.title ? "active" : ""}
              onClick={() => handleScroll(s.title)}
            >
              {s.title}
            </li>
          ))}
        </ul>
      </aside>

      <main className="content">
        {tutorial.sections?.map((s, i) => (
          <section id={s.title} key={i}>
            <h2>{s.title}</h2>
            <div
              className="tutorial-section-content"
              dangerouslySetInnerHTML={{ __html: s.content }}
            />
          </section>
        ))}
      </main>
    </div>
  );
}

export default TutorialPage;
