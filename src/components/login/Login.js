import React, { Component } from 'react';
import '../login/loginStyle.css'
import { register, login } from '../../redux/actions/users';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom'
import { bindActionCreators } from 'redux';
import { getRoleUserSelector,getToken } from '../../selectors/user'

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
    handleLogin = () => {
        this.props.login(this.state.username, this.state.password)
        // if (this.props.data) {
        //     this.setState({ loggedIn: true });
        //     localStorage.setItem('loggedIn', this.state.loggedIn);
        //     console.log("state: ", this.state.loggedIn)
        // }
        // else {
        //     this.setState({ loggedIn: false });
        //     localStorage.setItem('loggedIn', this.state.loggedIn);
        // }
    }
    render() {
        const token = localStorage.getItem('AUTH_TOKEN_KEY');
        return (
            <div className="root">
                <div className="loginForm">
                    <div className="from">
                        <div className="imgcontainer">
                            <h1>Welcome to California</h1>
                            <h1>Sign in now !</h1>
                        </div>
                        <div className="container">
                            <label htmlFor="uname"><b>Username</b></label>
                            <input type="text" placeholder="Enter Username" name="uname" required onChange={e => {
                                this.setState({
                                    username: e.target.value,
                                })
                            }} />

                            <label htmlFor="psw"><b>Password</b></label>
                            <input type="password" placeholder="Enter Password" name="psw" required onChange={e => {
                                this.setState({
                                    password: e.target.value,
                                })
                            }}
                            />

                            <button type="submit" onClick={this.handleLogin} >Sign In</button>
                            <div className="remember-area">
                                <input className="remember" type="checkbox" name="remember" />
                                <label className="remember" htmlFor="remember">Remember me</label>
                            </div>

                        </div>
                        <div className="container" style={{ backgroundColor: '#f1f1f1' }}>
                            <button type="button" className="cancelbtn" onClick={this.props.toggle} >Cancel</button>
                            <span className="psw" onClick={this.props.toggle}><Link to="/register" >Register</Link></span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default connect(
    state => ({
        role: getRoleUserSelector(state),
        token: getToken(state),
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
