import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Radium from 'radium';
import './headerStyle.css'
const style =StyleSheet.create ({
    ele: {
        padding: 15,
        marginTop:0,
        marginBottom:0,
        marginHorizontal:15,
        ':hover': {
            color : '#F0BC71'
        }
    }
})
class Header extends Component {
    render() {
        return (
            <div className="header">
                <div className="logo"></div>
                <div className="tab-page">
                    <ul className="tab-ele">
                        <li style={style.ele} >
                            <Link style={{ textDecoration: 'none', color: '#7C7C7C' }} to="/">Home</Link>
                        </li>
                        <li className="ele" >
                            <Link style={{ textDecoration: 'none', color: '#7C7C7C' }} to="/about">About</Link>
                        </li>
                        <li className="ele" >
                            <Link style={{ textDecoration: 'none', color: '#7C7C7C' }} to="/trips">Trips</Link>
                        </li>
                        <li className="ele" >
                            <Link style={{ textDecoration: 'none', color: '#7C7C7C' }} to="/contact">Contact</Link>
                        </li>
                        <li className="ele" >
                            <Link style={{ textDecoration: 'none', color: '#7C7C7C' }} to="/contact">Login</Link>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Header;