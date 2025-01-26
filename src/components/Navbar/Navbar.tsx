import { useEffect } from "react";
import { Box, Container, Group, UnstyledButton, Text } from "@mantine/core";
import { useDisclosure, useMediaQuery } from "@mantine/hooks";
import {
  IconHome,
  IconUser,
  IconBriefcase,
  IconMail,
} from "@tabler/icons-react";
import "./useNavbarStyles.css";

export function Navbar() {
  const [opened, { toggle }] = useDisclosure(false);
  const isMobile = useMediaQuery("(max-width: 991px)");

  useEffect(() => {
    if (!isMobile && opened) toggle();
  }, [isMobile, opened, toggle]);

  const scrollToSection = (id: any) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <Box className="header">
      <Container className="container">
        <Box className="logo" onClick={() => scrollToSection("home")}>
          <IconHome size={50} />
          <Text className="icon-text">KK</Text>
        </Box>

        {/* Desktop Links */}
        <Group className="links">
          <UnstyledButton
            className="nav-link"
            onClick={() => scrollToSection("home")}
          >
            Home
          </UnstyledButton>
          <UnstyledButton
            className="nav-link"
            onClick={() => scrollToSection("about")}
          >
            About
          </UnstyledButton>
          <UnstyledButton
            className="nav-link"
            onClick={() => scrollToSection("projects")}
          >
            Projects
          </UnstyledButton>
          <UnstyledButton
            className="nav-link"
            onClick={() => scrollToSection("contact")}
          >
            Contact
          </UnstyledButton>
        </Group>

        {/* Mobile Burger Menu */}
        <div className="burgerMenu" onClick={toggle}>
          <div className={`burger-icon ${opened ? "opened" : ""}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        {/* Mobile Links Dropdown */}
        {opened && (
          <Box className="mobile-menu">
            <UnstyledButton
              className="mobile-link"
              onClick={() => {
                scrollToSection("home");
                toggle();
              }}
            >
              <IconHome size={18} /> Home
            </UnstyledButton>
            <UnstyledButton
              className="mobile-link"
              onClick={() => {
                scrollToSection("about");
                toggle();
              }}
            >
              <IconUser size={18} /> About
            </UnstyledButton>
            <UnstyledButton
              className="mobile-link"
              onClick={() => {
                scrollToSection("projects");
                toggle();
              }}
            >
              <IconBriefcase size={18} /> Projects
            </UnstyledButton>
            <UnstyledButton
              className="mobile-link"
              onClick={() => {
                scrollToSection("contact");
                toggle();
              }}
            >
              <IconMail size={18} /> Contact
            </UnstyledButton>
          </Box>
        )}
      </Container>
    </Box>
  );
}
