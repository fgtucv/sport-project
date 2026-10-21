import { Link } from 'react-router-dom';

import style from './AuthSwitch.module.scss';

export const AuthSwitch = ({ text, linkText, href }) => {
  return (
    <p className={style.switch}>
      {text}{' '}
      <Link className={style.link} to={href}>{linkText}</Link>
    </p>
  );
}