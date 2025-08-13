import type { ButtonHTMLAttributes } from "react";

import styles from "./index.module.css";

type SwitchProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  toggle: boolean;
  label?: string;
  labelPositon?: "left" | "right";
};
const Switch = ({
  toggle,
  label,
  labelPositon = "left",
  ...rest
}: SwitchProps) => {
  return (
    <div className={styles.container}>
      {label && labelPositon === "left" && (
        <p className={styles.label}>{label}</p>
      )}
      <button
        className={`${toggle ? styles.toggleOn : styles.toggleOff} ${styles.toggle}`}
        {...rest}
      >
        <span className={styles.thumb} />
      </button>
      {label && labelPositon === "right" && (
        <p className={styles.label}>{label}</p>
      )}
    </div>
  );
};

export default Switch;
