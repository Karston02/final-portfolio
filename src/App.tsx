import React from "react";
import { MantineProvider, Box, Text } from "@mantine/core";

function App() {
  return (
    <MantineProvider>
      <Box>
        <Text>Mantine added</Text>
      </Box>
    </MantineProvider>
  );
}

export default App;
