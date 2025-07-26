import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  PropsWithChildren,
} from "react";

import styles from "./index.module.css";

type LinkProps = PropsWithChildren<
  (
    | (ButtonHTMLAttributes<HTMLButtonElement> & { renderAs?: "button" })
    | (AnchorHTMLAttributes<HTMLAnchorElement> & { renderAs: "link" })
  ) & {
    variant: "strong" | "underlined";
  }
>;

const Link = ({ variant, renderAs, children, ...rest }: LinkProps) => {
  if (renderAs === "button") {
    return (
      <button
        className={`${styles.anchor} ${styles[variant]}`}
        {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}
      >
        {children}
      </button>
    );
  }

  return (
    <a
      className={`${styles.anchor} ${styles[variant]}`}
      {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)}
    >
      {children}
    </a>
  );
};

export default Link;
