// import { Routes, Route, Navigate } from "react-router-dom";
// import Layout from "./components/Layout.jsx";

// import "./styles/global.css";
// import Home from "./pages/Home.jsx";
// import About from "./pages/About.jsx";
// import Tutorial from "./pages/Tutorial.jsx";
// import Inquiry from "./pages/Inquiry.jsx";
// import Contact from "./pages/Contact.jsx";
// import UserProfile from "./pages/UserProfile.jsx";
// import SignUpPage from "./pages/SignUpPage.jsx";
// import SignInPage from "./pages/SignInPage.jsx";
// import ProfilePage from "./pages/ProfilePage.jsx";
// import ManageTutorial from "../../backend/admin/ManageTutorial.jsx";
// import TutorialPage from "./components/TutorialPage.jsx";
// import BlogPage from "./pages/BlogPage.jsx";
// import ManageBlog from "../../backend/admin/ManageBlog.jsx";
// import EditTutorial from "../../backend/admin/EditTutorial.jsx";
// import BlogDetailPage from "./pages/BlogDetailPage.jsx";
// import ManageBlogDetails from "../../backend/admin/ManageBlogDetails.jsx";
// import AdminInquiries from "../../backend/admin/AdminInquiries.jsx";
// import AddTutorial from "../../backend/admin/AddTutorial.jsx";
// import AdminDashboard from "../../backend/admin/AdminDashboard.jsx";
// import AdminLogin from "../../backend/admin/AdminLogin.jsx";
// import AdminAuth from "../../backend/src/middleware/middleware.jsx";
// import ProtectedRoute from "./middleware/ProtectedRoute.jsx";

// function App() {
//   return (
//     <Routes>
//       <Route element={<Layout />}>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/contact" element={<Contact />} />
//         <Route path="/inquiry" element={<Inquiry />} />
//         <Route path="/sign-in/*" element={<SignInPage />} />
//         <Route path="/sign-up/*" element={<SignUpPage />} />
//         <Route path="/user" element={<UserProfile />} />
//         <Route path="/profile" element={<ProfilePage />} />
//         <Route
//           path="/tutorial"
//           element={
//             <ProtectedRoute>
//               <Tutorial />
//             </ProtectedRoute>
//           }
//         />
//         <Route
//           path="/blog"
//           element={
//             <ProtectedRoute>
//               <BlogPage />
//             </ProtectedRoute>
//           }
//         />

//         <Route
//           path="/tutorial/:slug"
//           element={
//             <ProtectedRoute>
//               <TutorialPage />
//             </ProtectedRoute>
//           }
//         />
//         <Route
//           path="/blog/:id"
//           element={
//             <ProtectedRoute>
//               <BlogDetailPage />
//             </ProtectedRoute>
//           }
//         />
//       </Route>

//       <Route
//         path="/admin-dashboard"
//         element={
//           <AdminAuth>
//             <AdminDashboard />
//           </AdminAuth>
//         }
//       />
//       <Route
//         path="/manage-tutorial"
//         element={
//           <AdminAuth>
//             <ManageTutorial />
//           </AdminAuth>
//         }
//       />
//       <Route
//         path="/add-tutorial"
//         element={
//           <AdminAuth>
//             <AddTutorial />
//           </AdminAuth>
//         }
//       />
//       <Route
//         path="/edit-tutorial/:id"
//         element={
//           <AdminAuth>
//             <EditTutorial />
//           </AdminAuth>
//         }
//       />
//       <Route
//         path="/manage-blog"
//         element={
//           <AdminAuth>
//             <ManageBlog />
//           </AdminAuth>
//         }
//       />
//       <Route
//         path="/manage-feedback"
//         element={
//           <AdminAuth>
//             <AdminInquiries />
//           </AdminAuth>
//         }
//       />
//       <Route
//         path="/manage-blog-details/:id"
//         element={
//           <AdminAuth>
//             <ManageBlogDetails />
//           </AdminAuth>
//         }
//       />

