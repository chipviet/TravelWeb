import React, { Component } from 'react';
import { Button, Row, Col, Label } from 'reactstrap';
import { AvFeedback, AvForm, AvGroup, AvInput, AvField ,AvCheckbox} from 'availity-reactstrap-validation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../styles.css';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateFood,getFood } from '../../../redux/actions/food';
import {getAllPlaces} from '../../../selectors/place';
import {getFoodSelector} from '../../../selectors/food';
import {getAllPlace} from '../../../redux/actions/places';

export class FoodUpdateAdmin extends Component {
    constructor(props) {
        super(props);
        this.state = {
          _id: '',
          name: '',
          placeId: '',
          price: 0,
          rating: 0,
          description: '',
          url_Image: '',
        }
      }  

  componentDidMount(){
    this.props.getFood(this.props.match.params.id)
    this.props.getAllPlace()
  }
  
  saveEntity = () => {
    console.log("data Update", this.state.name,
    this.state.placeId, 
    this.state.price,
    this.state.rating,
    this.state.description,
    this.state.url_Image)

    this.props.updateFood(
        this.state._id,
        this.state.name,
        this.state.placeId, 
        this.state.price,
        this.state.rating,
        this.state.description,
        this.state.url_Image
        );
  }
  render() {
    const {data, food} = this.props;
    console.log('place',data);
    console.log(food)
    return (
      <div>
      <Row className="justify-content-center update-label">
        <Col md="8">
          <h2>
            Update food
          </h2>
        </Col>
      </Row>
      <Row className="justify-content-center">
      {food ? (
        <Col md="8">
            <AvForm >
              <AvGroup>
                <Label id="nameLabel">
                 Name
                </Label>
                <AvInput id="card-type-name" type="string" name="placeId"  value = {food.Name} onChange={e => {
                  this.setState({
                    _id: food._id,
                    name: e.target.value,
                    placeId: food.PlaceID,
                    price: food.Price,
                    rating: food.Star_Rating,
                    description: food.Description,
                    url_Image: food.URL_Image
                  })
                }}  />
              </AvGroup>
              <AvField type="select" name="select" label="Place" onChange={e => {
                this.setState({
                  _id: food._id,
                  name: food.Name,
                  placeId: e.target.value,
                  price: food.Price,
                  rating: food.Star_Rating,
                  description: food.Description,
                  url_Image: food.URL_Image
                  })
                }}  >
                {food.Place ? (<option value= {food.PlaceID}> {food.Place.data.Name} </option>): (null)}
                {data
                  ? data.map(item => (
                      <option value={item._id}>
                        {item.Name}
                      </option>
                    ))
                : null}
              </AvField>
              <AvGroup>
                <Label id="nameLabel">
                 Price
                </Label>
                <AvInput id="card-type-name" type="string" name="placeId" value ={food.Price} onChange={e => {
                  this.setState({
                    _id: food._id,
                    name: food.Name,
                    placeId: food.PlaceID,
                    price: e.target.value,
                    rating: food.Star_Rating,
                    description: food.Description,
                    url_Image: food.URL_Image
                  })
                }}  />
              </AvGroup>
              <AvField type="select" name="select" label="Star Rating"  onChange={e => {
                  this.setState({
                    _id: food._id,
                    name: food.Name,
                    placeId: food.PlaceID,
                    price: food.Price,
                    rating: e.target.value,
                    description: food.Description,
                    url_Image: food.URL_Image
                  })
                }}>
                <option value={food.Star_Rating}> {food.Star_Rating} </option>    
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
                <AvInput id="card-type-name" type="string" name="placeId" value = {food.Description} onChange={e => {
                  this.setState({
                    _id: food._id,
                    name: food.Name,
                    placeId: food.PlaceID,
                    price: food.Price,
                    rating: food.Star_Rating,
                    description: e.target.value,
                    url_Image: food.URL_Image
                  })
                }} />
              </AvGroup>

              <AvGroup>
                <Label id="nameLabel">
                 Image
                </Label>
                <AvInput id="card-type-name" type="string" name="placeId" value ={food.URL_Image} onChange={e => {
                  this.setState({
                    _id: food._id,
                    name: food.Name,
                    placeId: food.PlaceID,
                    price: food.Price,
                    rating: food.Star_Rating,
                    description: food.Description,
                    url_Image: e.target.value
                  })
                }} />
              </AvGroup>

              <Button tag={Link} id="cancel-save" to="/food" replace color="info">
           
                &nbsp;
                <span className="d-none d-md-inline">
                Back
                </span>
              </Button>
              &nbsp;
              <Button tag={Link} to='/food' color="primary" id="save-entity" type="submit" onClick={this.saveEntity}>
                &nbsp;
               Save
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
      food: getFoodSelector(state),
    }),
    dispatch =>
      bindActionCreators(
        {
            updateFood,
            getAllPlace,
            getFood
        }, dispatch
      )
  )(FoodUpdateAdmin);
  