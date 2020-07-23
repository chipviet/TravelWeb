import './tripStyle.css'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import travel1 from '../../assets/travel1.jpg'
import travel2 from '../../assets/travel2.jpg'
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
        this.myRef = React.createRef()
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
                <div className="slide-container about">
                    <img className="img" src='https://blog.vinastay.com/wp-content/uploads/2019/01/V%C6%B0%E1%BB%9Dn-qu%E1%BB%91c-gia-c%C3%BAc-ph%C6%B0%C6%A1ng.jpg' alt="" width="100%" />
                    <div className="aboutDescription">
                        <h1 style={{ fontSize: 50, fontWeight: 900, textShadow: '2px 2px black', fontFamily: 'Work Sans' }}>EXPLORE THE WORLD!</h1>
                        <div className="content">
                            <p style={{ textShadow: '2px 2px black' }}>The journey not the arrival matters</p>
                        </div>
                    </div>
                    <div className="trip-button-view" onClick={() =>
                        this.myRef.current.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start',
                        })} >
                        <button className="view-button">Find now</button>
                    </div>
                </div>
                <div className="header-content">
                    <div className="search-box" ref={this.myRef}>
                        <span className="search-icon">
                            <i className="fas fa-search"></i>
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
                            <Link target="_top" style={{ textDecoration: 'none', color: 'black' }}
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
                            <Link target="_top" style={{ textDecoration: 'none', color: 'black' }}
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
