import { Link } from "react-router-dom";

import { CircleUserRound, Settings, MessageSquare } from "lucide-react";

import style from "./AuthLeftBolck.module.scss";

export const AuthLeftBolck = () => {
    return (
        <ul className={style.list}>
            <li>
                <Link to="*">
                    <MessageSquare
                        size={24}
                        color="#111827"
                    />
                </Link>
            </li>
            <li>
                <Link to="*">
                    <Settings
                        size={24}
                        color="#111827"
                    />
                </Link>
            </li>
            <li>
                <Link to="/register">
                    <CircleUserRound
                        size={24}
                        color="#111827"
                    />
                </Link>
            </li>
        </ul>
    )
};