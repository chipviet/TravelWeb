import React, { Component } from 'react';
import { Button, Col, Row, Table } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "bootstrap/dist/css/bootstrap.min.css";
import '../styles.css';
import { Link } from 'react-router-dom'

export class FoodAdmin extends Component {
  
  render() {
    return (
      <div>
        <h2 id="ccp-user-heading"  >
        <div className = "headerNavigation">
            <h3 className="text-capitalize ">Food </h3>
              <FontAwesomeIcon icon="plus" />
              <Link to="/food-update" className="btn btn-primary button">Create new food</Link> 
          </div>
           
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
                    <h4 className="text-capitalize ">Place</h4>
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

export default FoodAdmin ;
