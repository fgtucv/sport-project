import { createContext,  useState } from "react";

export const IsMobileContext = createContext(() => typeof window !== 'undefined' && window.innerWidth < 1280);

export const IsMobileProvider = ({ children }) => {
    const [isMobile, setIsMobile] = useState(() => typeof window !== 'undefined' && window.innerWidth < 1280);

    return (
        <IsMobileContext.Provider value={{isMobile}}>
            {children}
        </IsMobileContext.Provider>
    )
};