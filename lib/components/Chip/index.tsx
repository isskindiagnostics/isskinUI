import { type ButtonHTMLAttributes, useState } from "react";

import styles from "./index.module.css";

type ChipProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  label: string;
  onSelect?: () => void;
};

const Chip = ({ label, onSelect, disabled, ...rest }: ChipProps) => {
  const [selected, setSelected] = useState<boolean>(false);

  return (
    <button
      className={`${styles.chip} ${selected && styles.selected}`}
      disabled={disabled}
      onClick={() => {
        setSelected(!selected);
        if (onSelect) onSelect();
      }}
      {...rest}
    >
      <p className={`${styles.label} ${disabled && styles.disabled}`}>
        {label}
      </p>
    </button>
  );
};

export default Chip;
