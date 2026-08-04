import logo from "../../images/logo.png";
import { Container } from "../Container/Container.jsx";
import style from "./Footer.module.css";

export const Footer = () => {
    return <footer className={style.footer}>
        <Container>
            <div>
                <div>
                    <a href="" className={style.footerLogo}>
                        <img src={logo} alt="Logo" />
                    </a>
                </div>
                <ul className={style.footerInfoList}>
                    <li className={style.footerInfoItem}>
                        <h2 className={style.footerInfoTitle}>КОНТАКТИ</h2>
                        <ul className={style.footerContactList}>
                            <li className={style.footerContactItem}>
                                <img src="" alt="" />
                                <span></span>
                            </li>
                            <li className={style.footerContactItem}>
                                <img src="" alt="" />
                                <span></span>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <h2>СОЦМЕРЕЖІ</h2>
                        <ul className={style.footerContactList}>
                            <li>
                                <img src="" alt="" />
                                <span></span>
                            </li>
                            <li>
                                <img src="" alt="" />
                                <span></span>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <h2>ПОСИЛАННЯ</h2>
                        <ul className={style.footerContactList}>
                            <li>
                                <img src="" alt="" />
                                <span></span>
                            </li>
                            <li>
                                <img src="" alt="" />
                                <span></span>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
            <div>

            </div>
        </Container>
    </footer >
}