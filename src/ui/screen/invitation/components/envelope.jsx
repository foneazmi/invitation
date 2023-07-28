import React from "react";
import { useLottie } from "lottie-react";
import envelope from "./envelope.json";

export default () => {
  const options = {
    animationData: envelope,
    loop: true,
  };
  const { View } = useLottie(options);

  return (
    <label htmlFor="my-modal" className="h-60 w-60">
      {View}
    </label>
  );
};
