 import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FeatureSection from "./components/FeatureSection";
import Footer from "./Footer";
 
function App() {
  return (
    <div className="min-h-screen font-['Nunito'] font-bold text-white bg-linear-to-b from-[#FFF8F3] via-[#FFF5FA] to-[#F3E8FF]">

      <Navbar />

      <Hero />

      <FeatureSection />

      <Footer />

    </div>
  );
}

export default App;