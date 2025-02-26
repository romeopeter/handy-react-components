import { useState, useCallback, memo } from "react";
import { ImageSliderShape } from "./type";

/* -------------------------------------------------------- */

/**
 * Eatpod image slider
 *
 * @returns ReactElement
 */
function ImageSlider({
  images,
  dotsColor = "blue",
  arrowColor = "white",
  prevArrow,
  nextArrow,
  sliderClassName,
  imageContainerClassName,
  imageTagClassName,
  controlsClassName,
  arrowClassName,
  dotIndicatorsClassName,
  dotClassName,
  showIndicator,
}: ImageSliderShape) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  }, [images.length]);

  const handleNext = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  }, [images.length]);

  return (
    <div className={`image-slider ${sliderClassName}`}>
      <div className={`image-container ${imageContainerClassName}`}>
        {images.map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt={`Slider-${idx}`}
            title="image"
            className={`image-slide ${
              idx === currentIndex ? "active" : ""
            } ${imageTagClassName}`}
            style={{ display: idx === currentIndex ? "block" : "none" }}
          />
        ))}
      </div>

      <div className={`controls ${controlsClassName}`}>
        <button
          className={`arrow ${arrowClassName}`}
          onClick={handlePrevious}
          style={{ color: arrowColor }}
        >
          {prevArrow ?? "<"}
        </button>

        <button
          className={`arrow ${arrowClassName}`}
          onClick={handleNext}
          style={{ color: arrowColor }}
        >
          {nextArrow ?? ">"}
        </button>
      </div>

      {showIndicator && (
        <div className={`dots ${dotIndicatorsClassName}`}>
          {images.map((_, index) => (
            <span
              key={index}
              className={`dot ${
                index === currentIndex ? "active" : ""
              } ${dotClassName}`}
              style={{
                backgroundColor:
                  index === currentIndex ? dotsColor : "lightgray",
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default memo(ImageSlider);
