import type { HTMLAttributes } from "react";

import styles from "./index.module.css";

export type BadgeProps = HTMLAttributes<HTMLDivElement> & {
  label: string;
  className?: string;
  labelClassName?: string;
};

const Badge = ({ label, className, labelClassName, ...rest }: BadgeProps) => {
  return (
    <div className={`${styles.badge} ${className}`} {...rest}>
      <p className={`${styles.label} ${labelClassName}`}>{label}</p>
    </div>
  );
};

export default Badge;
