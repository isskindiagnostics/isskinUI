import { type SVGProps } from "react";

const Nurse = ({
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
      d="M12 9.574v2.495m0 2.495V12.07m0 0h2.222m-2.222 0H9.778m11.786-2.706-2.47 8.213A2 2 0 0 1 17.18 19H6.822a2 2 0 0 1-1.916-1.424L2.436 9.363c-.258-.859.082-1.794.875-2.212a18.63 18.63 0 0 1 17.378 0c.793.418 1.133 1.353.875 2.212Z"
    />
  </svg>
);
export default Nurse;
