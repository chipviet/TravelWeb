import React, { Component } from 'react';
import { Link } from 'react-router-dom'
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
                isClicked: false,
                isLoggedIn: false,
                status: false,
            }]

        }
        this.loginOn = this.loginOn.bind(this);
    }
    loginOn = () => {
        this.setState({
            ...this.state,
            isClicked: !this.state.isClicked
        });
    };
    componentDidMount() {
        this.setState({
            status: this.props.status
        })
    }
    render() {
        var { role, status } = this.props;
        return (
            <div className="header">
                <Link style={{ textDecoration: 'none', color: '#7C7C7C' }} to="/">
                    <div className="logo">
                        <span>
                            <img src={Logo} width="90" height="70" />
                        </span>
                        <div className="logo-name">
                            <p>TravelLove</p>
                        </div>
                    </div>
                </Link>
                <div className="tab-page">
                    <ul className="tab-ele">
                        <li className="ele" >
                            <Link style={{ textDecoration: 'none', color: '#7C7C7C' }} to="/">Home</Link>
                        </li>
                        {!role && (<li className="ele" >
                            <Link style={{ textDecoration: 'none', color: '#7C7C7C' }} to="/about">About</Link>
                        </li>)}
                        <li className="ele" >
                            <Link style={{ textDecoration: 'none', color: '#7C7C7C' }} to="/trips">Trips</Link>
                        </li>
                        {!role && (<li className="ele" >
                            <Link style={{ textDecoration: 'none', color: '#7C7C7C' }} to="/contact">Contact</Link>
                        </li>)}
                        <li className="ele">
                            <Link style={{ textDecoration: 'none', color: '#7C7C7C' }} to="/register">Register</Link>
                        </li>
                        {role && (<div className="dropdown ele-man">
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

                        {!status && (<li className="ele login" onClick={this.loginOn}>
                            Login
                        </li>)}
                        {status && <li className="ele" onClick={() => {
                            localStorage.setItem('status', JSON.stringify(this.state.login));
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
        status: getStatusUserSelector(state),
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