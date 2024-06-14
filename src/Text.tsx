import React, { useEffect ,useState} from "react";
import { clsx } from "clsx";
import styles from "./Text.module.css";
import { Gradient } from "./Gradient";

interface TextProps {
  className?: string;
}

export const Text = (props: TextProps) => {

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
    <div className={clsx(styles.text, props.className)}>
      <Gradient className={styles.gradient} currentGradient={colors[currentGradientIndex]} animationDuration={400}/>
      <h2>
        HOLA
      </h2>
      <h2 id="h2">
        HOLA
      </h2>
    </div>
  );
};
