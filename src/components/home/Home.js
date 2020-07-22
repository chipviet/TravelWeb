import React, { Component } from 'react';
import "../styles.css"
import Loading from '../loading/Loading'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import travel1 from '../../assets/travel1.jpg'
import travel2 from '../../assets/travel2.jpg'
import { connect } from 'react-redux'
import { getNameUserSelector } from '../../selectors/user'
import LazyLoad from 'react-lazyload'
import GridList from '@material-ui/core/GridList'
import abo from '../../assets/abo.jpg'
import thanhhuy from '../../assets/thanhhuy.jpg'
import chipviet from '../../assets/chipviet.jpg'
import hieu from '../../assets/hieu.jpg'
import hung from '../../assets/hung2.jpg'
import blogimg from '../../assets/blogimg.jpg'
class Home extends Component {
    constructor(props) {
        super(props)
        this.myRef = React.createRef()   // Create a ref object 
    }
    render() {
        return (
            <div className="body">
                <div className="slide-container about">
                    <Slide arrows={false} duration={2000} transitionDuration={1000}>
                        <img src='https://www.pixel4k.com/wp-content/uploads/2018/11/man-tourist-backpack-mountains-travel-4k_1541115960.jpg' alt="" width="100%" />
                        <img src={travel1} alt="" width="100%" />
                        <img src={travel2} alt="" width="100%" height="100%" />
                    </Slide>
                    <div className="aboutDescription">
                        <h1 style={{ fontSize: 50, fontWeight: 900, textShadow: '2px 2px black', fontFamily: 'Work Sans' }}>A More Rewarding Way To Travel</h1>
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
                <div className="blog-container" ref={this.myRef}>
                    <LazyLoad
                        once={false}
                        height={200}
                        offset={[-100, 100]}
                        placeholder={<Loading />}>
                        <div className="blog-title">
                            <p style={{ fontSize: 48, fontWeight: 900, fontFamily: 'Work Sans, sans-serif' }}>About our story</p>
                        </div>
                        <div className='blog-content'>
                            <div className='blog-text'>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                            </div>
                            <div className="blog-img">
                                <img src={blogimg} alt="" className="image1" />
                            </div>
                        </div>
                    </LazyLoad>

                </div>

                <div className="about-staff">
                    <LazyLoad
                        once={true}
                        height={200}
                        offset={[-100, 100]}
                        placeholder={<Loading />}>
                        <div className="title-staff">
                            <p style={{ fontSize: 40, fontWeight: 900, fontFamily: 'Work Sans' }}> Meet our great staffs</p>
                        </div>
                        <GridList cellHeight={500} cols={3}>
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