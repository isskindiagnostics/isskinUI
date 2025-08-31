import type { CSSProperties, HTMLAttributes } from "react";
import ReactMarkdown from "react-markdown";

import Button from "../Button";
import styles from "./index.module.css";

export type PopUpButtonProps = {
  label: string;
  onClick?: () => void;
  disabled?: boolean;
};

export type PopUpProps = HTMLAttributes<HTMLDivElement> & {
  title: string;
  text: string;
  primaryButton: PopUpButtonProps;
  secondaryButton?: PopUpButtonProps;
  image?: {
    src: string;
    alt: string;
  };
  textAlign?: "left" | "center" | "right";
  width?: CSSProperties["width"];
};

const PopUp = ({
  title,
  text,
  primaryButton,
  secondaryButton,
  image,
  textAlign = "center",
  width,
  ...rest
}: PopUpProps) => {
  const alignment: Record<string, CSSProperties> = {
    left: {
      alignItems: "flex-start",
      textAlign: "left",
    },
    center: {
      alignItems: "center",
      textAlign: "center",
    },
    right: {
      alignItems: "flex-end",
      textAlign: "right",
    },
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.container} style={{ width }} {...rest}>
        {image && (
          <img
            className={styles.image}
            src={image.src}
            alt={image.alt}
            draggable={false}
          />
        )}

        <div
          className={styles.textContainer}
          style={{ ...alignment[textAlign] }}
        >
          <h4 className={styles.title}>{title}</h4>
          <ReactMarkdown
            components={{
              p: ({ children }) => (
                <p className={styles.text} style={{ ...alignment[textAlign] }}>
                  {children}
                </p>
              ),
            }}
          >
            {text}
          </ReactMarkdown>
        </div>

        <div className={styles.btnContainer}>
          {secondaryButton && (
            <Button
              className={styles.button}
              variant="outlined"
              onClick={secondaryButton.onClick}
              disabled={secondaryButton.disabled}
            >
              {secondaryButton.label}
            </Button>
          )}

          <Button
            className={styles.button}
            variant="solid"
            onClick={primaryButton.onClick}
            disabled={primaryButton.disabled}
          >
            {primaryButton.label}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PopUp;
