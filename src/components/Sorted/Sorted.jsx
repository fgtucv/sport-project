import {
    CheckmarkIcon,
    DownArrowIcon,
} from "../Icons/Icons";
import style from "./Sorted.module.scss";

export const Sorted = () => {
    return <div className={style.sorted}>
        <button className={style.sortedSelectedButton} type="button">
            Спочатку найближчі
            <DownArrowIcon className={style.sortedelectedButtonIcon}/>
        </button>
        <ul className={`${style.sortedList} isHidden`}>
            <li className={style.sortedItem + ' ' + style.activeSorted}>
                <button className={style.sortedButton} type="button">
                    Спочатку найближчі
                    <CheckmarkIcon className={style.sortedButtonIcon}/>
                </button>

            </li>
            <li className={style.sortedItem}>
                <button className={style.sortedButton} type="button">
                    Спочатку найдальші
                    <CheckmarkIcon className={style.sortedButtonIcon}/>
                </button>
            </li>
            <li className={style.sortedItem}>
                <button className={style.sortedButton} type="button">
                    Рейтинг за зростанням
                    <CheckmarkIcon className={style.sortedButtonIcon}/>
                </button>
            </li>
            <li className={style.sortedItem}>
                <button className={style.sortedButton} type="button">
                    Рейтинг за спаданням
                    <CheckmarkIcon className={style.sortedButtonIcon}/>
                </button>
            </li>
            <li className={style.sortedItem}>
                <button className={style.sortedButton} type="button">
                    Ціна за зростанням
                    <CheckmarkIcon className={style.sortedButtonIcon}/>
                </button>
            </li>
            <li className={style.sortedItem}>
                <button className={style.sortedButton} type="button">
                    Ціна за спаданням
                    <CheckmarkIcon className={style.sortedButtonIcon}/>
                </button>
            </li>
        </ul>
    </div>
}
