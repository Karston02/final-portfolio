import { Suspense } from "react";
import { Loader } from "../../components";
import { Box, Text } from "@mantine/core";
import "./useHeroStyles.css";
import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera, OrbitControls } from "@react-three/drei";
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
          <Suspense fallback={<Loader />}>
            <PerspectiveCamera makeDefault position={[0, 10, 10]} />
            <Room scale={0.8} position={[0, 0, 0]} rotation={[0, 270, 0]} />
            <ambientLight intensity={1} />
            <directionalLight position={[10, 10, 10]} intensity={0.5} />
            <OrbitControls enableZoom={true} />
          </Suspense>
        </Canvas>
      </Box>
    </Box>
  );
}
