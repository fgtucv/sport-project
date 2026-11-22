import { useEffect } from "react";

import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import EventTypeSection from "./components/EventTypeSection/EventTypeSection";
import SportLevelSection from "./components/SportLevelSection/SportLevelSection";
import DetailsSection from "./components/DetailsSection/DetailsSection";
import PlayersCountSection from "./components/PlayersCountSection/PlayersCountSection";
import ParticipantsSection from "./components/ParticipantsSection/ParticipantsSection";

import styles from "./CreateEventPage.module.scss";

export default function CreateEventPage() {
  const navigate = useNavigate();

  const session = useSelector((s) => s.auth.session);

  useEffect(() => { if(!session) navigate("/login") }, [session]);

  const formatedData = (obj) => {
    const newGame = {
      
    }
  };

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
          <PlayersCountSection/>
          <ParticipantsSection/>

          <button type="submit" className={styles.submit}>
            Створити
          </button>
        </form>
      </div>
    </div>
  );
}
