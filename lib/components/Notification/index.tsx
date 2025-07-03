import { Check } from "@isskinui/icons";
import { Alert } from "@isskinui/icons";
import { Error } from "@isskinui/icons";
import styles from "./index.module.css";

type NotificationProps = {
  type: "general" | "success" | "warning" | "error";
  label: string;
};

const icons = {
  success: <Check className={styles.icon} aria-hidden="true" />,
  warning: <Alert className={styles.icon} aria-hidden="true" />,
  error: <Error className={styles.icon} aria-hidden="true" />,
  general: null,
} as const;

const classes = {
  general: styles.general,
  success: styles.success,
  warning: styles.warning,
  error: styles.error,
};

const Notification = ({ type, label }: NotificationProps) => {
  const icon = icons[type];
  const backgroundColor = classes[type];

  return (
    <div
      className={`${styles.container} ${backgroundColor}`}
      role={type === "error" || type === "warning" ? "alert" : "status"}
    >
      {icon}
      <p className={styles.label}>{label}</p>
    </div>
  );
};

export default Notification;
