import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LandingPage } from "./pages/LandingPage";
import { LoginPage } from "./pages/LoginPage";
import { HomePage } from "./pages/HomePage";
import { RegisterPage } from "./pages/RegisterPage";
import { SubmitScantronPage } from "./pages/SubmitScantronPage";
import { Navbar } from "./components/navbar/Navbar";
import { CreateCoursePage } from "./pages/CreateCoursePage";

export const PageRouter = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/submit-scantron" element={<SubmitScantronPage />} />
          <Route path="/create-course" element={<CreateCoursePage />} />
        </Routes>
      </Router>
    </>
  );
};
