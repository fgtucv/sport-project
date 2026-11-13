import { Link } from "react-router-dom";

import style from "./NotAuthLeftBlock.module.scss";

export const NotAuthLeftBlock = () => {
    return (
        <div className={style.authNav}>
            <Link to="/login" className={`${style.authButton} ${style.loginButton}`} type="button">
                Увійти
            </Link>
            <Link to="/register" className={`${style.authButton} ${style.registerButton}`} type="button">
                Зареєструватись
            </Link>
        </div>
    )
};