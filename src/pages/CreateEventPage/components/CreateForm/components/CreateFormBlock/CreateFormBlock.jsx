import style from "./CreateFormBlock.module.scss";

export const CreateFormBlock = ({
  title,
  children,
  isInput,
  Icon,
  id,
  placeholder,
}) => {
  return (
    <div className={style.formBlock}>
      {isInput ? (
        <label className={style.formBlockTitle} htmlFor={id}>
          {title}
        </label>
      ) : (
        <h2 className={style.formBlockTitle}>{title}</h2>
      )}
      {isInput ? (
        <input
          className={style.formBlockInput}
          placeholder={placeholder}
          id={id}
          type="text"
        />
      ) : (
        children
      )}
      {isInput && <Icon /> ? <Icon className={style.formBlockIcon} /> : null}
    </div>
  );
};