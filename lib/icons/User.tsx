import { type SVGProps } from "react";

const User = ({
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
      d="M17.667 20v-1.667A3.333 3.333 0 0 0 14.333 15h-5A3.334 3.334 0 0 0 6 18.333V20M11.834 11.667a3.333 3.333 0 1 0 0-6.667 3.333 3.333 0 0 0 0 6.667"
    />
  </svg>
);
export default User;
