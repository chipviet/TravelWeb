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
                <button onClick={() => setIndex(0)} className="chosen-navigation">Attraction</button>
                <button onClick={() => setIndex(1)} className="chosen-navigation">Hotel</button>
                <button onClick={() => setIndex(2)} className="chosen-navigation">Food</button>
            </div>
            <div className="list-container">
                <GridList cellHeight={500} cols={5}>
                    {index === 0 ? <Place /> : index === 1 ? <Hotel /> : <Food />}
                </GridList>
            </div>

        </div>
    )
}
