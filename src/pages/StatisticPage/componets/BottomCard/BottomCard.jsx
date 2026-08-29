import { Component } from "react";
import { TimeStatIcon, TournamentStatIcon } from "../../../../components/Icons/Icons.jsx";
import { StatHeader } from "../StatHeader/StatHeader.jsx";
import { BottomCardItem } from "./components/BottomCardItem/BottomCardItem.jsx";

import cardStyle from "../../Statistic.module.scss";
import style from "./BottomCard.module.scss";

export class BottomCard extends Component {
    render() {
        const { type, data } = this.props;

        if (type === "time") {
            const dataArray = [data.fastestMatch, data.longestMatch]
            return (
                <div className={cardStyle.card}>
                    <StatHeader titel={"Час на корті"} Icon={TimeStatIcon} />

                    <ul className={style.matchList}>
                        {
                            dataArray.map((match) => {
                                return <BottomCardItem type={type} data={match} />
                            })
                        }
                    </ul>

                    <div className={style.averageTimeBlock}>
                        <span className={style.averageLabel}>Середній час</span>
                        <time className={style.averageTime}>14:57 <small>хв</small></time>
                    </div>
                </div>
            )
        } else if (type === "tournament") {
            return (
                <div className={cardStyle.card}>
                    <StatHeader titel={"Турніри"} Icon={TournamentStatIcon} />

                    <ul className={style.tournamentList}>
                        {
                            data.map((tournament) => {
                                return <BottomCardItem type={type} data={tournament} />
                            })
                        }
                    </ul>
                </div>
            )
        }
    }
}