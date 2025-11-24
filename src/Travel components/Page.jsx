import HeroSection from "./HeroSection";
import Navbar from "./Navbar";
import "./Page.css";

export default function Page() {
  return (
    <div className="page">
      <Navbar />
      <HeroSection />
    </div>
  );
}
