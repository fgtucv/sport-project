import style from "./DateItem.module.scss";

export const DateItem = ({ day }) => {
    return (
        <li className={`${style.mainDateItem} ${day.isSelected ? style.activeDay : ''}`}>
            <h3 className={style.mainDate}>{day.dayOfWeek}<br /><span className={style.mainDateDay}>{day.dayNumber}</span><br />{day.monthLabel}</h3>
        </li>
    )
}