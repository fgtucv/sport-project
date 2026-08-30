import { Component } from "react";
import { StatHeader } from "../StatHeader/StatHeader.jsx";
import { StatList } from "./components/StatList/StatList.jsx";
import { GeneralStatIcon } from "../../../../components/Icons/Icons.jsx";
import { PieMatchesChart } from "./components/PieMatchesChart/PieMatchesChart.jsx";

import style from "./GeneralStatCard.module.scss";
import cardstyle from "../../Statistic.module.scss";

export class GeneralStatCard extends Component {
    render() {
        const { data } = this.props;
        return (
            <div className={cardstyle.card}>
                <StatHeader titel={"Заголовок"} Icon={GeneralStatIcon}/>

                <PieMatchesChart data={data}/>

                <ul className={style.statsLegend}>
                    <li className={style.legendItem}>
                        <div className={style.legendLabelDiv}>
                            <span className={`${cardstyle.dot} ${cardstyle.winDot}`}></span>
                            <span className={style.legendLabel}>Перемоги</span>
                        </div>
                        <strong className={style.legendValue}>{data.wins}</strong>
                    </li>
                    <li className={style.legendItem}>
                        <div className={style.legendLabelDiv}>
                            <span className={`${cardstyle.dot} ${cardstyle.drawDot}`}></span>
                            <span className={style.legendLabel}>Нічії</span>
                        </div>
                        <strong className={style.legendValue}>{data.draws}</strong>
                    </li>
                    <li className={style.legendItem}>
                        <div className={style.legendLabelDiv}>
                            <span className={`${cardstyle.dot} ${cardstyle.lossDot}`}></span>
                            <span className={style.legendLabel}>Поразки</span>
                        </div>
                        <strong className={style.legendValue}>{data.losses}</strong>
                    </li>
                </ul>

                <StatList data={data}/>
            </div>
        )
    }
}