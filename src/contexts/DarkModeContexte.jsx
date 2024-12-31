import { createContext, useContext, useState } from "react";

const DarkModeContext = createContext();

function DarkeModeProvider({ children }) {
    const [darkMode, setDarkMode] = useState(false);

    function handleDarkMode() {
        setDarkMode((prev) => !prev);
    }

    return (
        <DarkModeContext.Provider value={{ darkMode, handleDarkMode }}>
            {children}
        </DarkModeContext.Provider>
    );
}

function useDarkMode() {
    const context = useContext(DarkModeContext);
    if (!context) {
        throw new Error("useDarkMode must be used within a DarkModeProvider");
    }

    return context;
}

export { DarkeModeProvider, useDarkMode };
