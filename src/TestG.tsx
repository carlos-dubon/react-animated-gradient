import React, { useEffect, useState } from "react";
import { AnimatedGradient } from ".";

export const TestG = (props: { text: string }) => {
  return (
    <div>
      <AnimatedGradient
        gradients={[
          ["#00dfd8", "#007cf0"],
          ["#ff0080", "#7928ca"],
          ["#ff4d4d", "#f9cb28"],
        ]}
        changeInterval={1000}
        animationDuration={400}
      >
        <h1>{props.text}</h1>
      </AnimatedGradient>
    </div>
  );
};
