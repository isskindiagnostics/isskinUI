import type { HTMLAttributes } from "react";

import styles from "./index.module.css";

export type BadgeProps = HTMLAttributes<HTMLDivElement> & {
  label: string;
  className?: string;
};

const Badge = ({ label, className, ...rest }: BadgeProps) => {
  return (
    <div className={`${styles.badge} ${className}`} {...rest}>
      <p className={styles.label}>{label}</p>
    </div>
  );
};

export default Badge;
