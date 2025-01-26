import { Navbar, Header, Carousel } from "../../components";
import { Box, Title } from "@mantine/core";
import "./useHomeStyles.css";

export function Home() {
  return (
    <Box>
      <Navbar />
      <Header />
      <Title className="section-title">Projects</Title>
      <Carousel />
    </Box>
  );
}
