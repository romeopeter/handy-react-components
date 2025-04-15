export interface ImageLoaderShape {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  draggable?: boolean;
  fallbackSrc?: string;
  fallbackClassName?: string;
}
