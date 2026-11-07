import style from "./NotAuthLeftBlock.module.scss";

export const NotAuthLeftBlock = () => {
    return (
        <div className={style.authNav}>
            <button className={`${style.authButton} ${style.loginButton}`} type="button">
                Увійти
            </button>
            <button className={`${style.authButton} ${style.registerButton}`} type="button">
                Зареєструватись
            </button>
        </div>
    )
};