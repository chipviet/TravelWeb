import './tripStyle.css'
import image from '../../assets/thanhhoafood.jpg'
import { Link } from 'react-router-dom'
import React, { Component } from 'react'
import GridList from '@material-ui/core/GridList';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getAllPlace } from '../../redux/actions/places';
import { getAllPlaces } from '../../selectors/place';
class Trips extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    "Name": "Maximilien",
                    "URL_Image": "http://dummyimage.com/200x250.jpg/dddddd/000000",
                    "description": "Contusion of unspecified thumb without damage to nail"
                }, {
                    "Name": "Paige",
                    "URL_Image": "http://dummyimage.com/200x250.jpg/5fa2dd/ffffff",
                    "description": "Puncture wound with foreign body of left great toe with damage to nail, initial encounter"
                }, {
                    "Name": "Ogdan",
                    "URL_Image": "http://dummyimage.com/200x250.jpg/cc0000/ffffff",
                    "description": "Moderate persistent asthma"
                }, {
                    "Name": "Kain",
                    "URL_Image": "http://dummyimage.com/200x250.jpg/dddddd/000000",
                    "description": "Cluster headache syndrome, unspecified"
                }, {
                    "Name": "Berke",
                    "URL_Image": "http://dummyimage.com/200x250.jpg/ff4444/ffffff",
                    "description": "Displaced dome fracture of unspecified talus, subsequent encounter for fracture with nonunion"
                }, {
                    "Name": "Ellette",
                    "URL_Image": "http://dummyimage.com/200x250.jpg/cc0000/ffffff",
                    "description": "Mobile home as the place of occurrence of the external cause"
                }, {
                    "Name": "Mickey",
                    "URL_Image": "http://dummyimage.com/200x250.jpg/cc0000/ffffff",
                    "description": "Underdosing of aminoglycosides"
                }, {
                    "Name": "Estel",
                    "URL_Image": "http://dummyimage.com/200x250.jpg/5fa2dd/ffffff",
                    "description": "Unspecified B-cell lymphoma, intra-abdominal lymph nodes"
                }, {
                    "Name": "Suellen",
                    "URL_Image": "http://dummyimage.com/200x250.jpg/cc0000/ffffff",
                    "description": "Passenger in heavy transport vehicle injured in collision with unspecified motor vehicles in nontraffic accident, initial encounter"
                }, {
                    "Name": "Celestina",
                    "URL_Image": "http://dummyimage.com/200x250.jpg/cc0000/ffffff",
                    "description": "Poisoning by peripheral vasodilators, undetermined, sequela"
                }
            ],
            searchTerm: '',
        }
    }
    componentDidMount() {
        this.props.getAllPlace()
    };
    render() {
        const { items, searchTerm } = this.state;
        console.log('search: ', searchTerm);
        const listItem = searchTerm ? items.filter(item => item.Name.toLowerCase().includes(searchTerm.toLowerCase())).map((item, index) =>
            <Link style={{ textDecoration: 'none', color: 'black' }} to="/details">
                <div className="item" key={index}>
                    <div className="place-image" >
                        <img src={{ uri: item.URL_Image }} alt='loading...' width="200px" height="250px"></img>
                    </div>
                    <div className="place-name">
                        <p><b>{item.Name}</b></p>
                    </div>
                    <div className="place-description">
                        <p>{item.description}</p>
                    </div>
                </div>
            </Link>
        ) : items.map((item, index) =>
            <Link style={{ textDecoration: 'none', color: 'black' }} to="/details">
                <div className="item" key={index}>
                    <div className="place-image" >
                        <img src={{ uri: item.URL_Image }} alt='loading...' width="200px" height="250px"></img>
                    </div>
                    <div className="place-name">
                        <p><b>{item.Name}</b></p>
                    </div>
                    <div className="place-description">
                        <p>{item.description}</p>
                    </div>
                </div>
            </Link>
        );
        return (
            <div className="main-content">
                <div className="header-content">
                    <div className="search-box">
                        <span className="search-icon">
                            <i class="fas fa-search"></i>
                        </span>
                        <input
                            style={{ border: 'none' }}
                            type="text"
                            className="search-input"
                            placeholder="Where do you wanna go ?"
                            onChange={e => {
                                this.setState({ ...items, searchTerm: e.target.value })
                            }}></input>
                    </div>
                </div>
                <div className="list-item">
                    {items ? (<GridList cellHeight={500} cols={4}>
                        {listItem}
                    </GridList>) : (null)}
                    {/* //             <GridList cellHeight={500} cols={5}>
        //                 <Link style={{ textDecoration: 'none', color: 'black' }} to="/details">
        //                     <div className="item">
        //                         <div className="place-image" >
        //                             <img src={image} alt='' width="200px" height="250px"></img>
        //                         </div>
        //                         <div className="place-name">
        //                             <p><b>Thanh hoa</b></p>
        //                         </div>
        //                         <div className="place-description">
        //                             <p>sadsadasdsa</p>
        //                         </div>
        //                     </div>
        //                 </Link>
        //             </GridList> */}

                </div>
            </div >
        )
    }

}

export default connect(
    state => ({
        data: getAllPlaces(state),
    }),
    dispatch =>
        bindActionCreators(
            {
                getAllPlace
            }, dispatch
        )
)(Trips);
