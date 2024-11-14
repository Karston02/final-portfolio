import React from "react";
import { Box, Text } from "@mantine/core";
import "./useHeroStyles.css";

export function Hero() {
  return (
    <Box className="hero-container">
      <Box className="hero-content">
        <Text component="p" className="greeting-text">
          Hi, I am Karston <span className="waving-hand">👋</span>
        </Text>
        <Text className="subtitle-text">
          Engineering software that powers progress
        </Text>
      </Box>
    </Box>
  );
}
