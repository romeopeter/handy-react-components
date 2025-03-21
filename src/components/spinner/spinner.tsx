import { SpinnerShape } from "./type";

/**
 * Spinner for async states.
 *
 * @returns ReactElement
 */
export default function Spinner({
  size = "md",
  primaryColor = "#F53546",
  secondaryColor = "#1D0708",
  speed = "normal",
  className,
}: SpinnerShape) {
  // Map size props to actual dimensions
  const sizeMap = {
    sm: "w-4 h-4",
    md: "w-8 h-8",
    lg: "w-12 h-12",
    xl: "w-16 h-16",
  };

  // Map speed props to animation durations
  const speedMap = {
    slow: "animate-[spin_2s_linear_infinite]",
    normal: "animate-[spin_1s_linear_infinite]",
    fast: "animate-[spin_0.5s_linear_infinite]",
  };

  // Get size and speed classes
  const sizeClass = sizeMap[size];
  const speedClass = speedMap[speed];

  return (
    <div className={`inline-block ${sizeClass} ${className}`}>
      <svg
        className={speedClass}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Outer circle - secondary color */}
        <circle
          cx="12"
          cy="12"
          r="10"
          stroke={secondaryColor}
          strokeWidth="3"
          strokeOpacity="0.25"
        />

        {/* Spinning arc - primary color */}
        <path
          d="M12 2C6.47715 2 2 6.47715 2 12"
          stroke={primaryColor}
          strokeWidth="3"
          strokeLinecap="round"
        ></path>
      </svg>
    </div>
  );
}
