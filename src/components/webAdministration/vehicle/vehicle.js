import React, { Component } from 'react';
import { Button, Col, Row, Table } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "bootstrap/dist/css/bootstrap.min.css";
import '../styles.css';
import { Link } from 'react-router-dom'

export class VehicleAdmin extends Component {
  
  render() {
    return (
      <div>
        <h2 id="ccp-user-heading"  >
            <h3 className="text-capitalize ">Vehicle </h3>
            <FontAwesomeIcon icon="plus" />
            <button 
                    type ="button" 
                    className="btn btn-primary ">
                    Create new Vehicle  
            </button> 

            <li className="ele" >
                <Link style={{ textDecoration: 'none', color: '#7C7C7C' }} to="/hotel">Hotel</Link>
            </li>
            <li className="ele" >
                <Link style={{ textDecoration: 'none', color: '#7C7C7C' }} to="/place">Place</Link>
            </li>
            <li className="ele" >
                <Link style={{ textDecoration: 'none', color: '#7C7C7C' }} to="/guest">Guest</Link>
            </li>
            
        </h2>
        <div className="table-responsive">

            <Table responsive aria-describedby="ccp-user-heading">
              <thead>
                <tr>
                  <th className="hand">
                  <h4 className="text-capitalize">ID </h4>
                    
                  </th>
                  <th className="hand" >
                    <h4 className="text-capitalize ">Name</h4>
                  </th>
                  <th className="hand" >
                    <h4 className="text-capitalize ">Type</h4>
                  </th>
                  <th className="hand" >
                    <h4 className="text-capitalize ">Price</h4>
                  </th>
                  <th className="hand" >
                    <h4 className="text-capitalize ">Status</h4>
                  </th>
                  <th />
                </tr>
              </thead>
              {/* <tbody>
                {cCPUserList.map((cCPUser, i) => (
                  <tr key={`entity-${i}`}>
                    <td>
                      <Button  to={`${match.url}/${cCPUser.id}`} color="link" size="sm">
                        {cCPUser.id}
                      </Button>
                    </td>
                    <td>{cCPUser.walletId}</td>
                    <td>{cCPUser.creationDate}</td>
                    <td>{cCPUser.updateDate}</td>
                    <td className="text-right">
                      <div className="btn-group flex-btn-group-container">
                        <Button  to={`${match.url}/${cCPUser.id}`} color="info" size="sm">
                          <FontAwesomeIcon icon="eye" />{' '}
                          <span className="d-none d-md-inline">
                            <Translate contentKey="entity.action.view">View</Translate>
                          </span>
                        </Button>
                        <Button to={`${match.url}/${cCPUser.id}/edit`} color="primary" size="sm">
                          <FontAwesomeIcon icon="pencil-alt" />{' '}
                          <span className="d-none d-md-inline">
                            <Translate contentKey="entity.action.edit">Edit</Translate>
                          </span>
                        </Button>
                        <Button to={`${match.url}/${cCPUser.id}/delete`} color="danger" size="sm">
                          <FontAwesomeIcon icon="trash" />{' '}
                          <span className="d-none d-md-inline">
                            <Translate contentKey="entity.action.delete">Delete</Translate>
                          </span>
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody> */}
            </Table>
         
        </div>
      </div>
    );
  }
}

export default VehicleAdmin ;
