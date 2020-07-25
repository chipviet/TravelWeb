import React, { Component } from 'react';
import { Button, Row, Col, Label } from 'reactstrap';
import { AvForm, AvGroup, AvInput, AvField } from 'availity-reactstrap-validation';
import '../styles.css';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateHotel, getHotel } from '../../../redux/actions/hotel';
import { getAllPlaces } from '../../../selectors/place';
import { getHotelSelector } from '../../../selectors/hotel';
import { getAllPlace } from '../../../redux/actions/places';

export class HotelUpdateAdmin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      _id: '',
      name: '',
      placeId: '',
      star: 0,
      price: 0,
      rating: 0,
      description: '',
      url_Image: '',
    }
  }

  componentDidMount() {
    this.props.getAllPlace()
    this.props.getHotel(this.props.match.params.id)
  }

  saveEntity = () => {
    console.log("data Update", this.state.name,
      this.state.placeId,
      this.state.star,
      this.state.price,
      this.state.rating,
      this.state.description,
      this.state.url_Image)

    this.props.updateHotel(
      this.state._id,
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
    const { data, hotel } = this.props;
    console.log('place', data);
    console.log(hotel)
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
          {hotel ? (
            <Col md="8">
              <AvForm >
                <AvGroup>
                  <Label id="nameLabel">
                    Name
                </Label>
                  <AvInput id="card-type-name" type="string" name="placeId" value={hotel.Name} onChange={e => {
                    this.setState({
                      _id: hotel._id,
                      name: e.target.value,
                      placeId: hotel.PlaceID,
                      price: hotel.Price,
                      star: hotel.Star,
                      rating: hotel.Star_Rating,
                      description: hotel.Description,
                      url_Image: hotel.URL_Image
                    })
                  }} />
                </AvGroup>
                <AvField type="select" name="select" label="Place" onChange={e => {
                  this.setState({
                    _id: hotel._id,
                    name: hotel.Name,
                    placeId: e.target.value,
                    price: hotel.Price,
                    star: hotel.Star,
                    rating: hotel.Star_Rating,
                    description: hotel.Description,
                    url_Image: hotel.URL_Image
                  })
                }}  >
                  <option value={hotel.PlaceID}> {hotel.Place.data.Name} </option>
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
                    _id: hotel._id,
                    name: hotel.Name,
                    placeId: hotel.PlaceID,
                    price: hotel.Price,
                    star: e.target.value,
                    rating: hotel.Star_Rating,
                    description: hotel.Description,
                    url_Image: hotel.URL_Image
                  })
                }} >
                  <option value={hotel.Star}>{hotel.Star}</option>
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
                  <AvInput id="card-type-name" type="string" name="placeId" value={hotel.Price} onChange={e => {
                    this.setState({
                      _id: hotel._id,
                      name: hotel.Name,
                      placeId: hotel.PlaceID,
                      price: e.target.value,
                      star: hotel.Star,
                      rating: hotel.Star_Rating,
                      description: hotel.Description,
                      url_Image: hotel.URL_Image
                    })
                  }} />
                </AvGroup>
                <AvField type="select" name="select" label="Star Rating" onChange={e => {
                  this.setState({
                    _id: hotel._id,
                    name: hotel.Name,
                    placeId: hotel.PlaceID,
                    price: hotel.Price,
                    
                    star: hotel.Star,
                    rating: hotel.Star_Rating,
                    description: hotel.Description,
                    url_Image: hotel.URL_Image
                  })
                }}>
                  <option value={hotel.Star_Rating}> {hotel.Star_Rating} </option>
                </AvField>

                <AvGroup>
                  <Label id="nameLabel">
                    Description
                </Label>
                  <AvInput id="card-type-name" type="string" name="placeId" value={hotel.Description} onChange={e => {
                    this.setState({
                      _id: hotel._id,
                      name: hotel.Name,
                      placeId: hotel.PlaceID,
                      price: hotel.Price,
                      star: hotel.Star,
                      rating: hotel.Star_Rating,
                      description: e.target.value,
                      url_Image: hotel.URL_Image
                    })
                  }} />
                </AvGroup>

                <AvGroup>
                  <Label id="nameLabel">
                    Image
                </Label>
                  <AvInput id="card-type-name" type="string" name="placeId" value={hotel.URL_Image} onChange={e => {
                    this.setState({
                      _id: hotel._id,
                      name: hotel.Name,
                      placeId: hotel.PlaceID,
                      price: hotel.Price,
                      star: hotel.Star,
                      rating: hotel.Star_Rating,
                      description: hotel.Description,
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
          ) : (null)}
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
