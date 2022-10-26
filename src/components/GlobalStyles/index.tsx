import { Global, MantineTheme } from "@mantine/core";

export function GlobalStyles() {
  return (
    <Global
      styles={(theme: MantineTheme) => [
        {
          "@font-face": {
            fontFamily: "Copperplate-Bold",
            src: `url('/fonts/Copperplate-Bold.ttf') format("truetype")`,
            fontWeight: 400,
            fontStyle: "normal",
          },
        },
        {
          "@font-face": {
            fontFamily: "Arial-BoldMT",
            src: `url('/fonts/Arial-MT-Bold.ttf') format("truetype")`,
            fontWeight: 400,
            fontStyle: "normal",
          },
        },
        {
          "@font-face": {
            fontFamily: "ArialMT",
            src: `url('/fonts/Arial-MT.ttf') format("truetype")`,
            fontWeight: 400,
            fontStyle: "normal",
          },
        },
        {
          "*, *::before, *::after": {
            boxSizing: "border-box",
          },
          body: {
            backgroundColor: "#07091E",
            color: "#fff",
            lineHeight: theme.lineHeight,
            fontSize: theme.fontSizes.md,
            WebkitFontSmoothing: "antialiased",
            MozOsxFontSmoothing: "grayscale",
          },
          p: {
            margin: "6px 0",
          },
        },
      ]}
    />
  );
}
