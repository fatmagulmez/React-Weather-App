import React  from 'react'
import {useTheme} from '../context/ThemeContext'
import lightMode from '../icons/light-mode.png'
import darkMode from '../icons/dark-mode.png'

function ThemeButton() {
    const{theme, setTheme} = useTheme()
   
  return (
    <div>
        <button 
        type='button' 
        className='theme-btn'
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        >
         {theme === "dark" ? (
           <img src={lightMode} alt="light" width="25" />
         ) : (
           <img src={darkMode} alt="dark" width="25" />
         )}
        </button>
    </div>
  )
}

export default ThemeButton