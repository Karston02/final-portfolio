import { Box, Text, Grid, Button, Image } from "@mantine/core";
import "./useHeaderStyles.css";

export function Header() {
  return (
    <Box className="header-container">
      <Grid className="header-grid">
        {/* Left Column for Text Content */}
        <Grid.Col md={6} sm={12} className="header-content">
          <Text className="header-title">
            Hi, I'm <span className="highlight">Karston&nbsp;Kuciemba</span>{" "}
            <br />
            <span className="highlight">a </span>Software Engineer
          </Text>
          {/* TODO: Change This Description. It's terrible */}
          <Text className="header-description">
            I am a passionate software engineer building innovative solutions to
            real-world problems, with experience in full-stack development,
            algorithm visualization, and web design.
          </Text>
          <Button
            className="header-btn"
            variant="outline"
            size="md"
            component="a"
            href="google.com"
          >
            Resume
          </Button>
        </Grid.Col>
        {/* Right Column for Image */}
        <Grid.Col
          md={4}
          sm={12} // Update for larger screens
          className="header-image"
        >
          <Image
            src="https://placehold.co/600x400"
            alt="Hero Illustration"
            className="hero-image"
          />
        </Grid.Col>
      </Grid>
    </Box>
  );
}
