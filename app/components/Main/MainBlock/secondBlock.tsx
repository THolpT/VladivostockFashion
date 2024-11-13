'use client'
import { useState } from 'react';
import Card from "../card";
import firstTShirt from '@/app/content/image.png';
import secondTShirt from '@/app/content/image (1).png';
import thirdTShirt from '@/app/content/image (2).png';
import Arrow1 from '@/app/content/Arrow 4.png';
import Arrow2 from '@/app/content/Arrow 3.png';

export default function SecondBlock() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const slides = [
        { src: firstTShirt.src, title: "Футболка синяя", cost: "1200 ₽" },
        { src: secondTShirt.src, title: "Футболка красная", cost: "1300 ₽" },
        { src: thirdTShirt.src, title: "Футболка зелёная", cost: "1400 ₽" },
        { src: firstTShirt.src, title: "Футболка синяя", cost: "1200 ₽" },
    ];

    const handlePrevClick = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
    };

    const handleNextClick = () => {
        setCurrentIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
    };

    return (
      <div className="second-block container">
          <div className="second-title-block">
            <p>Выберите одежду</p>
            <div>
              <img src={Arrow2.src} alt="Previous" onClick={handlePrevClick} />
              <img src={Arrow1.src} alt="Next" onClick={handleNextClick} />
            </div>
          </div>
          <div className="carousel">
            <div 
              className="carousel-track" 
              style={{ transform: `translateX(-${currentIndex * (window.innerWidth <= 680 ? 82 : 33)}%)` }}
            >
              {slides.map((slide, index) => (
                <Card key={index} ref={slide.src} title={slide.title} cost={slide.cost} />
              ))}
            </div>
          </div>
          <ul className="slider">
            {slides.map((_, index) => (
              <li
                key={index}
                className={`slider-li ${index === currentIndex ? 'active-slider' : ''}`}
                onClick={() => setCurrentIndex(index)}
              ></li>
            ))}
          </ul>
      </div>
    );
}
