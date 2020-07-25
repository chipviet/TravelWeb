import React, { Component } from 'react'
import AuthenHeader from './AuthenHeader'
import MainHeader from './MainHeader'

export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loggedIn: null
        }
    }
    componentDidMount() {
        this.setState({
            loggedIn: localStorage.getItem('AUTH_TOKEN_KEY')
        });
    }
    render() {
        const { loggedIn } = this.state;
        return (
            <div>
                {loggedIn ? <AuthenHeader /> : <MainHeader />}
            </div>
        )
    }
}
