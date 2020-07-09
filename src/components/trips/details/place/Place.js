import React from 'react'
import image from '../../../../assets/thanhhoa1.jpg'
export default function Place() {
    return (
        <div className="item">
            <div className="place-image" >
                <img src={image} width="200px" height="250px"></img>
            </div>
            <div className="place-name">
                <p><b>Thanh Hoa, Vietnam</b></p>
            </div>
            <div className="place-rating-price">
                <div className="place-rating">
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star"></span>
                    <span class="fa fa-star"></span>
                </div>
                <div className="place-price">
                    <p>$200 </p>
                </div>
            </div>
            <div className="place-description">
                <p>Lorem ipsum dolor Lorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolor Lorem</p>
            </div>
        </div>
    )
}
