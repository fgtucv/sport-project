import { NavLink} from 'react-router-dom';
import { useSelector } from 'react-redux';
import { BiTennisBall, BiCalendar, BiPlusCircle, BiStats } from "react-icons/bi";

import { Container } from "../Container/Container.jsx";
import { Logo } from "../Logo/Logo.jsx";

import { AuthLeftBolck } from './components/AuthLeftBolck/AuthLeftBolck.jsx';
import { NotAuthLeftBlock } from './components/NotAuthLeftBlock/NotAuthLeftBlock.jsx';

import style from "./Header.module.scss";

export const Header = () => {
    const isAuth = useSelector((state) => !!state.auth.session)

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

                { isAuth ? <AuthLeftBolck/> : <NotAuthLeftBlock/> }
            </Container>
        </header>
    );
};