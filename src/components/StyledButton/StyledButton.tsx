import React from "react";
import { Button } from "@mantine/core";
import "./useStyledButtonStyles.css";

interface StyledButtonProps {
  text: string;
  size: "xs" | "sm" | "md" | "lg" | "xl";
  href: string;
}

export function StyledButton(props: StyledButtonProps) {
  const { text, size, href } = props;
  return (
    <Button
      className="header-btn"
      variant="outline"
      size={size}
      component="a"
      href={href}
    >
      {text}
    </Button>
  );
}
