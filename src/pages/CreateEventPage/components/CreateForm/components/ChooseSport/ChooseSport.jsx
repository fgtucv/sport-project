import { PadelIcon, TennisIcon } from "../../../../../../components/Icons/Icons.jsx";

import style from "./ChooseSport.module.scss";

export const ChooseSport = () => {
    return (
        <ul className={style.chooseSport}>
            <li className={`${style.chooseSportItem} ${style.activeSportItem}`}>
                <button className={style.chooseSportButton} type="button">
                    <PadelIcon className={style.chooseSportIcon} />
                    Падель
                </button>
            </li>
            <li className={style.chooseSportItem}>
                <button className={style.chooseSportButton} type="button">
                    <TennisIcon className={style.chooseSportIcon} />
                    Теніс
                </button>
            </li>
        </ul>
    )
}