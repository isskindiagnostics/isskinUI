import { Check, Close } from "@isskinui/icons";
import type { HTMLAttributes } from "react";

import Button from "../Button";
import Pagination, { type PaginationProps } from "../Pagination";
import styles from "./index.module.css";

type CardImage = {
  src: string;
  alt?: string;
};

type HelpCardProps = HTMLAttributes<HTMLDivElement> &
  Omit<PaginationProps, "onChange"> & {
    images: CardImage[];
    title: string;
    text: string;
    buttonText: string;
    onButtonClick: () => void;
    onCardClose: () => void;
    onPaginationChange: (index: number) => void;
  };

const HelpCard = ({
  images,
  title,
  text,
  total,
  current,
  onButtonClick,
  onCardClose,
  onPaginationChange,
  buttonText,
  className,
  ...rest
}: HelpCardProps) => {
  if (images.length < 1 || images.length > 2) {
    throw new Error("HelpCard expects 1 or 2 images");
  }

  return (
    <div className={`${styles.container} ${className}`} {...rest}>
      <Close
        aria-label="Fechar"
        className={styles.closeBtn}
        role="button"
        onClick={onCardClose}
      />
      <div className={styles.imagesContainer}>
        {images.map((img, i) => (
          <div className={styles.imgContainer} key={i}>
            <img className={styles.image} src={img.src} alt={img.alt || ""} />
            {images.length > 1 &&
              (i > 0 ? (
                <div aria-hidden="true" className={styles.correct}>
                  <Check />
                </div>
              ) : (
                <div aria-hidden="true" className={styles.incorrect}>
                  <Close />
                </div>
              ))}
          </div>
        ))}
      </div>
      <div className={styles.content}>
        <div className={styles.textContainer}>
          <h4 className={styles.title}>{title}</h4>
          <p className={styles.text}>{text}</p>
        </div>
        <div className={styles.naviationContainer}>
          <Pagination
            total={total}
            current={current}
            onChange={onPaginationChange}
          />
          <Button onClick={onButtonClick} variant="solid">
            {buttonText}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HelpCard;
