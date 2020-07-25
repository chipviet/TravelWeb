import React, { Component } from 'react';
import './registerStyle.css';
import travel2 from '../../assets/travel2.jpg'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import { bindActionCreators } from 'redux';
import { register, login } from '../../redux/actions/users';
class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            reEnterPassword: ''
        }
    }

    handleRegister = () => {
        this.props.register(this.state.username, this.state.password,"Hoài Ân","Trần Thị");
    }

    render() {
        return (
            <div className="root">
                <img
                    src={travel2} alt="" width="100%" height="650PX" />
                <div className="loginForm1">
                    <div className="form">
                        <div className="img-container">
                            <h1 style={{ fontWeight: 1000 }}>REGISTER</h1>
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
                            <div className="text-area">
                                <label htmlFor="psw"><b>Re-enter Password</b></label>
                                <input type="password" placeholder="Re-enter Password" name="psw" required onChange={e => {
                                    this.setState({
                                        reEnterPassword: e.target.value,
                                    })
                                }}
                                />
                            </div>
                            <button type="submit" className="submit-button" onClick={this.handleRegister} >REGISTER</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(
    state => ({
        // role: getRoleUserSelector(state),
        // token: getToken(state),
    }),
    dispatch =>
        bindActionCreators(
            {
                register,
                login,
            },
            dispatch
        )
)(Register);
