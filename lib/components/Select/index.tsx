import { ChevronDown, ChevronUp } from "@isskinui/icons";
import { Select as RadixSelect } from "radix-ui";
import { type CSSProperties, useId } from "react";

import styles from "./index.module.css";

export type SelectOption = {
  label: string;
  value: string;
};

type SelectProps = {
  label: string;
  options: SelectOption[];
  value: string;
  onValueChange: (value: string) => void;
  disabled?: boolean;
  placeholder?: string;
  hint?: string;
  error?: string;
  width?: CSSProperties["width"];
};

const Select = ({
  label,
  options,
  value,
  onValueChange,
  disabled = false,
  placeholder,
  hint,
  error,
  width,
}: SelectProps) => {
  const selectId = useId();

  return (
    <div
      className={`${styles.wrapper} ${disabled && styles.disabled} ${error && styles.fieldError}`}
      style={{ width }}
    >
      <label htmlFor={selectId} className={styles.label}>
        {label}
      </label>

      {label === "" && <div style={{ height: 14 }}></div>}

      <RadixSelect.Root
        value={value}
        onValueChange={onValueChange}
        disabled={disabled}
      >
        <RadixSelect.Trigger
          className={styles.input}
          aria-label={label}
          id={selectId}
        >
          <RadixSelect.Value placeholder={placeholder} />
          <RadixSelect.Icon className={styles.chevron}>
            <ChevronDown />
          </RadixSelect.Icon>
        </RadixSelect.Trigger>

        <RadixSelect.Portal>
          <RadixSelect.Content
            className={styles.optionsWrapper}
            position="popper"
            side="bottom"
            style={{ width: "var(--radix-select-trigger-width)" }}
          >
            <RadixSelect.ScrollUpButton className={styles.scrollButton}>
              <ChevronUp />
            </RadixSelect.ScrollUpButton>

            <RadixSelect.Viewport className={styles.viewport}>
              {options.map((option) => (
                <RadixSelect.Item
                  key={option.value}
                  value={option.value}
                  className={styles.item}
                >
                  <RadixSelect.ItemText>{option.label}</RadixSelect.ItemText>
                </RadixSelect.Item>
              ))}
            </RadixSelect.Viewport>

            <RadixSelect.ScrollDownButton className={styles.scrollButton}>
              <ChevronDown />
            </RadixSelect.ScrollDownButton>
          </RadixSelect.Content>
        </RadixSelect.Portal>
      </RadixSelect.Root>
      {error && <p className={styles.error}>{error}</p>}
      {hint && <p className={styles.hint}>{hint}</p>}
    </div>
  );
};

export default Select;
