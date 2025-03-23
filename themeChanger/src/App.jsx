 import React from 'react'
import { useState } from 'react'
import { createContext } from 'react'
import ChildA from './component/ChildA'
import './App.css'
const themeContext=createContext()

 function App() {
  const [theme, setTheme]=useState('light')
   return (
    <themeContext.Provider value={{theme,setTheme}}>
      <div id='container' style={{backgroundColor:theme==='light'?'beige':'gray'}}>
      <ChildA />
      </div>
      
    </themeContext.Provider >

    
   )
 }
 
 export default App
 export { themeContext }
