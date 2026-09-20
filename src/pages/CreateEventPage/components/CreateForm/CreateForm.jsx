import {
  PriceIcon,
  CourtIcon,
  LocationIcon,
} from "../../../../components/Icons/Icons.jsx";

import style from "./CreateForm.module.scss";

import { CreateFormBlock } from "./components/CreateFormBlock/CreateFormBlock.jsx";
import { ChoiceGameParmList } from "./components/ChoiceGameParmList/ChoiceGameParmList.jsx";
import { ChooseSport } from "./components/ChooseSport/ChooseSport.jsx";
import { PlayerLevel } from "./components/PlayerLevel/PlayerLevel.jsx";
import { DateTimePicker } from "./components/DateTimePickers/DateTimePickers.jsx";

export const CreateForm = ({ formatedNewGameObject, setSport, setDate, setTime, setPlayers, setDuration, setLocation, setCourt, setLevel, setIsStrict, setPrice}) => {

  return (
    <form className={style.createForm} onSubmit={formatedNewGameObject}>
      <CreateFormBlock title="Вид спорту" isInput={false}>
        <ChooseSport setSport={setSport} />
      </CreateFormBlock>

      <DateTimePicker setDate={setDate} setTime={setTime}/>

      <CreateFormBlock title="Кількість гравців" isInput={false}>
        <ChoiceGameParmList setParm={setPlayers} arr={["2 гравця", "4 гравця"]} />
      </CreateFormBlock>

      <CreateFormBlock title="Виберіть тривалість події" isInput={false}>
        <ChoiceGameParmList setParm={setDuration} arr={["60 хв", "90 хв", "120 хв", "150 хв"]} />
      </CreateFormBlock>

      <CreateFormBlock title="Локація" isInput={true} Icon={LocationIcon} placeholder="Наприклад: Padel club Oviedo" id="eventLocation" setInputValue={setLocation} />

      <CreateFormBlock title="Корт" isInput={true} Icon={CourtIcon} placeholder="Наприклад: №4" id="eventCourt" setInputValue={setCourt} />

      <PlayerLevel setIsStrict={setIsStrict} setLevel={setLevel}/>

      <CreateFormBlock title="Загальна ціна" isInput={true} Icon={PriceIcon} placeholder="Наприклад: 26 €" id="eventPrice" setInputValue={setPrice} />

      <button className={style.createFormDraftButton} type="button">
        Зберегти до чернеток
      </button>
      <button className={style.createFormSubmitButton} type="submit">
        Опублікувати
      </button>
    </form>
  );
};