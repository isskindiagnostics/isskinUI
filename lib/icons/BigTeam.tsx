import { type SVGProps } from "react";

const BigTeam = ({
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
      d="M17.154 5.103a3.23 3.23 0 0 1 0 6.255M22 19.538v-1.615a3.23 3.23 0 0 0-2.423-3.126M5.846 5a3.23 3.23 0 0 0 0 6.255M1 19.435V17.82a3.23 3.23 0 0 1 2.423-3.126M17.154 19.539v-1.616a3.23 3.23 0 0 0-3.23-3.23H9.076a3.23 3.23 0 0 0-3.23 3.23v1.616M11.5 11.462A3.23 3.23 0 1 0 11.5 5a3.23 3.23 0 0 0 0 6.461"
    />
  </svg>
);

export default BigTeam;
