import './detailsStyle.css'
import React, { Component } from 'react'
import Place from './place/Place'
import Hotel from './hotel/Hotel'
import Food from './food/Food'
import GridList from '@material-ui/core/GridList';
import { getFoodSuggestion, getHotelSuggestion, getPlaceSuggestion } from '../../../redux/actions/suggestion';

import { getFoodSuggestionSelector, getHotelSuggestionSelector, getPlaceSuggestionSelector } from '../../../selectors/suggestion'

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// export default function Details({ props }) {
//     const [index, setIndex] = React.useState(0);
//     React.useEffect(() => {
//         setIndex(0);
//         console.log(props.match.params._id);
//     }, []);

//     return (
//         <div>
//             <div className="tab-change">
//                 <div onClick={() => { setIndex(0) }} className={index === 0 ? 'chosen-navigation-isClicked' : 'chosen-navigation'}>Attraction</div>
//                 <div onClick={() => { setIndex(1) }} className={index === 1 ? 'chosen-navigation-isClicked' : 'chosen-navigation'}>Hotel</div>
//                 <div onClick={() => { setIndex(2) }} className={index === 2 ? 'chosen-navigation-isClicked' : 'chosen-navigation'}>Food</div>
//             </div>
//             <div className="list-container">
//                 <GridList cellHeight={500} cols={5}>
//                     {index === 0 ? <Place /> : index === 1 ? <Hotel /> : <Food />}
//                 </GridList>
//             </div>
//         </div>
//     )
// }

class Details extends Component {
    constructor(props) {
        super(props);
        this.state = {
            index: 0,
        }
    }
    componentDidMount() {
        this.props.getPlaceSuggestion(this.props.match.params.id)
        this.props.getFoodSuggestion(this.props.match.params.id);
        this.props.getHotelSuggestion(this.props.match.params.id);
    };
    render() {
        const { place } = this.props;
        console.log('placeSuggestion', place);
        const { food } = this.props;
        console.log('foodSuggestion', food);
        const { hotel } = this.props;
        console.log('hotelSuggestion', hotel);
        return (
            <div>
                <div className="tab-change">
                    <div onClick={() => { this.setState({ index: 0 }) }} className={this.state.index === 0 ? 'chosen-navigation-isClicked' : 'chosen-navigation'}>Attraction</div>
                    <div onClick={() => { this.setState({ index: 1 }) }} className={this.state.index === 1 ? 'chosen-navigation-isClicked' : 'chosen-navigation'}>Hotel</div>
                    <div onClick={() => { this.setState({ index: 2 }) }} className={this.state.index === 2 ? 'chosen-navigation-isClicked' : 'chosen-navigation'}>Food</div>
                </div>
                <div className="list-container">
                    {this.state.index === 0 ? <Place data={place} /> : this.state.index === 1 ? <Hotel data={hotel} /> : <Food data={food} />}
                </div>
            </div>
        )
    }
}
export default connect(
    state => ({
        place: getPlaceSuggestionSelector(state),
        hotel: getHotelSuggestionSelector(state),
        food: getFoodSuggestionSelector(state),
    }),
    dispatch =>
        bindActionCreators(
            {
                getPlaceSuggestion,
                getFoodSuggestion,
                getHotelSuggestion,
            }, dispatch
        )
)(Details);
