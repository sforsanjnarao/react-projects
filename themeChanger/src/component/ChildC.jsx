import React from 'react'
import { useContext } from 'react'
import { createContext } from 'react'
import { themeContext } from '../App'



function ChildC() {
    const {theme,setTheme}=useContext(themeContext)

    const toggleTheme=()=>{
        setTheme(theme==='light'?'dark':'light')
    }
  return (
    <div>
        <button onClick={toggleTheme}>
             toggle
        </button>
    </div>
  )
}

export default ChildC