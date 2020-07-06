import React, { Component } from 'react';
import './loginStyle.css'
import { register, login } from '../redux/actions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import { bindActionCreators } from 'redux';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
        }
    }
    render() {
        return (
            <div className="root">
                <div className="overlay">
                    <div className="loginForm">
                        <div className="from">
                            <div className="imgcontainer">
                                <h1>Welcome !</h1>
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
            </div>
        );
    }
}



// const Login = props => {

//     const exitForm = () => {
//         let checked = !props.clicked;
//         props.setClicked(checked)
//     }

//     return (
//         <div>
//             <div className="overlay">
//                 <div className="loginForm">
//                     <form action="/action_page.php" method="post">
//                         <div className="imgcontainer">
//                             <h1>Welcome !</h1>
//                         </div>
//                         <div className="container">
//                             <label htmlFor="uname"><b>Username</b></label>
//                             <input type="text" placeholder="Enter Username" name="uname" required />
//                             <label htmlFor="psw"><b>Password</b></label>
//                             <input type="password" placeholder="Enter Password" name="psw" required />
//                             <button type="submit">Sign In</button>
//                             <div className="remember-area">
//                                 <input type="checkbox" name="remember" />
//                                 <label className="remember" htmlFor="remember">Remember me</label>
//                             </div>
//                         </div>
//                         <div className="container" style={{ backgroundColor: '#f1f1f1' }}>
//                             <button type="button" className="cancelbtn" onClick={exitForm}>Cancel</button>
//                             <span className="psw"><a href="main.js" >Register</a></span>
//                         </div>
//                     </form>
//                 </div>
//             </div>
//         </div>
//     )
// }

export default connect(
    state => ({ rWorks: state.works, }),
    dispatch =>
        bindActionCreators(
            {
                register,
                login,
            },
            dispatch
        )
)(Login);


//export default Login;