// import "./inquiry.css";
// import undrawInquiry from "../assets/feedback.svg"; // Make sure this path is correct

// function Inquiry() {
//   return (
//     <section className="inquiry-container">
//       <div className="inquiry-illustration">
//         <img src={undrawInquiry} alt="Inquiry Illustration" />
//       </div>

//       <div className="inquiry-form">
//         <h1>Get in Touch</h1>
//         <p className="inquiry-subtitle">
//           Have a question or feedback? Drop us a line.
//         </p>
//         <form onSubmit={(e) => e.preventDefault()}>
//           {/* Name Field */}
//           <div className="form-group">
//             <input
//               type="text"
//               id="name"
//               name="name"
//               placeholder=" " /* The space is important for the CSS to work */
//               required
//             />
//             <label htmlFor="name">Name</label>
//           </div>

//           {/* Email Field */}
//           <div className="form-group">
//             <input
//               type="email"
//               id="email"
//               name="email"
//               placeholder=" "
//               required
//             />
//             <label htmlFor="email">Email</label>
//           </div>

//           {/* Message Field */}
//           <div className="form-group">
//             <textarea
//               id="message"
//               name="message"
//               rows="5"
//               placeholder=" "
//               required
//             ></textarea>
//             <label htmlFor="message">Message</label>
//           </div>

//           <button className="inquiry-btn" type="submit">
//             <span>Send Inquiry</span>
//             {/* Simple Send Icon SVG */}
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               viewBox="0 0 20 20"
//               fill="currentColor"
//               width="20"
//               height="20"
//             >
//             </svg>
//           </button>
//         </form>
//       </div>
//     </section>
//   );
// }

// export default Inquiry;

import { useState } from "react";
import { sendInquiry } from "../services/api";
import "./inquiry.css";
import undrawInquiry from "../assets/feedback.svg";

function Inquiry() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await sendInquiry(formData);
      alert("Inquiry submitted successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      console.error(err);
      alert("Failed to send inquiry. Try again!");
    }
  };

  return (
    <section className="inquiry-container">
      <div className="inquiry-illustration">
        <img src={undrawInquiry} alt="Inquiry Illustration" />
      </div>

      <div className="inquiry-form">
        <h1>Get in Touch</h1>
        <p className="inquiry-subtitle">
          Have a question or feedback? Drop us a line.
        </p>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              id="name"
              name="name"
              placeholder=" "
              value={formData.name}
              onChange={handleChange}
              required
            />
            <label htmlFor="name">Name</label>
          </div>

          <div className="form-group">
            <input
              type="email"
              id="email"
              name="email"
              placeholder=" "
              value={formData.email}
              onChange={handleChange}
              required
            />
            <label htmlFor="email">Email</label>
          </div>

          <div className="form-group">
            <textarea
              id="message"
              name="message"
              rows="5"
              placeholder=" "
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <label htmlFor="message">Message</label>
          </div>

          <button className="inquiry-btn" type="submit">
            <span>Send Inquiry</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              width="20"
              height="20"
            >
              <path d="M2.94 2.94a.75.75 0 011.06 0l13 13a.75.75 0 11-1.06 1.06L12 13.06V15a.75.75 0 11-1.5 0v-3.5a.75.75 0 01.75-.75H15a.75.75 0 110 1.5h-1.94l-2.5-2.5L17.06 4a.75.75 0 10-1.06-1.06L11.5 7.44l-2.5-2.5V3a.75.75 0 00-1.5 0v1.94L4 2.94a.75.75 0 00-1.06 1.06L7.44 8l-2.5 2.5H3a.75.75 0 000 1.5h1.94L2.94 17.06a.75.75 0 001.06 1.06l13-13a.75.75 0 10-1.06-1.06L8 7.44l-2.5-2.5V3a.75.75 0 00-1.5 0v1.94L2.94 2.94z" />
            </svg>
          </button>
        </form>
      </div>
    </section>
  );
}

export default Inquiry;
