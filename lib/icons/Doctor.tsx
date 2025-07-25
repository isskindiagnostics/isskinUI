import { type SVGProps } from "react";

const Doctor = ({
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
      d="M5 2H4a2 2 0 0 0-2 2v5.208c0 .527.033 1.06.213 1.554.826 2.28 3.107 3.523 5.287 3.357M9 2h1a2 2 0 0 1 2 2v5.015c0 .654-.057 1.315-.304 1.921-.834 2.051-2.484 3.052-4.196 3.183m0 0V17c.48 5.277 9.704 7.332 11.777.866.18-.564.223-1.165.223-1.757V12.5m0 0a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"
    />
  </svg>
);

export default Doctor;
