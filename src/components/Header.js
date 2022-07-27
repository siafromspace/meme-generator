import React from "react"
import Logo from "../images/troll-face.png"

function Header() {
    return (
        <header>
            <img src={Logo} className="logo" alt="logo" />
            <h1>Meme Generator</h1>
        </header>
    )
}

export default Header