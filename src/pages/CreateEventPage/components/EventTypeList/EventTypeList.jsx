import style from "./EventTypeList.module.scss";

export const EventTypeCard = ({ Icon, title, description, isActive }) => {
  const isMobile = window.matchMedia('(max-width: 1279px)');

  return (
    <li className={`${style.createEventType} ${isActive ? style.activeType : ""}`}>
      <Icon className={`${style.createEventTypeIcon} ${title === "Звичайна гра" ? style.gameIcon : title === "Турнір" ? style.tournamentIcon : style.qualificationIcon}`} />
      <h3 className={style.createEventTypeName}>{title}</h3>
      {!isMobile ? <p className={style.createEventTypeDescription}>{description}</p> : ""}
    </li>
  );
};
