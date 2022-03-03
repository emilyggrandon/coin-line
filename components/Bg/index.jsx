import React, { useEffect } from "react";
import "./Bg.css";

function Bg(props) {
  const { src, className } = props;

  useEffect(() => {
    var image = document.querySelectorAll(".filter");
    new window.simpleParallax(image, {
      orientation: "up",
      scale: 1.2,
      overflow: false,
      delay: 0.4,
      transition: "none",
    });
  }, []);

  return <img className={`filter ${className || ""}`} src={src} />;
}

export default Bg;
