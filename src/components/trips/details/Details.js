import './detailsStyle.css'
import React, { Component } from 'react'
import Place from './place/Place'
import Hotel from './hotel/Hotel'
import Food from './food/Food'
import { getFoodSuggestion, getHotelSuggestion, getAttractionSuggestion } from '../../../redux/actions/suggestion';

import { getFoodSuggestionSelector, getHotelSuggestionSelector, getAttractionSuggestionSelector } from '../../../selectors/suggestion'

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


class Details extends Component {
    constructor(props) {
        super(props);
        this.state = {
            index: 0,
        }
    }
    componentDidMount() {
        this.props.getAttractionSuggestion(this.props.match.params.id)
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
        place: getAttractionSuggestionSelector(state),
        hotel: getHotelSuggestionSelector(state),
        food: getFoodSuggestionSelector(state),
    }),
    dispatch =>
        bindActionCreators(
            {
                getAttractionSuggestion,
                getFoodSuggestion,
                getHotelSuggestion,
            }, dispatch
        )
)(Details);
