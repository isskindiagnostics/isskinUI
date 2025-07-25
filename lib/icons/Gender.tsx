import { type SVGProps } from "react";

const Gender = ({
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
      d="M10 20h4M12 16v6M17 2h4v4M21 2l-5.46 5.46M12 16a5 5 0 1 0 0-10 5 5 0 0 0 0 10"
    />
  </svg>
);

export default Gender;
