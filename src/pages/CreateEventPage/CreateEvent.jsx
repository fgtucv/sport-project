import { useState } from "react";
import { Container } from "../../components/Container/Container";
import { MainTitle } from "../../components/MainTitle/MainTitle";
import { CreateForm } from "./components/CreateForm/CreateForm";
import { EventTypeCard } from "./components/EventTypeItem/EventTypeItem";
import { TEXT_DATA, EVENT_TYPES } from "./CreateEvent.constants";

import style from "./CreateEvent.module.scss";
import { nanoid } from "nanoid";

export const CreateEvent = () => {

  const [type, setType] = useState("gameEventsCard");
  const [sport, setSport] = useState("padel");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [players, setPlayers] = useState(2);
  const [duration, setDuration] = useState(60);
  const [location, setLocation] = useState("");
  const [court, setCourt] = useState("");
  const [level, setLevel] = useState("");
  const [isStrict, setIsStrict] = useState(false);
  const [price, setPrice] = useState(0);

  const getSomeUserInfo = async (id) => {
    try {
      const getedInfo = await fetch(`https://6aa2acebccb3db9689a6e211.mockapi.io/user/${id}`);
      const info = await getedInfo.json();
      const userInfoToNewGame = {
        "nickname": info.profile.username,
        "avatarUrl": info.profile.avatarUrl
      }

      return userInfoToNewGame;
    } catch (error) {
      console.log(error)
    }
  }

  const formatedNewGameObject = async (event) => {
    event.preventDefault();
    const userInfo = await getSomeUserInfo("usr-bosla-097");

    const newGame = {
      "uuid": nanoid(),
      "hostId": JSON.parse(localStorage.getItem("userId")),
      "hostNickname": userInfo.nickname,
      "typeOfGame": type,
      "sportType": sport.toUpperCase(),
      "level": Number(level),
      "isStrict": isStrict,
      "time": `${String(time.hour).padStart(2, '0')}:${String(time.minute).padStart(2, '0')}`,
      "date": `${String(date.day).padStart(2, '0')}.${String(date.month).padStart(2, '0')}.${String(date.year).padStart(2, '0')}`,
      "durationMinutes": duration,
      "clubName": location,
      "courtNumber": court,
      "players": [
        {
          "id": JSON.parse(localStorage.getItem("userId")),
          "nickname": userInfo.nickname,
          "avatarUrl": userInfo.avatarUrl
        }
      ],
      "currentPlayers": 1,
      "maxPlayers": players,
      "price": price,
      "currency": "€",
      "isFull": false
    };

    submitGameToServer(newGame);

    event.target.reset();
  };

  const submitGameToServer = async (newGame) => {
    try {
      const option = {
        method: "POST",
        body: JSON.stringify(newGame),
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
        },
      }

      const posts = await fetch("https://6aa2acebccb3db9689a6e211.mockapi.io/game", option);
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  return (
    <section className={style.create}>
      <Container>
        <MainTitle text={TEXT_DATA} />

        <h2 className={style.createStepTitle}>Крок 1: Виберіть тип події</h2>
        <ul className={style.createEventTypes}>
          {EVENT_TYPES.map((eventType) => (
            <EventTypeCard key={eventType.key} data={eventType} type={type} setType={setType} />
          ))}
        </ul>

        <h2 className={style.createStepTitle}>Крок 2: Виберіть деталі події</h2>
        <CreateForm formatedNewGameObject={formatedNewGameObject} setSport={setSport} setDate={setDate} setTime={setTime} setPlayers={setPlayers} setDuration={setDuration} setLocation={setLocation} setCourt={setCourt} setLevel={setLevel} setIsStrict={setIsStrict} setPrice={setPrice} />
      </Container>
    </section>
  );
};