import React from "react";

export default function Navbar() {
    return(
        <nav>
            <div className="logo">
                <img src="troll_face.png" alt="troll_img" className="troll_img"/>
                <div className="site_title">Meme Generator</div>
            </div>
            <span>React Course - Project 3</span>
        </nav>
    )
}