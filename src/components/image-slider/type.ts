import { ReactElement } from "react";
/* ------------------------------------- */

export type ImageSliderShape = {
  images: string[];
  dotsColor?: string;
  arrowColor?: string;
  prevArrow?: ReactElement;
  nextArrow?: ReactElement;
  sliderClassName?: string;
  imageContainerClassName?: string;
  imageTagClassName?: string;
  controlsClassName?: string;
  arrowClassName?: string;
  dotIndicatorsClassName?: string;
  dotClassName?: string;
  showIndicator?: boolean;
};
