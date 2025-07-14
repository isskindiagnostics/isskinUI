import styles from "./index.module.css";

export type PaginationProps = {
  total: number;
  current: number;
  onChange: (number: number) => void;
};

const Pagination = ({ total, current, onChange }: PaginationProps) => {
  return (
    <div className={styles.container}>
      {Array.from({ length: total }).map((_, i) => (
        <button
          key={i}
          onClick={() => onChange(i)}
          aria-label={`Página ${i + 1}`}
          className={`${styles.button} ${i === current && styles.current}`}
        />
      ))}
    </div>
  );
};

export default Pagination;
