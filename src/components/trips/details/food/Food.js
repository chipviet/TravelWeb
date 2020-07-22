import React from 'react'
import GridList from '@material-ui/core/GridList';

export default function Food(props) {
    const { data } = props;
    console.log('food:', data);
    return (
        <GridList cellHeight={500} cols={4}>
            {data ? (data.map((item, index) =>
                <div className="item" key={index}>
                    <div className="place-image" >
                        <img src={item.URL_Image} alt="" width="100%" height="250px"></img>
                    </div>
                    <div className="place-name">
                        <p><b>{item.Name}</b></p>
                    </div>
                    <div className="place-rating-price">
                        {[...Array(item.Star_Rating)].map(n => <span class="fa fa-star checked"></span>)}
                        {[...Array(5 - item.Star_Rating)].map(n => <span class="fa fa-star"></span>)}
                        <div className="place-price">
                            <p>{item.Price} VND </p>
                        </div>
                    </div>
                    <div className="place-description">
                        <p>{item.Description}</p>
                    </div>
                </div>)) : 'N/A'
            }
        </GridList>
    )
}
