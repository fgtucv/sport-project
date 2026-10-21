import style from './Divider.module.scss';

export const Divider = ({ children }) => {
  return (
    <div className={style.divider}>
      <span className={style.text}>{children}</span>
    </div>
  );
}