import React from 'react'
import Loading from '../../../loading/Loading'
import GridList from '@material-ui/core/GridList';
import '../combineStyle.css'
export default function Place(props) {
    const { data } = props;
    console.log("name: ", data)
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
