import './tripStyle.css'
import React from 'react'

export default function Trips() {
    return (
        <div className="main-content">
            <div className="header-content">
                <div className="title">
                    <p>Choose your place</p>
                </div>
                <div className="search-box">
                    <input type="text" className="search-input" placeholder="Enter somewhere..."></input>
                    <button className="search-button">
                        <span>
                            <i class="fas fa-search"></i>
                        </span>
                    </button>
                </div>
            </div>
        </div>
    )
}

{/* <div className="tab-change">
                    <button className="chosen-navigation">Attraction</button>
                    <button className="chosen-navigation">Hotel</button>
                    <button className="chosen-navigation">Food</button>
                </div> */}