import style from "../../CreateEvent.module.scss";

export const EventTypeCard = ({ Icon, iconClassName, title, description, isActive }) => {
  return (
    <li className={`${style.createEventType} ${isActive ? style.activeType : ""}`}>
      <Icon className={`${style.createEventTypeIcon} ${iconClassName}`} />
      <h3 className={style.createEventTypeName}>{title}</h3>
      <p className={style.createEventTypeDescription}>{description}</p>
    </li>
  );
};
