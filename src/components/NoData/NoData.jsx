import { NavLink } from 'react-router-dom';
import { LuInbox } from "react-icons/lu";
import { IoMdAdd, IoMdSearch } from "react-icons/io";

import style from "./NoData.module.scss";

export const NoData = () => {
    return (
        <div className={style.noData}>
            <span className={style.noDataIconWrapper}>
                <LuInbox size={32} color="#0058BE"/>
            </span>

            <h2 className={style.noDataTitle}>Поки що немає ігор</h2>

            <p className={style.noDataText}>
                Ви ще не брали участі у матчах та не створювали
                чернеток. Приєднуйтесь до відкритих ігор спільноти або
                створіть власну першу гру!
            </p>

            <div className={style.noDataActions}>
                <NavLink to="/create-event" className={`${style.noDataButton} ${style.primaryBtn}`} type="button">
                    Створити гру
                    <IoMdAdd className={style.buttonIcon} />
                </NavLink>

                <NavLink to="/" className={`${style.noDataButton} ${style.secondaryBtn}`} type="button">
                    Знайти відкриті ігри
                    <IoMdSearch className={style.buttonIcon} />
                </NavLink>
            </div>
        </div>
    );
};