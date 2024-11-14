import { Navbar } from "../../components";
import { Box, Text } from "@mantine/core";
import HomeScene from "../../scenes/HomeScene";

export function Home() {
  return (
    <Box>
      <Navbar />
      <HomeScene />
      <Box style={{ position: "relative", zIndex: 10, color: "#fff" }}>
        <Text
          component="h1"
          style={{ fontSize: 30, fontWeight: 700, paddingTop: "400px" }}
        >
          This is testing
        </Text>
      </Box>
    </Box>
  );
}
