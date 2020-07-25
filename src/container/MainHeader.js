import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './headerStyle.css';
import Logo from '../assets/logo.png'
import "bootstrap/dist/css/bootstrap.min.css";
import { register, login } from '../redux/actions/users'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getRoleUserSelector } from '../selectors/user'

class Header extends Component {
    render() {
        return (
            <div className="header">
                <Link style={{ textDecoration: 'none', color: '#7C7C7C' }} to="/">
                    <div className="logo">
                        <span>
                            <img src={Logo} alt='N/A' width="90" height="70" />
                        </span>
                        <div className="logo-name">
                            <p>TravelLove</p>
                        </div>
                    </div>
                </Link>
                <div className="tab-page">
                    <ul className="tab-ele">
                        <li className="ele active" >
                            <Link style={{ textDecoration: 'none', color: '#7C7C7C' }} target="_top" to="/">Home</Link>
                        </li>
                        <li className="ele active" >
                            <Link style={{ textDecoration: 'none', color: '#7C7C7C' }} target="_top" to="/trips">Trips</Link>
                        </li>
                        <li className="ele active" >
                            <Link style={{ textDecoration: 'none', color: '#7C7C7C' }} target="_top" to="/blog">Blog</Link>
                        </li>
                        <li className="ele active" >
                            <Link style={{ textDecoration: 'none', color: '#7C7C7C' }} target="_top" to="/contact">Contact</Link>
                        </li>
                        <li className="ele active">
                            <Link style={{ textDecoration: 'none', color: '#7C7C7C' }} target="_top" to="/register">Register</Link>
                        </li>
                        <li className="ele login">
                            <Link style={{ textDecoration: 'none', color: 'white' }} to="/login">Login</Link>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}
export default connect(
    state => ({
        role: getRoleUserSelector(state),
    }),
    dispatch =>
        bindActionCreators(
            {
                register,
                login,
            },
            dispatch
        )
)(Header);