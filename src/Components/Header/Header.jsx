import React from 'react'
import "./Header.css"

function Header() {
    return (
        <header className='header'>
            <div className="container">
                <div className="wrapper">
                    <div className="title-box">
                        <h1>Browse Everything</h1>
                    </div>
                    <div className="img-box">
                        <div className="bordered-img-box">
                            <img src="/header-bg.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header