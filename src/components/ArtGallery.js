import React, { useState } from "react";
import { ArtGalleryData } from "./data/ArtGalleryData";
import { IllustrationsData } from "./data/IllustrationsData";
import { WebDesignsData } from "./data/WebDesignsData";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import "./styles/ArtGallery.css";

const ArtGallery = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  } else if (slides === ArtGalleryData) {
    return (
      <section className="slider">
        <IoIosArrowBack className="left-arrow" onClick={prevSlide} />
        <IoIosArrowForward className="right-arrow" onClick={nextSlide} />
        {ArtGalleryData.map((slide, index) => {
          return (
            <div
              className={index === current ? `slide active` : `slide`}
              key={index}
            >
              {index === current && (
                <img src={slide.image} alt={slide.alt} className="image" />
              )}
            </div>
          );
        })}
      </section>
    );
  } else if (slides === IllustrationsData) {
    return (
      <section className="slider">
        <IoIosArrowBack className="left-arrow" onClick={prevSlide} />
        <IoIosArrowForward className="right-arrow" onClick={nextSlide} />
        {IllustrationsData.map((slide, index) => {
          return (
            <div
              className={index === current ? `slide active` : `slide`}
              key={index}
            >
              {index === current && (
                <img src={slide.image} alt={slide.alt} className="image" />
              )}
            </div>
          );
        })}
      </section>
    );
  } else {
    return (
      <section className="slider">
        <IoIosArrowBack className="left-arrow" onClick={prevSlide} />
        <IoIosArrowForward className="right-arrow" onClick={nextSlide} />
        {WebDesignsData.map((slide, index) => {
          return (
            <div
              className={index === current ? `slide active` : `slide`}
              key={index}
            >
              {index === current && (
                <a href={slide.href} target="_blank" rel="noreferrer">
                  <img src={slide.image} alt={slide.alt} className="image" />
                </a>
              )}
            </div>
          );
        })}
      </section>
    );
  }
};

export default ArtGallery;
