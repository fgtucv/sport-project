import style from "./DateItem.module.scss";

export const DateItem = ({ day }) => {
    return (
        <li
            className={`${style.dateItem} ${day.isSelected ? style.activeDay : ""}`}
            aria-current={day.isSelected ? "date" : undefined}
        >
            <span className={style.dayOfWeek}>{day.dayOfWeek}</span>
            <span className={style.dayNumber}>{day.dayNumber}</span>
        </li>
    );
};
