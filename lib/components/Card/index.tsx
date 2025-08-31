import { Contactless } from "@isskinui/icons";
import type { HTMLAttributes } from "react";

import Badge from "../Badge";
import CardFlag, { type Flag } from "../CardFlag";
import IconLink from "../IconLink";
import styles from "./index.module.css";

export type CardProps = HTMLAttributes<HTMLDivElement> & {
  cardName?: string;
  cardHolder: string;
  cardNumber: string | number;
  expirationDate: Date;
  isDefault: boolean;
  flag: Flag;
  onClick?: () => void;
  variant?: "black" | "grey" | "blue";
  className?: string;
  renderLinkAs?: "button" | "link";
};

const Card = ({
  cardName,
  cardHolder,
  cardNumber,
  expirationDate,
  isDefault,
  onClick,
  renderLinkAs,
  flag = "mastercard",
  variant = "black",
  className,
  ...rest
}: CardProps) => {
  const getDisplayName = (fullName: string): string => {
    const names = fullName
      .trim()
      .split(" ")
      .filter((name) => name.length > 0);

    if (names.length <= 2) {
      return fullName;
    }

    return `${names[0]} ${names[names.length - 1]}`;
  };

  const displayCardHolder = getDisplayName(cardHolder);

  return (
    <div className={`${styles.card} ${className} ${styles[variant]}`} {...rest}>
      <div className={styles.top}>
        <span className={styles.cardName}>{cardName?.split(" ")[0]}</span>
        <div className={styles.topItems}>
          <IconLink
            icon="Edit"
            renderAs={renderLinkAs}
            className={styles.iconLink}
            onClick={onClick}
          >
            Editar
          </IconLink>
          {isDefault && (
            <Badge
              className={styles.badge}
              labelClassName={styles.badgeLabel}
              label={"Padrão"}
            />
          )}
          <Contactless className={styles.icon} />
        </div>
      </div>

      <div className={styles.bottom}>
        <div className={styles.rows}>
          <div className={styles.rowtop}>
            <p className={styles.text}>{displayCardHolder}</p>
            <p className={styles.text}>
              {expirationDate.toLocaleDateString("pt-BR", {
                month: "2-digit",
                year: "2-digit",
              })}
            </p>
          </div>
          <div className={styles.rowBottom}>
            <div className={styles.circleContainer}>
              {Array.from({ length: 3 }).map((_, i) => (
                <div key={i} className={styles.circleGroup}>
                  {Array.from({ length: 4 }).map((_, i) => (
                    <div key={i} className={styles.circle}></div>
                  ))}
                </div>
              ))}
            </div>
            <p className={styles.text}>{cardNumber}</p>
          </div>
        </div>
        <CardFlag className={styles.cardFlag} flag={flag} />
      </div>
    </div>
  );
};

export default Card;
