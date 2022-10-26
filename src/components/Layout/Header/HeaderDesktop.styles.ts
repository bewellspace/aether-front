import { createStyles } from "@mantine/core";

export const HEADER_HEIGHT = 100;

export default createStyles((theme) => ({
  header: {
    top: 0,
    left: 0,
    right: 0,
    height: HEADER_HEIGHT,
    zIndex: 6,
    position: "fixed",
    background: 'linear-gradient(rgb(0, 0, 0) 5.13%, rgba(0, 0, 0, 0) 99.9%)',
    // boxShadow: '0px 1px 0px #2E2A53',
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 80px",

    [theme.fn.smallerThan("md")]: {
      display: "none",
    },
  },

  logo: {
    paddingRight: theme.spacing.md,
    paddingLeft: theme.spacing.md,
    height: HEADER_HEIGHT,
    paddingTop: 6,
    display: "flex",
    alignItems: "center",
    fontFamily: 'Copperplate-Bold, Copperplate',
    fontWeight: 'bold',
    fontSize: '18px',
    lineHeight: 1
  },

  mainSection: {
    display: "flex",
    alignItems: "center",
  },

  logoWrapper: {
    display: "flex",
    alignItems: "center",
    pointerEvents: "all",
  },

  menus: {
    color: "#fff",
  },

  menuItem: {
    color: "#8F8585",
    padding: "8px 24px",
    fontWeight: 500,
    fontSize: "15px",
    lineHeight: "18px",
    borderRadius: '18px',
    "&:hover": {
      color: '#fff',
      backgroundColor: "rgba(216, 216, 216, 0.2)",
    },
  },

  controls: {
    display: "flex",
  },
}));
