import { NavLink } from 'react-router-dom';

import {
    BotIcon,
    EmailIcon,
    GroupIcon,
    LanguageIcon,
    TelephoneIcon,
    MenuIcon,
    AddIcon,
    CalendarIcon,
    GameIcon,
    StatisticIcon
} from "../Icons/Icons.jsx";
import { Container } from "../Container/Container.jsx";
import { Logo } from "../Logo/Logo.jsx";
import style from "./Footer.module.scss";

export const Footer = () => {
    return (
        <footer className={style.footer}>
            <Container>
                <ul className={style.footerNavList}>
                    <li className={style.footerNavItem}>
                        <NavLink
                            to="/"
                            className={({ isActive }) => isActive ? style.active : ''}
                        >
                            <GameIcon className={style.footerNavIcon} />
                        </NavLink>
                    </li>
                    <li className={style.footerNavItem}>
                        <NavLink
                            to="/my-events"
                            className={({ isActive }) => isActive ? style.active : ''}
                        >
                            <CalendarIcon className={style.footerNavIcon} />
                        </NavLink>
                    </li>
                    <li className={style.footerNavItem}>
                        <NavLink
                            to="/create-event"
                            className={({ isActive }) => isActive ? style.active : ''}
                        >
                            <AddIcon className={style.footerNavIcon} />
                        </NavLink>
                    </li>
                    <li className={style.footerNavItem}>
                        <NavLink
                            to="/statistic"
                            className={({ isActive }) => isActive ? style.active : ''}
                        >
                            <StatisticIcon className={style.footerNavIcon} />
                        </NavLink>
                    </li>
                    <li className={style.footerNavItem}>
                        <NavLink
                            to="/menu"
                            className={({ isActive }) => isActive ? style.active : ''}
                        >
                            <MenuIcon className={style.footerNavIcon} />
                        </NavLink>
                    </li>
                </ul>

                <div className={style.footerTopDiv}>
                    <div>
                        <Logo />
                        <p className={style.footerText}>
                            Ваш надійний супутник у світі паделу
                            та тенісу. Керуйте матчами,
                            відстежуйте статистику та знаходьте
                            партнерів легко.
                        </p>
                    </div>

                    <ul className={style.footerInfoList}>
                        <li className={style.footerInfoItem}>
                            <h2 className={style.footerInfoTitle}>КОНТАКТИ</h2>
                            <ul className={style.footerContactList}>
                                <li className={style.footerContactItem}>
                                    <TelephoneIcon className={style.footerContactIcon} />
                                    <a href="tel:+34000000000" className={style.footerContactSpan}>
                                        +34 000 000 000
                                    </a>
                                </li>
                                <li className={style.footerContactItem}>
                                    <EmailIcon className={style.footerContactIcon} />
                                    <a href="mailto:support@padelpulse.com" className={style.footerContactSpan}>
                                        support@padelpulse.com
                                    </a>
                                </li>
                            </ul>
                        </li>

                        <li className={style.footerInfoItem}>
                            <h2 className={style.footerInfoTitle}>СОЦМЕРЕЖІ</h2>
                            <ul className={style.footerContactList}>
                                <li className={style.footerContactItem}>
                                    <BotIcon className={style.footerContactIcon} />
                                    <a href="https://t.me" target="_blank" rel="noreferrer" className={style.footerContactSpan}>
                                        Telegram Group
                                    </a>
                                </li>
                                <li className={style.footerContactItem}>
                                    <GroupIcon className={style.footerContactIcon} />
                                    <a href="https://t.me" target="_blank" rel="noreferrer" className={style.footerContactSpan}>
                                        Telegram Bot
                                    </a>
                                </li>
                            </ul>
                        </li>

                        <li className={style.footerInfoItem}>
                            <h2 className={style.footerInfoTitle}>ПОСИЛАННЯ</h2>
                            <ul className={style.footerContactList}>
                                <li className={style.footerContactItem}>
                                    <NavLink to="/terms" className={style.footerContactSpan}>
                                        Умови використання
                                    </NavLink>
                                </li>
                                <li className={style.footerContactItem}>
                                    <NavLink to="/privacy" className={style.footerContactSpan}>
                                        Політика конфіденційності
                                    </NavLink>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>

                <div className={style.footerBottomDiv}>
                    <h4 className={style.footerSecurityText}>© 2023 PadelPulse. Всі права захищені.</h4>
                    <span className={style.footerLanguage}>
                        <LanguageIcon className={style.footerLanguageIcon} />
                        Українська
                    </span>
                </div>
            </Container>
        </footer>
    );
};