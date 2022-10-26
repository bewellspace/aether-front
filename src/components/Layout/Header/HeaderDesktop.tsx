/* eslint-disable import/no-relative-packages */
import React, { useState } from "react";
import { Group, UnstyledButton } from "@mantine/core";
import { scrollToAnchor } from "src/common/utils";
import useStyles from "./HeaderDesktop.styles";

export function HeaderDesktop() {
  const { classes } = useStyles();
  const [active, setActive] = useState("home");

  return (
    <div className={classes.header} id="nav">
      <div className={classes.mainSection}>
        <div className={classes.logoWrapper}>
          <div className={classes.logo}>AETHER</div>
        </div>
      </div>

      <Group spacing={5}>
        <UnstyledButton
          onClick={() => {
            scrollToAnchor("home");
            setActive("home");
          }}
          className={classes.menuItem}
          sx={() => ({
            backgroundColor:
              active === "home" ? "rgba(216, 216, 216, 0.2)" : "transparent",
            color: active === "home" ? "#fff" : "#8F8585",
          })}
        >
          Home
        </UnstyledButton>
        <UnstyledButton
          onClick={() => {
            scrollToAnchor("project");
            setActive("project");
          }}
          className={classes.menuItem}
          sx={() => ({
            backgroundColor:
              active === "project" ? "rgba(216, 216, 216, 0.2)" : "transparent",
            color: active === "project" ? "#fff" : "#8F8585",
          })}
        >
          Project
        </UnstyledButton>
        <UnstyledButton
          onClick={() => {
            scrollToAnchor("info");
            setActive("info");
          }}
          className={classes.menuItem}
          sx={() => ({
            backgroundColor:
              active === "info" ? "rgba(216, 216, 216, 0.2)" : "transparent",
            color: active === "info" ? "#fff" : "#8F8585",
          })}
        >
          Info
        </UnstyledButton>
        <UnstyledButton
          onClick={() => {
            scrollToAnchor("contact");
            setActive("contact");
          }}
          className={classes.menuItem}
          sx={() => ({
            backgroundColor:
              active === "contact" ? "rgba(216, 216, 216, 0.2)" : "transparent",
            color: active === "contact" ? "#fff" : "#8F8585",
          })}
        >
          Contact
        </UnstyledButton>
      </Group>
    </div>
  );
}
