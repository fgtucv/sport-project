import style from './FormField.module.scss';

export const FormField = ({ label, id, value, onChange, ...inputProps }) => {
  return (
    <div className={style.field}>
      <label className={style.label} htmlFor={id}>{label}</label>
      <input className={style.input} value={value} id={id} {...inputProps} onChange={onChange} />
    </div>
  );
}