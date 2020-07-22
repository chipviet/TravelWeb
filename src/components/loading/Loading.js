import React, { Component } from 'react';
import Spinner from 'react-spinner-material';

class Loading extends Component {
    render() {
        return (
            <div>
                <Spinner animation="grow" size={120} spinnerWidth={2} visible={true} />
                <p style={{ fontSize: 26, marginTop: 10 }}>Loading...</p>
            </div >
        );
    }
}

export default Loading;