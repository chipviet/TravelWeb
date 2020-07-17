import React, { Component } from 'react';
import { Button, Row, Col, Label } from 'reactstrap';
import { AvFeedback, AvForm, AvGroup, AvInput, AvField ,AvCheckbox} from 'availity-reactstrap-validation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../styles.css';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { updatePlace } from '../../../redux/actions/places';
 import { getPlace } from '../../../redux/actions/places';
import {getPlaceSelected} from '../../../selectors/place';
import { bindActionCreators } from 'redux';


export class PlaceUpdateAdmin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      _id: '',
      placeId:'',
      name: '',
      country: '',
      urlImage: ''
    }
  }

  componentDidMount(){
    this.props.getPlace(this.props.match.params.id)
  }

  saveEntity = () => {
    console.log("data update",this.state._id, this.state.name, this.state.country, this.state.urlImage)
    //this.props.updatePlace(this.state._id, this.state.name, this.state.country, this.state.urlImage);
  }

  render() {
    const {data} = this.props
    return (
      <div>
      <Row className="justify-content-center update-label">
        <Col md="8">
          <h2>
            Update Place
          </h2>
        </Col>
      </Row>
      <Row className="justify-content-center">
      {data ? (
        <Col md="8">
            <AvForm >
              <AvGroup>
                <Label id="id-guest" for="card-type-name">
                 ID
                </Label>
                <AvField id="card-type-name" type="string" name="name" value ={data.PlaceID} onChange={e => {
                  this.setState({
                    placeId: e.target.value
                  })
                }}  />
              </AvGroup>
              <AvGroup>
                <Label id="nameLabel">
                 Name
                </Label>
                <AvField id="card-type-dailyMaxAmount" type="string" className="form-control" name="dailyMaxAmount" value ={data.Name} onChange={e => {
                  this.setState({
                    name: e.target.value
                  })
                }}  />
              </AvGroup>  
              <AvGroup>
                <Label id="nameLabel">
                 Country
                </Label>
                <AvField id="card-type-dailyMaxAmount" type="string" className="form-control" name="dailyMaxAmount"  value ={data.Country}  onChange={e => {
                  this.setState({
                    country: e.target.value
                  })
                }}/>
              </AvGroup>  

              <AvGroup>
                <Label id="nameLabel">
                  Link Image
                </Label>
                <AvInput id="card-type-dailyMaxAmount" type="string" className="form-control" name="image" value ={data.URL_Image} onChange={e => {
                  this.setState({
                    urlImage: e.target.value
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
         ):(null)}
      </Row>
    </div>
    );
  }
}

export default connect(
  state => ({
    data: getPlaceSelected(state),
  }),
  dispatch =>
    bindActionCreators(
      {
        updatePlace,
        getPlace
      }, dispatch
    )
)(PlaceUpdateAdmin);
