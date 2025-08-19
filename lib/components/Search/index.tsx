import { Close, Magnifier } from "@isskinui/icons";
import {
  type CSSProperties,
  type InputHTMLAttributes,
  useEffect,
  useRef,
  useState,
} from "react";

import styles from "./index.module.css";

export type Suggestion = {
  value: string;
  body: {
    protocol: string;
    name: string;
  };
};

export type SearchProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "onChange"
> & {
  getSuggestions: (input: string) => Promise<Suggestion[]>;
  onSuggestionSelect: (value: string) => void;
  onSearch?: (input: string) => void;
  placeholder?: string;
  width?: CSSProperties["width"];
  closeAriaLabel?: string;
};

const Search = ({
  getSuggestions,
  onSuggestionSelect,
  onSearch,
  placeholder,
  width,
  closeAriaLabel,
  ...rest
}: SearchProps) => {
  const [inputValue, setInputValue] = useState<string>("");
  const [filteredSuggestions, setFilteredSuggestions] = useState<Suggestion[]>(
    [],
  );
  const [showSuggestions, setShowSuggestions] = useState<boolean>(false);
  const [isInputFocused, setIsInputFocused] = useState<boolean>(false);

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let active = true;

    if (inputValue.trim() === "") {
      setFilteredSuggestions([]);
      setShowSuggestions(false);
      return;
    }

    getSuggestions(inputValue).then((results) => {
      if (active) {
        setFilteredSuggestions(results);
        setShowSuggestions(results.length > 0);
      }
    });

    return () => {
      active = false;
    };
  }, [inputValue, getSuggestions]);

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
    <div className={styles.positioner}>
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
            onKeyDown={(e) => {
              if (e.key === "Enter" && onSearch) {
                e.preventDefault();
                setShowSuggestions(false);
                if (onSearch) {
                  onSearch(inputValue);
                }
              }
            }}
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
                  onSuggestionSelect(suggestion.value);
                  setInputValue("");
                  setTimeout(() => setShowSuggestions(false), 0); // This lets the DOM update the input value and re-render before hiding the list
                }}
                role="option"
              >
                <p className={styles.suggestionItemProtocol}>
                  {suggestion.body.protocol}
                </p>
                <p className={styles.suggestionItemName}>
                  {suggestion.body.name}
                </p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Search;
