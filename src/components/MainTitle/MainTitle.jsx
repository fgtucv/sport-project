import style from "./MainTitle.module.scss";

export const MainTitle = ({text}) => {
    return <div className={style.header}>
        <h1 className={style.title}>{text.title}</h1>
        <p className={style.subtitle}>{text.subtitle}</p>
    </div>
};