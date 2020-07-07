import React, { Component } from 'react';
import "../styles.css"
class About extends Component {
    render() {
        return (
            <div className="slide-container about">
                <img src='https://www.pixel4k.com/wp-content/uploads/2018/11/man-tourist-backpack-mountains-travel-4k_1541115960.jpg' alt="" width="100%" />
                <div className="aboutDescription">
                    <h1>New Places!</h1>
                    <h1>Let's enjoy and have fun!</h1>
                    <div className="content">
                        <p>Lorem ipsum dolor</p>
                        <p>Lorem ipsum dolor</p>
                        <p>Lorem ipsum dolor</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default About;