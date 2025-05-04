// chakra-config.js
import { extendTheme } from "@chakra-ui/react";

// Chakra UI theme config set karo
const config = {
  initialColorMode: "light", // Light mode default hai
  useSystemColorMode: false, // System ke color mode ko ignore karega
};

const theme = extendTheme({ config });

export default theme;
