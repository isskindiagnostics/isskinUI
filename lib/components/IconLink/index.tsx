import * as Icon from "@isskinui/icons";
import type { Icons } from "lib/icons";
import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  PropsWithChildren,
} from "react";

import styles from "./index.module.css";

export type IconLinkProps = PropsWithChildren<
  (
    | (ButtonHTMLAttributes<HTMLButtonElement> & { renderAs?: "button" })
    | (AnchorHTMLAttributes<HTMLAnchorElement> & { renderAs: "link" })
  ) & {
    icon: Icons;
    iconPosition?: "left" | "right";
    iconSize?: number;
    disabled?: boolean;
  }
>;

const IconLink = ({
  icon,
  iconPosition = "left",
  iconSize,
  renderAs = "link",
  disabled,
  className,
  children,
  ...rest
}: IconLinkProps) => {
  const IconComponent = Icon[icon];
  const elmStyles = `${styles.element} ${disabled ? styles.disabled : ""}`;
  const content = (
    <>
      {iconPosition === "left" && (
        <IconComponent
          className={styles.icon}
          style={{ width: iconSize, height: iconSize }}
          aria-hidden="true"
        />
      )}
      {children}
      {iconPosition === "right" && (
        <IconComponent
          className={styles.icon}
          style={{ width: iconSize, height: iconSize }}
          aria-hidden="true"
        />
      )}
    </>
  );

  if (renderAs === "button") {
    return (
      <button
        disabled={disabled}
        className={`${className} ${elmStyles}`}
        {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}
      >
        {content}
      </button>
    );
  }

  return (
    <a
      className={`${className} ${elmStyles}`}
      tabIndex={disabled ? -1 : undefined}
      aria-disabled={disabled}
      onClick={disabled ? (e) => e.preventDefault() : undefined}
      {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)}
    >
      {content}
    </a>
  );
};

export default IconLink;
