import { useState } from "react";
import style from "./PlayerLevel.module.scss";
import { PiSealCheckBold } from "react-icons/pi";

export const PlayerLevel = ({ setLevel, setIsStrict }) => {
  const [value, setValue] = useState("0.0");

  const handlerLevel = (event) => {
    const element = event.target;

    setValue(element.value);
    setLevel(element.value);
  }

  return (
    <div className={style.level}>
      <header className={style.levelHeader}>
        <h2 className={style.levelTitle}>Рівень гри</h2>
        <span className={style.levelCurrentLevel}>{Number(value).toFixed(2)}</span>
      </header>
      <input className={style.levelRangeinput} onChange={handlerLevel} type="range" min="0" max="4" step="0.05" />
      <footer className={style.levelFooter}>
        <span className={style.levelMarkSpan}>0.0</span>
        <span className={style.levelMarkSpan}>4.0</span>
      </footer>
      <label className={style.levelSwitch} htmlFor="strict" aria-label="Перемикач типу рівння гри">
        <PiSealCheckBold size={22} color="#0058BE" />
        <span className={style.levelSpan}>Строгий рівень</span>
        <input onChange={(event) => (setIsStrict(event.target.checked))} aria-label="Строгий рівень" type="checkbox" id="strict"/>
        <span className={style.levelSlider}></span>
      </label>
    </div>
  );
};