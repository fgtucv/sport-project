import style from "./PlayerLevel.module.scss";

export const PlayerLevel = () => {
    return <div className={style.level}>
            <div className={style.levelHeader}>
                <h2 className={style.levelTitle}>Рівень гравців</h2>
                <label className={style.levelSwitch}>
                    <span className={style.levelSpan}>Строгий рівень</span>
                    <input type="checkbox" />
                    <span className={style.levelSlider}></span>
                </label>
            </div>
            <div className={style.levelInputDiv}>
                <div className={style.levelInputFlexDiv}>
                    <label className={style.levelLabel} htmlFor="eventMinLev">Мінімальний рівень</label>
                    <input className={style.levelInput} placeholder="1.5" type="text" name="eventMinLev" id="eventMinLev" />
                </div>
                <div className={style.levelInputFlexDiv}>
                    <label className={style.levelLabel} htmlFor="eventMaxLev">Максимальний рівень</label>
                    <input className={style.levelInput} placeholder="4.0" type="text" name="eventMaxLev" id="eventMaxLev" />
                </div>
            </div>
        </div>
};