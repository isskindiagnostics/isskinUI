import { type SVGProps } from "react";

const Contactless = ({
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
      strokeWidth={2}
      d="M6 8.513c.443 1.912.553 4.387 0 6.975m5.092 2.812a23.1 23.1 0 0 0 0-12.6M16.627 3c1.993 6.075 1.66 12.713 0 18"
    />
  </svg>
);

export default Contactless;
