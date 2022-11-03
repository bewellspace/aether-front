import { useMediaQuery } from "@mantine/hooks";
import {
  Box,
  Group,
  Stack,
  Text,
  UnstyledButton,
  Image as MImage,
  Center,
} from "@mantine/core";
import { useSiteStyles } from "src/theme";
import ContentExample from "src/components/RoadMap/index";
import TextScroll from "./TextScroll";
import { NextPage } from "next";
import TweenOne from "rc-tween-one/lib/TweenOne";
import { OverPack } from "rc-scroll-anim";
import { scrollToAnchor } from "src/common/utils";
import { useEffect, useState } from "react";

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const isUserMobile = () => {
      const ua = navigator.userAgent.toLowerCase();
      console.log("ua", ua);
      return /mobile|android|iphone|ipod|phone|ipad/i.test(ua);
    };
    setIsMobile(isUserMobile());
  }, []);

  const BannerIconList = [
    {
      icon: "/icon-discord.png",
      url: "https://discord.gg/JqVbvfwmre",
      type: "blank",
    },
    {
      icon: "/icon-telegram.png",
      url: "https://t.me/theaetherofficial",
      type: "blank",
    },
    {
      icon: "/icon-twitter.png",
      url: "https://twitter.com/TheAether_io",
      type: "blank",
    },
  ];
  return (
    <Stack
      id="home"
      align="center"
      sx={(theme) => ({
        position: "relative",
        [theme.fn.smallerThan("md")]: {
          marginTop: "50px",
        },
      })}
    >
      {isMobile && <MImage src="/video.gif"></MImage>}
      {!isMobile && (
        <video
          poster="/video-cover.png"
          style={{
            position: "relative",
            zIndex: -11,
            width: "100%",
            height: "100%",
          }}
          autoPlay
          loop
          muted
          preload="meta"
        >
          <source src="./video.mp4" type="video/mp4" />
        </video>
      )}

      <Box
        sx={(theme) => ({
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-around",
          width: "100%",
          height: "100%",
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: 2,
          paddingTop: "200px",
          [theme.fn.smallerThan("lg")]: {
            paddingTop: "160px",
          },
          [theme.fn.smallerThan("md")]: {
            paddingTop: "120px",
          },
          [theme.fn.smallerThan("xs")]: {
            paddingTop: "60px",
          },
        })}
      >
        <Text
          sx={(theme) => ({
            fontWeight: "bold",
            fontFamily: "Copperplate-Bold, Copperplate",
            lineHeight: 1,
            fontSize: "54px",
            [theme.fn.smallerThan("lg")]: {
              fontSize: "45px",
            },
            [theme.fn.smallerThan("md")]: {
              fontSize: "40px",
            },
            [theme.fn.smallerThan("xs")]: {
              fontSize: "20px",
            },
          })}
        >
          ENTER THE METAVERSE
        </Text>

        <Stack
          align="center"
          sx={(theme) => ({
            gap: 30,
            [theme.fn.largerThan("lg")]: {
              gap: 40,
            },
            [theme.fn.smallerThan("md")]: {
              gap: 20,
            },
            [theme.fn.smallerThan("xs")]: {
              gap: 10,
            },
          })}
        >
          <Text
            sx={(theme) => ({
              fontSize: "18px",
              lineHeight: "20px",
              fontFamily: "Arial-BoldMT, Arial",
              [theme.fn.smallerThan("xs")]: {
                fontSize: "14px",
                lineHeight: "16px",
              },
            })}
          >
            Your new future space
          </Text>
          <UnstyledButton
            sx={() => ({
              transform: "scale(1)",
              transition: "transform 0.1s linear 0s",
              "&:hover": {
                transform: "scale(0.97)",
                transition: "transform 0.1s linear 0s",
              },
            })}
          >
            <Center
              sx={(theme) => ({
                width: "208px",
                [theme.fn.smallerThan("md")]: {
                  width: "140px",
                },
                [theme.fn.smallerThan("xs")]: {
                  width: "100px",
                },
              })}
            >
              <MImage src="/button.png"></MImage>
            </Center>
          </UnstyledButton>
          <Group
            spacing={18}
            sx={(theme) => ({
              gap: 18,
              paddingTop: "36px",
              [theme.fn.largerThan("lg")]: {
                paddingTop: "40px",
              },
              [theme.fn.smallerThan("xs")]: {
                gap: 8,
                paddingTop: "0px",
              },
            })}
          >
            {BannerIconList.map((item, index) => {
              return (
                <UnstyledButton
                  key={index}
                  onClick={() => window.open(item.url)}
                  sx={() => ({
                    transform: "scale(1)",
                    transition: "transform 0.1s linear 0s",
                    "&:hover": {
                      transform: "scale(0.97)",
                      transition: "transform 0.1s linear 0s",
                    },
                  })}
                >
                  <Center
                    sx={(theme) => ({
                      width: "52px",
                      [theme.fn.smallerThan("xs")]: {
                        width: "26px",
                      },
                    })}
                  >
                    <MImage src={item.icon}></MImage>
                  </Center>
                </UnstyledButton>
              );
            })}
          </Group>
        </Stack>
      </Box>
    </Stack>
  );
};

