import React, { Component } from 'react';
import '../login/loginStyle.css'
import { register, login } from '../../redux/actions/users';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import { bindActionCreators } from 'redux';
import { getRoleUserSelector } from '../../selectors/user'
import travel1 from '../../assets/travel1.jpg'

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: [{
                username: '',
                password: '',
                loggedIn: false
            }]
        }
    }
    render() {
        return (
            <div className="root">
                <img
                    style={{ opacity: 0.7 }}
                    src={travel1} alt="" width="100%" height="650%" />
                <div className="loginForm">
                    <div className="form">
                        <div className="img-container">
                            <h1 style={{ fontWeight: 900 }}>Welcome to California</h1>
                            <h1 style={{ fontWeight: 900 }}>Sign in now !</h1>
                        </div>
                        <div className="container">
                            <div className="text-area">
                                <label htmlFor="uname"><b>Username</b></label>
                                <input type="text" placeholder="Enter Username" name="uname" required onChange={e => {
                                    this.setState({
                                        username: e.target.value,
                                    })
                                }} />
                            </div>
                            <div className="text-area">
                                <label htmlFor="psw"><b>Password</b></label>
                                <input type="password" placeholder="Enter Password" name="psw" required onChange={e => {
                                    this.setState({
                                        password: e.target.value,
                                    })
                                }}
                                />
                            </div>
                            <button type="submit" className="submit-button" onClick={this.handleLogin} >GO!</button>
                            <Link to="/register" ><button className="register-button">REGISTER</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default connect(
    state => ({
        role: getRoleUserSelector(state)
    }),
    dispatch =>
        bindActionCreators(
            {
                register,
                login,
            },
            dispatch
        )
)(Login);
