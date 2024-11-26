import { ReactNode, useRef, useState } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { easing } from "maath";

interface HeroCameraProps {
  isMobile: boolean;
  children: ReactNode;
}

export function HeroCamera({ isMobile, children }: HeroCameraProps) {
  const group = useRef<THREE.Group>(null);
  const [isDragging, setIsDragging] = useState(false); // Track camera interaction state

  useFrame((state, delta) => {
    if (!isDragging) {
      const time = state.clock.getElapsedTime();

      // Subtle oscillation when not interacting
      const oscillationX = Math.sin(time / 4) * 0.2;
      const oscillationY = Math.cos(time / 6) * 0.1;

      // Smoothly interpolate camera position
      easing.damp3(
        state.camera.position,
        [oscillationX, oscillationY, 20],
        0.2,
        delta
      );

      // Subtle rotation of the group
      if (group.current) {
        easing.dampE(
          group.current.rotation,
          [Math.sin(time / 8) / 16, Math.cos(time / 10) / 16, 0],
          0.2,
          delta
        );
      }
    }
  });

  return (
    <>
      {/* OrbitControls with event handlers to detect user interaction */}
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        onStart={() => setIsDragging(true)} // User starts interacting
        onEnd={() => setIsDragging(false)} // User stops interacting
      />

      {/* Group for subtle motion when not interacting */}
      <group ref={group}>{children}</group>
    </>
  );
}
