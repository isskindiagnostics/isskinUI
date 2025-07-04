import { Calendar } from "@isskinui/icons";
import { format, isValid, type Locale, parse } from "date-fns";
import { ptBR } from "date-fns/locale";
import {
  type CSSProperties,
  forwardRef,
  useEffect,
  useId,
  useState,
} from "react";
import ReactDatePicker from "react-datepicker";

import HeaderDatePicker from "./Header";
import styles from "./index.module.css";

type DatePickerProps = {
  id?: string;
  label?: string;
  errorMessage?: string;
  onChange?: (date: Date | null) => void;
  selected?: Date | null;
  minDate?: Date;
  maxDate?: Date;
  dateFormat?: string;
  disabled?: boolean;
  placeholder?: string;
  name?: string;
  required?: boolean;
  locale?: Locale;
  hint?: string;
  width?: CSSProperties["width"];
};

const DatePicker = forwardRef<ReactDatePicker, DatePickerProps>(
  (
    {
      id,
      label = "Date",
      selected,
      minDate,
      maxDate,
      dateFormat = "dd/MM/yyyy",
      disabled,
      onChange,
      errorMessage,
      placeholder,
      name,
      required,
      locale = ptBR,
      hint,
      width,
      ...rest
    },
    ref,
  ) => {
    const generatedId = useId();
    const inputId = id ?? generatedId;

    const [inputValue, setInputValue] = useState("");
    const [error, setError] = useState<string | undefined>(undefined);
    const [isOpen, setIsOpen] = useState<boolean>(false);

    useEffect(() => {
      if (selected && isValid(selected)) {
        setInputValue(format(selected, "dd/MM/yyyy"));
        setError(undefined);
      } else {
        setInputValue("");
      }
    }, [selected]);

    function handleChange(date: Date | null) {
      if (date && isValid(date)) {
        setInputValue(format(date, "dd/MM/yyyy"));
        setError(undefined);
      } else {
        setInputValue("");
      }

      onChange?.(date);
    }

    function handleRawChange(
      event?:
        | React.MouseEvent<HTMLElement>
        | React.KeyboardEvent<HTMLElement>
        | undefined,
    ) {
      if (!event || !event.target) return;
      const eventTarget = event?.target as HTMLInputElement;

      if (typeof eventTarget.value !== "string") return;

      let digits = eventTarget.value.replace(/\D/g, "");
      if (digits.length > 8) digits = digits.slice(0, 8);

      let formatted = "";
      if (digits.length > 0) formatted += digits.substring(0, 2);
      if (digits.length >= 3) formatted += "/" + digits.substring(2, 4);
      if (digits.length >= 5) formatted += "/" + digits.substring(4, 8);

      setInputValue(formatted);
    }

    function handleBlur(event: React.FocusEvent<HTMLInputElement>) {
      const typedValue = event.target.value;
      const parsedDate = parse(typedValue, "dd/MM/yyyy", new Date());

      setIsOpen(false);

      if (!isValid(parsedDate)) {
        setInputValue("");
        setError(errorMessage);
        onChange?.(null);
      } else {
        setError(undefined);
        onChange?.(parsedDate);
      }
    }

    return (
      <div
        className={`${styles.wrapper} ${disabled && styles.disabled}`}
        style={{ width }}
      >
        <label htmlFor={inputId} className={styles.label}>
          {label}
        </label>

        <ReactDatePicker
          open={isOpen}
          id={inputId}
          ref={ref}
          onClickOutside={() => setIsOpen(false)}
          onSelect={() => setIsOpen(false)}
          onFocus={() => setIsOpen(true)}
          dateFormat={dateFormat}
          onChange={handleChange}
          onChangeRaw={handleRawChange}
          selected={selected}
          onBlur={handleBlur}
          value={inputValue}
          className={styles.datePicker}
          disabled={disabled}
          minDate={minDate}
          maxDate={maxDate}
          placeholderText={placeholder}
          name={name}
          required={required}
          locale={locale}
          autoComplete="off"
          renderCustomHeader={(props) => (
            <HeaderDatePicker locale={locale} {...props} />
          )}
          {...rest}
        />

        <Calendar
          className={styles.calendarIcon}
          aria-hidden="true"
          onClick={() => setIsOpen(true)}
        />
        {hint && <p className={styles.hint}>{hint}</p>}
        {error && <p className={styles.error}>{error}</p>}
      </div>
    );
  },
);

DatePicker.displayName = "DatePicker";

export default DatePicker;
