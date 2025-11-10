// import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaPython, FaNodeJs } from "react-icons/fa";
// import "./tutorial.css";

// function Tutorial() {
//   const tutorials = [
//     {
//       title: "HTML",
//       desc: "Learn the structure of the web with step-by-step HTML guides.",
//       icon: <FaHtml5 color="#e34c26" size={50} />,
//       link: "/tutorial/html",
//     },
//     {
//       title: "CSS",
//       desc: "Style your websites beautifully with modern CSS techniques.",
//       icon: <FaCss3Alt color="#264de4" size={50} />,
//       link: "/tutorial/css",
//     },
//     {
//       title: "JavaScript",
//       desc: "Master interactivity and logic using JavaScript.",
//       icon: <FaJs color="#f7df1e" size={50} />,
//       link: "/tutorial/javascript",
//     },
//     {
//       title: "React",
//       desc: "Build dynamic UIs with React and reusable components.",
//       icon: <FaReact color="#61dafb" size={50} />,
//       link: "/tutorial/react",
//     },
//     {
//       title: "Python",
//       desc: "Learn Python for web, AI, data science, and automation.",
//       icon: <FaPython color="#3776ab" size={50} />,
//       link: "/tutorial/python",
//     },
//     {
//       title: "Node.js",
//       desc: "Create powerful backend systems using Node.js.",
//       icon: <FaNodeJs color="#68a063" size={50} />,
//       link: "/tutorial/nodejs",
//     },
//   ];

//   return (
//     <div className="tutorial-page">
//       <h1 className="tutorial-title">Tutorials</h1>
//       <p className="tutorial-subtitle">
//         Start your coding journey with step-by-step tutorials.
//       </p>
      
//       <div className="tutorial-grid">
//         {tutorials.map((t, idx) => (
//           <div key={idx} className="tutorial-card">
//             <div className="tutorial-icon">{t.icon}</div>
//             <h2>{t.title}</h2>
//             <p>{t.desc}</p>
//             <a href={t.link} className="btn-learn">Start Learning →</a>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Tutorial;

// import { useEffect, useState } from "react";
// import * as Icons from "react-icons/fa";
// import "./tutorial.css";

// function Tutorial() {
//   const [tutorials, setTutorials] = useState([]);

//   useEffect(() => {
//     fetch("http://localhost:5000/api/tutorials")
//       .then((res) => res.json())
//       .then((data) => setTutorials(data));
//   }, []);

//   return (
//     <div className="tutorial-page">
//       <h1 className="tutorial-title">Tutorials</h1>
//       <p className="tutorial-subtitle">
//         Start your coding journey with step-by-step tutorials.
//       </p>

//       <div className="tutorial-grid">
//         {tutorials.map((t) => {
//           const IconComponent = Icons[t.icon] || Icons.FaBookOpen; // default
//           return (
//             <div key={t._id} className="tutorial-card">
//               <div className="tutorial-icon">
//                 <IconComponent size={50} />
//               </div>
//               <h2>{t.title}</h2>
//               <p>{t.desc}</p>
//               <a href={t.link} className="btn-learn">Start Learning →</a>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// }

// export default Tutorial;

import { useEffect, useState } from "react";
import "./tutorial.css";

function Tutorial() {
  const [tutorials, setTutorials] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/tutorials")
      .then((res) => res.json())
      .then((data) => setTutorials(data))
      .catch((err) => console.error("Error fetching tutorials:", err));
  }, []);

  return (
    <div className="tutorial-page">
      <h1 className="tutorial-title">Tutorials</h1>
      <p className="tutorial-subtitle">
        Start your coding journey with step-by-step tutorials.
      </p>

      <div className="tutorial-grid">
        {tutorials.map((t) => (
          <div key={t._id} className="tutorial-card">
            {/* ✅ Tutorial Image */}
            <div className="tutorial-image-container">
              {t.image ? (
                <img
                  src={t.image}
                  alt={t.title}
                  className="tutorial-image"
                />
              ) : (
                <img
                  src="/default-tutorial.png"
                  alt="Default"
                  className="tutorial-image"
                />
              )}
            </div>

            <h2>{t.title}</h2>
            <p>{t.desc}</p>
            <a href={t.link} className="btn-learn">
              Start Learning →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Tutorial;
