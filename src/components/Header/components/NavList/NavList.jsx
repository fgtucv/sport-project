import { NavLink } from "react-router-dom";

import { Gamepad2, CalendarDays, CirclePlus, ChartPie } from "lucide-react";

import style from "./NavList.module.scss";

const pages = [
    { id: "navlink_to_game_page", name: "Ігри", to: "/", Icon: Gamepad2, },
    { id: "navlink_to_calendar_page", name: "Календарь", to: "/my-events", Icon: CalendarDays, },
    { id: "navlink_to_creategame_page", name: "Створити гру", to: "/create-event", Icon: CirclePlus, },
    { id: "navlink_to_statiscic_page", name: "Статистика", to: "/statistic", Icon: ChartPie, },
];

export const NavList = () => {
    return (
        <ul className={style.headerNav}>
            {
                pages.map(({ id, name, to, Icon }) => {
                    return (
                        <li key={id} className={style.headerNavItem}>
                            <NavLink
                                to={to}
                                className={({ isActive }) =>
                                    isActive ? `${style.headerNavLink} ${style.active}` : style.headerNavLink
                                }
                            >
                                <span className={style.headerNavSpan}>
                                    {name}
                                </span>
                                <Icon size={18} color="currentColor" />
                            </NavLink>
                        </li>
                    )
                })
            }
        </ul>
    )
};