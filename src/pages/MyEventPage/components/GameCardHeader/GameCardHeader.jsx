import style from "./GameCardHeader.module.scss";

const RESULT_LABELS = {
    win: "WIN",
    loss: "LOSS",
    draw: "DRAW",
};

// result: "win" | "loss" | "draw"
export const GameCardHeader = ({ sportLabel, levelLabel, result }) => {
    return (
        <div className={style.header}>
            <div className={style.tags}>
                <span className={style.tag}>{sportLabel}</span>
                {levelLabel && <span className={`${style.tag} ${style.tagLevel}`}>{levelLabel}</span>}
            </div>
            <span className={`${style.badge} ${style[result]}`}>{RESULT_LABELS[result]}</span>
        </div>
    );
};
