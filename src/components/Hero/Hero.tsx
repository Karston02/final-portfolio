import React from "react";
import { Box, Text } from "@mantine/core";
import "./useHeroStyles.css";
import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera } from "@react-three/drei";
import Room from "./Room/Room";

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
      <Box className="canvas-container">
        <Canvas className="canvas">
          <PerspectiveCamera makeDefault position={[0, 0, 10]} />
          <Room />
        </Canvas>
      </Box>
    </Box>
  );
}
