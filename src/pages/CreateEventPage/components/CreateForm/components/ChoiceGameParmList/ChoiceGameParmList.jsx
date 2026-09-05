import style from "./ChoiceGameParmList.module.scss";

export const ChoiceGameParmList = ({ arr }) => {
    return (
        <ul className={style.createFromList}>
            {arr.map((num) => {
                return (
                    <li key={`gameParm-${num}`} className={style.createFromItem}>
                        {num}
                    </li>
                )
            })}
        </ul>
    )
}