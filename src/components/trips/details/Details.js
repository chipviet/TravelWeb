import './detailsStyle.css'
import React from 'react'
import Place from './place/Place'
import Hotel from './hotel/Hotel'
import Food from './food/Food'
import GridList from '@material-ui/core/GridList';

export default function Details() {
    const [index, setIndex] = React.useState(0);
    React.useEffect(() => {
        setIndex(0);
    }, [])
    return (
        <div>
            <div className="tab-change">
                <div onClick={() => { setIndex(0) }} className={index === 0 ? 'chosen-navigation-isClicked' : 'chosen-navigation'}>Attraction</div>
                <div onClick={() => { setIndex(1) }} className={index === 1 ? 'chosen-navigation-isClicked' : 'chosen-navigation'}>Hotel</div>
                <div onClick={() => { setIndex(2) }} className={index === 2 ? 'chosen-navigation-isClicked' : 'chosen-navigation'}>Food</div>
            </div>
            <div className="list-container">
                <GridList cellHeight={500} cols={5}>
                    {index === 0 ? <Place /> : index === 1 ? <Hotel /> : <Food />}
                </GridList>
            </div>

        </div >
    )
}
