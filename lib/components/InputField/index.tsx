import * as Icon from "@isskinui/icons";
import type { Icons } from "lib/types/icons";
import {
  type CSSProperties,
  forwardRef,
  type InputHTMLAttributes,
  type PropsWithChildren,
  useId,
} from "react";

import styles from "./index.module.css";

type InputFieldProps = PropsWithChildren<
  InputHTMLAttributes<HTMLInputElement> & {
    label: string;
    hint?: string;
    error?: string;
    icon?: Icons;
    type?: "text" | "email" | "password" | "number" | "tel";
    iconAriaLabel?: string;
    iconOnClick?: () => void;
    width?: CSSProperties["width"];
  }
>;

const InputField = forwardRef<HTMLInputElement, InputFieldProps>(
  (
    {
      id,
      label,
      type = "text",
      hint,
      error,
      icon,
      iconAriaLabel,
      iconOnClick,
      disabled,
      width,
      className,
      ...rest
    },
    ref,
  ) => {
    const generatedId = useId();
    const inputId = id || generatedId;
    const IconComponent = icon ? Icon[icon] : undefined;

    return (
      <div
        className={`${styles.wrapper} ${disabled && styles.disabled} ${className}`}
        style={{ width }}
      >
        <label htmlFor={inputId} className={styles.label}>
          {label}
        </label>

        {label === "" && <div style={{ height: 14 }}></div>}

        <input
          ref={ref}
          type={type}
          id={inputId}
          className={`${styles.input} ${error && styles.inputError}`}
          aria-invalid={!!error}
          disabled={disabled}
          {...rest}
        />
        {IconComponent && (
          <button
            className={styles.iconWrapper}
            type="button"
            onClick={iconOnClick}
            aria-label={iconAriaLabel}
          >
            <IconComponent className={styles.icon} />
          </button>
        )}
        {error && <p className={styles.error}>{error}</p>}
        {hint && <p className={styles.hint}>{hint}</p>}
      </div>
    );
  },
);
InputField.displayName = "InputField";

export default InputField;
