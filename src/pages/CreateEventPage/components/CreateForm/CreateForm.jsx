import {
    PriceIcon,
    CourtIcon,
    LocationIcon,
    PadelIcon,
    TennisIcon,
} from "../../../../components/Icons/Icons.jsx";

import style from "./CreateForm.module.scss";

import { ChoiceGameParmList } from "../ChoiceGameParmList/ChoiceGameParmList.jsx";
import { CustomeInput } from "../CustomeInput/CustomeInput.jsx";
import { PlayerLevel } from "../PlayerLevel/PlayerLevel.jsx";

export const CreateForm = () => {
    return <form className={style.createFrom}>
        <h2 className={style.createFormTitle}>Виберіть спорт</h2>
        <ul className={style.createFromList}>
            <li className={`${style.createFromItem} ${style.createFromSportItem} ${style.activeItem}`}>
                <PadelIcon className={style.createFromIcon} />
                Падель
            </li>
            <li className={`${style.createFromItem} ${style.createFromSportItem}`}>
                <TennisIcon className={style.createFromIcon} />
                Теніс
            </li>
        </ul>

        <h2 className={style.createFormTitle}>Виберіть кількість гравців</h2>
        <ChoiceGameParmList arr={["2", "4"]} />

        <div className={style.createFromInputDiv}>
            <CustomeInput type="date" />
            <CustomeInput type="time" />
        </div>

        <h2 className={style.createFormTitle}>Виберіть тривалість події</h2>
        <ChoiceGameParmList arr={["60 хв", "90 хв", "120 хв", "150 хв"]} />

        <div className={style.createFromInputDiv}>
            <div className={style.createFromInputFlexDiv}>
                <label className={style.createFormTitle} htmlFor="eventLocation">
                    Вкажіть локацію
                </label>
                <input
                    className={style.createFromInput}
                    placeholder="Наприклад: Padel club Oviedo"
                    type="text"
                    name="eventLocation"
                    id="eventLocation"
                />
                <LocationIcon className={style.createFromInputIcon} />
            </div>

            <div className={`${style.createFromInputFlexDiv} ${style.createFromSmalInput}`}>
                <label className={style.createFormTitle} htmlFor="eventCourt">
                    Вкажіть номер корту
                </label>
                <input
                    className={style.createFromInput}
                    placeholder="№ 4"
                    type="text"
                    name="eventCourt"
                    id="eventCourt"
                />
                <CourtIcon className={style.createFromInputIcon} />
            </div>
        </div>

        <PlayerLevel />

        <div className={style.createFromInputDiv}>
            <div className={style.createFromInputFlexDiv}>
                <label className={style.createFormTitle} htmlFor="eventPrice">
                    Загальна ціна за оренду корту
                </label>
                <input
                    className={style.createFromInput}
                    placeholder="Наприклад: 24 €"
                    type="text"
                    name="eventPrice"
                    id="eventPrice"
                />
                <PriceIcon className={style.createFromInputIcon} />
            </div>
        </div>

        <button className={style.createFromDraftButton} type="button">
            Зберегти до чернеток
        </button>
        <button className={style.createFromSubmitButton} type="submit">
            Опублікувати
        </button>
    </form>
};