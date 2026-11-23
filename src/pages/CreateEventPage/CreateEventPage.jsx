import { useEffect } from "react";

import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { toast } from "sonner";

import { createGameService } from "../../api/services/gamesServices.js";
import { addPaleyerSrvice } from "../../api/services/playersServices.js";

import EventTypeSection from "./components/EventTypeSection/EventTypeSection";
import SportLevelSection from "./components/SportLevelSection/SportLevelSection";
import DetailsSection from "./components/DetailsSection/DetailsSection";
import PlayersCountSection from "./components/PlayersCountSection/PlayersCountSection";
import ParticipantsSection from "./components/ParticipantsSection/ParticipantsSection";

import styles from "./CreateEventPage.module.scss";

function toTimestampTz(date, time) {
  if (!date || !time) return;

  const [year, month, day] = date.split("-").map(Number);
  const [hours, minutes] = time.split(":").map(Number);

  const fullDate = new Date(year, month - 1, day, hours, minutes, 0, 0);

  return fullDate.toISOString();
}

export default function CreateEventPage() {
  const navigate = useNavigate();

  const session = useSelector((s) => s.auth.session);
  const newGameObj = useSelector((s) => s.create.form);
  const addedPalyers = useSelector((s) => s.create.players);

  useEffect(() => { if (!session) navigate("/login") }, [session]);

  const formatedData = (obj) => {
    return {
      host_id: session.user.id,
      sport: obj.sport,
      type: obj.type,
      location: obj.location,
      court: obj.court,
      started_at: toTimestampTz(obj.started_at_date, obj.started_at_time),
      duration_time: obj.duration_time,
      price: obj.price,
      currency: "€",
      max_players: obj.max_players,
      level_min: obj.level_min,
      strict_level: obj.strict_level,
    }
  };

  const createGameFetch = async (game) => {
    try {
      const { gameId, success } = await createGameService(game);

      console.log(gameId.id)

      if (success) return { isGameAdded: true, gameId: gameId.id };
    } catch (e) {
      return { isGameAdded: false };
    }
  }

  const addedPlayersFetch = async (playersArr, gameId) => {
    try {
      const { success } = await addPaleyerSrvice(playersArr, gameId);

      if (success) return true;
    } catch (e) {
      return false;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!newGameObj || !addedPalyers) {
      toast.error("Невдолось дістати параметри гри",
        { description: "Будь ласка спробуйте пізніше" })
      return;
    }

    const formatedGameObj = formatedData(newGameObj);

    const { isGameAdded, gameId } = await createGameFetch(formatedGameObj);

    if (isGameAdded) {
      toast.success("Ви успішно створили гру");

      const isPlayerAdded = await addedPlayersFetch(addedPalyers, gameId);

      if (isPlayerAdded) toast.success("Всіх гравців успішно додано");
      if (!isPlayerAdded) toast.warning("Невдалось додати гравців, але гра створена");

      return;
    } else {
      toast.error("Поимилка при надсилані гри",
        { description: "Будь ласка спробуйте пізніше" })

      return;
    }
  };

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <h1 className={styles.title}>Створити подію</h1>

        <form onSubmit={handleSubmit} className={styles.form}>
          <EventTypeSection />
          <SportLevelSection />
          <DetailsSection />
          <PlayersCountSection />
          <ParticipantsSection />

          <button type="submit" className={styles.submit}>
            Створити
          </button>
        </form>
      </div>
    </div>
  );
}
