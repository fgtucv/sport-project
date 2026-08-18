import {
    DataIcon,
    TimeIcon,
} from "../../../../components/Icons/Icons";

import style from "./CustomeInput.module.scss";

export const CustomeInput = ({ type }) => {
    return <div className={style.div}>
        <label className={style.label}>{type === "date" ? "Дата" : "Час"}</label>
        <button
            type="button"
            id={type === "date" ? "dateInput" : "timeInput"}
            className={style.input}>
            {type === "date" ? <DataIcon className={style.icon} /> : <TimeIcon className={style.icon} />}
            <span className={style.placeholder}>{type === "date" ? "дд.мм.рррр" : "--:--"}</span>
        </button>
    </div>
};
