import { DatePickerCustom } from "../DatePickerCustom/DatePickerCustom.jsx";
import { TimePickerCustom } from "../TimePickerCustom/TimePickerCustom.jsx";
import style from "./DateTimePickers.module.scss";

export const DateTimePicker = ({setDate, setTime}) => {
  return (
    <div className={style.dateAndTimePicker}>
      <DatePickerCustom setDate={setDate}/>
      <TimePickerCustom setTime={setTime}/>
    </div>
  );
}