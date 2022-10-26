import { createStyles } from "@mantine/core";

export const useStyles = createStyles(theme => {
  return {
    marquee: {
      background: "url('/scroll-bg.png') no-repeat",
      backgroundSize: 'cover',
      width: "100vw",
      boxSizing: "border-box",
      padding: "10px",
      color: "white",
      display: "flex",
      alignItems: "center",
      overflow: "hidden",
    },
    marqueeContent: {
      display: "flex",
      animation: "marquee 20s linear infinite running",
    },
    marqueeTag: {
      minWidth: '175px',
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      transition: "all .2s ease",
      fontFamily: 'Arial-BoldMT, Arial',
      [theme.fn.largerThan('md')]: {
        fontSize: '18px',
        minWidth: '220px',
        lineHeight: '20px',
        padding: '8px 0'
      },
      [theme.fn.smallerThan('md')]: {
        fontSize: '14px',
        minWidth: '156px',
        lineHeight: '18px',
        padding: '6px 0'
      }
    },
  };
});
