import style from './Checkbox.module.scss';

export const Checkbox = ({ id, label, ...inputProps }) => {
  return (
    <div className={style.checkbox}>
      <input className={style.input} id={id} type="checkbox" {...inputProps} />
      <label className={style.label} htmlFor={id}>{label}</label>
    </div>
  );
}