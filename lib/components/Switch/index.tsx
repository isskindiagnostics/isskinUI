import type { ButtonHTMLAttributes } from "react";

import styles from "./index.module.css";

type SwitchProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  toggle: boolean;
};
const Switch = ({ toggle, ...rest }: SwitchProps) => {
  return (
    <button
      className={`${toggle ? styles.toggleOn : styles.toggleOff}`}
      {...rest}
    >
      <span className={styles.thumb} />
    </button>
  );
};

export default Switch;
