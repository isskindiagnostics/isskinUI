import { Close, Magnifier } from "@isskinui/icons";
import {
  type CSSProperties,
  type InputHTMLAttributes,
  useEffect,
  useRef,
  useState,
} from "react";

import styles from "./index.module.css";

export type SearchProps = InputHTMLAttributes<HTMLInputElement> & {
  suggestions: string[];
  onSuggestionSelect: (value: string) => void;
  placeholder?: string;
  width?: CSSProperties["width"];
  closeAriaLabel?: string;
};

const Search = ({
  suggestions,
  onSuggestionSelect,
  placeholder,
  width,
  closeAriaLabel,
  ...rest
}: SearchProps) => {
  const [inputValue, setInputValue] = useState<string>("");
  const [filteredSuggestions, setFilteredSuggestions] = useState<string[]>([]);
  const [showSuggestions, setShowSuggestions] = useState<boolean>(false);
  const [isInputFocused, setIsInputFocused] = useState<boolean>(false);

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (inputValue.trim() === "") {
      setFilteredSuggestions([]);
      setShowSuggestions(false);
      return;
    }

    const filtered = suggestions.filter((s) =>
      s.toLowerCase().includes(inputValue.toLowerCase()),
    );

    setFilteredSuggestions(filtered);
    setShowSuggestions(filtered.length > 0);
  }, [inputValue, suggestions]);

  // Close suggestions when clicking outside - onBlur would not work (the <input> loses focus before the onClick handler on the <li> fires — causing the suggestions list to disappear and the input not to update correctly)
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setShowSuggestions(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div
      className={`${styles.container} ${isInputFocused && styles.focused}`}
      ref={containerRef}
      style={{
        width,
        boxShadow: showSuggestions ? "var(--shadow-md)" : undefined,
      }}
    >
      <div className={styles.inputWrapper}>
        <Magnifier className={styles.searchIcon} aria-hidden="true" />
        <input
          id={rest.id ?? "search-input"}
          name={rest.name ?? "search"}
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder={placeholder}
          className={styles.input}
          onFocus={() => {
            if (filteredSuggestions.length > 0) setShowSuggestions(true);
            setIsInputFocused(true);
          }}
          onBlur={() => setIsInputFocused(false)}
          role="combobox"
          aria-autocomplete="list"
          autoComplete="off"
          aria-controls="search-suggestion-list"
          aria-expanded={showSuggestions}
          {...rest}
        />
        <div className={styles.closeIcon}>
          {inputValue.length > 0 && isInputFocused && (
            <Close
              className={styles.closeIcon}
              onMouseDown={(e) => {
                e.preventDefault();
                setInputValue("");
              }}
              aria-label={closeAriaLabel}
            />
          )}
        </div>
      </div>

      {showSuggestions && <div className={styles.divider}></div>}

      {showSuggestions && (
        <ul
          id="search-suggestion-list"
          className={styles.suggestions}
          role="listbox"
        >
          {filteredSuggestions.map((suggestion, idx) => (
            <li
              key={idx}
              className={styles.suggestionItem}
              onClick={() => {
                onSuggestionSelect(suggestion);
                setInputValue(suggestion);
                setTimeout(() => setShowSuggestions(false), 0); // This lets the DOM update the input value and re-render before hiding the list
              }}
              role="option"
            >
              {suggestion}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Search;
