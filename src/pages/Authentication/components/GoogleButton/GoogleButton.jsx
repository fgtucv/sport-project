import { FcGoogle } from 'react-icons/fc';
import style from './GoogleButton.module.scss';

export const GoogleButton =({ onClick }) => {
  return (
    <button className={style.btn} type="button" onClick={onClick}>
      <FcGoogle className={style.icon} />
      Google
    </button>
  );
}