const Project = () => {
  const { classes } = useSiteStyles();
  const isBreakpointMd = useMediaQuery("(max-width: 992px)");
  const ProjectList = [
    {
      bg: "/project/project-1.png",
      haveBtn: true,
      fn: () => {
        window.open("http://metasoco.aether.place/");
      },
    },
    {
      bg: "/project/project-2.png",
      haveBtn: true,
      fn: () => {
        scrollToAnchor("home", isBreakpointMd ? true : false);
      },
    },
    {
      bg: "/project/project-3.png",
      haveBtn: false,
    },
  ];
  return (
    <Stack
      id="project"
      align="center"
      spacing={isBreakpointMd ? 50 : 30}
      sx={(theme) => ({
        padding: "80px 0",
        position: "relative",
        background: "url('/project/project-bg.png') no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center bottom",
        [theme.fn.smallerThan("md")]: {
          padding: "50px 0",
          backgroundSize: "contain",
        },
        [theme.fn.largerThan("md")]: {
          backgroundSize: "100% 100%",
        },
      })}
    >
      <Text align="center" className={classes.heroTitle} sx={(theme) => ({})}>
        Uncoming Projects
      </Text>
      <Group
        sx={(theme) => ({
          width: "100%",
          justifyContent: "center",
          gap: 60,
          [theme.fn.smallerThan("md")]: {
            padding: "0 60px",
            gap: 60,
          },
          [theme.fn.smallerThan("xs")]: {
            gap: 20,
          },
        })}
      >
        {ProjectList.map((item, index) => {
          return (
            <Center
              key={index}
              sx={(theme) => ({
                position: "relative",
                width: "200px",
                [theme.fn.largerThan("md")]: {
                  width: "260px",
                },
              })}
            >
              <MImage src={item.bg}></MImage>

              {item.haveBtn && (
                <UnstyledButton
                  onClick={() => {
                    item.fn();
                  }}
                  sx={(theme) => ({
                    position: "absolute",
                    width: "100%",
                    padding: "0 15px",
                    bottom: "10px",
                    transform: "scale(1)",
                    transition: "transform 0.1s linear 0s",
                    "&:hover": {
                      transform: "scale(0.97)",
                      transition: "transform 0.1s linear 0s",
                    },
                    [theme.fn.largerThan("md")]: {
                      padding: "0 50px",
                      bottom: "22px",
                    },
                    [theme.fn.smallerThan("md")]: {
                      padding: "0 40px",
                      bottom: "20px",
                    },
                    [theme.fn.smallerThan("xs")]: {
                      padding: "0 40px",
                      bottom: "20px",
                    },
                  })}
                >
                  <MImage src="/project/button.png"></MImage>
                </UnstyledButton>
              )}
            </Center>
          );
        })}
      </Group>
    </Stack>
  );
};

