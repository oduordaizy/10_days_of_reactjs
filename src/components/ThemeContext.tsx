import React, { createContext, useEffect, useState } from 'react'

interface ThemeContextType{
    theme: string,
    toggleTheme: ()=>void
}

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined)


export const ThemeProvider:React.FC <{children: React.ReactNode}>= ({children}) => {
  const [theme, setTheme] = useState<string>(()=>{
    return localStorage.getItem("theme") || "light"
  })

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.documentElement.setAttribute("data-theme", theme); 
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
       <ThemeContext.Provider value={{theme, toggleTheme}}>
          {children}
       </ThemeContext.Provider>
  )
}

export default ThemeContext