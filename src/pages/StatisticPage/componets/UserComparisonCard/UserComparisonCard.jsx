import { StatHeader } from "../StatHeader/StatHeader.jsx";

import cardStyle from "../../Statistic.module.scss";
import style from "./UserComparisonCard.module.scss";

const dotClassNames = {
    win: cardStyle.winDot,
    draw: cardStyle.drawDot,
    loss: cardStyle.lossDot,
};

export const UserComparisonCard = ({ title, users, isPositive }) => {
    const badgeClassName = isPositive ? cardStyle.badgePositive : cardStyle.badgeNegative;

    return (
        <div className={cardStyle.card}>
            <StatHeader titel={title}/>

            <ul className={style.userList}>
                {users.map((user) => (
                    <li key={user.name} className={style.userItem}>
                        <img src={user.avatarUrl} alt={user.alt} className={style.avatarImg} />
                        <div className={style.userDetails}>
                            <span className={style.userName}>{user.username}</span>
                            <span className={style.userSubtext}>{user.recordStr}</span>
                        </div>
                        <span className={style.statusDots}>
                            {user.recentForm.map((dot, index) => (
                                <span key={`${user.name}-${index}`} className={`${cardStyle.dot} ${dotClassNames[dot]}`} />
                            ))}
                        </span>
                        <span className={`${cardStyle.badge} ${badgeClassName}`}>{user.winRatePercentage}%</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};
