import style from './AuthModal.module.scss';

const AuthModal = ({onClose}) => {
    return (
        <div className={style.modalBackDrop}>
            <h2 className={style.modalTitle}>Padel & Tennis</h2>
            <ul className={style.modalAutorize}>
                <li className={style.modalAutorizeItem}></li>
                <li className={style.modalAutorizeItem}></li>
            </ul>
            <div className={style.modal}>
                <header className={style.modalHeeader}>

                </header>

            </div>
        </div>
    );
};

export default AuthModal