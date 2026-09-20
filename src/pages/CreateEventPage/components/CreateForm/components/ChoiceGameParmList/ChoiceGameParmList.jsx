import { useState } from "react";
import style from "./ChoiceGameParmList.module.scss";

export const ChoiceGameParmList = ({ setParm, arr }) => {

  const [selectedIndex, setSelectedIndex] = useState(0)

  const choosedThisParm = (num, index) => {
    setSelectedIndex(index);
    setParm(parseInt(num));
  }

    return (
      <ul className={style.createFormList}>
        {arr.map((num, index) => (
          <li
            key={`gameParm-${num}`}
            className={`${style.createFormItem} ${
              index === selectedIndex ? style.activeItem : ""
            }`}
            onClick={() => choosedThisParm(num, index)}
          >
            {num}
          </li>
        ))}
      </ul>
    );
  };