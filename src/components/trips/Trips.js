import './tripStyle.css'
import image from '../../assets/thanhhoafood.jpg'
import Loading from '../loading/Loading'
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
            searchTerm: '',
            loading: true
        }
    }
    componentDidMount() {
        this.props.getAllPlace();
        this.setState({ loading: false })
    };
    render() {
        const { searchTerm } = this.state;
        const { data } = this.props;
        console.log('data all place', data)
        return (
            <div>
                <div className="header-content">
                    <div className="search-box">
                        <span className="search-icon">
                            <i class="fas fa-search"></i>
                        </span>
                        <input
                            style={{ border: 'none' }}
                            type="text"
                            className="search-input"
                            placeholder="Where do you wanna go...?"
                            onChange={e => {
                                this.setState({ searchTerm: e.target.value })
                            }}></input>
                    </div>
                </div>
                <div className="list-item">
                    {data ? (<GridList cellHeight={500} cols={4} style={{ overflowY: 'hidden' }}>
                        {searchTerm ? data.filter(item => item.Name.toLowerCase().includes(searchTerm.toLowerCase())).map((item, index) =>
                            <Link style={{ textDecoration: 'none', color: 'black' }}
                                to={`/details/${item._id}`} key={index}>
                                <div className="item" >
                                    <div className="place-image" >
                                        <img src={item.URL_Image} alt='not available' width="200px" height="250px"></img>
                                    </div>
                                    <div className="place-name">
                                        <p><b>{item.Name}</b></p>
                                    </div>
                                    <div className="place-description">
                                        <p>{item.Description}</p>
                                    </div>
                                </div>
                            </Link>
                        ) : data.map((item, index) =>
                            <Link style={{ textDecoration: 'none', color: 'black' }}
                                to={`/details/${item._id}`} key={index}>
                                <div className="item" >
                                    <div className="place-image">
                                        <img src={item.URL_Image} alt='loading...' width="200px" height="250px"></img>
                                    </div>
                                    <div className="place-name">
                                        <p><b>{item.Name}</b></p>
                                    </div>
                                    <div className="place-description">
                                        <p>{item.Description}</p>
                                    </div>
                                </div>
                            </Link>
                        )}
                    </GridList>) : (<Loading />)}
                </div>
            </div>
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
