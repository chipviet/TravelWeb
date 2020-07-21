import React, { Component } from 'react';
import { Button, Row, Col, Label } from 'reactstrap';
import { AvFeedback, AvForm, AvGroup, AvInput, AvField } from 'availity-reactstrap-validation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../styles.css';
import { Link } from 'react-router-dom'

export class GuestUpdateAdmin extends Component {
  render() {
    return (
      <div>
      <Row className="justify-content-center">
        <Col md="8">
          <h2>
            Create or edit a Guest
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
                <Label id="maxNbDailyTransactionsLabel" for="card-type-maxNbDailyTransactions">
                 username
                </Label>
                <AvField id="card-type-maxNbDailyTransactions" type="string" className="form-control" name="maxNbDailyTransactions" />
              </AvGroup>

              <AvGroup>
                <AvField name="date" label="Creation Date" type="date" />
              </AvGroup>

              <AvField type="select" name="select" label="Type Account" >
                <option>Admin</option>
                <option>Inspector</option>
                <option>Blogger</option>
              </AvField>
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

export default GuestUpdateAdmin ;
