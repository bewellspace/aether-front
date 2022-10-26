import React from "react";
import OverPack from "rc-scroll-anim/lib/ScrollOverPack";
import QueueAnim from "rc-queue-anim";
import { Text, Box } from "@mantine/core";

class Content9 extends React.PureComponent {
  getBlockChildren = (block, i) => {
    const { isMobile } = this.props;
    const item = block.children;
    const textWrapper = (
      <Box
        sx={(theme) => ({
          width: "50%",
          padding: "0 40px",
          [theme.fn.smallerThan("xs")]: {
            padding: "0 20px",
            width: "100%",
          },
        })}
      >
        <QueueAnim
          key="text"
          leaveReverse
          delay={isMobile ? [0, 100] : 0}
          className={`text-wrapper ${
            i % 2 !== 1 ? "text-wrapper-left" : "text-wrapper-right"
          }`}
        >
          <Box
            key="p"
            className="block-content"
            sx={(theme) => ({
              width: "70%",
              fontSize: "14px",
              [theme.fn.smallerThan("xs")]: {
                width: "100%",
                fontSize: "12px",
              },
            })}
          >
            {item.content.children()}
          </Box>
        </QueueAnim>
      </Box>
    );
    return (
      <OverPack key={i.toString()} className="block-wrapper">
        {i % 2 !== 1 && !isMobile && textWrapper}
        <QueueAnim
          className={`title-wrapper ${
            i % 2 !== 1 ? "title-wrapper-right" : "title-wrapper-left"
          }`}
          key="title"
          type={isMobile ? "right" : "bottom"}
          leaveReverse
          delay={0}
        >
          <Text key="title" className="block-title">
            {item.title.children}
          </Text>
        </QueueAnim>
        {(i % 2 === 1 || isMobile) && textWrapper}
      </OverPack>
    );
  };

  render() {
    const { ...props } = this.props;
    const { dataSource } = props;
    delete props.dataSource;
    delete props.isMobile;
    const children = dataSource.block.children.map(this.getBlockChildren);
    return (
      <div {...props} {...dataSource.wrapper}>
        <Box
          {...dataSource.page}
          sx={(theme) => ({
            minHeight: "800px",
            [theme.fn.smallerThan("xs")]: {
              minHeight: "1420px",
            },
          })}
        >
          <Text
            align="center"
            color="#fff"
            sx={(theme) => ({
              fontSize: "1.75rem",
              lineHeight: "2rem",
              fontFamily: "Arial-BoldMT, Arial",
              marginBottom: '40px',
              [theme.fn.smallerThan("md")]: {
                fontSize: "1rem",
                lineHeight: 1,
              },
              [theme.fn.largerThan("lg")]: {
                fontSize: "2.25rem",
                lineHeight: "2.625rem",
              },
            })}
          >
            ROADMAP
          </Text>
          <div className="timeline">{children}</div>
        </Box>
      </div>
    );
  }
}

export default Content9;
