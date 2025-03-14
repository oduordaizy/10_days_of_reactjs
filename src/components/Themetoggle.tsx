import React, { useContext } from 'react'
import ThemeContext from './ThemeContext'

const Themetoggle: React.FC = () => {
  const themeContext = useContext(ThemeContext) //Allows Themetoggle to consume ThemeContext values

  if (!themeContext) return null;

  const {theme, toggleTheme} = themeContext


  return (
  
        <button onClick={toggleTheme}>
          {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
        </button>
   
  )
}

export default Themetoggle