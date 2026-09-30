import { Component } from "react";
import { MdOutlineTimer } from "react-icons/md";
import { CgTrophy } from "react-icons/cg";
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
                <article className={cardStyle.card}>
                    <StatHeader titel={"Час на корті"} Icon={MdOutlineTimer} />

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
                </article>
            )
        } else if (type === "tournament") {
            return (
                <article className={cardStyle.card}>
                    <StatHeader titel={"Турніри"} Icon={CgTrophy} />

                    <ul className={style.tournamentList}>
                        {
                            data.map((tournament) => {
                                return <BottomCardItem type={type} data={tournament} />
                            })
                        }
                    </ul>
                </article>
            )
        }
    }
}