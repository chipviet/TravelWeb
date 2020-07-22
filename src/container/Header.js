import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom'
import './headerStyle.css';
import Login from '../components/login/Login'
import Logo from '../assets/logo.png'
import "bootstrap/dist/css/bootstrap.min.css";
import { register, login } from '../redux/actions/users'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getRoleUserSelector, getStatusUserSelector } from '../selectors/user'
class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            login: [{
                isLoggedIn: localStorage.getItem('loggedIn1'),
            }]
        }
    }
    render() {
        var { role, isLoggedIn } = this.props;
        console.log("role: ", role)
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
                            <Link style={{ textDecoration: 'none', color: '#7C7C7C' }} to="/">Home</Link>
                        </li>
                        <li className="ele active" >
                            <Link style={{ textDecoration: 'none', color: '#7C7C7C' }} to="/trips">Trips</Link>
                        </li>
                        {(<li className="ele active" >
                            <Link style={{ textDecoration: 'none', color: '#7C7C7C' }} to="/contact">Contact</Link>
                        </li>)}
                        {<li className="ele active">
                            <Link style={{ textDecoration: 'none', color: '#7C7C7C' }} to="/register">Register</Link>
                        </li>}
                        {(<div className="dropdown ele-man active">
                            <span style={{ textDecoration: 'none', color: '#7C7C7C' }}>Management</span>
                            <div className="dropdown-content">
                                <div className="drop-item">
                                    <Link style={{ textDecoration: 'none' }} to="/guest">Guest</Link>
                                </div>
                                <div className="drop-item">
                                    <Link style={{ textDecoration: 'none' }} to="/place">Place</Link>
                                </div>
                                <div className="drop-item">
                                    <Link style={{ textDecoration: 'none' }} to="/hotel">Hotel</Link>
                                </div>
                                <div className="drop-item">
                                    <Link style={{ textDecoration: 'none' }} to="/food" >Food</Link>
                                </div>
                            </div>
                        </div>)}

                        {isLoggedIn
                            ? <Redirect to='/' />
                            : (<li className="ele login">
                                <Link style={{ textDecoration: 'none', color: 'white' }} to="/login">Login</Link>
                            </li>)}
                        {isLoggedIn && <li className="ele active" onClick={() => {
                            console.log('unmount')
                        }}>
                            Log out
                        </li>}
                    </ul>
                </div>
                {this.state.isClicked && <Login toggle={this.loginOn} handle={this.handleLoggedIn} />}
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