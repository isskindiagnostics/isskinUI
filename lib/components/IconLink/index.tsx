import * as Icon from "@isskinui/icons";
import type { Icons } from "lib/types/icons";
import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  PropsWithChildren,
} from "react";

import styles from "./index.module.css";

type IconLinkProps = PropsWithChildren<
  (
    | (ButtonHTMLAttributes<HTMLButtonElement> & { renderAs?: "button" })
    | (AnchorHTMLAttributes<HTMLAnchorElement> & { renderAs: "link" })
  ) & {
    icon: Icons;
    iconPosition?: "left" | "right";
    disabled?: boolean;
  }
>;

const IconLink = ({
  icon,
  iconPosition = "left",
  renderAs = "link",
  disabled,
  children,
  ...rest
}: IconLinkProps) => {
  const IconComponent = Icon[icon];
  const className = `${styles.element} ${disabled ? styles.disabled : ""}`;
  const content = (
    <>
      {iconPosition === "left" && (
        <IconComponent className={styles.icon} aria-hidden="true" />
      )}
      {children}
      {iconPosition === "right" && (
        <IconComponent className={styles.icon} aria-hidden="true" />
      )}
    </>
  );

  if (renderAs === "button") {
    return (
      <button
        disabled={disabled}
        className={className}
        {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}
      >
        {content}
      </button>
    );
  }

  return (
    <a
      className={className}
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
