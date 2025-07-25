import { type SVGProps } from "react";

const Skin = ({
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
      d="M14.424 4.272c-2.47 2.544-2.47 3.912-2.47 6.705m-3.556-.565H2.112v9.3H21.89v-9.3h-6.357c0 5.133-7.135 5.604-7.135 0"
    />
    <circle cx={5.561} cy={14.226} r={0.824} fill="currentColor" />
    <circle cx={7.824} cy={16.824} r={0.824} fill="currentColor" />
    <circle cx={18.206} cy={14.226} r={0.824} fill="currentColor" />
  </svg>
);
export default Skin;
