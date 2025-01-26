import { Box, Image } from "@mantine/core";
import { slides } from "./carouselData";
import "./useCarouselStyles.css";

export function Carousel() {
  return (
    <Box>
      {slides.map((slide, index) => (
        <Image key={index} src={slide.thumbnail} alt={`slide ${index}`} />
      ))}
    </Box>
  );
}
