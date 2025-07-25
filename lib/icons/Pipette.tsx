import { type SVGProps } from "react";

const Pipette = ({
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
      d="m12 9-8.414 8.414A2 2 0 0 0 3 18.828v1.344a2 2 0 0 1-.586 1.414A2 2 0 0 1 3.828 21h1.344a2 2 0 0 0 1.414-.586L15 12"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m18 9 .4.4a2.123 2.123 0 0 1-2.312 3.46 2.1 2.1 0 0 1-.688-.46l-3.8-3.8a2.121 2.121 0 1 1 3-3l.4.4 3.4-3.4a2.121 2.121 0 1 1 3 3zM2 22l.414-.414"
    />
  </svg>
);
export default Pipette;
