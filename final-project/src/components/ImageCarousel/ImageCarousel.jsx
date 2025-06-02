import { useState } from 'react';

const images = [
  "unnamed.jpg",
  "unnamed (1).jpg",
  "unnamed (2).jpg"
];

export default function ImageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <div className="image-carousel">
      <button className="prev-btn" onClick={prevImage}>
        &#10094;
      </button>

      <img
        src={images[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
        className="carousel-image"
      />

      <button className="next-btn" onClick={nextImage}>
        &#10095;
      </button>
    </div>
  );
}
//for this I just found someone doing something similar. I didn't want to spend a ton of time on this.