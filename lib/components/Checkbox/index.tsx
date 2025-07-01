import { type InputHTMLAttributes, useId } from "react";
import styles from "./index.module.css";

type CheckboxProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
};

const Checkbox = ({ label, id, ...rest }: CheckboxProps) => {
  const generatedId = useId();
  const checkboxId = id || generatedId;

  return (
    <div className={styles.wrapper}>
      <input
        type="checkbox"
        role="checkbox"
        id={checkboxId}
        className={styles.checkbox}
        {...rest}
      />
      <label htmlFor={checkboxId} className={styles.label}>
        {label}
      </label>
    </div>
  );
};

export default Checkbox;
