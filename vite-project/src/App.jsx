 import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FeatureSection from "./components/FeatureSection";
import Footer from "./Footer";
import Apps from "./Live";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <div className="min-h-screen font-['Nunito'] font-bold text-white bg-linear-to-b from-[#FFF8F3] via-[#FFF5FA] to-[#F3E8FF]">
            <Navbar />
            <Hero />
            <FeatureSection />
            <Apps />
            <Footer />
          </div>
        }
      />

      <Route path="/about" element={<Apps />} />
    </Routes>
  );
}

export default App;