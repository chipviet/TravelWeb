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

export class HotelUpdateAdmin extends Component {
    constructor(props) {
        super(props);
        this.state = {
          name: '',
          placeId: '',
          star: 0,
          price: 0,
          rating: 0,
          description: '',
          url_Image: '',
        }
      }  

  componentDidMount(){
    this.props.getHotel(this.props.match.params.id)
  }
  
  saveEntity = () => {
    this.props.updateHotel(
        this.state.name,
        this.state.placeId, 
        this.state.star, 
        this.state.price,
        this.state.rating,
        this.state.description,
        this.state.url_Image
        );
  }
  render() {
    const {data, hotel} = this.props;
    return (
      <div>
      <Row className="justify-content-center update-label">
        <Col md="8">
          <h2>
            Update Hotel
          </h2>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md="8">
            <AvForm >
              <AvGroup>
                <Label id="nameLabel">
                 Name
                </Label>
                <AvInput id="card-type-name" type="string" name="placeId" onChange={e => {
                  this.setState({
                    name: e.target.value
                  })
                }}  />
              </AvGroup>
              <AvField type="select" name="select" label="Place" onChange={e => {
                this.setState({
                    placeId: e.target.value
                  })
                }}  >
                <option value='0'> </option>
                {data
                  ? data.map(item => (
                      <option value={item._id}>
                        {item.Name}
                      </option>
                    ))
                : null}
              </AvField>
              <AvField type="select" name="select" label="Star" onChange={e => {
                  this.setState({
                    star: e.target.value
                  })
                }} >
                <option value='0'> </option>
                <option value='1'>1</option>
                <option value='2'>2</option>
                <option value='3'>3</option>
                <option value='4'>4</option>
                <option value='5'>5</option>
              </AvField>
              <AvGroup>
                <Label id="nameLabel">
                 Price
                </Label>
                <AvInput id="card-type-name" type="string" name="placeId" onChange={e => {
                  this.setState({
                    price: e.target.value
                  })
                }}  />
              </AvGroup>
              <AvField type="select" name="select" label="Star Rating"  onChange={e => {
                  this.setState({
                    rating: e.target.value
                  })
                }}>
                <option value='0'> </option>    
                <option value='1'>1</option>
                <option value='2'>2</option>
                <option value='3'>3</option>
                <option value='4'>4</option>
                <option value='5'>5</option>
              </AvField>

              <AvGroup>
                <Label id="nameLabel">
                 Description
                </Label>
                <AvInput id="card-type-name" type="string" name="placeId" onChange={e => {
                  this.setState({
                    description: e.target.value
                  })
                }} />
              </AvGroup>

              <AvGroup>
                <Label id="nameLabel">
                 Image
                </Label>
                <AvInput id="card-type-name" type="string" name="placeId" onChange={e => {
                  this.setState({
                    url_Image: e.target.value
                  })
                }} />
              </AvGroup>

              <Button tag={Link} id="cancel-save" to="/guest" replace color="info">
           
                &nbsp;
                <span className="d-none d-md-inline">
                Back
                </span>
              </Button>
              &nbsp;
              <Button tag={Link} color="primary" id="save-entity" type="submit" onClick={this.saveEntity}>
                &nbsp;
               Save
              </Button>
            </AvForm>
        </Col>
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
            updateHotel,
            getAllPlace,
            getHotel
        }, dispatch
      )
  )(HotelUpdateAdmin);
  