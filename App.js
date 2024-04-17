import React from "react"
import Navbar from "./components/Navbar"
import Main from "./components/Main"

export default function App() {
    const [darkMode, setDarkMode] = React.useState("")
    
    function toggleTheme () {
        setDarkMode(prevState => !prevState)
    }
    console.log(darkMode)
    return (
        <div className="container">
            <Navbar
            toggleDarkMode={toggleTheme}
            darkMode={darkMode}
             />
            <Main
            darkMode={darkMode}
             />
        </div>
    )
}