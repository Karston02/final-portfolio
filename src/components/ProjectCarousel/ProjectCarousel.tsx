import { useState } from "react";
import { Button, Image, Box, Text } from "@mantine/core";
import { Carousel } from "@mantine/carousel";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import "./useProjectCarouselStyles.css";

type ProjectType = {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  videoUrl: string;
  sourceCodeUrl: string;
};

type ProjectCarouselProps = {
  projects: ProjectType[];
};

export function ProjectCarousel(props: ProjectCarouselProps) {
  const { projects } = props;

  const [videoPlaying, setVideoPlaying] = useState<string | null>(null);

  const handleThumbnailClick = (videoUrl: string) => {
    setVideoPlaying(videoUrl);
  };

  return (
    <Box className="carouselContainer" style={{ position: "relative" }}>
      <Carousel
        loop
        slideSize="25%" // Smaller slide size so only one project is fully visible at a time
        align="center"
        withIndicators
        height={250} // Adjust height to fit smaller images
        slideGap="lg"
        className="carouselViewport"
      >
        {projects.map((project) => (
          <Carousel.Slide key={project.id}>
            <Box className="carouselItem">
              <Image
                src={project.imageUrl}
                alt={project.title}
                className="carouselImage"
                onClick={() => handleThumbnailClick(project.videoUrl)}
              />
              {videoPlaying === project.videoUrl && (
                <Box className="videoOverlay">
                  <iframe
                    src={project.videoUrl}
                    title={project.title}
                    width="80%"
                    height="80%"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                  />
                  <Button
                    variant="light"
                    className="closeVideoButton"
                    onClick={() => setVideoPlaying(null)}
                  >
                    ✕
                  </Button>
                </Box>
              )}
              <Box className="carouselContent">
                <Text className="carouselTitle">{project.title}</Text>
                <Text className="carouselDescription">
                  {project.description}
                </Text>
                <Button
                  variant="outline"
                  className="sourceCodeButton"
                  onClick={() => window.open(project.sourceCodeUrl, "_blank")}
                >
                  View Source Code
                </Button>
              </Box>
            </Box>
          </Carousel.Slide>
        ))}
      </Carousel>

      {/* Custom previous and next buttons */}
      <Button
        className="prevButton"
        variant="light"
        onClick={() =>
          (
            document.querySelector(".mantine-Carousel-prev") as HTMLElement
          )?.click()
        } // trigger previous slide
        style={{
          position: "absolute",
          top: "50%",
          left: 10,
          zIndex: 10,
          transform: "translateY(-50%)",
        }}
      >
        <FiChevronLeft size={24} />
      </Button>

      <Button
        className="nextButton"
        variant="light"
        onClick={() =>
          (
            document.querySelector(".mantine-Carousel-next") as HTMLElement
          )?.click()
        } // trigger next slide
        style={{
          position: "absolute",
          top: "50%",
          right: 10,
          zIndex: 10,
          transform: "translateY(-50%)",
        }}
      >
        <FiChevronRight size={24} />
      </Button>
    </Box>
  );
}
