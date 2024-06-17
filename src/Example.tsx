import React, { useEffect, useState } from "react";
import { Gradient } from ".";

const colors = [
  ["#00dfd8", "#007cf0"],
  ["#ff0080", "#7928ca"],
  ["#ff4d4d", "#f9cb28"],
];

export const Example = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (index === colors.length - 1) {
        setIndex(0);
      } else {
        setIndex((prev) => prev + 1);
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [index]);

  return (
    <>
      <h2>Current Gradient: [{colors[index].join(", ")}]</h2>
      <Gradient
        currentGradient={colors[index]}
        animationDuration={400}
        style={{
          width: 300,
          height: 300,
        }}
      />
    </>
  );
};
