import React, { Component } from "react";
import Lottie from "react-lottie";
import animationData from "../assets/animations/data.json";
class AnimationPage extends Component {
  render() {
    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: animationData,
      renderer: "svg",
    };
    return (
      <div
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Lottie options={defaultOptions} height={"30vh"} />
      </div>
    );
  }
}
export default AnimationPage;