//       {/* 🔓 Public Admin Login */}
//       <Route path="/admin-login" element={<AdminLogin />} />

//       {/* Default Redirect */}
//       <Route path="*" element={<Navigate to="/" />} />
//     </Routes>
//   );
// }
// export default App;

import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout.jsx";

import "./styles/global.css";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Tutorial from "./pages/Tutorial.jsx";
import Inquiry from "./pages/Inquiry.jsx";
import Contact from "./pages/Contact.jsx";
import UserProfile from "./pages/UserProfile.jsx";
import SignUpPage from "./pages/SignUpPage.jsx";
import SignInPage from "./pages/SignInPage.jsx";
import ProfilePage from "./pages/ProfilePage.jsx";

// ✅ Updated paths – moved all admin components inside frontend/src/admin/
import ManageTutorial from "./admin/ManageTutorial.jsx";
import TutorialPage from "./components/TutorialPage.jsx";
import BlogPage from "./pages/BlogPage.jsx";
import ManageBlog from "./admin/ManageBlog.jsx";
import EditTutorial from "./admin/EditTutorial.jsx";
import BlogDetailPage from "./pages/BlogDetailPage.jsx";
import ManageBlogDetails from "./admin/ManageBlogDetails.jsx";
import AdminInquiries from "./admin/AdminInquiries.jsx";
import AddTutorial from "./admin/AddTutorial.jsx";
import AdminDashboard from "./admin/AdminDashboard.jsx";
import AdminLogin from "./admin/AdminLogin.jsx";

// ✅ Middleware (must also be inside frontend/src/middleware/)
import AdminAuth from "./middleware/AdminAuth.jsx";
import ProtectedRoute from "./middleware/ProtectedRoute.jsx";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    fetch("https://brightcoder-admin.onrender.com/api")
      .then(() => console.log("✅ Backend awake"))
      .catch(() => console.log("⚠️ Backend sleeping, waking up..."));
  }, []);
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/inquiry" element={<Inquiry />} />
        <Route path="/sign-in/*" element={<SignInPage />} />
        <Route path="/sign-up/*" element={<SignUpPage />} />
        <Route path="/user" element={<UserProfile />} />
        <Route path="/profile" element={<ProfilePage />} />

        <Route
          path="/tutorial"
          element={
            <ProtectedRoute>
              <Tutorial />
            </ProtectedRoute>
          }
        />

        <Route
          path="/blog"
          element={
            <ProtectedRoute>
              <BlogPage />
            </ProtectedRoute>
          }
        />

        <Route
          path="/tutorial/:slug"
          element={
            <ProtectedRoute>
              <TutorialPage />
            </ProtectedRoute>
          }
        />

        <Route
          path="/blog/:id"
          element={
            <ProtectedRoute>
              <BlogDetailPage />
            </ProtectedRoute>
          }
        />
      </Route>

      <Route
        path="/admin-dashboard"
        element={
          <AdminAuth>
            <AdminDashboard />
          </AdminAuth>
        }
      />
      <Route
        path="/manage-tutorial"
        element={
          <AdminAuth>
            <ManageTutorial />
          </AdminAuth>
        }
      />
      <Route
        path="/add-tutorial"
        element={
          <AdminAuth>
            <AddTutorial />
          </AdminAuth>
        }
      />
      <Route
        path="/edit-tutorial/:id"
        element={
          <AdminAuth>
            <EditTutorial />
          </AdminAuth>
        }
      />
      <Route
        path="/manage-blog"
        element={
          <AdminAuth>
            <ManageBlog />
          </AdminAuth>
        }
      />
      <Route
        path="/manage-feedback"
        element={
          <AdminAuth>
            <AdminInquiries />
          </AdminAuth>
        }
      />
      <Route
        path="/manage-blog-details/:id"
        element={
          <AdminAuth>
            <ManageBlogDetails />
          </AdminAuth>
        }
      />

      {/* 🔓 Public Admin Login */}
      <Route path="/admin-login" element={<AdminLogin />} />

      {/* Default Redirect */}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default App;
