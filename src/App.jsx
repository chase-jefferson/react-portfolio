import { Routes, Route } from "react-router-dom";
import Header from "./Header.jsx";
import AboutMe from "./AboutMe.jsx";
import Portfolio from "./Portfolio.jsx";
import Contact from "./Contact.jsx";
import Resume from "./Resume.jsx";
import Footer from "./Footer.jsx";

const App = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />

      {/* Main Content */}
      <main className="flex-grow-1 py-4">
        <div className="container">
          <Routes>
            <Route path="/" element={<AboutMe />} />
            <Route path="/about" element={<AboutMe />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/resume" element={<Resume />} />
          </Routes>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default App;
