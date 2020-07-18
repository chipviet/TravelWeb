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
            isClicked: false,
            isLoggedIn: false,
        }
        this.loginOn = this.loginOn.bind(this);
    }
    loginOn = () => {
        this.setState({
            ...this.state,
            isClicked: !this.state.isClicked
        });
    };
    componentWillMount() {
        if (this.props.status == "Login success") {
            this.setState({
                ...this.state,
                isLoggedIn: true
            })
            console.log('ok');
        }
        else {
            console.log('not');
        }

    }

    render() {
        const { role, status } = this.props;
        console.log('role status,loggin: ', role, status, this.state.isLoggedIn);
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

                        {!this.state.isLoggedIn && (<li className="ele login" onClick={this.loginOn}>
                            Login
                        </li>)}
                        <li className="ele">
                            Log out
                        </li>
                    </ul>
                </div>
                {this.state.isClicked && <Login toggle={this.loginOn} />}
            </div>
        );
    }
}
export default connect(
    state => ({
        role: getRoleUserSelector(state),
        status: getStatusUserSelector(state)
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