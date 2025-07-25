import { type SVGProps } from "react";

const Magnifier = ({
  width = 24,
  height = 24,
  ...props
}: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    stroke="currentColor"
    {...props}
    width={width}
    height={height}
    viewBox="0 0 24 24"
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m21 21-4.34-4.34M11 19a8 8 0 1 0 0-16 8 8 0 0 0 0 16"
    />
  </svg>
);
export default Magnifier;
