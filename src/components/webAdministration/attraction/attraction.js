import React, { Component } from 'react';
import { Button, Col, Row, Table } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "bootstrap/dist/css/bootstrap.min.css";
import '../styles.css';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getAllAttraction, deleteAttraction } from '../../../redux/actions/attraction';
import { getAllAttractionSelector } from '../../../selectors/attraction';

export class AttractionAdmin extends Component {

  componentDidMount() {
    this.props.getAllAttraction();
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (this.props.getAllAttraction() !== nextProps.getAllAttraction)
      this.setState(nextProps)
  }

  delete = (id) => {
    this.props.deleteAttraction(id);
  }

  render() {
    const { data } = this.props;
    return (
      <div>
        <h2 id="ccp-user-heading"  >
          <div className="headerNavigation">
            <h3 className="text-capitalize ">Attraction </h3>
            <Link to="/attraction-create" className="btn btn-primary button">Create new Attraction</Link>
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
                    <h4 className="text-capitalize ">Place</h4>
                  </th>
                  <th className="hand" >
                    <h4 className="text-capitalize ">Star Rating</h4>
                  </th>
                  <th className="hand" >
                    <h4 className="text-capitalize ">Description</h4>
                  </th>
                  <th className="hand" >
                    <h4 className="text-capitalize ">Image</h4>
                  </th>
                  <th />
                </tr>
              </thead>
              <tbody>
                {data.map((item, i) => (
                  <tr key={i}>
                    <td>{item.Name}</td>
                    <td>{item.Place.data.Name}</td>
                    <td>{item.Star_Rating}</td>
                    <td className="linkUrl">{item.Description}</td>
                    <td className="linkUrl">{item.URL_Image}</td>

                    <td className="text-right">
                      <div className="btn-group flex-btn-group-container">
                        <Button tag={Link} to={`/attraction-details/${item._id}`} color="info" size="sm">
                          <span className="d-none d-md-inline">
                            View
                          </span>
                        </Button>
                        <Button tag={Link} to={`/attraction-update/${item._id}`} color="primary" size="sm">
                          <span className="d-none d-md-inline">
                            Edit
                          </span>
                        </Button>
                        <Button tag={Link} to={'/attraction'} color="danger" size="sm" onClick={() => this.delete(item._id)}>
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
    data: getAllAttractionSelector(state)
  }),
  dispatch =>
    bindActionCreators(
      {
        getAllAttraction,
        deleteAttraction,
      }, dispatch
    )
)(AttractionAdmin);
