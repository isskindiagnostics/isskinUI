import type { SVGProps } from "react";

export const ArrowLeft = ({
  width = 24,
  height = 24,
  ...props
}: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    {...props}
  >
    <path
      d="M12 19L5 12L12 5"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M19 12H5"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

export default ArrowLeft;
