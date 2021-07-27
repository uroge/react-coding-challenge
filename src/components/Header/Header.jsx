import React from 'react';
import './Header.scss';

const Header = (props) => {
    console.log(props);
    return (
        <div className="header">
            <div className="header-main">
                <h1 className="header__logo">
                    <span>DEMO</span>
                    Streaming
                </h1>
                <div className="header__buttons">
                    <a href="/" className="header__buttons-login">Login</a>
                    <a href="/" className="header__buttons-trial">Start free trial</a>
                </div>
            </div>
            <div className="header-secondary">
                <h1>Popular Titles</h1>
            </div>
        </div>
    );
}

export default Header;