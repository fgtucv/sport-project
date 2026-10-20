import { Header } from "../Header/Header.jsx";
import { Footer } from "../Footer/Footer";
import { IsMobileProvider } from "../../contexts/useIsMobile";
import { AuthProvider } from "../../contexts/useAuth.jsx";
import { Outlet } from "react-router-dom";

export const Layout = ({ children }) => {
    return (
        <AuthProvider>
            <IsMobileProvider>
                <Header />
                <main>
                    <Outlet />
                </main>
                <Footer />
            </IsMobileProvider>
        </AuthProvider>
    )
}