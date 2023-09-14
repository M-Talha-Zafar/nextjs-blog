import Lottie from "lottie-react";
import animationData from "../../assets/animations/cube-animation.json";

export const Spinner = () => {
  return (
    <Lottie
      style={{ height: "15rem", width: "15rem" }}
      animationData={animationData}
    />
  );
};
