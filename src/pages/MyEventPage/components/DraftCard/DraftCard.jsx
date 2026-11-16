import { Link, useLocation } from "react-router-dom";

import { DraftIcon } from "../../../../components/Icons/Icons.jsx";

import style from "./DraftCard.module.scss";

const formatedTitel = (type, sport) => {
    const firstPart = type === "tournamentEventsCard" ? "Турнір" : type === "gameEventsCard" ? "Гра" : "Кваліфікація";
    const secondPart = sport === "PADEL" ? "з паделу" : "з тенісу";

    return `${firstPart} ${secondPart}`;
};

export const DraftCard = ({ obj, deleteCard }) => {
    const location = useLocation();

    return (
        <li>
            <Link to={`/my-events/${obj.id}`} state={{ from: location }} className={style.draft} id={obj.id}>
                <h2 className={style.title}>{formatedTitel(obj.typeOfGame, obj.sportType)}</h2>
                <div className={style.body}>
                    <DraftIcon className={style.icon} />
                    <span className={style.text}>Редагувати чернетку</span>
                </div>
                <button onClick={deleteCard} type="button" className={style.deleteButton}>
                    Видалити чернетку
                </button>
            </Link>
        </li>
    );
};
