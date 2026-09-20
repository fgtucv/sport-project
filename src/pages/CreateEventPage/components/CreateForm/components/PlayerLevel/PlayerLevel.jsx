// import { useState } from "react";
import style from "./PlayerLevel.module.scss";

export const PlayerLevel = ({setLevel, setIsStrict}) => {
    return (
      <div className={style.level}>
        <div className={style.levelHeader}>
          <h2 className={style.levelTitle}>Рівень гравців</h2>
          <label className={style.levelSwitch}>
            <span className={style.levelSpan}>Строгий рівень</span>
            <input
              type="checkbox"
              onChange={(event) => (setIsStrict(event.target.checked))}
            />
            <span className={style.levelSlider}></span>
          </label>
        </div>
        <div className={style.levelInputDiv}>
            <label className={style.levelLabel} htmlFor="eventMinLev">
              Бажаний рівень граців
            </label>
            <input
              className={style.levelInput}
              type="text"
              name="minLevel"
              id="eventMinLev"
              onChange={(event) => (setLevel(event.target.value))}
            />
        </div>
      </div>
    );
  };