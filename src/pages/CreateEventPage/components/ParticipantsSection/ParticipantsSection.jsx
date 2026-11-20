import { useEffect, useState } from "react";
import { Plus, X, UserCheck } from "lucide-react";
import Section from "../Section/Section";
import Input from "../Input/Input";
import Toggle from "../Toggle/Toggle";
import TeamSwitch from "../TeamSwitch/TeamSwitch";
import styles from "./ParticipantsSection.module.scss";

export default function ParticipantsSection({ maxPlayers }) {
  const [creatorJoins, setCreatorJoins] = useState(true);
  const [creatorTeam, setCreatorTeam] = useState("A");
  const [players, setPlayers] = useState([]); // [{ id, name, team }]
  const [newPlayerName, setNewPlayerName] = useState("");

  const creatorSlots = creatorJoins ? 1 : 0;
  const freeSlots = maxPlayers - creatorSlots - players.length;
  const teamSize = maxPlayers / 2;

  // Якщо місць стало менше (змінили кількість гравців або приєднання) — обрізаємо список
  useEffect(() => {
    setPlayers((prev) => prev.slice(0, Math.max(maxPlayers - creatorSlots, 0)));
  }, [maxPlayers, creatorSlots]);

  const teamCount = (team) =>
    players.filter((p) => p.team === team).length +
    (creatorJoins && creatorTeam === team ? 1 : 0);

  const addPlayer = () => {
    const name = newPlayerName.trim();
    if (!name || freeSlots <= 0) return;
    const team = teamCount("A") < teamSize ? "A" : "B";
    setPlayers((prev) => [...prev, { id: Date.now(), name, team }]);
    setNewPlayerName("");
  };

  const removePlayer = (id) =>
    setPlayers((prev) => prev.filter((p) => p.id !== id));

  const setPlayerTeam = (id, team) =>
    setPlayers((prev) => prev.map((p) => (p.id === id ? { ...p, team } : p)));

  return (
    <Section title="Учасники">
      <div className={styles.stack}>
        {/* Організатор: приєднатися чи ні */}
        <Toggle
          checked={creatorJoins}
          onChange={setCreatorJoins}
          label="Приєднатися до гри"
          hint="Вас буде додано як учасника автоматично"
        />

        {creatorJoins && (
          <div className={styles.row}>
            <span className={styles.name}>
              <UserCheck size={16} />
              Ви
            </span>
            <TeamSwitch value={creatorTeam} onChange={setCreatorTeam} />
          </div>
        )}

        {/* Додані гравці */}
        {players.map((player) => (
          <div key={player.id} className={styles.row}>
            <span className={styles.name}>{player.name}</span>
            <div className={styles.actions}>
              <TeamSwitch
                value={player.team}
                onChange={(team) => setPlayerTeam(player.id, team)}
              />
              <button
                type="button"
                onClick={() => removePlayer(player.id)}
                aria-label={`Видалити ${player.name}`}
                className={styles.remove}
              >
                <X size={16} />
              </button>
            </div>
          </div>
        ))}

        {/* Додати гравця */}
        {freeSlots > 0 ? (
          <div className={styles.addRow}>
            <Input
              type="text"
              placeholder="Ім'я гравця"
              value={newPlayerName}
              onChange={(e) => setNewPlayerName(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  addPlayer();
                }
              }}
            />
            <button type="button" onClick={addPlayer} className={styles.addBtn}>
              <Plus size={16} />
              Додати
            </button>
          </div>
        ) : (
          <p className={styles.note}>Усі місця зайняті</p>
        )}

        <p className={styles.hint}>
          Вільних місць: {Math.max(freeSlots, 0)} з {maxPlayers}
        </p>
      </div>
    </Section>
  );
}
