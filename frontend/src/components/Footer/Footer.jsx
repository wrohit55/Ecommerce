import React from 'react'
import './Footer.css'
import playStore from "..//../assets/playstore.png";
import appStore from "..//../assets//Appstore.png";

// import Github from '..//../assets/github.png'
// import Instagram from '..//../assets/instagram.png'
// import LinkedIn from '..//../assets/linkedin.png'
// import Logo from '..//../assets/logo.png'
const Footer = () => {
    return (
        <footer id="footer">
            <div className="leftFooter">
                <h4>DOWNLOAD OUR APP</h4>
                <p>Download App for Android and IOS mobile phone</p>
                <img src={playStore} alt="playstore" />
                <img src={appStore} alt="Appstore" />
            </div>

            <div className="midFooter">
                <h1>ECOMMERCE.</h1>
                <p>High Quality is our first priority</p>

                <p>Copyrights 2021 &copy; WrohitDahal</p>
            </div>

            <div className="rightFooter">
                <h4>Follow Us</h4>
                <a href="http://instagram.com">Instagram</a>
                <a href="http://youtube.com/6packprogramemr">Youtube</a>
                <a href="http://instagram.com">Facebook</a>
            </div>
        </footer>

    );
};

export default Footer