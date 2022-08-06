import React from "react"
import Logo from './images/logo.svg'
import DarkLogo from './images/darkLogo.png'
import DayNight from './images/dayNight.jpg'
import NightDay from './images/nightDay.png'

export default function Header(props) {
    return (
        <header className={props.darkMode ? "header header--dark": "header"}>
            <img 
                src={props.darkMode ? DarkLogo : Logo}
                className="header--image"
            />
            
            <h2 className={props.darkMode ? "header--title header--title--dark": "header--title"}>Генератор падежей</h2>
                <img
                    className="day--night"
                    onClick={props.toggleDarkMode}
                    src={props.darkMode ? NightDay : DayNight}
                />
        </header>
    )
}