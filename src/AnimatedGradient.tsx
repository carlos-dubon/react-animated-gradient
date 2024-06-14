import React, {
  useEffect,
  useRef,
  useState,
  ReactNode,
  CSSProperties,
} from "react";
import { hexArrayToRgbaArray } from "./util/hexArrayToRgbaArray";
import { getBackground } from "./util/getBackground";
import { colord } from "colord";

interface AnimatedGradientProps {
  /**
   * An array of hex color strings that represent the gradients to animate
   */
  gradients: string[][];
  /**
   * The interval in milliseconds at which the gradient should change
   */
  changeInterval: number;
  /**
   * The duration in milliseconds of the animation
   */
  animationDuration: number;
  children?: ReactNode;
  className?: string;
  style?: CSSProperties;
}

export const AnimatedGradient = (props: AnimatedGradientProps) => {
  const [currentGradient, setCurrentGradient] = useState<string[]>(
    props.gradients[0]
  );
  const [animatedColors, setAnimatedColors] = useState<number[][]>(
    hexArrayToRgbaArray(currentGradient)
  );

  const intervalRef = useRef<number>();
  const stepRef = useRef<number[][]>();
  const timerRef = useRef<number>(0);
  const colorsRef = useRef<number[][]>();

  useEffect(() => {
    const nonHexColors = props.gradients
      .map((gradients) =>
        gradients.filter((gradient) => !colord(gradient).isValid())
      )
      .flat();

    if (nonHexColors.length > 0) {
      throw new Error(
        `All gradients must be valid hex color strings, ${nonHexColors.at(0)} is not a valid hex color string`
      );
    }
  }, [props.gradients]);

  useEffect(() => {
    let currentGradientIndex = 0;

    const gradientInterval = window.setInterval(() => {
      if (currentGradientIndex === props.gradients.length - 1) {
        currentGradientIndex = 0;
      } else {
        currentGradientIndex++;
      }

      setCurrentGradient(props.gradients[currentGradientIndex]);
    }, props.changeInterval);

    return () => {
      window.clearInterval(gradientInterval);
    };
  }, [props.changeInterval, props.animationDuration, props.gradients]);

  useEffect(() => {
    if (intervalRef.current !== undefined) {
      window.clearInterval(intervalRef.current);
      timerRef.current = 0;
    }

    colorsRef.current = [...animatedColors];

    stepRef.current = animatedColors.map((itemA: number[], keyA: number) =>
      itemA.map(
        (itemB: number, keyB: number) =>
          (itemB - hexArrayToRgbaArray(currentGradient)[keyA][keyB]) /
          (props.animationDuration / 10)
      )
    );

    intervalRef.current = window.setInterval(() => {
      if (!colorsRef.current || !stepRef.current) return;

      colorsRef.current = colorsRef.current.map(
        (itemA: number[], keyA: number) =>
          itemA.map((itemB, keyB) => itemB - stepRef.current![keyA][keyB])
      );

      timerRef.current += 10;
      setAnimatedColors(colorsRef.current);

      if (timerRef.current >= props.animationDuration!) {
        window.clearInterval(intervalRef.current);
        intervalRef.current = undefined;
        timerRef.current = 0;
        stepRef.current = undefined;
        colorsRef.current = undefined;
      }
    }, 10);

    return () => {
      if (intervalRef.current) {
        window.clearInterval(intervalRef.current);
      }
    };
  }, [props.animationDuration, currentGradient]);

  return (
    <div
      className={props.className}
      style={{
        ...props.style,
        width: 500,
        height: 500,
        background: getBackground(animatedColors),
      }}
    >
      {props.children}
    </div>
  );
};
