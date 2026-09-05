import style from "./EventTypeItem.module.scss";

export const EventTypeCard = ({ data }) => {
  return (
    <li className={`${style.createEventType} ${style[data.key]} ${data.isActive ? style.activeType : ""}`}>
      <data.Icon className={`${style.createEventTypeIcon}`} />
      <h3 className={style.createEventTypeName}>{data.title}</h3>
      <p className={style.createEventTypeDescription}>{data.description}</p>
    </li>
  );
};
