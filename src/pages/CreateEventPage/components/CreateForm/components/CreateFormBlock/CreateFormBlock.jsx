import style from "./CreateFormBlock.module.scss";

export const CreateFormBlock = ({ title, children, isInput}) => {
    return (
        <div className={style.formBlock}>
            {isInput ? <label className={style.formBlockTitle}>{title}</label> : <h2 className={style.formBlockTitle}>{title}</h2>} 
            {children}
        </div>
    )
}       