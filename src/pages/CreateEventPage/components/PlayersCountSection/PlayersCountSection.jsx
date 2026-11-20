import { Users } from "lucide-react";
import Section from "../Section/Section";
import { PLAYER_COUNTS } from "../../CreateEventPage.constants";
import styles from "./PlayersCountSection.module.scss";

export default function PlayersCountSection({ maxPlayers, onChange }) {
  return (
    <Section title="Кількість гравців">
      <div className={styles.group}>
        {PLAYER_COUNTS.map((count) => (
          <button
            key={count}
            type="button"
            onClick={() => onChange(count)}
            className={[styles.btn, maxPlayers === count && styles.active]
              .filter(Boolean)
              .join(" ")}
          >
            <Users size={16} />
            {count} гравці
          </button>
        ))}
      </div>
    </Section>
  );
}
