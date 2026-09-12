import { Component } from "react";
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
import { DateTimeInputs } from "./components/DateTimeInputs/DateTimeInputs.jsx";

export class CreateForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      eventLocation: "",
      eventCourt: "",
      eventPrice: "",
    };
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submit logic
  };

  render() {
    const { eventLocation, eventCourt, eventPrice } = this.state;

    return (
      <form className={style.createForm} onSubmit={this.handleSubmit}>
        <CreateFormBlock title="Вид спорту" isInput={false}>
          <ChooseSport />
        </CreateFormBlock>

        <DateTimeInputs />

        <CreateFormBlock title="Кількість гравців" isInput={false}>
          <ChoiceGameParmList arr={["2 гравця", "4 гравця"]} />
        </CreateFormBlock>

        <CreateFormBlock title="Виберіть тривалість події" isInput={false}>
          <ChoiceGameParmList arr={["60 хв", "90 хв", "120 хв", "150 хв"]} />
        </CreateFormBlock>

        <CreateFormBlock title="Локація" isInput={true} Icon={LocationIcon} placeholder="Наприклад: Padel club Oviedo" id="eventLocation"/>
          
        <CreateFormBlock title="Корт" isInput={true} Icon={CourtIcon} placeholder="Наприклад: №4" id="eventCourt"/>

        <PlayerLevel />

        <CreateFormBlock title="Загальна ціна" isInput={true} Icon={PriceIcon} placeholder="Наприклад: 26 €" id="eventPrice"/>

        <button className={style.createFormDraftButton} type="button">
          Зберегти до чернеток
        </button>
        <button className={style.createFormSubmitButton} type="submit">
          Опублікувати
        </button>
      </form>
    );
  }
}