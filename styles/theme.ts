import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({});

export const fadeTopSlideAnimation = {
  true: { opacity: 1, y: 0 },
  false: { opacity: 0, y: "-20px" },
};

export const fadeRightSlideAnimation = {
  true: { opacity: 1, x: 0 },
  false: { opacity: 0, x: "20px" },
};

export default theme;
