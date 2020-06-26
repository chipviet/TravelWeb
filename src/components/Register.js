import React, { Component } from 'react';
import './registerStyle.css';
// import { Formik } from 'formik';
// import * as Yup from 'yup';

// const signupSchema = Yup.object().shape({
//     username: {
//         type: String,
//         required: true,
//     },
//     password: Yup.string().required(),
//     re_password: Yup.string().required(),
// })

export default class Register extends Component {

    handleRegister = () => {
        if (this.state.password === this.state.re_password) {
            alert('ok');
        }
        else {
            alert('ngu')
        }
    }

    render() {
        return (
            <div className="slide-container">
                <img src='https://www.pixel4k.com/wp-content/uploads/2018/11/man-tourist-backpack-mountains-travel-4k_1541115960.jpg' alt="" width="100%" style={{ filter: "blur(8px)" }} />
                <div className="registerForm">
                    <form className="reForm">
                        <div className="imgcontainer">
                            <h1>REGISTER</h1>
                        </div>

                        <div className="container">
                            <label htmlFor="psw"><b>Username</b></label>
                            <input type="text" placeholder="Enter Username" name="uname" required onChange={e => {
                                this.setState({
                                    username: e.target.value,
                                })
                            }}
                            />
                            <label htmlFor="email"><b>Email</b></label>
                            <input type="text" placeholder="Enter email" name="email" required onChange={e => {
                                this.setState({
                                    email: e.target.value,
                                })
                            }}
                            />
                            <label htmlFor="psw"><b>Password</b></label>
                            <input type="password" placeholder="Enter Password" name="psw" required onChange={e => {
                                this.setState({
                                    password: e.target.value,
                                })
                            }}
                            />
                            <label htmlFor="psw"><b>Re-enter Password</b></label>
                            <input type="password" placeholder="Enter Password" name="psw" required onChange={e => {
                                this.setState({
                                    re_password: e.target.value,
                                })
                            }}
                            />

                            <div className="remember-area">
                                <input type="checkbox" name="remember" />
                                <label className="remember" htmlFor="remember">I accept the Terms of Service</label>
                            </div>
                            <button type="submit" onClick={this.handleRegister} >Register</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}
