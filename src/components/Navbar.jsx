// import { NavLink } from "react-router-dom";

// function Navbar() {
//   return (
//     <header className="navbar">
//       <div className="nav-inner container">
//         <div className="brand">
//           <NavLink to="/" className="brand-link">
//             LearnHub
//           </NavLink>
//         </div>
//         <nav className="links">
//           <NavLink
//             to="/"
//             className={({ isActive }) => (isActive ? "link active" : "link")}
//           >
//             Home
//           </NavLink>
//           <NavLink
//             to="/about"
//             className={({ isActive }) => (isActive ? "link active" : "link")}
//           >
//             About
//           </NavLink>
//           <NavLink
//             to="/tutorial"
//             className={({ isActive }) => (isActive ? "link active" : "link")}
//           >
//             Tutorial
//           </NavLink>
//           <NavLink
//             to="/blog"
//             className={({ isActive }) => (isActive ? "link active" : "link")}
//           >
//             Blog
//           </NavLink>
//           <NavLink
//             to="/inquiry"
//             className={({ isActive }) => (isActive ? "link active" : "link")}
//           >
//             Inquiry
//           </NavLink>
//           <NavLink
//             to="/contact"
//             className={({ isActive }) => (isActive ? "link active" : "link")}
//           >
//             Contact
//           </NavLink>
//         </nav>
//         <nav className="auth">
//           <NavLink
//             to="/register"
//             className={({ isActive }) =>
//               isActive ? "btn btn-outline active" : "btn btn-outline"
//             }
//           >
//             Register
//           </NavLink>
//           <NavLink
//             to="/login"
//             className={({ isActive }) =>
//               isActive ? "btn btn-solid active" : "btn btn-solid"
//             }
//           >
//             Login
//           </NavLink>
//           <NavLink
//             to="/user"
//             className={({ isActive }) =>
//               isActive ? "avatar active" : "avatar"
//             }
//             title="Profile"
//           >
//             👤
//           </NavLink>
//         </nav>
//       </div>
//     </header>
//   );
// }
// export default Navbar;

// import { NavLink } from "react-router-dom";
// import { useState } from "react";
// import "../styles/Navbar.css";
// import ThemeToggle from "./ThemeToggle";

// function Navbar() {
//   const [menuOpen, setMenuOpen] = useState(false);

//   return (
//     <header className="navbar">
//       <div className="nav-inner container">
//         {/* Brand Logo */}
//         <div className="brand">
//           <NavLink to="/" className="brand-link">LearnHub</NavLink>
//         </div>

//         {/* Hamburger for mobile */}
//         <button
//           className="menu-toggle"
//           onClick={() => setMenuOpen(!menuOpen)}
//           aria-label="Toggle menu"
//         >
//           {/* 3 line svg */}
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             strokeWidth={2}
//             stroke="currentColor"
//             className="hamburger"
//           >
//             <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
//           </svg>
//         </button>

//         {/* Links */}
//         <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
//           <NavLink to="/" className="link">Home</NavLink>
//           <NavLink to="/about" className="link">About</NavLink>
//           <NavLink to="/tutorial" className="link">Tutorial</NavLink>
//           <NavLink to="/blog" className="link">Blog</NavLink>
//           <NavLink to="/inquiry" className="link">Inquiry</NavLink>
//           <NavLink to="/contact" className="link">Contact</NavLink>
//           <NavLink to="/register" className="btn btn-outline">Register</NavLink>
//           <NavLink to="/login" className="btn btn-solid">Login</NavLink>
//           <NavLink to="/user" className="avatar">👤</NavLink>
//       <ThemeToggle />
//         </nav>
//       </div>
//     </header>
//   );
// }
// export default Navbar;

import { NavLink } from "react-router-dom";
import { useState } from "react";
import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";
import "../styles/Navbar.css";
import ThemeToggle from "./ThemeToggle";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="nav-inner container">
        {/* Brand Logo */}
        <div className="brand">
          <NavLink to="/" className="brand-link">Bright Coder</NavLink>
        </div>

        {/* Hamburger for mobile */}
        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {/* 3 line svg */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="hamburger"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        {/* Links */}
        <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
          <NavLink to="/" className="link">Home</NavLink>
          <NavLink to="/about" className="link">About</NavLink>
          <NavLink to="/tutorial" className="link">Tutorial</NavLink>
          <NavLink to="/blog" className="link">Blog</NavLink>
          <NavLink to="/inquiry" className="link">Inquiry</NavLink>
          <NavLink to="/contact" className="link">Contact</NavLink>

          {/* Clerk Auth */}
          <SignedOut>
            <NavLink to="/sign-up" className="btn btn-outline">Register</NavLink>
            <NavLink to="/sign-in" className="btn btn-solid">Login</NavLink>
          </SignedOut>

          <SignedIn>
             <UserButton
              afterSignOutUrl="/"
              userProfileMode="navigation"
              userProfileUrl="/profile"
              userButtonMenuItems={[
                {
                  label: "My Progress",
                  onClick: () => (window.location.href = "/progress"),
                },
              ]}
            />
          </SignedIn>


          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
export default Navbar;
