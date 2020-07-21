import React, { Component } from 'react';
import { Button, Row, Col, Label } from 'reactstrap';
import { AvFeedback, AvForm, AvGroup, AvInput, AvField ,AvCheckbox} from 'availity-reactstrap-validation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../styles.css';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
 import { getPlace } from '../../../redux/actions/places';
import {getPlaceSelected} from '../../../selectors/place';
import { bindActionCreators } from 'redux';


export class PlaceDetailsAdmin extends Component {

  componentDidMount(){
    this.props.getPlace(this.props.match.params.id)
  }

  render() {
    const {data} = this.props
    return (
      <div>
      <Row className="justify-content-center update-label">
        <Col md="8">
          <h2>
            Place Details
          </h2>
        </Col>
      </Row>
      <Row className="justify-content-center">
      {data ? (
        <Col md="8">
            <AvForm >
              
              <AvGroup>
                <Label id="nameLabel">
                 Name
                </Label>
                <AvField id="card-type-dailyMaxAmount" type="string" className="form-control" name="dailyMaxAmount" value ={data.Name} />
              </AvGroup>  
              <AvGroup>
                <Label id="nameLabel">
                 Country
                </Label>
                <AvField id="card-type-dailyMaxAmount" type="string" className="form-control" name="dailyMaxAmount"  value ={data.Country}  />
              </AvGroup>  

              <AvGroup>
                <Label id="nameLabel">
                  Link Image
                </Label>
                <AvInput id="card-type-dailyMaxAmount" type="string" className="form-control" name="image" value ={data.URL_Image}  />
              </AvGroup> 

              <AvGroup>
                <Label id="id-guest" for="card-type-name">
                 Description
                </Label>
                <AvField id="card-type-name" type="string" name="name" value ={data.Description}  />
              </AvGroup>

              <Button tag={Link} id="cancel-save" to="/place" replace color="info">
                &nbsp;
                <span className="d-none d-md-inline">
                Back
                </span>
              </Button>
              &nbsp;
             
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
        getPlace
      }, dispatch
    )
)(PlaceDetailsAdmin);
