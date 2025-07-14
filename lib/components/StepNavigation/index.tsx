import type { CSSProperties } from "react";

import styles from "./index.module.css";

type StepNavigationProps = {
  total: number;
  current: number;
  onChange: (number: number) => void;
  width?: CSSProperties["width"];
};

const StepNavigation = ({
  total,
  current,
  onChange,
  width,
}: StepNavigationProps) => {
  const progressPercent = Math.min(((current + 0.5) / (total - 1)) * 100, 100);

  return (
    <div className={styles.container} style={{ width }}>
      <div className={styles.progressBarContainer}>
        <div
          className={styles.progressBar}
          style={{
            width: `${progressPercent}%`,
          }}
        />
      </div>
      <div className={styles.container}>
        {Array.from({ length: total }).map((_, i) => (
          <button
            key={i}
            onClick={() => onChange(i)}
            className={`${styles.button} ${i <= current && styles.current}`}
          >
            <p className={styles.stepNumber}>{i + 1}</p>
          </button>
        ))}
      </div>
    </div>
  );
};

export default StepNavigation;
