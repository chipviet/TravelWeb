import React, { Component } from 'react';
import Spinner from 'react-spinner-material';
class Loading extends Component {
    render() {
        return (
            <div style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <Spinner size={120} spinnerWidth={2} visible={true} />
                <p style={{ fontSize: 26, marginTop: 10 }}>Loading...</p>
            </div>
        );
    }
}

export default Loading;