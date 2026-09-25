import { ComponentType } from "react";

export interface SpiralItem {
  src: string;
  alt?: string;
  href?: string;
  target?: string;
  label?: string;
  id?: string | number;
}

export interface InfiniteSpiralProps {
  items?: (string | SpiralItem)[];
  speed?: number;
  direction?: "up" | "down";
  animationMode?: "auto" | "drag" | "scroll" | "all";
  radius?: number;
  cardWidth?: number;
  cardHeight?: number;
  verticalSpacing?: number;
  perspective?: number;
  cardsPerTurn?: number;
  rotation?: number;
  cardTilt?: number;
  cardRadius?: number;
  centerScale?: number;
  edgeFade?: number;
  edgeBlur?: number;
  pauseOnHover?: boolean;
  imageFit?: "cover" | "contain";
  grayscale?: number;
  className?: string;
}

declare const InfiniteSpiral: ComponentType<InfiniteSpiralProps>;
export default InfiniteSpiral;
