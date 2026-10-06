import { createContext } from "react";
import { useWindowSize } from "@uidotdev/usehooks";

export const IsMobileContext = createContext(false);

export const IsMobileProvider = ({ children }) => {

    const isMobile = useWindowSize().width <= 768;

    return (
        <IsMobileContext.Provider value={{isMobile}}>
            {children}
        </IsMobileContext.Provider>
    )
};