import React, { Component } from 'react';
import { Button, Table } from 'reactstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getAllPlace } from '../../../redux/actions/places';
import { deletePlace } from '../../../redux/actions/places';
import { getAllPlaces } from '../../../selectors/place';
import '../styles.css';
import { Link } from 'react-router-dom'


export class PlaceAdmin extends Component {


  componentDidMount() {
    this.props.getAllPlace();
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (this.props.getAllPlace() !== nextProps.getAllPlace)
      this.setState(nextProps)
  }

  delete = (id) => {
    console.log("id", id)
    this.props.deletePlace(id);
  }

  render() {
    const { data } = this.props;
    return (
      <div>
        <h2 id="ccp-user-heading"  >
          <div className="headerNavigation">
            <h3 className="text-capitalize ">Place </h3>
            <Link to="/place-create" className="button btn btn-primary">Create new place</Link>
          </div>
        </h2>
        <div className="table-responsive">
          {data ? (
            <Table style={{ tableLayout: 'fixed' }} responsive aria-describedby="ccp-user-heading">
              <thead>
                <tr>
                  <th className="hand" >
                    <h4 className="text-capitalize ">Name</h4>
                  </th>
                  <th className="hand" >
                    <h4 className="text-capitalize ">Country</h4>
                  </th>
                  <th className="hand" >
                    <h4 className="text-capitalize ">Description</h4>
                  </th>
                  <th className="hand" >
                    <h4 className="text-capitalize ">Link Image</h4>
                  </th>
                  <th />
                </tr>
              </thead>

              <tbody>
                {data.map((item, i) => (
                  <tr >
                    <td>{item.Name}</td>
                    <td>{item.Country}</td>
                    <td>{item.Description}</td>
                    <td className="linkUrl">{item.URL_Image}</td>

                    <td className="text-right">
                      <div className="btn-group flex-btn-group-container">
                        <Button tag={Link} to={`/place-details/${item._id}`} color="info" size="sm">
                          <span className="d-none d-md-inline">
                            View
                        </span>
                        </Button>
                        <Button tag={Link} to={`/place-update/${item._id}`} color="primary" size="sm">

                          <span className="d-none d-md-inline">
                            Edit
                        </span>
                        </Button>
                        <Button tag={Link} to={'/place'} color="danger" size="sm" onClick={() => this.delete(item._id)}>
                          <span className="d-none d-md-inline">
                            Delete
                        </span>
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          ) : (null)}
        </div>
      </div>
    );
  }
}

export default connect(
  state => ({
    data: getAllPlaces(state),
  }),
  dispatch =>
    bindActionCreators(
      {
        getAllPlace,
        deletePlace
      }, dispatch
    )
)(PlaceAdmin);
