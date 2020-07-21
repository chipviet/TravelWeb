import React, { Component } from 'react';
import "../styles.css"
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import travel1 from '../../assets/travel1.jpg'
import travel2 from '../../assets/travel2.jpg'
import { connect } from 'react-redux';
import { getNameUserSelector } from '../../selectors/user'
import LazyLoad from 'react-lazyload'
import GridList from '@material-ui/core/GridList';
import tv from '../../assets/tv.jpg'
import abo from '../../assets/abo.jpg'
import thanhhuy from '../../assets/thanhhuy.jpg'
import chipviet from '../../assets/chipviet.jpg'
import hieu from '../../assets/hieu.jpg'
import hung from '../../assets/hung2.jpg'
class Home extends Component {
    constructor(props) {
        super(props)
        this.myRef = React.createRef()   // Create a ref object 
    }
    render() {
        const { name } = this.props;
        return (
            <div className="body">
                <div className="slide-container about">
                    <Slide duration={2000} transitionDuration={1000}>
                        <img src='https://www.pixel4k.com/wp-content/uploads/2018/11/man-tourist-backpack-mountains-travel-4k_1541115960.jpg' alt="" width="100%" />
                        <img src={travel1} alt="" width="100%" />
                        <img src={travel2} alt="" width="100%" height="100%" />
                    </Slide>
                    <div className="aboutDescription">
                        <h1 style={{ fontSize: 50, fontWeight: 900, textShadow: '2px 2px black' }}>A More Rewarding Way To Travel</h1>
                        <div className="content">
                            <p style={{ textShadow: '2px 2px black' }}>Way To California is no doubt a thriving online travel supplier, dedicated to providing the finest online purchasing experience for all your travel needs.</p>
                        </div>
                    </div>
                    <div className="button-view" onClick={() =>
                        this.myRef.current.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start',
                        })} >
                        <button className="view-button">View more</button>
                    </div>
                </div>
                <div className="about-staff" ref={this.myRef}>
                    <LazyLoad
                        once={true}
                        height={100}
                        offset={[-100, 100]}
                        placeholder='Loading...'>
                        <div className="title-staff">
                            <p style={{ fontSize: 40, fontWeight: 'bold' }}> Meet our great staffs</p>
                        </div>
                        <GridList style={{ padding: "30px" }} cellHeight={500} cols={3}>
                            <div className="staff-list">
                                <img src={abo} className="image" alt='' width="250px" height="250px" />
                                <div className="staff-name">
                                    <p style={{ fontSize: 24, flex: 1, fontWeight: 700 }}>Lê Thái Bảo</p>
                                    <p style={{ fontSize: 16, flex: 1, fontWeight: 'bold' }}>Java Developer</p>
                                </div>
                                <div className="staff-description">
                                    <p>Staff or Dev of JAVa backend and nodeJs copy paste.</p>
                                </div>
                            </div>
                            <div className="staff-list">
                                <img src={thanhhuy} className="image" alt='' width="250px" height="250px" />
                                <div className="staff-name">
                                    <p style={{ fontSize: 24, flex: 1, fontWeight: 700 }}>Phan Thanh Huy</p>
                                    <p style={{ fontSize: 16, flex: 1, fontWeight: 'bold' }}>Full-Stackoverflow Developer</p>
                                </div>
                                <div className="staff-description">
                                    <p style={{ fontSize: 18 }}>Ctrl+C, Ctrl+V master</p>
                                </div>
                            </div>
                            <div className="staff-list">
                                <img src={chipviet} className="image" alt='' width="250px" height="250px" />
                                <div className="staff-name">
                                    <p style={{ fontSize: 24, flex: 1, fontWeight: 700 }}>Phạm Xuân Sang</p>
                                    <p style={{ fontSize: 16, flex: 1, fontWeight: 'bold' }}>Leader</p>
                                </div>
                                <div className="staff-description">
                                    <p>Nhieu nam kinh nghiem xao loz, co kinh nghiem xao loz quoc te, DIT CON ME ONG TRUM XAO LOZ</p>
                                </div>
                            </div>
                            <div className="staff-list">
                                <img src={hieu} className="image" alt='' width="250px" height="250px" />
                                <div className="staff-name">
                                    <p style={{ fontSize: 24, flex: 1, fontWeight: 700 }}>Hiếu Hoa Hồng</p>
                                    <p style={{ fontSize: 16, flex: 1, fontWeight: 'bold' }}>.NET,AI developer</p>
                                </div>
                                <div className="staff-description">
                                    <p>Có kinh nghiệm trong việc dạy đời và thích chửi người khác.</p>
                                </div>
                            </div>
                            <div className="staff-list">
                                <img src={hung} className="image" alt='' width="250px" height="250px" />
                                <div className="staff-name">
                                    <p style={{ fontSize: 24, flex: 1, fontWeight: 700 }}>Nguyễn Lê Phước Hưng</p>
                                    <p style={{ fontSize: 16, flex: 1, fontWeight: 'bold' }}>Lady of team</p>
                                </div>
                                <div className="staff-description">
                                    <p>1 tháng 30 ngày tới tháng 31 ngày.</p>
                                </div>
                            </div>

                        </GridList>
                    </LazyLoad>
                </div>
            </div >
        );
    }
}

export default connect(
    state => ({
        name: getNameUserSelector(state)
    })
)(Home);