import { ChevronDown, ChevronUp, Close } from "@isskinui/icons";
import { type ButtonHTMLAttributes, useEffect, useRef, useState } from "react";

import styles from "./index.module.css";

export type FilterProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  options: string[];
  onOptionSelect: (value: string | null) => void;
  placeholder: string;
  optionsPosition?: "left" | "right";
};

const Filter = ({
  options,
  onOptionSelect,
  placeholder,
  disabled,
  optionsPosition = "left",
  ...rest
}: FilterProps) => {
  const [showOptions, setShowOptions] = useState<boolean>(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setShowOptions(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className={styles.wrapper} ref={containerRef}>
      <button
        className={styles.chip}
        disabled={disabled}
        onClick={(e) => {
          e.stopPropagation();
          setShowOptions(!showOptions);
        }}
        style={{
          boxShadow: showOptions
            ? "inset 0 0 0 1px var(--color-base-grey100)"
            : "initial",
        }}
        {...rest}
      >
        <p className={`${styles.label} ${disabled && styles.disabled}`}>
          {selectedOption || placeholder}
        </p>
        {selectedOption ? (
          <Close
            className={`${styles.icon} ${disabled && styles.disabled}`}
            onClick={(e) => {
              e.stopPropagation();
              setSelectedOption(null);
              onOptionSelect(null);
            }}
          />
        ) : showOptions ? (
          <ChevronUp
            className={`${styles.icon} ${disabled && styles.disabled}`}
          />
        ) : (
          <ChevronDown
            className={`${styles.icon} ${disabled && styles.disabled}`}
          />
        )}
      </button>
      {showOptions && (
        <ul
          id="search-suggestion-list"
          className={styles.options}
          role="listbox"
          style={optionsPosition === "left" ? { left: 0 } : { right: 0 }}
        >
          {options.map((option, idx) => (
            <li
              key={idx}
              className={styles.optionsItem}
              onClick={() => {
                onOptionSelect(option);
                setSelectedOption(option);
                setTimeout(() => setShowOptions(false), 0);
              }}
              role="option"
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Filter;
