import { ActivityBarChart } from "./components/ActivityBarChart/ActivityBarChart";
import { StatHeader } from "../StatHeader/StatHeader";

import cardStyle from "../../Statistic.module.scss"

export const ActivityCard = ({ data }) => {
    return (
        <div className={cardStyle.card}>
            <StatHeader titel={"Ігрова активність"} badge={"yearToggle"}/>

            <ActivityBarChart data={data}/>
        </div>
    )
};