import { type SVGProps } from "react";

const Logo = ({
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
    <g fill="currentColor" clipPath="url(#prefix__a)">
      <path d="M9.307 22.79a5.396 5.396 0 0 0 2.066-10.384 5.4 5.4 0 0 0-2.066-.41V22.79" />
      <path d="M14.705 22.79a5.397 5.397 0 1 0 0-10.795V22.79M9.307 1.2a5.398 5.398 0 1 0 0 10.795V1.2" />
      <path d="M14.705 1.2a5.397 5.397 0 1 0 0 10.795V1.2M20.102 1.2a5.4 5.4 0 0 0-5.397 5.398h5.397zM3.91 22.79a5.397 5.397 0 0 0 5.397-5.397H3.91z" />
    </g>
    <defs>
      <clipPath id="prefix__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default Logo;
