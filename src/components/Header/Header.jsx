import logo from "../../images/logo.png";
import user from "../../images/user.svg";
import game from "../../images/game.svg";
import settings from "../../images/settings.svg";
import schedule from "../../images/schedule.svg";
import statistic from "../../images/statistic.svg";
import messeg from "../../images/messeg.svg";
import calendar from "../../images/calendar.svg";
import create from "../../images/create.svg";
import { Container } from "../Container/Container.jsx";
import style from "./Header.module.css";

export const Header = () => {
    return <header className={style.header}>
        <Container>
            <a href="" className={style.headerLogo}>
                <img src={logo} alt="Logo" />
            </a>
            <ul className={style.headerNav}>
                <li className={style.headerNavItem}>
                    <a className={style.headerNavLink}>
                        <span className={style.headerNavSpan}>
                            Ігри
                        </span>
                        <img className={style.headerNavIcon} src={game} alt="Game" />
                    </a>
                </li>
                <li className={style.headerNavItem}>
                    <a className={style.headerNavLink}>
                        <span className={style.headerNavSpan}>
                            Мої ігри
                        </span>
                        <img className={style.headerNavIcon} src={calendar} alt="User" />
                    </a>
                </li>
                <li className={style.headerNavItem}>
                    <a className={style.headerNavLink}>
                        <span className={style.headerNavSpan}>
                            Створити гру
                        </span>
                        <img className={style.headerNavIcon} src={create} alt="Create" />
                    </a>
                </li>
                <li className={style.headerNavItem}>
                    <a className={style.headerNavLink}>
                        <span className={style.headerNavSpan}>
                            Статистика
                        </span>
                        <img className={style.headerNavIcon} src={statistic} alt="Statistic" />
                    </a>
                </li>
                <li className={style.headerNavItem}>
                    <a className={style.headerNavLink}>
                        <span className={style.headerNavSpan}>
                            Піраміда
                        </span>
                        <img className={style.headerNavIcon} src={schedule} alt="Calendar" />
                    </a>
                </li>
            </ul>
            <ul className={style.headerList}>
                <li className={style.headerItem}>
                    <a className={style.headerLink}>
                        <img className={style.headerIcon} src={messeg} alt="Messeg" />
                    </a>
                </li>
                <li className={style.headerItem}>
                    <a className={style.headerLink}>
                        <img className={style.headerIcon} src={settings} alt="Settings" />
                    </a>
                </li>
                <li className={style.headerItem}>
                    <a className={style.headerLink}>
                        <img className={style.headerIcon} src={user} alt="User" />
                    </a>
                </li>
            </ul>
        </Container>
    </header>
};