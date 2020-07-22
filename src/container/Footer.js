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
                            <Link style={{ textDecoration: 'none', color: '#F0BC71' }} to='/contact'>Contact us</Link>
                        </div>
                        <div className="item-href">
                            <Link style={{ textDecoration: 'none', color: '#F0BC71' }} to='/trips'>Trips</Link>
                        </div>
                        <div className="item-href">
                            <Link style={{ textDecoration: 'none', color: '#F0BC71' }} to='/register'>Register</Link>
                        </div>
                        <div className="item-href">
                            <Link style={{ textDecoration: 'none', color: '#F0BC71' }} to='/login'>Login</Link>
                        </div>
                    </div>
                    <div className="copyRight">
                        <p>Copy right &copy; 2020</p>
                        <p>Powered by Hieu US/UK</p>
                    </div>
                    <div className="social-contact">
                        <a href="https://www.facebook.com/cauvangdinhbacho" class="fa fa-facebook"></a>
                        <a href="#" class="fa fa-twitter"></a>
                        <a href="#" class="fa fa-google"></a>
                    </div>
                </div>
            </div >

        );
    }
}

export default Footer;