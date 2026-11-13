import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { CircleUserRound, Settings, MessageSquare } from "lucide-react";

import notFoundAvatar from "../../../../assets/userNotFound.svg";

import style from "./AuthLeftBolck.module.scss";


export const AuthLeftBolck = () => {
    const avatar = useSelector((state) => state.auth.profile?.avatar_url) || notFoundAvatar;

    return (
        <div className={style.avatarDiv}>
            <img className={style.avatar} src={avatar} alt="мій аватар" />
        </div>
        // <ul className={style.list}>
        //     <li>
        //         <Link to="*">
        //             <MessageSquare
        //                 size={24}
        //                 color="#111827"
        //             />
        //         </Link>
        //     </li>
        //     <li>
        //         <Link to="*">
        //             <Settings
        //                 size={24}
        //                 color="#111827"
        //             />
        //         </Link>
        //     </li>
        //     <li>
        //         <Link to="*">
        //             <CircleUserRound
        //                 size={24}
        //                 color="#111827"
        //             />
        //         </Link>
        //     </li>
        // </ul>
    )
};