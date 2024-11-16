import React, { useState} from 'react';
import './Carousel.css';
import iPhone1 from '../assets/Carousel/1.svg';
import iPhone2 from '../assets/Carousel/2.svg';
import iPhone3 from '../assets/Carousel/3.svg';

function Carousel() {
  const images = [iPhone1, iPhone2, iPhone3];
  const [currentIndex, setCurrentIndex] = useState(0);

  const changeSlide = (direction) => {
    let newIndex = currentIndex + direction;
    if (newIndex < 0) {
      newIndex = images.length - 1;
    } else if (newIndex >= images.length) {
      newIndex = 0;
    }
    setCurrentIndex(newIndex);
  };

  return (
    <div className="carousel-background">
    <div className="carousel-container">
      <h1 className="rubrik">How Does It Work?</h1>
      <div className="carousel">
        <div className="carousel-images" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {images.map((image, index) => (
            <img key={index} src={image} alt={`Iphone slide ${index + 1}`} />
          ))}
        </div>
      <button className="carousel-btn prev" onClick={() => changeSlide(-1)}>
        &#10094;
      </button>
      <button className="carousel-btn next" onClick={() => changeSlide(1)}>
        &#10095;
      </button>
    </div>
      <div className="transfer-text">
        <h4>Latest transaction history</h4>
        <p>
          Enim, et amet praesent pharetra. Mi non ante hendrerit amet sed. Arcu sociis tristique quisque hac in consectetur condimentum.
        </p>
      </div>
    </div>
    </div>
  );
}

export default Carousel;

