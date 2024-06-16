import React, {
  useEffect,
  useRef,
  useState,
  ReactNode,
  CSSProperties,
} from "react";
import styles from "./Gradient.module.css";
import { clsx } from "clsx";
import { hexArrayToRgbaArray } from "./util/hexArrayToRgbaArray";
import { getBackground } from "./util/getBackground";
import { colord } from "colord";

export interface GradientProps {
  currentGradient: string[];
  animationDuration: number;
  children?: ReactNode;
  className?: string;
  style?: CSSProperties;
}

export const Gradient = (props: GradientProps) => {
  const [colors, setColors] = useState<number[][]>(
    hexArrayToRgbaArray(props.currentGradient)
  );

  const intervalRef = useRef<number>();
  const stepRef = useRef<number[][]>();
  const timerRef = useRef<number>(0);
  const colorsRef = useRef<number[][]>();

  useEffect(() => {
    const invalidColor = props.currentGradient.find(
      (hexColor) => !colord(hexColor).isValid()
    );

    if (invalidColor) {
      throw new Error(`Invalid hex color provided: ${invalidColor}`);
    }
  }, [props.currentGradient]);

  useEffect(() => {
    if (intervalRef.current !== undefined) {
      window.clearInterval(intervalRef.current);
      timerRef.current = 0;
    }

    colorsRef.current = [...colors];

    stepRef.current = colors.map((itemA: number[], keyA: number) =>
      itemA.map(
        (itemB: number, keyB: number) =>
          (itemB - hexArrayToRgbaArray(props.currentGradient)[keyA][keyB]) /
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
      setColors(colorsRef.current);

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
  }, [props.animationDuration, props.currentGradient]);

  return (
    <div
      className={clsx(styles.gradient, props.className)}
      style={{
        ...props.style,
        background: getBackground(colors),
      }}
    >
      {props.children}
    </div>
  );
};
