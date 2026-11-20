import { useState } from "react";
import EventTypeSection from "./components/EventTypeSection/EventTypeSection";
import SportLevelSection from "./components/SportLevelSection/SportLevelSection";
import DetailsSection from "./components/DetailsSection/DetailsSection";
import PlayersCountSection from "./components/PlayersCountSection/PlayersCountSection";
import ParticipantsSection from "./components/ParticipantsSection/ParticipantsSection";
import styles from "./CreateEventPage.module.scss";

export default function CreateEventPage() {
  // Єдиний стан на сторінці — кількість гравців, бо його потребують дві секції
  const [maxPlayers, setMaxPlayers] = useState(4);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <h1 className={styles.title}>Створити подію</h1>

        <form onSubmit={handleSubmit} className={styles.form}>
          <EventTypeSection />
          <SportLevelSection />
          <DetailsSection />
          <PlayersCountSection maxPlayers={maxPlayers} onChange={setMaxPlayers} />
          <ParticipantsSection maxPlayers={maxPlayers} />

          <button type="submit" className={styles.submit}>
            Створити
          </button>
        </form>
      </div>
    </div>
  );
}
