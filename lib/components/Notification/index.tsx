import { Check } from "@isskinui/icons";
import { Alert } from "@isskinui/icons";
import { Error } from "@isskinui/icons";
import styles from "./index.module.css";

type NotificationProps = {
  type: "general" | "success" | "warning" | "error";
  label: string;
};

function getIcon(type: string) {
  if (type === "success") {
    return <Check />;
  } else if (type === "warning") {
    return <Alert />;
  } else if (type === "error") {
    return <Error />;
  } else {
    return null;
  }
}

const Notification = ({ type, label }: NotificationProps) => {
  const icon = getIcon(type);
  const backgroundColor =
    type === "general"
      ? styles.notificationGeneral
      : type === "success"
        ? styles.notificationSuccess
        : type === "warning"
          ? styles.notificationWarning
          : styles.notificationError;

  return (
    <div className={`${styles.notificationContainer} ${backgroundColor}`}>
      {icon}
      <p className={styles.notificationLabel}>{label}</p>
    </div>
  );
};

export default Notification;
