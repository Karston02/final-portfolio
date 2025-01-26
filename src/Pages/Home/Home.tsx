import { Navbar, Header, Carousel } from "../../components";
import { Box, Title } from "@mantine/core";
import "./useHomeStyles.css";

export function Home() {
  return (
    <Box className="page-wrapper">
      <Navbar />
      <Header />
      <Title className="section-title">Projects</Title>
      <Carousel />
      <Title className="section-title">Experience</Title>
    </Box>
  );
}
