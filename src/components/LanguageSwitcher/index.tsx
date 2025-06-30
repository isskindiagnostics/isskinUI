import { useLanguageStore } from "../../stores/languageStore";
import styles from "./index.module.css";
import PT from "../../stories/assets/pt.png";
import EN from "../../stories/assets/en.png";

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguageStore();

  return (
    <div className={styles.container}>
      <img src={language === "en" ? EN : PT} alt="" className={styles.image} />
      <select
        className={styles.select}
        value={language}
        onChange={(e) => setLanguage(e.target.value as "en" | "pt")}
      >
        <option value="en">English</option>
        <option value="pt">Português</option>
      </select>
    </div>
  );
}
