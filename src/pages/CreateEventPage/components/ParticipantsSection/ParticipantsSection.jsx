import { useEffect, useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import { toast } from "sonner";

import { addPlayerAction, deletePlayerAction, changePlayerAction } from "../../../../redux/slices/createEventSlice/createEventSlice.js"

import { Plus, X, UserCheck } from "lucide-react";

import Section from "../Section/Section";
import Input from "../Input/Input";
import Toggle from "../Toggle/Toggle";
import TeamSwitch from "../TeamSwitch/TeamSwitch";

import styles from "./ParticipantsSection.module.scss";

export default function ParticipantsSection() {
  const dispatch = useDispatch();

  const creatorNickname = useSelector((s) => s.auth?.profile?.nickname);
  const maxPlayers = useSelector((s) => s.create.form?.max_players);
  const players = useSelector((s) => s.create.players);

  const [creatorJoins, setCreatorJoins] = useState(false);
  const [newPlayerName, setNewPlayerName] = useState("");

  useEffect(() => {
    if (creatorJoins) {
      dispatch(addPlayerAction({ nickname: creatorNickname, team: null}))
    } else {
      dispatch(deletePlayerAction(creatorNickname))
    }
  }, [creatorJoins])

  const creatorTeam = players.find((p) => p.nickname === creatorNickname)?.team || null;
  const freeSlots = maxPlayers - players.length;

  const teamCount = (team) =>
    players.filter((p) => p.team === team).length +
    (creatorJoins && creatorTeam === team ? 1 : 0);

  const addPlayer = () => {
    if (newPlayerName.length === 0) return;
    if (players.find((p) => p.nickname === newPlayerName)) {
      toast.warning("Ви вже додали цього гравця")
      return;
    };
    if(players.length >= maxPlayers) {
      toast.warning("Немає вільних місць");
      return;
    }


    dispatch(addPlayerAction({ nickname: newPlayerName, team: null }));
    setNewPlayerName("");
  };
  const changePlayer = (playerData) => { dispatch(changePlayerAction(playerData)) };
  const removePlayer = (nickname) => dispatch(deletePlayerAction(nickname));

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
            <TeamSwitch value={creatorTeam} onChange={(team) => changePlayer({ nickname: creatorNickname, team })} />
          </div>
        )}

        {/* Додані гравці */}
        {players.filter((p) => p.nickname !== creatorNickname).map((player) => (
          <div key={player.nickname} className={styles.row}>
            <span className={styles.name}>{player.nickname}</span>
            <div className={styles.actions}>
              <TeamSwitch
                value={player.team}
                onChange={(team) => changePlayer({ nickname: player.nickname, team })}
              />
              <button
                type="button"
                onClick={() => removePlayer(player.nickname)}
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
              placeholder="Ім'я гравця: fgtucv"
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
