import { createContext, useContext } from "react";

// creating and giving access here itself in declaring 'Context'
export const ThemeContext = createContext({
    themeMode : "light", 
    darkTheme : () => {},
    lightTheme : () => {},
})

export const ThemeProvider = ThemeContext.Provider


export default function useTheme(){
    return useContext(ThemeContext)
}