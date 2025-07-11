import type { HTMLAttributes } from "react";

import type { IconLinkProps } from "../IconLink";
import IconLink from "../IconLink";
import styles from "./index.module.css";

type TooltipProps = HTMLAttributes<HTMLDivElement> &
  IconLinkProps & {
    text: string;
    href?: string;
    actionText?: string;
    position?: "left" | "center" | "right";
  };

const Tooltip = ({
  text,
  href,
  actionText,
  position = "right",
  icon,
  iconPosition = "right",
  ...rest
}: TooltipProps) => {
  return (
    <div className={`${styles.tooltip} ${styles[position]}`} {...rest}>
      <p className={styles.text}>{text}</p>

      {href && (
        <div className={styles.actionLinkWrapper}>
          <IconLink
            className={styles.iconLink}
            icon={icon}
            iconPosition={iconPosition}
            iconSize={15}
            href={href}
          >
            {actionText}
          </IconLink>
        </div>
      )}

      <span className={styles.arrow} />
    </div>
  );
};

export default Tooltip;
