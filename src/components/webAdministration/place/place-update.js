import React, { Component } from 'react';
import { Button, Row, Col, Label } from 'reactstrap';
import { AvFeedback, AvForm, AvGroup, AvInput, AvField ,AvCheckbox} from 'availity-reactstrap-validation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../styles.css';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { updatePlace } from '../../../redux/actions/places';
import { getPlacebyId } from '../../../redux/actions/places';
import { bindActionCreators } from 'redux';


export class PlaceUpdateAdmin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      _id: '',
      name: '',
      country: '',
      urlImage: ''
    }
  }

  componentDidMount(){
    this.props.getPlacebyId(this.props.match.params._id)
  }

  saveEntity = () => {
    this.props.updatePlace(this.state._id, this.state.name, this.state.country, this.state.urlImage);
  }

  render() {
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

export default connect(
  state => ({

  }),
  dispatch =>
    bindActionCreators(
      {
        updatePlace,
        getPlacebyId
      }, dispatch
    )
)(PlaceUpdateAdmin);
