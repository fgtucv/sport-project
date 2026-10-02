import { useState } from "react";
import style from "./Category.module.scss";

const categories = [
    { id: 1, name: "Всі", value: "all" },
    { id: 2, name: "Падель", value: "PADEL" },
    { id: 3, name: "Теніс", value: "TENNIS" },
];

export const Category = ({ setCategory }) => {
    const [active, setActive] = useState(1);

    const handleClick = (newActive, category) => {
        setActive(newActive);
        setCategory(category);
    };

    return (
        <ul className={style.categories}>
            {categories.map((category) => (
                <li
                    key={category.id}
                    className={style.categoriesItem + ' ' + (active === category.id ? style.activeCetegory : '')}
                    onClick={() => handleClick(category.id, category.value)}
                >
                    <h2 className={style.categori}>{category.name}</h2>
                </li>
            ))}
        </ul>
    )
};