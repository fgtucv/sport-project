import { Sorted } from "../../../../components/Sorted/Sorted.jsx";

import style from "./EventFilter.module.scss";

// TODO: активний таб / перемикання — твоя логіка
const TABS = ["Всі", "Минулі", "Майбутні", "Чернетки"];

export const EventFilter = () => {
    return (
        <div className={style.filter}>
            <ul className={style.types}>
                {TABS.map((tab, index) => (
                    <li
                        key={tab}
                        className={`${style.type} ${index === 0 ? style.activeType : ""}`}
                    >
                        {tab}
                    </li>
                ))}
            </ul>
            <Sorted />
        </div>
    );
};
