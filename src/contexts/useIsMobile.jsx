import { createContext } from "react";

export const IsMobileContext = createContext(false);

export const IsMobileProvider = ({ children }) => {

    return (
        <IsMobileContext.Provider value={{isMobile}}>
            {children}
        </IsMobileContext.Provider>
    )
};