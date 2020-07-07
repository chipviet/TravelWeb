import React, { Component } from 'react';
import "../styles.css"
class Contact extends Component {
    render() {
        return (
            <div className="slide-container">
                <img src='https://www.pixel4k.com/wp-content/uploads/2018/11/man-tourist-backpack-mountains-travel-4k_1541115960.jpg' alt="" width="100%" />
                <div className="contactDescription">
                    <h1 style={{ textAlign: 'center',fontSize:50 }}>Contact Us </h1>
                    <div className="info">
                        <p>Adress: 193 Nguyen Luong Bang,Da Nang,Vietnam</p>
                        <p>Hotline: 0123456789</p>
                        <p>Email: travelToCalifornia@gmail.com</p>
                    </div>
                    <div className="contact-form">
                        <div className="name">
                            <input className="inputName" placeholder="First Name"/>
                            <input className="inputName" placeholder="Last Name"/>
                        </div>
                        <input className="email" placeholder="Email Adress"/>
                        <textarea className="message" placeholder="Write your message..."/>
                        <button type="submit" className="submit">Send Message</button>
                    </div>
                </div>

            </div>
        );
    }
}

export default Contact;