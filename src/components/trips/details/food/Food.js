import React from 'react'
import GridList from '@material-ui/core/GridList';
import '../combineStyle.css'
import Loading from '../../../loading/Loading'
export default function Food(props) {
    const { data } = props;
    console.log('food:', data);
    return (
        <GridList cellHeight={850} cols={3} style={{ overflowY: 'hidden' }}>
            {
                data ? (data.map((item, index) =>
                    <div className="item" key={index}>
                        <div className="place-image">
                            <img className="img-container1" src={item.URL_Image} alt='' width="100%" height="350px"></img>
                        </div>
                        <div className="place-name">
                            <p><b>{item.Name}</b></p>
                        </div>
                        <div className="place-rating-price">
                            <div className="place-rating">
                                {[...Array(item.Star_Rating)].map(n => <span class="fa fa-star checked"></span>)}
                                {[...Array(5 - item.Star_Rating)].map(n => <span class="fa fa-star"></span>)}
                            </div>
                            <div className="place-price">
                                <p> Prices: {item.Price}VND </p>
                            </div>
                        </div>
                        <div className="place-description">
                            <p>{item.Description}</p>
                        </div>
                    </div>
                )) : (<Loading />)
            }
        </GridList>
    )
}
