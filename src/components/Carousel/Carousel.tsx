import { useState } from "react";
import { Box, Image, Button, Title } from "@mantine/core";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import { slides } from "./carouselData";
import "./useCarouselStyles.css";

export function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  // function to calculate index of previous slide
  const getPrevIndex = (currentIndex: number) =>
    currentIndex === 0 ? slides.length - 1 : currentIndex - 1;

  // function to calculate index of next slide
  const getNextIndex = (currentIndex: number) =>
    currentIndex === slides.length - 1 ? 0 : currentIndex + 1;

  return (
    <Box className="carousel-wrapper">
      <Box className="carousel-container">
        {/* Left arrow */}
        <BsArrowLeftCircleFill
          className="arrow arrow-left"
          onClick={handlePrev}
        />
        {/* Previous slide */}
        <Box className="inactive-slide prev-slide">
          <Image
            src={slides[getPrevIndex(currentIndex)].thumbnail}
            alt={`Slide ${getPrevIndex(currentIndex)}`}
            className="carousel-image"
          />
        </Box>
        {/* Current slide */}
        <Box className="carousel-slide">
          <Title>{slides[currentIndex].title}</Title>
          <Image
            src={slides[currentIndex].thumbnail}
            alt={`Slide ${currentIndex}`}
            className="carousel-image"
          />
          <Box className="button-container">
            {/* GitHub button */}
            <Button
              component="a"
              href={slides[currentIndex].gitHubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="carousel-button"
            >
              Source Code
            </Button>
            {/* Demo video button */}
            <Button
              component="a"
              href={slides[currentIndex].demoVideo || "#"}
              target="_blank"
              rel="noopener noreferrer"
              disabled={!slides[currentIndex].demoVideo}
              className="carousel-button"
            >
              {slides[currentIndex].demoVideo
                ? "Demo Video"
                : "No Demo Available"}
            </Button>
          </Box>
        </Box>
        {/* Next slide */}
        <Box className="inactive-slide next-slide">
          <Image
            src={slides[getNextIndex(currentIndex)].thumbnail}
            alt={`Slide ${getNextIndex(currentIndex)}`}
            className="carousel-image"
          />
        </Box>
        {/* Right arrow */}
        <BsArrowRightCircleFill
          className="arrow arrow-right"
          onClick={handleNext}
        />
      </Box>
    </Box>
  );
}
