import type { ButtonHTMLAttributes, PropsWithChildren } from "react";

import styles from "./index.module.css";

type ButtonProps = PropsWithChildren<
  ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: "solid" | "outlined";
  }
>;

const Button = ({
  variant = "solid",
  className,
  children,
  ...rest
}: ButtonProps) => {
  return (
    <button
      className={`${styles.button} ${className} ${styles[variant]}`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
