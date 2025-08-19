import { type ButtonHTMLAttributes } from "react";

import styles from "./index.module.css";

export type ChipProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  label: string;
  selected: boolean;
  onSelect: () => void;
};

const Chip = ({
  label,
  selected = false,
  onSelect,
  disabled,
  ...rest
}: ChipProps) => {
  return (
    <button
      className={`${styles.chip} ${selected && styles.selected}`}
      disabled={disabled}
      onClick={onSelect}
      {...rest}
    >
      <p
        className={`${styles.label} ${selected && styles.labelSelected} ${disabled && styles.disabled}`}
      >
        {label}
      </p>
    </button>
  );
};

export default Chip;
