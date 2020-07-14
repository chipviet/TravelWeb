import './tripStyle.css'
import { Link } from 'react-router-dom'
import React, { Component } from 'react'
import GridList from '@material-ui/core/GridList';
import image from '../../assets/thanhhoa.jpg'
import { render } from '@testing-library/react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {getAllPlace} from '../../redux/actions/places';
import {getAllPlaces} from '../../selectors/place';
 class Trips extends Component{
    
    componentDidMount(){
        this.props.getAllPlace()
    }

    render(){
        const {data} = this.props;
        console.log('data',data);
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
                <div className="list-item">
                    {data ?  ( <GridList cellHeight={500} cols={5}>
                        <Link style={{ textDecoration: 'none', color: 'black' }} to="/details">
                            <div className="item">
                                <div className="place-image" >
                                    <img src={image} alt='' width="200px" height="250px"></img>
                                </div>
                                <div className="place-name">
                                    <p><b>{data[0].Name}</b></p>
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
                                    {/* <p>{data[1].description}</p> */}
                                </div>
                            </div>
                        </Link>
    
                    </GridList>): (null)}
                   
                </div>
            </div>
        )
    }
    
    }
    
export default connect(
    state => ({
      data: getAllPlaces(state),
    }),
    dispatch => 
      bindActionCreators(
        {
          getAllPlace
        }, dispatch
      )
  ) (Trips);
