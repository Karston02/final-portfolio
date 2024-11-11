import {
  Box,
  Container,
  Group,
  Burger,
  Menu,
  UnstyledButton,
  Text,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import {
  IconHome,
  IconUser,
  IconBriefcase,
  IconMail,
} from "@tabler/icons-react";
import "./useNavbarStyles.css";

export function Navbar() {
  const [opened, { toggle }] = useDisclosure(false);

  return (
    <Box className="header">
      {" "}
      <Container>
        <div className="logo">
          {" "}
          <IconHome size={24} />
          <Text>KK</Text>
        </div>

        {/* Desktop Links */}
        <Group className="links">
          {" "}
          <UnstyledButton component="a" href="#home">
            Home
          </UnstyledButton>
          <UnstyledButton component="a" href="#about">
            About
          </UnstyledButton>
          <UnstyledButton component="a" href="#projects">
            Projects
          </UnstyledButton>
          <UnstyledButton component="a" href="#contact">
            Contact
          </UnstyledButton>
        </Group>

        {/* Mobile Menu */}
        <Menu position="bottom-end" opened={opened} onClose={toggle}>
          <Menu.Target>
            <Burger opened={opened} onClick={toggle} size="sm" />
          </Menu.Target>
          <Menu.Dropdown>
            <Menu.Item component="a" href="#home">
              <IconHome size={18} /> Home
            </Menu.Item>
            <Menu.Item component="a" href="#about">
              <IconUser size={18} /> About
            </Menu.Item>
            <Menu.Item component="a" href="#projects">
              <IconBriefcase size={18} /> Projects
            </Menu.Item>
            <Menu.Item component="a" href="#contact">
              <IconMail size={18} /> Contact
            </Menu.Item>
          </Menu.Dropdown>
        </Menu>
      </Container>
    </Box>
  );
}

export default Navbar;
