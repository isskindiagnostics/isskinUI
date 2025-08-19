import { type InputHTMLAttributes, useId } from "react";

import styles from "./index.module.css";

export type RadioProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
};

const Radio = ({ label, id, ...rest }: RadioProps) => {
  const generatedId = useId();
  const radioId = id || generatedId;

  return (
    <div className={styles.wrapper}>
      <input type="radio" id={radioId} className={styles.radio} {...rest} />
      <label htmlFor={radioId} className={styles.label}>
        {label}
      </label>
    </div>
  );
};

export default Radio;
