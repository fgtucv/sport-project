import { PinIcon } from "../CardIcons/CardIcons.jsx";

import style from "./GameCardInfo.module.scss";

export const GameCardInfo = ({ dateTime, dateTimeISO, duration, price, location }) => {
    return (
        <div className={style.info}>
            <div className={style.row}>
                <time dateTime={dateTimeISO} className={style.dateTime}>
                    {dateTime} • {duration}
                </time>
                <span className={style.price}>{price}</span>
            </div>
            <p className={style.location}>
                <PinIcon className={style.pin} />
                <span>{location}</span>
            </p>
        </div>
    );
};
