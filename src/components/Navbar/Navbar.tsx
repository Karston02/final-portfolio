import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Container,
  Group,
  Menu,
  UnstyledButton,
  Text,
} from "@mantine/core";
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
  const navigate = useNavigate();

  // detect screen size change for mobile vs desktop
  const isMobile = useMediaQuery("(max-width: 991px)");

  useEffect(() => {
    if (!isMobile) {
      if (opened) toggle(); // close the burger menu when switching to desktop view regardless
    }
  }, [isMobile, opened, toggle]);

  return (
    <Box className="header">
      <Container className="container">
        <Box className="logo" onClick={() => navigate("/")}>
          <IconHome size={50} />
          <Text className="icon-text">KK</Text>
        </Box>

        {/* Desktop Links */}
        <Group className="links">
          <UnstyledButton className="nav-link" component="a" href="/">
            Home
          </UnstyledButton>
          <UnstyledButton className="nav-link" component="a" href="about">
            About
          </UnstyledButton>
          <UnstyledButton className="nav-link" component="a" href="projects">
            Projects
          </UnstyledButton>
          <UnstyledButton className="nav-link" component="a" href="contact">
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
          <Menu opened={opened} onClose={toggle} position="bottom-end">
            <Menu.Dropdown className="mobile-menu">
              <Menu.Item component="a" className="mobile-menu-item" href="/">
                <IconHome size={18} /> Home
              </Menu.Item>
              <Menu.Item
                component="a"
                className="mobile-menu-item"
                href="about"
              >
                <IconUser size={18} /> About
              </Menu.Item>
              <Menu.Item
                component="a"
                className="mobile-menu-item"
                href="projects"
              >
                <IconBriefcase size={18} /> Projects
              </Menu.Item>
              <Menu.Item
                component="a"
                className="mobile-menu-item"
                href="contact"
              >
                <IconMail size={18} /> Contact
              </Menu.Item>
            </Menu.Dropdown>
          </Menu>
        </div>
      </Container>
    </Box>
  );
}
