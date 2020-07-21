import React, { Component } from 'react';
import { Button, Col, Row, Table } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../styles.css';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getAllHotel } from '../../../redux/actions/hotel';
import { deleteHotel } from '../../../redux/actions/hotel';
import { getAllHotelSelector } from '../../../selectors/hotel';

export class HotelAdmin extends Component {

  componentDidMount() {
    this.props.getAllHotel();
  }

  // UNSAFE_componentWillReceiveProps(nextProps) {
  //   if(this.props.getAllHotel() !== nextProps.getAllHotel)
  //   this.setState(nextProps)
  // }

  delete = (id) => {
    console.log("id", id)
    this.props.deleteHotel(id);
  }

  render() {
    const { data } = this.props;
    console.log("du lieu", data);
    return (
      <div>
        <h2 id="ccp-user-heading"  >
          <div className="headerNavigation">
            <h3 className="text-capitalize ">Hotel </h3>
            <Link to="/hotel-create" className="btn btn-primary button">Create new hotel</Link>
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
                    <h4 className="text-capitalize ">Star</h4>
                  </th>
                  <th className="hand" >
                    <h4 className="text-capitalize ">Price</h4>
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
                  <tr >
                    <td>{item.Name}</td>
                    {item.Place ? ( <td>{item.Place.data.Name}</td>) : (null)}
                    <td>{item.Star}</td>
                    <td>{item.Price}</td>
                    <td>{item.Star_Rating}</td>
                    <td>{item.Description}</td>
                    <td className="linkUrl">{item.URL_Image}</td>

                    <td className="text-right">
                      <div className="btn-group flex-btn-group-container">
                        <Button tag={Link} to={`/hotel-details/${item._id}`} color="info" size="sm">
                          <span className="d-none d-md-inline">
                            View
                        </span>
                        </Button>
                        <Button tag={Link} to={`/hotel-update/${item._id}`} color="primary" size="sm">
                          <span className="d-none d-md-inline">
                            Edit
                        </span>
                        </Button>
                        <Button tag={Link} to={'/hotel'} color="danger" size="sm" onClick={() => this.delete(item._id)}>
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
    data: getAllHotelSelector(state),
  }),
  dispatch =>
    bindActionCreators(
      {
        getAllHotel,
        deleteHotel
      }, dispatch
    )
)(HotelAdmin);
