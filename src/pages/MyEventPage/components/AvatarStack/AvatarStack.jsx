import userNotfound from "../../../../assets/userNotFound.svg";

import style from "./AvatarStack.module.scss";

const getInitials = (name = "") => name.slice(0, 2).toUpperCase();

// [{ nickname, avatarUrl }]
export const AvatarStack = ({ players = [] }) => {
    // console.log(players)
    return (
        <div className={style.stack}>
            {players.map(({ profiles: player }, index) => (
                <img
                    key={`${player.nickname}-${index}`}
                    src={player.avatar_url || userNotfound}
                    alt={player.nickname}
                    className={style.avatar}
                />
            ))}
        </div>
    );
};
