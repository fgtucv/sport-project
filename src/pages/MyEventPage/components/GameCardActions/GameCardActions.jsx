import { Link } from "react-router-dom";

import { Trash } from "lucide-react";

import style from "./GameCardActions.module.scss";

export const GameCardActions = ({ to, linkState, onDelete }) => {
    return (
        <div className={style.actions}>
            <Link to={to} state={linkState} className={style.details}>
                Деталі матчу
            </Link>
            <button onClick={onDelete} type="button" className={style.delete} aria-label="Видалити гру">
                <Trash size={20} />
            </button>
        </div>
    );
};
