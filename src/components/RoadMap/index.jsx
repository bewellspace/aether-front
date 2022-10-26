import React from "react";
import { enquireScreen } from "enquire-js";
import Content9 from "./Content9";
import { Content91DataSource } from "./data.source";

let isMobile;
enquireScreen((b) => {
  isMobile = b;
});

export default class ContentExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMobile,
    };
  }

  componentDidMount() {
    enquireScreen((b) => {
      this.setState({ isMobile: !!b });
    });
  }

  render() {
    const children = [
      <Content9
        id="Content9_1"
        key="Content9_1"
        dataSource={Content91DataSource}
        isMobile={this.state.isMobile}
      />,
    ];
    return (
      <div
        className="templates-wrapper"
        ref={(d) => {
          this.dom = d;
        }}
      >
        {children}
      </div>
    );
  }
}
