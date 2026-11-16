import { AvatarStack } from "../AvatarStack/AvatarStack.jsx";
import { Star } from "lucide-react";

import style from "./MatchPanel.module.scss";

const TeamColumn = ({ team }) => (

    <div className={style.team}>
        <AvatarStack players={team.players} />
        <span className={`${style.teamName} ${team.isWinner ? style.teamWinner : ""}`}>
            {team.name}
            {team.isWinner && <Star size={10} fill="currentColor" />}
        </span>
        {team.caption && <span className={style.caption}>{team.caption}</span>}
    </div>
);

const ScoreColumn = ({ score = [], caption }) => (
    <div className={style.scoreColumn}>
        <div className={style.scoreList}>
            {score.map((set, index) => (
                <span key={`${set}-${index}`} className={style.scoreBox}>{set}</span>
            ))}
        </div>
        <span className={style.caption}>{caption}</span>
    </div>
);

export const MatchPanel = ({ result, teamA, teamB, participants, score, scoreCaption }) => {
    if (result === "draw") {
        return (
            <div className={`${style.panel} ${style.panelDraw}`}>
                <TeamColumn team={participants} />
                <ScoreColumn score={score} caption={scoreCaption} />
            </div>
        );
    }

    return (
        <div className={style.panel}>
            <TeamColumn team={teamA} />
            <ScoreColumn score={score} caption={scoreCaption} />
            <TeamColumn team={teamB} />
        </div>
    );
};
