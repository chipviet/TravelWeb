import React, { Component } from 'react';
import { Button, Row, Col, Label } from 'reactstrap';
import { AvFeedback, AvForm, AvGroup, AvInput, AvField ,AvCheckbox} from 'availity-reactstrap-validation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../styles.css';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateAttraction,getAttraction } from '../../../redux/actions/attraction';
import {getAllPlaces} from '../../../selectors/place';
import {getAttractionSelector} from '../../../selectors/attraction';
import {getAllPlace} from '../../../redux/actions/places';

export class AttractionUpdateAdmin extends Component {
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
    this.props.getAttraction(this.props.match.params.id)
    this.props.getAllPlace()
  }
  
  saveEntity = () => {
    console.log("data Update", this.state.name,
    this.state.placeId, 
    this.state.price,
    this.state.rating,
    this.state.description,
    this.state.url_Image)

    this.props.updateAttraction(
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
    const {data, attraction} = this.props;
    console.log('place',data);
    console.log(attraction)
    return (
      <div>
      <Row className="justify-content-center update-label">
        <Col md="8">
          <h2>
            Update Attraction
          </h2>
        </Col>
      </Row>
      <Row className="justify-content-center">
      {attraction ? (
        <Col md="8">
            <AvForm >
              <AvGroup>
                <Label id="nameLabel">
                 Name
                </Label>
                <AvInput id="card-type-name" type="string" name="placeId"  value = {attraction.Name} onChange={e => {
                  this.setState({
                    _id: attraction._id,
                    name: e.target.value,
                    placeId: attraction.PlaceID,
                    rating: attraction.Star_Rating,
                    description: attraction.Description,
                    url_Image: attraction.URL_Image
                  })
                }}  />
              </AvGroup>
              <AvField type="select" name="select" label="Place" onChange={e => {
                this.setState({
                  _id: attraction._id,
                  name: attraction.Name,
                  placeId: e.target.value,
                  rating: attraction.Star_Rating,
                  description: attraction.Description,
                  url_Image: attraction.URL_Image
                  })
                }}  >
                {attraction.Place ? (<option value= {attraction.PlaceID}> {attraction.Place.data.Name} </option>): (null)}
                {data
                  ? data.map(item => (
                      <option value={item._id}>
                        {item.Name}
                      </option>
                    ))
                : null}
              </AvField>
             
            
              <AvField type="select" name="select" label="Star Rating"  onChange={e => {
                  this.setState({
                    _id: attraction._id,
                    name: attraction.Name,
                    placeId: attraction.PlaceID,
                    rating: attraction.Star_Rating,
                    description: attraction.Description,
                    url_Image: attraction.URL_Image
                  })
                }}>
                <option value={attraction.Star_Rating}> {attraction.Star_Rating} </option>    
              </AvField>

              <AvGroup>
                <Label id="nameLabel">
                 Description
                </Label>
                <AvInput id="card-type-name" type="string" name="placeId" value = {attraction.Description} onChange={e => {
                  this.setState({
                    _id: attraction._id,
                    name: attraction.Name,
                    placeId: attraction.PlaceID,
                    price: attraction.Price,
                    rating: attraction.Star_Rating,
                    description: e.target.value,
                    url_Image: attraction.URL_Image
                  })
                }} />
              </AvGroup>

              <AvGroup>
                <Label id="nameLabel">
                 Image
                </Label>
                <AvInput id="card-type-name" type="string" name="placeId" value ={attraction.URL_Image} onChange={e => {
                  this.setState({
                    _id: attraction._id,
                    name: attraction.Name,
                    placeId: attraction.PlaceID,
                    price: attraction.Price,
                    rating: attraction.Star_Rating,
                    description: attraction.Description,
                    url_Image: e.target.value
                  })
                }} />
              </AvGroup>

              <Button tag={Link} id="cancel-save" to="/attraction" replace color="info">
           
                &nbsp;
                <span className="d-none d-md-inline">
                Back
                </span>
              </Button>
              &nbsp;
              <Button tag={Link} to='/attraction' color="primary" id="save-entity" type="submit" onClick={this.saveEntity}>
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
      attraction: getAttractionSelector(state),
    }),
    dispatch =>
      bindActionCreators(
        {
            updateAttraction,
            getAllPlace,
            getAttraction
        }, dispatch
      )
  )(AttractionUpdateAdmin);
  