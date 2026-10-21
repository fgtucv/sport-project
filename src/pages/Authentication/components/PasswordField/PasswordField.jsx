import { useState } from 'react';
import { IoEye, IoEyeOff } from 'react-icons/io5';
import style from './PasswordField.module.scss';

export const PasswordField = ({ label, id, forgotHref, ...inputProps }) => {
  const [visible, setVisible] = useState(false);

  return (
    <div className={style.field}>
      <div className={style.head}>
        <label className={style.label} htmlFor={id}>{label}</label>
        {forgotHref && (
          <a className={style.forgot} href={forgotHref}>Забули пароль?</a>
        )}
      </div>

      <div className={style.box}>
        <input
          className={style.input}
          id={id}
          type={visible ? 'text' : 'password'}
          {...inputProps}
        />
        <button
          className={style.eyeBtn}
          type="button"
          aria-label={visible ? 'Сховати пароль' : 'Показати пароль'}
          onClick={() => setVisible((v) => !v)}
        >
          {visible ? <IoEye /> : <IoEyeOff />}
        </button>
      </div>
    </div>
  );
};