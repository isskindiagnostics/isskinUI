import { useState, type ButtonHTMLAttributes } from "react";
import * as Icon from "@isskinui/icons";
import type { Icons } from "lib/types/icons";

import styles from "./index.module.css";

type FormCardProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  icon: Icons;
  description: string;
  onSelect?: () => void;
};

const FormCard = ({
  icon,
  description,
  onSelect,
  disabled,
  ...rest
}: FormCardProps) => {
  const IconComponent = Icon[icon];
  const [selected, setSelected] = useState<boolean>(false);

  return (
    <button
      className={`${styles.card} ${selected && styles.selected} ${disabled && styles.disabled}`}
      disabled={disabled}
      onClick={() => {
        setSelected(!selected);
        if (onSelect) onSelect();
      }}
      {...rest}
    >
      <div className={styles.iconWrapper}>
        <IconComponent className={styles.icon} aria-hidden="true" />
      </div>
      <span className={styles.description}>{description}</span>
    </button>
  );
};

export default FormCard;
