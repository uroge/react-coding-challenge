import React, { useEffect, useState } from 'react';
import './Header.scss';
import history from '../../history';

const Header = (props) => {
    const [headerTitle, setHeaderTitle] = useState('Popular Titles');
    
    useEffect(() => {
        if(history.location.pathname === '/series') {
            setHeaderTitle('Popular series');
        } else if (history.location.pathname === '/movies') {
            setHeaderTitle('Popular movies');
        }
    }, []);
    
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
                <h1>{headerTitle}</h1>
            </div>
        </div>
    );
}

export default Header;