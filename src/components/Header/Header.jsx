import { useSelector } from 'react-redux';
// import { BiTennisBall, BiCalendar, BiPlusCircle, BiStats } from "react-icons/bi";

import { Container } from "../Container/Container.jsx";
import { Logo } from "../Logo/Logo.jsx";

import { NavList } from './components/NavList/NavList.jsx';
import { AuthLeftBolck } from './components/AuthLeftBolck/AuthLeftBolck.jsx';
import { NotAuthLeftBlock } from './components/NotAuthLeftBlock/NotAuthLeftBlock.jsx';

import style from "./Header.module.scss";

export const Header = () => {
    const isAuth = useSelector((state) => !!state.auth.session)

    return (
        <header className={style.header}>
            <Container>
                <h1 className={style.headerPageName}>Статистика</h1>
                <Logo />

                <NavList />

                {isAuth ? <AuthLeftBolck /> : <NotAuthLeftBlock />}
            </Container>
        </header>
    );
};