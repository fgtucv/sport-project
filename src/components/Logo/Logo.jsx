import { LogoIcon } from "../Icons/Icons";
import style from "./Logo.module.scss";

export const Logo = () => {
  return (
    <a className={style.logo}>
      <LogoIcon className={style.icon} />
      <div className={style.textWrapper}>
        <h2 className={style.title}>Padel UA España</h2>
        <h4 className={style.subtitle}>
          <span className={style.blueText}>UKRAINIAN</span>{" "}
          <span className={style.goldText}>COMMUNITY</span>
        </h4>
      </div>
    </a>
  );
};