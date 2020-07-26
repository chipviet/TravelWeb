import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './footerStyle.css'
class Footer extends Component {
    render() {
        return (
            <div>
                <div className="footer">
                    <div className="list-href">
                        <div className="item-href">
                            <Link style={{ textDecoration: 'none', color: 'white' }} target="_top" to='/'>Home</Link>
                        </div>
                        <div className="item-href">
                            <Link style={{ textDecoration: 'none', color: 'white' }} target="_top" to='/contact'>Contact us</Link>
                        </div>
                        <div className="item-href">
                            <Link style={{ textDecoration: 'none', color: 'white' }} target="_top" to='/trips'>Trips</Link>
                        </div>
                        <div className="item-href">
                            <Link style={{ textDecoration: 'none', color: 'white' }} target="_top" to='/blog'>Blog</Link>
                        </div>
                    </div>
                    <div className="social-contact">
                        <a href="https://www.facebook.com/cauvangdinhbacho" target="_blank" className="fa fa-facebook"></a>
                        <a href="#" className="fa fa-twitter"></a>
                        <a href="#" className="fa fa-google"></a>
                        <p>Powered by Hieu US/UK</p>
                        <p>Telephone: (+84)123456789 / Hotline: 113</p>
                    </div>
                    <div className="bottom-line"></div>
                    <div className="copyRight">
                        <p>Copy right &copy; 2020. All rights reserved</p>
                    </div>
                </div>
            </div>

        );
    }
}

export default Footer;