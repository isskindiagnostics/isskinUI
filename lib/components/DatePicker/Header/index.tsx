import { ChevronLeft, ChevronRight } from "@isskinui/icons";
import { format, type Locale } from "date-fns";
import { type ReactDatePickerCustomHeaderProps } from "react-datepicker";

import styles from "./index.module.css";
type DatePickerHeaderProps = ReactDatePickerCustomHeaderProps & {
  locale: Locale;
};

const DatePickerHeader = ({
  date,
  decreaseMonth,
  increaseMonth,
  prevMonthButtonDisabled,
  nextMonthButtonDisabled,
  locale,
}: DatePickerHeaderProps) => {
  return (
    <div className={styles.customHeader}>
      <button
        onClick={decreaseMonth}
        disabled={prevMonthButtonDisabled}
        type="button"
        aria-label="Previous month"
        className={styles.icon}
      >
        <ChevronLeft />
      </button>
      <span className={styles.month}>
        {format(date, "MMMM yyyy", { locale })}
      </span>
      <button
        onClick={increaseMonth}
        disabled={nextMonthButtonDisabled}
        type="button"
        aria-label="Next month"
        className={styles.icon}
      >
        <ChevronRight />
      </button>
    </div>
  );
};

export default DatePickerHeader;
