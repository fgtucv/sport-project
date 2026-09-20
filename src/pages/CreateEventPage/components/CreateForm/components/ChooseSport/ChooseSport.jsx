import { useState } from "react";
import { PadelIcon, TennisIcon } from "../../../../../../components/Icons/Icons.jsx";
import style from "./ChooseSport.module.scss";

export const ChooseSport = ({setSport}) => {
  const [sport, chosseSport] = useState("padel")

  const choosedSport = (newSport) => {
    chosseSport(newSport);
    setSport(newSport);
  };

  return (
    <ul className={style.chooseSport}>
      <li className={`${style.chooseSportItem} ${sport === "padel" ? style.activeSportItem : ""}`}>
        <button
          className={style.chooseSportButton}
          type="button"
          onClick={() => choosedSport("padel")}
        >
          <PadelIcon className={style.chooseSportIcon} />
          Падель
        </button>
      </li>
      <li className={`${style.chooseSportItem} ${sport === "tennis" ? style.activeSportItem : ""}`}>
        <button
          className={style.chooseSportButton}
          type="button"
          onClick={() => choosedSport("tennis")}
        >
          <TennisIcon className={style.chooseSportIcon} />
          Теніс
        </button>
      </li>
    </ul>
  );
};