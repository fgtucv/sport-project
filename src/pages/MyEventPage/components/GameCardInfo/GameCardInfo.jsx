import { MapPin } from "lucide-react";

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
                <MapPin size={14} />
                <span>{location}</span>
            </p>
        </div>
    );
};
