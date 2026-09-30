import style from "./EventTypeItem.module.scss";

export const EventTypeCard = ({ data, type, setType }) => {

  const Icon = data.Icon;

  const isActive = type === data.key;

  return (
    <li className={`${style.createEventTypeWrapper} ${style[data.key]} ${isActive ? style.activeType : ""}`}>
      <button className={style.createEventType} type="button" onClick={() => setType(data.key)}>
        <Icon className={style.createEventTypeIcon} />
        <h3 className={style.createEventTypeName}>{data.title}</h3>
        <p className={style.createEventTypeDescription}>{data.description}</p>
      </button>
    </li>
  );
};
