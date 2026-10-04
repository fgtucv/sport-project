import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import {
    CheckmarkIcon,
    DownArrowIcon,
} from "../Icons/Icons";
import style from "./Sorted.module.scss";

const sortedCategories = [
    {
        id: 1,
        label: "Рейтинг за зростанням",
    },
    {
        id: 2,
        label: "Рейтинг за спаданням",
    },
    {
        id: 3,
        label: "Ціна за зростанням",
    },
    {
        id: 4,
        label: "Ціна за спаданням",
    }
]

export const Sorted = ({ sortedGames }) => {
    const [activeCategory, setActiveCategory] = useState(1);
    const [isHidden, setIsHidden] = useState(true);

    const handleCategoryClick = (categoryId) => {
        // sortedGames(categoryId);
        setActiveCategory(categoryId);
        setIsHidden(true);
    }

    return (
        <div className={style.sorted}>
            <button className={style.sortedSelectedButton} type="button" onClick={() => setIsHidden(!isHidden)}>
                {sortedCategories.find(category => category.id === activeCategory).label}
                <IoIosArrowDown size={18} color="#000000" className={style.sortedelectedButtonIcon} />
            </button>
            <ul className={`${style.sortedList} ${isHidden ? style.isHidden : ''}`}>
                {/* <li className={style.sortedItem + ' ' + style.activeSorted}>
                    <button className={style.sortedButton} type="button">
                        Спочатку найближчі
                        <CheckmarkIcon className={style.sortedButtonIcon} />
                    </button>

                </li>
                 */}

                {
                    sortedCategories.map((category) => (
                        <li key={`sorted-category-${category.id}`} className={`${style.sortedItem} ${activeCategory === category.id ? style.activeSorted : ''}`} onClick={() => handleCategoryClick(category.id)}>
                            <button className={style.sortedButton} type="button">
                                {category.label}
                                <CheckmarkIcon className={style.sortedButtonIcon} />
                            </button>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}
