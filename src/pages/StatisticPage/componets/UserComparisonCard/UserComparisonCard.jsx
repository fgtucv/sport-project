import style from "../../Statistic.module.scss";

const dotClassNames = {
    win: style.winDot,
    draw: style.drawDot,
    loss: style.lossDot,
};

export const UserComparisonCard = ({ title, users, isPositive }) => {
    const badgeClassName = isPositive ? style.badgePositive : style.badgeNegative;

    return (
        <div className={style.card}>
            <div className={style.cardHeader}>
                <h2 className={style.cardTitle}>{title}</h2>
                <a href="#" className={style.linkMore}>Всі</a>
            </div>

            <ul className={style.userList}>
                {users.map((user) => (
                    <li key={user.name} className={style.userItem}>
                        <img src={user.avatarUrl} alt={user.alt} className={style.avatarImg} />
                        <div className={style.userDetails}>
                            <span className={style.userName}>{user.name}</span>
                            <span className={style.userSubtext}>{user.summary}</span>
                        </div>
                        <span className={style.statusDots}>
                            {user.dots.map((dot, index) => (
                                <span key={`${user.name}-${index}`} className={`${style.dot} ${dotClassNames[dot]}`} />
                            ))}
                        </span>
                        <span className={`${style.badge} ${badgeClassName}`}>{user.trend}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};
