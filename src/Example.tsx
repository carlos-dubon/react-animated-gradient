import React, { useEffect, useState } from "react";
import { Gradient } from ".";

export const Example = () => {
  const colors = [
    ["#00dfd8", "#007cf0"],
    ["#ff0080", "#7928ca"],
    ["#ff4d4d", "#f9cb28"],
  ];

  const [currentGradientIndex, setCurrentGradientIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentGradientIndex === colors.length - 1) {
        setCurrentGradientIndex(0);
      } else {
        setCurrentGradientIndex(currentGradientIndex + 1);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [colors]);

  return (
    <div>
      <h2>Current Gradient: [{colors[currentGradientIndex].join(", ")}]</h2>
      <Gradient
        currentGradient={colors[currentGradientIndex]}
        animationDuration={400}
      />
    </div>
  );
};
