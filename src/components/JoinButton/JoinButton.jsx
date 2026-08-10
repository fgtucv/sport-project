import style from "./JoinButton.module.scss"

export const JoinButton = ({obj}) => {
    return <button type="button" className={style.gameJoinBtn}>{obj.isFull ? "Недоступно" : "Приєднатися"}</button>
}