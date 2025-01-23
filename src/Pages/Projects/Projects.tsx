import React from "react";
import { Navbar } from "../../components";
import { Box, Text } from "@mantine/core";
import { projects } from "./projectData";

export function Projects() {
  return (
    <Box>
      <Navbar />
      <Text>Projects</Text>
    </Box>
  );
}
