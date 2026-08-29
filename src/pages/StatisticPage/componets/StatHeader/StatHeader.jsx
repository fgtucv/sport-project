import style from "./StatHeader.module.scss";

export const StatHeader = ({ titel, Icon }) => {
    // console.log("Клас іконки:", style.cardIcon);
    return (
        <div className={style.cardHeader}>
            <h2 className={style.cardTitle}>{titel}</h2>
            {Icon ? <Icon className={style.cardIcon} /> : null}
        </div>
    )
}