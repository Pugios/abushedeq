import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react"

import Home from "./components/Home";
import Press from "./components/Press";
import About from "./components/About";
import Navigation from "./components/layout/Navigation";
import Footer from "./components/layout/Footer";
import {LanguageProvider} from "./components/LanguageContext";


export default function App() {
  return (
    <LanguageProvider>
      <Router>
        <div className="min-h-screen bg-[#0A0B14] text-white">
          <Navigation />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/press" element={<Press />} />
          </Routes>
          <Footer />
        </div>
      </Router>
      <Analytics />
    </LanguageProvider>
  );
}