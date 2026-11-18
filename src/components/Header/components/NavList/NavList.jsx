import { NavLink } from "react-router-dom";

import { Gamepad2, CalendarDays, CirclePlus, ChartPie } from "lucide-react";

import style from "./NavList.module.scss";

const pages = [
    { name: "Ігри", to: "/", Icon: Gamepad2, },
    { name: "Календарь", to: "/my-events", Icon: CalendarDays, },
    { name: "Створити гру", to: "/create-event", Icon: CirclePlus, },
    { name: "Статистика", to: "/statistic", Icon: ChartPie, },
];

export const NavList = () => {
    return (
        <ul className={style.headerNav}>
            {
                pages.map(({ name, to, Icon }) => {
                    return (
                        <li className={style.headerNavItem}>
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