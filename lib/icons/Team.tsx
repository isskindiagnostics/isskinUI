import { type SVGProps } from "react";

const Team = ({
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
      d="M14.2 19.4v-1.6a3.2 3.2 0 0 0-3.2-3.2H6.2A3.2 3.2 0 0 0 3 17.8v1.6M14.2 5.102a3.2 3.2 0 0 1 0 6.195M19 19.4v-1.6a3.2 3.2 0 0 0-2.4-3.096M8.6 11.4a3.2 3.2 0 1 0 0-6.4 3.2 3.2 0 0 0 0 6.4"
    />
  </svg>
);
export default Team;
