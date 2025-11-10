// import { useState, useEffect } from "react";
// import "./BlogPage.css";

// import jsImg from "../images/js.png";
// import aiImg from "../images/ai.png";
// import nodeImg from "../images/node.png";

// // Example blog data (replace with API call)
// const sampleBlogs = [
//   {
//     id: 1,
//     title: "Mastering JavaScript in 2025",
//     desc: "Explore advanced JS tips, new features, and performance hacks for modern web apps.",
//     category: "JavaScript",
//     author: "John Doe",
//     date: "Sep 8, 2025",
//     image: jsImg,
//   },
//   {
//     id: 2,
//     title: "The Future of AI and Machine Learning",
//     desc: "How AI is shaping industries, from healthcare to self-driving cars.",
//     category: "AI/ML",
//     author: "Jane Smith",
//     date: "Sep 7, 2025",
//     image: aiImg,
//   },
//   {
//     id: 3,
//     title: "Building Scalable MERN Apps",
//     desc: "Learn the secrets to designing production-ready MERN stack applications.",
//     category: "Web Dev",
//     author: "Chris Lee",
//     date: "Sep 5, 2025",
//     image: nodeImg,
//   },
// ];

// function BlogPage() {
//   const [blogs, setBlogs] = useState([]);
//   const [search, setSearch] = useState("");
//   const [filter, setFilter] = useState("All");

//   useEffect(() => {
//     // Replace this with API call
//     setBlogs(sampleBlogs);
//   }, []);

//   const filteredBlogs = blogs.filter(
//     (b) =>
//       (filter === "All" || b.category === filter) &&
//       b.title.toLowerCase().includes(search.toLowerCase())
//   );

//   return (
//     <div className="blog-page">
//       <header className="blog-header">
//         <h1>Our Latest Blogs</h1>
//         <p>Discover insights, tips, and trends in tech and development.</p>
//       </header>

//       <div className="blog-controls">
//         <input
//           type="text"
//           placeholder="🔍 Search blogs..."
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//         />
//         <select value={filter} onChange={(e) => setFilter(e.target.value)}>
//           <option>All</option>
//           <option>JavaScript</option>
//           <option>AI/ML</option>
//           <option>Web Dev</option>
//         </select>
//       </div>

//       <div className="blog-grid">
//         {filteredBlogs.length > 0 ? (
//           filteredBlogs.map((b) => (
//             <div key={b.id} className="blog-card">
//               <img src={b.image} alt={b.title} />
//               <div className="blog-content">
//                 <h3>{b.title}</h3>
//                 <p className="desc">{b.desc}</p>
//                 <div className="meta">
//                   <span>{b.category}</span>
//                   <span>• {b.author}</span>
//                   <span>• {b.date}</span>
//                 </div>
//                 <button className="read-btn">Read More →</button>
//               </div>
//             </div>
//           ))
//         ) : (
//           <p className="no-results">No blogs found.</p>
//         )}
//       </div>
//     </div>
//   );
// }

// export default BlogPage;


// import { useState, useEffect } from "react";
// import { getBlogs } from "../services/api"; // ⬅️ New API function
// import "./BlogPage.css";
// import { useNavigate } from "react-router-dom";


// function BlogPage() {
//   const navigate = useNavigate();
//   const [blogs, setBlogs] = useState([]);
//   const [search, setSearch] = useState("");
//   const [filter, setFilter] = useState("All");
//   const categories = ["All", ...new Set(blogs.map((b) => b.category))];

//   useEffect(() => {
//     const fetchBlogs = async () => {
//       try {
//         const res = await getBlogs();
//         setBlogs(res.data);
//       } catch (err) {
//         console.error("Error fetching blogs:", err);
//       }
//     };
//     fetchBlogs();
//   }, []);

//   const filteredBlogs = blogs.filter(
//     (b) =>
//       (filter === "All" || b.category === filter) &&
//       b.title.toLowerCase().includes(search.toLowerCase())
//   );
  

//   return (
//     <div className="blog-page">
//       <header className="blog-header">
//         <h1>Our Latest Blogs</h1>
//         <p>Discover insights, tips, and trends in tech and development.</p>
//       </header>

//       <div className="blog-controls">
//         <input
//           type="text"
//           placeholder="🔍 Search blogs..."
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//         />
//         <select value={filter} onChange={(e) => setFilter(e.target.value)}>
//   {categories.map((cat, i) => (
//     <option key={i} value={cat}>
//       {cat}
//     </option>
//   ))}
// </select>
//       </div>

//       <div className="blog-grid">
//         {filteredBlogs.length > 0 ? (
//           filteredBlogs.map((b) => (
//             <div key={b._id} className="blog-card">
//               <img src={`/images/${b.image}`} alt={b.title} />
//               <div className="blog-content">
//                 <h3>{b.title}</h3>
//                 <p className="desc">{b.desc}</p>
//                 <div className="meta">
//                   <span>{b.category}</span>
//                   <span>• {b.author}</span>
//                   <span>• {b.date}</span>
//                 </div>
//                 <button className="read-btn" onClick={() => navigate(`/blog/${b._id}`)}>Read More →</button>
//               </div>
//             </div>
//           ))
//         ) : (
//           <p className="no-results">No blogs found.</p>
//         )}
//       </div>
//     </div>
//   );
// }

// export default BlogPage;

import { useState, useEffect } from "react";
import { getBlogs } from "../services/api";
import "./BlogPage.css";
import { useNavigate } from "react-router-dom";

function BlogPage() {
  const navigate = useNavigate();
  const [blogs, setBlogs] = useState([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  const categories = ["All", ...new Set(blogs.map((b) => b.category))];

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await getBlogs();
        setBlogs(res.data);
      } catch (err) {
        console.error("Error fetching blogs:", err);
      }
    };
    fetchBlogs();
  }, []);

  const filteredBlogs = blogs.filter(
    (b) =>
      (filter === "All" || b.category === filter) &&
      b.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="blog-page">
      <header className="blog-header">
        <h1>Our Latest Blogs</h1>
        <p>Discover insights, tips, and trends in tech and development.</p>
      </header>

      <div className="blog-controls">
        <input
          type="text"
          placeholder="🔍 Search blogs..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select value={filter} onChange={(e) => setFilter(e.target.value)}>
          {categories.map((cat, i) => (
            <option key={i} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      <div className="blog-grid">
        {filteredBlogs.length > 0 ? (
          filteredBlogs.map((b) => (
            <div key={b._id} className="blog-card">
              {/* ✅ Supports both Base64 images & static /images filenames */}
              <img
                src={
                  b.image?.startsWith("data:image")
                    ? b.image
                    : `/images/${b.image}`
                }
                alt={b.title}
              />
              <div className="blog-content">
                <h3>{b.title}</h3>
                <p className="desc">{b.desc}</p>
                <div className="meta">
                  <span>{b.category}</span>
                  <span>• {b.author}</span>
                  <span>• {b.date}</span>
                </div>
                <button
                  className="read-btn"
                  onClick={() => navigate(`/blog/${b._id}`)}
                >
                  Read More →
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="no-results">No blogs found.</p>
        )}
      </div>
    </div>
  );
}

export default BlogPage;
