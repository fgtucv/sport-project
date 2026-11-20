import { TEAMS } from "../../CreateEventPage.constants";
import styles from "./TeamSwitch.module.scss";

export default function TeamSwitch({ value, onChange }) {
  return (
    <div className={styles.group}>
      {TEAMS.map((team) => (
        <button
          key={team.value}
          type="button"
          onClick={() => onChange(team.value)}
          className={[styles.btn, value === team.value && styles.active]
            .filter(Boolean)
            .join(" ")}
        >
          {team.label}
        </button>
      ))}
    </div>
  );
}
