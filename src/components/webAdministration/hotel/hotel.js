import React, { Component } from 'react';
import { Button, Col, Row, Table } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../styles.css';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {getAllHotel} from '../../../redux/actions/hotel';
import {getAllHotelSelector} from '../../../selectors/hotel';

export class HotelAdmin extends Component {

  componentDidMount(){
    this.props.getAllHotel();
  }
  
  render() {
    const {data} = this.props;
    return (
      <div>
        <h2 id="ccp-user-heading"  >
          <div className = "headerNavigation">
            <h3 className="text-capitalize ">Hotel </h3>
              <FontAwesomeIcon icon="plus" />
              <Link to="/hotel-create" className="btn btn-primary button">Create new hotel</Link>
          </div>
           
           
        </h2>
        <div className="table-responsive">
        {data ? (
            <Table style={{tableLayout: 'fixed'}} responsive aria-describedby="ccp-user-heading">
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
                   <td>{item.PlaceID.data.Name}</td>
                   <td>{item.Star}</td>
                   <td>{item.Price}</td>
                   <td>{item.Star_Rating}</td>
                   <td>{item.Description}</td>
                   <td className="linkUrl">{item.URL_Image}</td>
                   
                   <td className="text-right">
                     <div className="btn-group flex-btn-group-container">
                     <Button tag={Link} to={''} color="info" size="sm">
                        <FontAwesomeIcon icon="eye" />{' '}
                        <span className="d-none d-md-inline">
                          View
                        </span>
                      </Button>
                      <Button tag={Link} to={'/hotel-update'} color="primary" size="sm">
                        <FontAwesomeIcon icon="pencil-alt" />{' '}
                        <span className="d-none d-md-inline">
                         Edit
                        </span>
                      </Button>
                      <Button tag={Link} to={'/delete'} color="danger" size="sm">
                        <FontAwesomeIcon icon="trash" />{' '}
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
         ):(null)}
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
        getAllHotel
      }, dispatch
    )
) (HotelAdmin);
