import style from "./Category.module.scss";

export const Category = ({ name, isActive, onClick }) => {
    return <ul className={style.categories}>
        <li className={style.categoriesItem + ' ' + style.activeCetegory}>
            <h2 className={style.categori}>Всі</h2>
        </li>
        <li className={style.categoriesItem}>
            <h2 className={style.categori}>Падель</h2>
        </li>
        <li className={style.categoriesItem}>
            <h2 className={style.categori}>Теніс</h2>
        </li>
    </ul>
};