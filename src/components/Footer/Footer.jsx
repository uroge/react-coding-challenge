import React from 'react';
import './Footer.scss';

import facebook from '../../assets/social/facebook-white.svg';
import instagram from '../../assets/social/instagram-white.svg';
import twitter from '../../assets/social/twitter-white.svg';

import app from '../../assets/store/app-store.svg';
import play from '../../assets/store/play-store.svg';
import windows from '../../assets/store/windows-store.svg';

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer__links">
                <a href="/">Home</a>
                <a href="/">Tearms and Conditions</a>
                <a href="/">Privacy Policy</a>
                <a href="/">Collection Statement</a>
                <a href="/">Help</a>
                <a href="/">Manage Account</a>
            </div>
            <p className="footer__copy">
                Copyright &copy; 2016 DEMO Streaming. All Rights Reserved
            </p>
            <div className="footer__icons">
                <div className="footer__icons-social">
                    <img src={facebook} alt="Facebook" />
                    <img src={twitter} alt="Twitter" />
                    <img src={instagram} alt="Instagram" />
                </div>
                <div className="footer__icons-store">
                    <img src={app} alt="app" />
                    <img src={play} alt="play" />
                    <img src={windows} alt="windows" />
                </div>
            </div>
        </div>
    );
}

export default Footer;