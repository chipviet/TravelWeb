import React, { Component } from 'react';
import AdminHeader from './AdminHeader'
import UserHeader from './UserHeader'

class AuthenHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            role: ''
        }
    }
    componentDidMount() {
        this.setState({
            role: localStorage.getItem('ROLE')
        });
    }
    render() {
        const { role } = this.state;
        console.log("authen", role)
        return (
            <div>
                {role === "Admin" ? <AdminHeader /> : <UserHeader />}
            </div>
        );
    }
}

export default AuthenHeader;