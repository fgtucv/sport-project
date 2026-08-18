import {
    BotIcon,
    EmailIcon,
    GroupIcon,
    LanguageIcon,
    LogoIcon,
    TelephoneIcon,
} from "../Icons/Icons.jsx";
import { Container } from "../Container/Container.jsx";
import style from "./Footer.module.scss";

export const Footer = () => {
    return <footer className={style.footer}>
        <Container>
            <div className={style.footerTopDiv}>
                <div>
                    <a className={style.footerLogo}>
                        <LogoIcon />
                    </a>
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
                                <span className={style.footerContactSpan}>+34 000 000 000</span>
                            </li>
                            <li className={style.footerContactItem}>
                                <EmailIcon className={style.footerContactIcon} />
                                <span className={style.footerContactSpan}>support@padelpulse.com</span>
                            </li>
                        </ul>
                    </li>
                    <li className={style.footerInfoItem}>
                        <h2 className={style.footerInfoTitle}>СОЦМЕРЕЖІ</h2>
                        <ul className={style.footerContactList}>
                            <li className={style.footerContactItem}>
                                <BotIcon className={style.footerContactIcon} />
                                <span className={style.footerContactSpan}>Telegram Group</span>
                            </li>
                            <li className={style.footerContactItem}>
                                <GroupIcon className={style.footerContactIcon} />
                                <span className={style.footerContactSpan}>Telegram Bot</span>
                            </li>
                        </ul>
                    </li>
                    <li className={style.footerInfoItem}>
                        <h2 className={style.footerInfoTitle}>ПОСИЛАННЯ</h2>
                        <ul className={style.footerContactList}>
                            <li className={style.footerContactItem}>
                                <span className={style.footerContactSpan}>Умови використання</span>
                            </li>
                            <li className={style.footerContactItem}>
                                <span className={style.footerContactSpan}>Політика конфіденційності</span>
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
    </footer >
}
