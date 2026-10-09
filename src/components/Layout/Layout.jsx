import { Container } from "../Container/Container.jsx";
import { Header } from "../Header/Header.jsx";
import { Footer } from "../Footer/Footer";
import { IsMobileProvider } from "../../contexts/useIsMobile";
import { Outlet } from "react-router-dom";

export const Layout = ({children}) => {
    return (
        <IsMobileProvider>
            <Header />
            <main>
                <Container>
                    {/* {children} */}
                    <Outlet />
                </Container>
            </main>
            <Footer />
        </IsMobileProvider>
    )
}