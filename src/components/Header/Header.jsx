import {
    AddIcon,
    CalendarIcon,
    GameIcon,
    MessegIcon,
    SettingsIcon,
    StatisticIcon,
    UserIcon,
} from "../Icons/Icons.jsx";
import { Container } from "../Container/Container.jsx";
import { Logo } from "../Logo/Logo.jsx";
import style from "./Header.module.scss";

export const Header = () => {
    return <header className={style.header}>
        <Container>
            <h1 className={style.headerPageName}>Статистика</h1>
            <Logo/>
            <ul className={style.headerNav}>
                <li className={style.headerNavItem + ' ' + style.active}>
                    <a className={style.headerNavLink}>
                        <span className={style.headerNavSpan}>
                            Ігри
                        </span>
                        <GameIcon className={style.headerNavIcon} />
                    </a>
                </li>
                <li className={style.headerNavItem}>
                    <a className={style.headerNavLink}>
                        <span className={style.headerNavSpan}>
                            Мої ігри
                        </span>
                        <CalendarIcon className={style.headerNavIcon} />
                    </a>
                </li>
                <li className={style.headerNavItem}>
                    <a className={style.headerNavLink}>
                        <span className={style.headerNavSpan}>
                            Створити гру
                        </span>
                        <AddIcon className={style.headerNavIcon} />
                    </a>
                </li>
                <li className={style.headerNavItem}>
                    <a className={style.headerNavLink}>
                        <span className={style.headerNavSpan}>
                            Статистика
                        </span>
                        <StatisticIcon className={style.headerNavIcon} />
                    </a>
                </li>
                {/* <li className={style.headerNavItem}>
                    <a className={style.headerNavLink}>
                        <span className={style.headerNavSpan}>
                            Піраміда
                        </span>
                        <TournamentIcon className={style.headerNavIcon} />
                    </a>
                </li> */}
            </ul>
            <ul className={style.headerList}>
                <li className={style.headerItem}>
                    <a className={style.headerLink}>
                        <MessegIcon className={style.headerIcon} />
                    </a>
                </li>
                <li className={style.headerItem}>
                    <a className={style.headerLink}>
                        <SettingsIcon className={style.headerIcon} />
                    </a>
                </li>
                <li className={style.headerItem}>
                    <a className={style.headerLink}>
                        <UserIcon className={style.headerIcon} />
                    </a>
                </li>
            </ul>
        </Container>
    </header>
};