const About = () => {
  const isPC = useMediaQuery("(min-width: 992px)");
  const { classes } = useSiteStyles();
  return (
    <Stack
      id="info"
      sx={(theme) => ({
        backgroundColor: "#001736",
      })}
    >
      <Box
        sx={(theme) => ({
          position: "relative",
          overflow: "hidden",
          [theme.fn.smallerThan("xs")]: {
            paddingTop: "70px",
          },
        })}
      >
        <Center
          sx={(theme) => ({
            position: "absolute",
            width: "70%",
            left: "50%",
            transform: "translateX(-50%)",
            top: "80px",
            zIndex: 2,
            [theme.fn.smallerThan("xs")]: {
              width: "80%",
              top: "30px",
            },
          })}
        >
          <MImage src="/about-title.png"></MImage>
        </Center>
        <Center
          sx={(theme) => ({
            width: "100%",
            [theme.fn.smallerThan("xs")]: {
              width: "210%",
              position: "relative",
              left: "-12%",
            },
          })}
        >
          <MImage src="/about.png"></MImage>
        </Center>

        <Stack
          spacing={30}
          sx={(theme) => ({
            position: "absolute",
            width: "25vw",
            right: "15%",
            top: "220px",
            gap: 30,
            zIndex: 3,
            [theme.fn.smallerThan("xs")]: {
              width: "80vw",
              right: "50%",
              transform: "translateX(50%)",
              top: "45px",
              gap: 10,
            },
          })}
        >
          <Text
            sx={(theme) => ({
              fontSize: "1.5rem",
              fontFamily: "Arial-BoldMT, Arial",
              lineHeight: "1.625rem",
              [theme.fn.smallerThan("xs")]: {
                fontSize: "14px",
                lineHeight: "16px",
                textAlign: "center",
              },
            })}
          >
            What is Aether
          </Text>
          <Text
            color="#D4D4D4"
            sx={(theme) => ({
              fontSize: "1rem",
              fontFamily: "ArialMT",
              lineHeight: "1.3rem",
              [theme.fn.smallerThan("xs")]: {
                fontSize: "12px",
                lineHeight: "16px",
              },
            })}
          >
            The Aether is a decentralized, open metasomatic virtual world built
            using blockchain technology, where users can build, trade, interact
            socially, and generate economic revenue. Each user is given free
            access to celestial space, where they are given a unique virtual ID.
            In Aether, players can Play, Create, Own, Govern, Social, earn.
          </Text>
        </Stack>
      </Box>
    </Stack>
  );
};

const Mission = () => {
  const isPC = useMediaQuery("(min-width: 992px)");
  const { classes } = useSiteStyles();

  return (
    <OverPack playScale={0.1}>
      <Stack
        align="center"
        sx={(theme) => ({
          background: "url('/mission-bg.png') no-repeat",
          backgroundSize: "cover",
          padding: "80px 0",
          [theme.fn.largerThan("lg")]: {
            padding: "120px 0",
          },
          [theme.fn.smallerThan("md")]: {
            padding: "40px 0",
          },
        })}
      >
        <Group
          sx={(theme) => ({
            gap: 60,
            justifyContent: "center",
            [theme.fn.smallerThan("xs")]: {
              gap: 30,
            },
          })}
        >
          <TweenOne
            key="img"
            animation={{
              x: "-=30",
              opacity: 0,
              type: "from",
              ease: "easeOutQuad",
            }}
            resetStyle
          >
            <Center
              sx={(theme) => ({
                width: "400px",
                [theme.fn.largerThan("lg")]: {
                  width: "500px",
                },
                [theme.fn.smallerThan("md")]: {
                  width: "300px",
                },
              })}
            >
              <MImage src="/mission-1.png"></MImage>
            </Center>
          </TweenOne>

          <TweenOne
            key="img1"
            animation={{
              x: "+=30",
              opacity: 0,
              type: "from",
              ease: "easeOutQuad",
            }}
            resetStyle
          >
            <Center
              sx={(theme) => ({
                width: "400px",
                [theme.fn.largerThan("lg")]: {
                  width: "500px",
                },
                [theme.fn.smallerThan("md")]: {
                  width: "300px",
                },
              })}
            >
              <MImage src="/mission-2.png"></MImage>
            </Center>
          </TweenOne>
        </Group>
      </Stack>
    </OverPack>
  );
};

const RoadMap = () => {
  return (
    <>
      <ContentExample></ContentExample>
      <TextScroll></TextScroll>
    </>
  );
};

const HomePage: NextPage<{}> = () => {
  return (
    <div className="container">
      <Hero />
      <Project />
      <About />
      <Mission />
      <RoadMap />
      <style jsx>{`
        .container {
          width: 100%;
          height: 100%;
          line-height: 24px;
        }
      `}</style>
    </div>
  );
};

export default HomePage;
