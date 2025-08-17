import * as Icon from "@isskinui/icons";
import type { Icons } from "lib/types/icons";
import { type ButtonHTMLAttributes } from "react";

import styles from "./index.module.css";

type FormCardProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  icon: Icons;
  description: string;
  selected?: boolean;
  onSelect?: () => void;
};

const FormCard = ({
  icon,
  description,
  selected = false,
  onSelect,
  disabled,
  type = "button",
  ...rest
}: FormCardProps) => {
  const IconComponent = Icon[icon];

  return (
    <button
      className={`${styles.card} ${selected && styles.selected} ${disabled && styles.disabled}`}
      disabled={disabled}
      onClick={onSelect}
      type={type}
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
