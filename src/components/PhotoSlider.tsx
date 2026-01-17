import React, { useState, useEffect } from "react";

import h1 from "../components/images/h1.jpeg";
import h2 from "../components/images/h2.jpeg";
import h3 from "../components/images/h3.jpeg";
import beaty from "../components/images/beauty.jpeg";
import us from "../components/images/us.png";
import us2 from "../components/images/us2.jpeg";
import us3 from "../components/images/us3.jpeg";
import us4 from "../components/images/us4.jpeg";
import us5 from "../components/images/us5.jpeg";
import smile from "../components/images/theSmile.jpeg";

const PhotoSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Placeholder images - replace with your actual photos
  const photos = [beaty, h2, us, us5, us3];

  const captions = [
    "The beauty can't handle you",
    "That magical sunset",
    "When you made me laugh so hard",
    "Our perfect day",
    "Our first adventure together",
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % photos.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [photos.length]);

  return (
    <div className="photo-slider-container">
      <h2 className="slider-title">Our Beautiful Memories</h2>
      <div className="slider-wrapper">
        <div className="slider-content">
          <div className="photo-frame">
            <img
              src={photos[currentSlide]}
              alt={captions[currentSlide]}
              className="slider-image slider-image-animated"
              key={currentSlide}
            />
            <div className="photo-overlay">
              <p className="photo-caption">{captions[currentSlide]}</p>
            </div>
          </div>
        </div>

        <div className="slider-dots">
          {photos.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`slider-dot ${currentSlide === index ? "active" : ""}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PhotoSlider;
