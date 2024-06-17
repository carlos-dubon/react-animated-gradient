<p align="center">
  <img src="https://raw.githubusercontent.com/carlos-dubon/react-animated-gradient/main/logo.svg" width="70px" height="70px" alt="logo" />
</p>

<h1 align="center">react-animated-gradient</h1>

<p align="center" style="font-size: 1.2rem">
 Animate gradients in React without the hassle.
</p>

<p align="center" style="font-size: 1.2rem">
<a href="https://react-animated-gradient.vercel.app/">
 https://react-animated-gradient.vercel.app/
</a>
</p>

<img
  src="https://img.shields.io/github/stars/carlos-dubon/react-animated-gradient?style=flat-square"
  alt="Stars"
/>
<img
  src="https://img.shields.io/github/forks/carlos-dubon/react-animated-gradient?style=flat-square"
  alt="Forks"
/>
<img
  src="https://img.shields.io/github/issues-pr/carlos-dubon/react-animated-gradient?style=flat-square"
  alt="Pulls"
/>

## Installation

```bash
npm install react-animated-gradient
```

```bash
yarn add react-animated-gradient
```

## Usage

- Basic usage:

```jsx
import React, { useState } from "react";
import { Gradient } from "react-animated-gradient";

export const Example = () => {
  const [gradient, setGradient] = useState(["#00dfd8", "#007cf0"]);

  return (
    <>
      <Gradient
        currentGradient={gradient}
        animationDuration={400}
        style={{
          width: 300,
          height: 300,
        }}
      />
      <button onClick={() => setGradient(["#ff0080", "#7928ca"])}>
        Animate!
      </button>
    </>
  );
};
```

- Creating a loop:

```jsx
// AnimatedGradient.jsx
import React, { useEffect, useState } from "react";
import { Gradient } from "react-animated-gradient";

export const AnimatedGradient = (props) => {
  const [currentGradientIndex, setCurrentGradientIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentGradientIndex === props.colors.length - 1) {
        setCurrentGradientIndex(0);
      } else {
        setCurrentGradientIndex((prev) => prev + 1);
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [currentGradientIndex, props.colors]);

  return (
    <Gradient
      currentGradient={props.colors[currentGradientIndex]}
      animationDuration={400}
      angle={90}
      style={{
        width: 300,
        height: 300,
      }}
    />
  );
};

// SomeComponent.jsx
import React from "react";
import { AnimatedGradient } from "./AnimatedGradient";

export const SomeComponent = () => {
  return (
    <AnimatedGradient
      colors={[
        ["#00dfd8", "#007cf0"],
        ["#ff0080", "#7928ca"],
        ["#ff4d4d", "#f9cb28"],
      ]}
    />
  );
};
```

## Licence

[MIT License](./LICENSE.md)
