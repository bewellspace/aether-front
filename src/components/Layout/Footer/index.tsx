import {
  Box,
  Group,
  Stack,
  Text,
  Image as MImage,
  Center,
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";

const FooterItem = [
  {
    name: "Discord",
    icon: "/icon-discord-1.png",
    url: "https://discord.gg/JqVbvfwmre",
    type: "blank",
  },
  {
    name: "Telegram",
    icon: "/icon-telegram-1.png",
    url: "https://t.me/theaetherofficial",
    type: "blank",
  },
  {
    name: "Twitter",
    icon: "/icon-twitter-1.png",
    url: "https://twitter.com/TheAether_io",
    type: "blank",
  },
  // {
  //   name: "Email",
  //   icon: "/icon-email.png",
  //   url: "mailto:bewelltech@gmx.us",
  //   type: "email",
  // },
];

const Footer = () => {
  const isPC = useMediaQuery("(min-width: 992px)");
  return (
    <Box
      id="contact"
      sx={(theme) => ({
        background: "url('footer.png') no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center center",
        padding: "80px 20px 100px",
        [theme.fn.smallerThan("md")]: {
          padding: "50px 20px 60px",
        },
      })}
    >
      <Text
        align="center"
        sx={(theme) => ({
          fontFamily: "Arial-BoldMT, Arial",
          fontSize: "32px",
          [theme.fn.smallerThan("xs")]: {
            fontSize: "20px",
          },
        })}
      >
        Join the Community
      </Text>
      <Text
        align="center"
        sx={(theme) => ({
          fontSize: "16px",
          paddingTop: "40px",
          [theme.fn.smallerThan("xs")]: {
            fontSize: "12px",
          },
        })}
      >
        Aether is a metaverse. <br />
        Anyone can join us in the journey to onboard billions of people to Web
        3.0 and metaverse. <br />
        <br />
        Get started and become an early adopter of the blockchain network by
        joining our Discord and other social media channels.
      </Text>
      <Box
        sx={(theme) => ({
          width: "40vw",
          margin: "0 auto",
          position: "relative",
          background: "url('/footer-module.png') no-repeat",
          backgroundSize: "100% 100%",
          backgroundPosition: 'center center',
          marginTop: "100px",
          [theme.fn.smallerThan('lg')]: {
            width: "65vw",
          },
          [theme.fn.smallerThan("md")]: {
            width: "100%",
            marginTop: "40px",
          },
        })}
      >
        <Group
          spacing={0}
          sx={(theme) => ({
            width: "100%",
            height: "100%",
            padding: "12px 17% 10px",
            justifyContent: "space-between",
            [theme.fn.smallerThan("md")]: {
              padding: "4px 10%",
            },
          })}
        >
          {FooterItem.map((item, index) => {
            return (
              <a
                key={`footer_item__${index}`}
                style={{ textDecoration: "none" }}
                href={item.url}
                target={item.type === "blank" ? "_blank" : "_self"}
              >
                <Stack align="center" spacing={2}>
                  <Center
                    sx={(theme) => ({
                      width: "30px",
                      [theme.fn.smallerThan("xs")]: {
                        width: "18px",
                      },
                    })}
                  >
                    <MImage src={item.icon}></MImage>
                  </Center>
                  <Text
                    color="#FFF"
                    sx={(theme) => ({
                      fontSize: "14px",
                      fontFamily: "PingFangSC-Regular, PingFang SC",
                      lineHeight: "24px",
                      [theme.fn.smallerThan("xs")]: {
                        fontSize: "12px",
                        lineHeight: "14px",
                      },
                    })}
                  >
                    {item.name}
                  </Text>
                </Stack>
              </a>
            );
          })}
        </Group>
      </Box>
    </Box>
  );
};

export default Footer;
