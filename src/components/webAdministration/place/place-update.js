import React, { Component } from 'react';
import { Button, Row, Col, Label } from 'reactstrap';
import { AvForm, AvGroup, AvInput, AvField } from 'availity-reactstrap-validation';
import '../styles.css';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { updatePlace } from '../../../redux/actions/places';
import { getPlace } from '../../../redux/actions/places';
import { getPlaceSelected } from '../../../selectors/place';
import { bindActionCreators } from 'redux';


export class PlaceUpdateAdmin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      _id: '',
      name: '',
      country: '',
      urlImage: '',
      description: ''
    }
  }

  componentDidMount() {
    this.props.getPlace(this.props.match.params.id)
  }

  saveEntity = () => {
    console.log("data update", this.state._id, this.state.name, this.state.country, this.state.urlImage, this.state.description)
    this.props.updatePlace(this.state._id, this.state.name, this.state.country, this.state.urlImage, this.state.description);
  }

  render() {
    const { data } = this.props
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
                  <Label id="nameLabel">
                    Name
                </Label>
                  <AvField id="card-type-dailyMaxAmount" type="string" className="form-control" name="dailyMaxAmount" value={data.Name} onChange={e => {
                    this.setState({
                      _id: data._id,
                      description: data.Description,
                      name: e.target.value,
                      country: data.Country,
                      urlImage: data.URL_Image
                    })
                  }} />
                </AvGroup>
                <AvGroup>
                  <Label id="nameLabel">
                    Country
                </Label>
                  <AvField id="card-type-dailyMaxAmount" type="string" className="form-control" name="dailyMaxAmount" value={data.Country} onChange={e => {
                    this.setState({
                      _id: data._id,
                      description: data.Description,
                      name: data.Name,
                      country: e.target.value,
                      urlImage: data.URL_Image
                    })
                  }} />
                </AvGroup>

                <AvGroup>
                  <Label id="nameLabel">
                    Link Image
                </Label>
                  <AvInput id="card-type-dailyMaxAmount" type="string" className="form-control" name="image" value={data.URL_Image} onChange={e => {
                    this.setState({
                      _id: data._id,
                      name: data.Name,
                      country: data.Country,
                      urlImage: e.target.value,
                      description: data.Description
                    })
                  }} />
                </AvGroup>

                <AvGroup>
                  <Label id="id-guest" for="card-type-name">
                    Description
                </Label>
                  <AvField id="card-type-name" type="string" name="name" value={data.Description} onChange={e => {
                    this.setState({
                      _id: data._id,
                      name: data.Name,
                      country: data.Country,
                      urlImage: data.URL_Image,
                      description: e.target.value
                    })
                  }} />
                </AvGroup>

                <Button tag={Link} id="cancel-save" to="/place" replace color="info">
                  &nbsp;
                <span className="d-none d-md-inline">
                    Back
                </span>
                </Button>
              &nbsp;
              <Button tag={Link} to="/place" color="primary" id="save-entity" type="submit" onClick={this.saveEntity}>
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
