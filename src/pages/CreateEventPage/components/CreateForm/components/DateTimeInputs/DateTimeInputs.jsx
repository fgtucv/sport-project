import { Component } from "react";
import { DataIcon, TimeIcon } from "../../../../../../components/Icons/Icons.jsx";

import style from "./DateTimeInputs.module.scss";

export class DateTimeInputs extends Component {
  render() {
    return (
      <div className={style.DateTimeBlock}>
        <div className={style.DateTimeUnderBlock}>
          <h2 className={style.DateTimeLabel}>Дата</h2>
          <span className={style.DateTimeInput}>
            <DataIcon className={style.DateTimeIcon} />
            дд/мм/рррр
          </span>
        </div>

        <div className={style.DateTimeUnderBlock}>
          <h2 className={style.DateTimeLabel}>Час</h2>
          <span className={style.DateTimeInput}>
            <TimeIcon className={style.DateTimeIcon} />
            --:--
          </span>
        </div>
      </div>
    );
  }
}