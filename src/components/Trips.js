import React, { Component } from 'react';
import './tripStyle.css'
class Trips extends Component {
    render() {
        return (
            <div className="main-content">
                <div className="tab-change">
                    <button className="chosen-navigation">Attraction</button>
                    <button className="chosen-navigation">Hotel</button>
                    <button className="chosen-navigation">Food</button>
                </div>
            </div>
        );
    }
}

export default Trips;