import { Burger, Drawer, Group, Divider, UnstyledButton } from "@mantine/core";
import { IconArrowRight } from "@tabler/icons";
import useStyles from "./HeaderMobile.styles";
import { scrollToAnchor } from "src/common/utils";
import React, { useState } from "react";
import Link from "next/link";

interface HeaderProps {
  navbarOpened: boolean;
  toggleNavbar(): void;
}

export function HeaderMobile({ navbarOpened, toggleNavbar }: HeaderProps) {
  const { classes } = useStyles();
  const [drawerStatus, setDrawerStatus] = useState(false);
  const drawerListEnum = {
    Home: "home",
    Project: "project",
    Info: "info",
    Contact: "contact",
  };
  const generateDrawerListItem = () => {
    return (
      <div className={classes.drawerList}>
        {Object.keys(drawerListEnum).map((listKey: string) => (
          <div key={listKey}>
            <div
              className={classes.drawerListItem}
              onClick={() => {
                scrollToAnchor(drawerListEnum[listKey], true);
                setDrawerStatus(false);
              }}
            >
              <UnstyledButton>
                <span className={classes.drawerListItemText}>{listKey}</span>
              </UnstyledButton>
              <IconArrowRight color="white" size={24} />
            </div>
            <Divider />
          </div>
        ))}
      </div>
    );
  };
  return (
    <div className={classes.header} id="MobileNav">
      <div className={classes.inner}>
        <div className={classes.logo}>AETHER</div>
        <Group spacing="lg">
          <Burger
            opened={navbarOpened}
            size="sm"
            onClick={() => {
              toggleNavbar();
              setDrawerStatus(true);
            }}
            aria-label="Toggle navbar"
          />
        </Group>
      </div>
      <Drawer
        opened={drawerStatus}
        onClose={() => {
          setDrawerStatus(false);
        }}
        title={<div className={classes.logo}>AETHER</div>}
        padding="xl"
        size="lg"
        position="right"
        styles={{ drawer: { backgroundColor: "rgba(0, 0, 0, 0.7)" } }}
      >
        {generateDrawerListItem()}
      </Drawer>
    </div>
  );
}
