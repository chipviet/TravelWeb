import React, { Component } from 'react';
import { Button, Row, Col, Label } from 'reactstrap';
import { AvFeedback, AvForm, AvGroup, AvInput, AvField ,AvCheckbox} from 'availity-reactstrap-validation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../styles.css';
import { Link } from 'react-router-dom'

export class PlaceUpdateAdmin extends Component {
  render() {
    return (
      <div>
      <Row className="justify-content-center update-label">
        <Col md="8">
          <h2>
            Create or edit a Place
          </h2>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md="8">
            <AvForm >
              <AvGroup>
                <Label id="id-guest" for="card-type-name">
                 ID
                </Label>
                <AvField id="card-type-name" type="string" name="name" />
              </AvGroup>
              <AvGroup>
                <Label id="nameLabel">
                 Name
                </Label>
                <AvField id="card-type-dailyMaxAmount" type="string" className="form-control" name="dailyMaxAmount" />
              </AvGroup>  
              <AvGroup>
                <Label id="nameLabel">
                 Country
                </Label>
                <AvField id="card-type-dailyMaxAmount" type="string" className="form-control" name="dailyMaxAmount" />
              </AvGroup>  

              <Button tag={Link} id="cancel-save" to="/guest" replace color="info">
                <FontAwesomeIcon icon="arrow-left" />
                &nbsp;
                <span className="d-none d-md-inline">
                Back
                </span>
              </Button>
              &nbsp;
              <Button tag={Link} color="primary" id="save-entity" type="submit">
                <FontAwesomeIcon icon="save" />
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

export default PlaceUpdateAdmin ;
