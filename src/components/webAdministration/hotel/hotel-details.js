import React, { Component } from 'react';
import { Button, Row, Col, Label } from 'reactstrap';
import { AvFeedback, AvForm, AvGroup, AvInput, AvField ,AvCheckbox} from 'availity-reactstrap-validation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../styles.css';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateHotel,getHotel } from '../../../redux/actions/hotel';
import {getAllPlaces} from '../../../selectors/place';
import {getHotelSelector} from '../../../selectors/hotel';
import {getAllPlace} from '../../../redux/actions/places';

export class HotelDetailsAdmin extends Component {
 

  componentDidMount(){
    this.props.getAllPlace()
    this.props.getHotel(this.props.match.params.id)
  }
  
  render() {
    const {data, hotel} = this.props;
    console.log('place',data);
    console.log(hotel)
    return (
      <div>
      <Row className="justify-content-center update-label">
        <Col md="8">
          <h2>
             Hotel Details
          </h2>
        </Col>
      </Row>
      <Row className="justify-content-center">
      {hotel ? (
        <Col md="8">
            <AvForm >
              <AvGroup>
                <Label id="nameLabel">
                 Name
                </Label>
                <AvInput id="card-type-name" type="string" name="placeId"  value = {hotel.Name} />
              </AvGroup>
              <AvField type="select" name="select" label="Place"  >
                {hotel.Place ? (<option value= {hotel.PlaceID}> {hotel.Place.data.Name} </option>): (null)}
                
              </AvField>
              <AvField type="select" name="select" label="Star"  >
                <option value={hotel.Star}>{hotel.Star}</option>
              </AvField>
              <AvGroup>
                <Label id="nameLabel">
                 Price
                </Label>
                <AvInput id="card-type-name" type="string" name="placeId" value ={hotel.Price} />
              </AvGroup>
              <AvField type="select" name="select" label="Star Rating"  >
                <option value={hotel.Star_Rating}> {hotel.Star_Rating} </option>    
                
              </AvField>

              <AvGroup>
                <Label id="nameLabel">
                 Description
                </Label>
                <AvInput id="card-type-name" type="string" name="placeId" value = {hotel.Description}  />
              </AvGroup>

              <AvGroup>
                <Label id="nameLabel">
                 Image
                </Label>
                <AvInput id="card-type-name" type="string" name="placeId" value ={hotel.URL_Image} />
              </AvGroup>

              <Button tag={Link} id="cancel-save" to="/guest" replace color="info">
           
                &nbsp;
                <span className="d-none d-md-inline">
                Back
                </span>
              </Button>
        
            </AvForm>
        </Col>
        ):(null)}
      </Row>
    </div>
    );
  }
}

export default connect(
    state => ({
      data: getAllPlaces(state),
      hotel: getHotelSelector(state),
    }),
    dispatch =>
      bindActionCreators(
        {
            getAllPlace,
            getHotel
        }, dispatch
      )
  )(HotelDetailsAdmin);
  