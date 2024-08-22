"use client";

import React, { useState, useEffect, useRef } from "react";
import styles from "./Carousel.module.css";

interface Image {
  url: string;
  caption: {
    beforeButtonText: string;
    button: string;
    afterButtonText: string;
  };
  link: string;
}

const images: Image[] = [
  {
    url: "Photos/carousal.svg",
    caption: {
      beforeButtonText: "Receive a guaranteed",
      button: "GIFT VOUCHER",
      afterButtonText: " on a monthly hire or lease",
    },
    link: "https://example.com/",
  },
  {
    url: "Photos/carousal.svg",
    caption: {
      beforeButtonText: "Receive a guaranteed",
      button: "GIFT VOUCHER",
      afterButtonText: " on a monthly hire or lease",
    },
    link: "https://example.com/",
  },
  {
    url: "Photos/carousal.svg",
    caption: {
      beforeButtonText: "Receive a guaranteed",
      button: "GIFT VOUCHER",
      afterButtonText: " on a monthly hire or lease",
    },
    link: "https://example.com/",
  },
];

const Carousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const carouselInnerRef = useRef<HTMLDivElement>(null);
  let startX: number;

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const showSlide = (index: number) => {
    const totalSlides = images.length;
    const newSlideIndex =
      index >= totalSlides ? 0 : index < 0 ? totalSlides - 1 : index;
    setCurrentSlide(newSlideIndex);

    if (carouselInnerRef.current) {
      carouselInnerRef.current.style.transform = `translateX(-${
        newSlideIndex * 100
      }%)`;
    }
  };

  const nextSlide = () => {
    showSlide(currentSlide + 1);
  };

  const prevSlide = () => {
    showSlide(currentSlide - 1);
  };

  const handleTouchStart = (event: React.TouchEvent) => {
    startX = event.touches[0].clientX;
  };

  const handleTouchEnd = (event: React.TouchEvent) => {
    const endX = event.changedTouches[0].clientX;
    if (startX > endX + 50) {
      nextSlide();
    } else if (startX < endX - 50) {
      prevSlide();
    }
  };

  return (
    <section className={styles.carousel}>
      <div
        className={styles.carouselInner}
        ref={carouselInnerRef}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className={styles.carouselItem}
            style={{ backgroundImage: `url(${image.url})` }}
            onClick={() => (window.location.href = image.link)}
          >
            <div className={styles.carouselCaption}>
              <p>
                {image.caption.beforeButtonText}{" "}
                <button>{image.caption.button}</button>
                {image.caption.afterButtonText}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.carouselIndicators}>
        {images.map((_, index) => (
          <div
            key={index}
            className={currentSlide === index ? styles.active : ""}
            onClick={() => showSlide(index)}
          ></div>
        ))}
      </div>
    </section>
  );
};

export default Carousel;
