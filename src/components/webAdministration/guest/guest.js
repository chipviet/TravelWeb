import React, { Component } from 'react';
import { Button, Col, Row, Table } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../styles.css';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getAllUser,deleteUser } from '../../../redux/actions/users';
import { getAllUserSelector } from '../../../selectors/user';

class GuestAdmin extends Component {

  componentDidMount() {
    this.props.getAllUser();
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if(this.props.getAllUser() !== nextProps.getAllUser)
    this.setState(nextProps)
  }

  delete = (id) => {
    console.log("id",id)
    this.props.deleteUser(id);
  }
  
  render() {
    const {data} = this.props
    console.log('data',data);
    return (
      <div>
        <h2 id="ccp-user-heading"  >
        <div className = "headerNavigation">
            <h3 className="text-capitalize ">Guest </h3>    
            <Link to="/guest-update" className="button btn btn-primary">Create new guest</Link>
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
                    <h4 className="text-capitalize ">username</h4>
                  </th>
                  <th className="hand" >
                    <h4 className="text-capitalize ">Is Admin</h4>
                  </th>
                  <th className="hand" >
                    <h4 className="text-capitalize ">Creation Day</h4>
                  </th>
                  <th className="hand" >
                    <h4 className="text-capitalize ">Update Day</h4>
                  </th>
                  <th />
                </tr>
              </thead>
              <tbody>
                {data.map((item, i) => (
                  <tr key={i}>
                    <td>{item.lastname}</td>
                    <td>{item.username}</td>
                    {item.isAdmin ? (<td>Admin</td>): (<td></td>)}
                    <td>{item.createdAt}</td>
                    <td>{item.updatedAt}</td>

                    <td className="text-right">
                      <div className="btn-group flex-btn-group-container">  
                        <Button tag={Link} to={'/guest'} color="danger" size="sm" onClick={() => this.delete(item._id)}>
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
     data: getAllUserSelector(state)
  }),
  dispatch =>
    bindActionCreators(
      {
        getAllUser,
        deleteUser,
      }, dispatch
    )
)(GuestAdmin);
