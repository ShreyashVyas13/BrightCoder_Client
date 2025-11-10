// import { useEffect, useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import { getBlogById } from "../services/api";
// import "./BlogDetailPage.css";

// function BlogDetailPage() {
//   const { id } = useParams(); // Get the blog ID from URL
//   const navigate = useNavigate();
//   const [blog, setBlog] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     const fetchBlog = async () => {
//       try {
//         const res = await getBlogById(id);
//         setBlog(res.data);
//     } catch (err) {
//         console.error("Error fetching blog:", err);
//         if (err.response?.status === 404) {
//             setError("Blog not found");
//         } else {
//             setError("Failed to fetch blog");
//         }
//     } finally {
//         setLoading(false);
//     }
// };

// fetchBlog();
// }, [id]);
// console.log("Fetching blog with ID:", id);

// if (loading) return <p className="loading">Loading blog...</p>;
//   if (error)
//     return (
//       <div className="error">
//         <p>{error}</p>
//         <button onClick={() => navigate("/blog")}>Back to Blogs</button>
//       </div>
//     );

//   return (
//     <div className="blog-detail-page">
//       <button className="back-btn" onClick={() => navigate("/blog")}>
//         ← Back to Blogs
//       </button>

//       <h1>{blog.title}</h1>
//       <p className="meta">
//         <span>{blog.category}</span> • <span>{blog.author}</span> •{" "}
//         <span>{blog.date}</span>
//       </p>

//       {blog.image && <img src={`/images/${blog.image}`} alt={blog.title} />}

//       <div
//         className="blog-content"
//         dangerouslySetInnerHTML={{ __html: blog.content }}
//       />
//       <div
//   className="blog-extra"
//   dangerouslySetInnerHTML={{ __html: blog.extra }}
// />

// {blog.tags && blog.tags.length > 0 && (
//   <div className="blog-tags">
//     <h4>Tags:</h4>
//     <ul>
//       {blog.tags.map((tag, idx) => (
//         <li key={idx}>{tag}</li>
//       ))}
//     </ul>
//   </div>
// )}

//     </div>
    
//   );
// }

// export default BlogDetailPage;

// import { useEffect, useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import { getBlogById } from "../services/api";
// import "./BlogDetailPage.css";

// function BlogDetailPage() {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const [blog, setBlog] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     const fetchBlog = async () => {
//       try {
//         const res = await getBlogById(id);
//         setBlog(res.data);
//       } catch (err) {
//         console.error("Error fetching blog:", err);
//         setError(err.response?.status === 404 ? "Blog not found" : "Failed to fetch blog");
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchBlog();
//   }, [id]);

//   if (loading) return <p className="loading">Loading blog...</p>;
//   if (error)
//     return (
//       <div className="error">
//         <p>{error}</p>
//         <button onClick={() => navigate("/blog")}>Back to Blogs</button>
//       </div>
//     );

//   return (
//     <div className="blog-detail-page">
//       <button className="back-btn" onClick={() => navigate("/blog")}>
//         ← Back to Blogs
//       </button>

//       <h1>{blog.title}</h1>
//       <p className="meta">
//         <span>{blog.category}</span> • <span>{blog.author}</span> • <span>{blog.date}</span>
//       </p>

//       {blog.image && <img src={`/images/${blog.image}`} alt={blog.title} />}

//       <div className="blog-content" dangerouslySetInnerHTML={{ __html: blog.content }} />

//       {/* NEW: Extra details */}
//       {blog.extra && (
//         <div className="blog-extra" dangerouslySetInnerHTML={{ __html: blog.extra }} />
//       )}

//       {/* NEW: Tags */}
//       {blog.tags && blog.tags.length > 0 && (
//         <div className="blog-tags">
//           <h4>Tags:</h4>
//           <ul>
//             {blog.tags.map((tag, idx) => (
//               <li key={idx}>{tag}</li>
//             ))}
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// }

// export default BlogDetailPage;

import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getBlogById } from "../services/api";
import "./BlogDetailPage.css";

function BlogDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await getBlogById(id);
        setBlog(res.data);
      } catch (err) {
        console.error("Error fetching blog:", err);
        setError(
          err.response?.status === 404
            ? "Blog not found"
            : "Failed to fetch blog"
        );
      } finally {
        setLoading(false);
      }
    };
    fetchBlog();
  }, [id]);

  if (loading) return <p className="loading">Loading blog...</p>;
  if (error)
    return (
      <div className="error">
        <p>{error}</p>
        <button onClick={() => navigate("/blog")}>Back to Blogs</button>
      </div>
    );

  return (
    <div className="blog-detail-page">
      <button className="back-btn" onClick={() => navigate("/blog")}>
        ← Back to Blogs
      </button>

      <h1>{blog.title}</h1>
      <p className="meta">
        <span>{blog.category}</span> • <span>{blog.author}</span> •{" "}
        <span>{blog.date}</span>
      </p>

      {/* ✅ Supports both Base64 and static images */}
      {blog.image && (
        <img
          src={
            blog.image?.startsWith("data:image")
              ? blog.image
              : `/images/${blog.image}`
          }
          alt={blog.title}
        />
      )}

      <div
        className="blog-content"
        dangerouslySetInnerHTML={{ __html: blog.content }}
      />

      {/* ✅ Extra details section */}
      {blog.extra && (
        <div
          className="blog-extra"
          dangerouslySetInnerHTML={{ __html: blog.extra }}
        />
      )}

      {/* ✅ Tags section */}
      {blog.tags && blog.tags.length > 0 && (
        <div className="blog-tags">
          <h4>Tags:</h4>
          <ul>
            {blog.tags.map((tag, idx) => (
              <li key={idx}>{tag}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default BlogDetailPage;
