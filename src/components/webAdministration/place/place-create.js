import React, { Component } from 'react';
import { Button, Row, Col, Label } from 'reactstrap';
import { AvFeedback, AvForm, AvGroup, AvInput, AvField ,AvCheckbox} from 'availity-reactstrap-validation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../styles.css';
import { connect } from 'react-redux';
import {createNewPlace} from '../../../redux/actions/places';
import { Link } from 'react-router-dom'
import { bindActionCreators } from 'redux';


export class PlaceCreateAdmin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            placeId: '',
            name: '',
            country: '',
            urlImage: ''
        }
    }

    saveEntity = () => {
   
        const {placeId,name,country,urlImage} = this.state;
        console.warn("Vaoday",placeId,name,country,urlImage)
        this.props.createNewPlace(placeId,name,country,urlImage);
    }

  render() {
    return (
      <div>
      <Row className="justify-content-center update-label">
        <Col md="8">
          <h2>
            Create new Place
          </h2>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md="8">
            <AvForm  >
              <AvGroup>
                <Label id="id-guest" for="card-type-name">
                 ID
                </Label>
                <AvInput id="card-type-name" type="string" name="placeId" value={this.state.placeId} />
              </AvGroup>
              <AvGroup>
                <Label id="nameLabel">
                 Name
                </Label>
                <AvInput id="card-type-dailyMaxAmount" type="string" className="form-control" name="name" value={this.state.name} />
              </AvGroup>  
              <AvGroup>
                <Label id="nameLabel">
                 Country
                </Label>
                <AvInput id="card-type-dailyMaxAmount" type="string" className="form-control" name="country" value={this.state.country}/>
              </AvGroup>  

              <AvGroup>
                <Label id="nameLabel">
                 Link Image
                </Label>
                <AvInput id="card-type-dailyMaxAmount" type="string" className="form-control" name="image" value={this.state.urlImage}/>
              </AvGroup>  


              <Button tag={Link} id="cancel-save" to="/guest" replace color="info">
                &nbsp;
                <span className="d-none d-md-inline">
                Back
                </span>
              </Button>
              &nbsp;
              <Button tag={Link} color="primary" id="save-entity" type="submit" onClick ={this.saveEntity}>
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
    state => {},
    dispatch => 
        bindActionCreators(
            {
                createNewPlace
            },dispatch
        )
)(PlaceCreateAdmin);
