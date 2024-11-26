import { Suspense } from "react";
import { Loader } from "../../components";
import { Box, Text } from "@mantine/core";
import "./useHeroStyles.css";
import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera } from "@react-three/drei";
import { Room } from "./Room/Room";
import { Leva } from "leva";
import { useMediaQuery } from "react-responsive";
import { HeroCamera } from "./HeroCamera";

export const calculateSizes = (
  isSmall: boolean,
  isMobile: boolean,
  isTablet: boolean
) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [-2.5, -5.5, 0],
    targetPosition: isSmall
      ? [-5, -10, -10]
      : isMobile
      ? [-9, -10, -10]
      : isTablet
      ? [-11, -7, -10]
      : [-13, -13, -10],
  };
};

export function Hero() {
  const isSmall = useMediaQuery({ maxWidth: 440 });
  const isMobile = useMediaQuery({ maxWidth: 991 });
  const isTablet = useMediaQuery({ minWidth: 991, maxWidth: 1024 });

  const sizes = calculateSizes(isSmall, isMobile, isTablet);

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
        <Leva />
        <Canvas className="canvas">
          <Suspense fallback={<Loader />}>
            <Leva hidden />
            <PerspectiveCamera makeDefault position={[0, 0, 30]} />

            <HeroCamera isMobile={isMobile}>
              <Room
                scale={sizes.deskScale}
                position={sizes.deskPosition}
                rotation={[0.1, -Math.PI, 0]}
              />
            </HeroCamera>

            <ambientLight intensity={1} />
            <directionalLight position={[10, 10, 10]} intensity={0.5} />
          </Suspense>
        </Canvas>
      </Box>
    </Box>
  );
}
