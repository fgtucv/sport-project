import style from "./StatHeader.module.scss";

export const StatHeader = ({ titel, Icon, badge }) => {
    // console.log("Клас іконки:", style.cardIcon);
    return (
        <div className={style.cardHeader}>
            <h2 className={style.cardTitle}>{titel}</h2>
            {Icon ? <Icon className={style.cardIcon} /> : null}
            {badge === "yearToggle" ? <div className={style.yearToggle}>
                <button type="button" className={`${style.toggleBtn} ${style.active}`}>2026</button>
                <button type="button" className={style.toggleBtn}>2025</button>
            </div> : null}
        </div>
    )
}