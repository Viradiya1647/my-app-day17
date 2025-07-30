import Counter from "../Day16/Counter";
import Toggle from "../Day16/Toggle";
import Form from "../Day16/Form";
import TextArea from "../Day16/TextArea";
import ClickOutside from "../Day16/ClickOutside";
import WeatherApp from "../Day17/WeatherApp";
import Timer from "../Day17/Timer";
import QuoteGenerator from "../Day17/QuoteGenerator";
import Gallery from "../Day17/Gallery";
import "../App.css";
import { useEffect, useState } from "react";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const visible = () => {
      if (window.pageYOffset > 1000) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", visible);
    return () => {
      window.removeEventListener("scroll", visible);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div>
      <h2>Component for scroll to top use</h2>
      <Counter />
      <Toggle />
      <Form />
      <TextArea />
      <ClickOutside />
      <WeatherApp />
      <Timer />
      <QuoteGenerator />
      <Gallery />

      {isVisible && (
        <button className="scroll-top-btn" onClick={scrollToTop}>
          Sroll to Top
        </button>
      )}
    </div>
  );
}
