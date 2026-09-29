import { NavLink } from 'react-router-dom';
import { BiTennisBall, BiCalendar, BiPlusCircle, BiStats, BiUserCircle, BiMessage } from "react-icons/bi";
import { MdOutlineSettings } from "react-icons/md";
import { Container } from "../Container/Container.jsx";
import { Logo } from "../Logo/Logo.jsx";
import style from "./Header.module.scss";

export const Header = () => {
    return (
        <header className={style.header}>
            <Container>
                <h1 className={style.headerPageName}>Статистика</h1>
                <Logo />

                <ul className={style.headerNav}>
                    <li className={style.headerNavItem}>
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                isActive ? `${style.headerNavLink} ${style.active}` : style.headerNavLink
                            }
                        >
                            <span className={style.headerNavSpan}>
                                Ігри
                            </span>
                            <BiTennisBall className={style.headerNavIcon} />
                        </NavLink>
                    </li>

                    <li className={style.headerNavItem}>
                        <NavLink
                            to="/my-events"
                            className={({ isActive }) =>
                                isActive ? `${style.headerNavLink} ${style.active}` : style.headerNavLink
                            }
                        >
                            <span className={style.headerNavSpan}>
                                Мої ігри
                            </span>
                            <BiCalendar className={style.headerNavIcon} />
                        </NavLink>
                    </li>

                    <li className={style.headerNavItem}>
                        <NavLink
                            to="/create-event"
                            className={({ isActive }) =>
                                isActive ? `${style.headerNavLink} ${style.active}` : style.headerNavLink
                            }
                        >
                            <span className={style.headerNavSpan}>
                                Створити гру
                            </span>
                            <BiPlusCircle className={style.headerNavIcon} />
                        </NavLink>
                    </li>

                    <li className={style.headerNavItem}>
                        <NavLink
                            to="/statistic"
                            className={({ isActive }) =>
                                isActive ? `${style.headerNavLink} ${style.active}` : style.headerNavLink
                            }
                        >
                            <span className={style.headerNavSpan}>
                                Статистика
                            </span>
                            <BiStats className={style.headerNavIcon} />
                        </NavLink>
                    </li>
                </ul>

                <ul className={style.headerList}>
                    <li className={style.headerItem}>
                        <BiMessage className={style.headerIcon} />
                    </li>
                    <li className={style.headerItem}>
                        <MdOutlineSettings className={style.headerIcon} />
                    </li>
                    <li className={style.headerItem}>
                        <BiUserCircle className={style.headerIcon} />
                    </li>
                </ul>
            </Container>
        </header>
    );
};