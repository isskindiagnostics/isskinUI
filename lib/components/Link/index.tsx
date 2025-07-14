import type { AnchorHTMLAttributes, PropsWithChildren } from "react";

import styles from "./index.module.css";

type LinkProps = PropsWithChildren<
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    variant: "strong" | "underlined";
  }
>;

const Link = ({ variant, children, ...rest }: LinkProps) => {
  return (
    <a className={`${styles.anchor} ${styles[variant]}`} {...rest}>
      {children}
    </a>
  );
};

export default Link;
