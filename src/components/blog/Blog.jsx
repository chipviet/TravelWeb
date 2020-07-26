import React, { Component } from 'react';
import "../styles.css"
import Loading from '../loading/Loading';
import 'react-slideshow-image/dist/styles.css'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import MagicSliderDots from 'react-magic-slider-dots';
import 'react-magic-slider-dots/dist/magic-dots.css';
import LazyLoad from 'react-lazyload'
import GridList from '@material-ui/core/GridList'
import abo from '../../assets/abo.jpg'
import thanhhuy from '../../assets/thanhhuy.jpg'
import chipviet from '../../assets/chipviet.jpg'
import hieu from '../../assets/hieu.jpg'
import hieu2 from '../../assets/hieu2.jpg'
import hung from '../../assets/hung2.jpg'
import blogimg from '../../assets/blogimg.jpg'
import gif from '../../assets/beachgif.gif'
import halong from '../../assets/halong-gif.gif'

class Blog extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    "name": 'Thanh Hoa',
                    "url": "https://dulich.petrotimes.vn/stores/news_dataimages/thuyan/032019/23/16/1128_flc-sam-son-resort2a-min.jpg",
                    "thumbnailUrl": "https://via.placeholder.com/150/92c952",
                    "descriptions": "An rau ma pha duong tau"
                },
                {
                    "name": 'Da Nang',
                    "url": "https://media.tacdn.com/media/attractions-splice-spp-674x446/07/17/b0/a8.jpg",
                    "thumbnailUrl": "https://via.placeholder.com/150/771796",
                    "descriptions": "Worth living city"
                },
                {
                    "name": 'Da Lat',
                    "url": "https://nhatrangtransferservices.com/wp-content/uploads/2017/08/Transfer-From-Mui-Ne-To-Da-Lat-By-Private-Car.jpg",
                    "thumbnailUrl": "https://via.placeholder.com/150/24f355",
                    "descriptions": "Popular city with many famous sights"
                },
                {
                    "name": 'Ha Noi',
                    "url": "https://cdn.printgo.vn/uploads/media/774255/dia-diem-di-choi-30-4-ha-noi_1587472232.jpg",
                    "thumbnailUrl": "https://via.placeholder.com/150/d32776",
                    "descriptions": "Capital of Vietnam"
                },
                {
                    "name": 'Ho Chi Minh City',
                    "url": "https://vietjet.net/includes/uploads/2018/01/ve-may-bay-dong-hoi-sai-gon-600x376.png",
                    "thumbnailUrl": "https://via.placeholder.com/150/f66b97",
                    "descriptions": "The biggest city of Vietnam"
                },
                {
                    "name": 'Sa Pa',
                    "url": "https://tour.dulichvietnam.com.vn/uploads/tour/1552709004_du-lich-mien-bac-20.png",
                    "thumbnailUrl": "https://via.placeholder.com/150/f66b97",
                    "descriptions": "Forever Spring City"
                },

            ],
            staffs: [
                {
                    name: 'Hiếu 2 Mái',
                    comments: 'For me, travelling is one of my favour. So great due to travelling Vietnam, its my dream and i dont enough money',
                    url: hieu2
                },
                {
                    name: 'Hưng Nguyễn ',
                    comments: 'Chairman of FPT and like traveling with my wife',
                    url: hung
                },
                {
                    name: 'Bổ',
                    comments: 'I love traveling, I love discovering new places, finding great experiences and I will make a lot of money to do it.',
                    url: abo
                },
            ]
        }
        this.myRef = React.createRef();
    }
    render() {
        const settings = {
            dots: true,
            arrows: true,
            infinite: false,
            speed: 1500,
            slidesToShow: 1,
            slidesToScroll: 1,
            appendDots: dots => {
                return <MagicSliderDots dots={dots} numDotsToShow={4} dotWidth={30} />;
            }
        };
        return (
            <div className="body">
                <div className="slide-container about">
                    <img src={halong} alt="" width="100%" height="100%" />
                    <div className="aboutDescription">
                        <h1 style={{ fontSize: 50, fontWeight: 900, textShadow: '2px 2px black', fontFamily: 'Work Sans' }}>BLOG</h1>
                        <div className="content">
                            <p style={{ textShadow: '2px 2px black' }}>For us, travel photography is the most inspiring and exciting form of photography. Every capture is unique, every trip a new experience and this is why we love what we do.</p>
                        </div>
                    </div>
                    <div className="blog-button-view" onClick={() =>
                        this.myRef.current.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start',
                        })} >
                        <button className="view-button">Read story</button>
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
                                <p>Vietnam is a beautiful country with endless wonders and new experiences to explore. Each region of this S-shaped land has its unique feature in respect of natural beauty, culture, and tradition. If the Northwest stands out for the wild beauty of majestic mountains, the northeast attracts tourists by its great passes, spectacular valleys, and challenging off-road paths. For those who live for the adventures and wish for getting life-changing experiences, being a part of our TravelLove would be the best idea.</p>
                            </div>
                            <div className="blog-img">
                                <img src={gif} alt="" className="image1" />
                            </div>
                        </div>
                    </LazyLoad>
                </div>
                <div className="blog-place-img">
                    <LazyLoad
                        once={false}
                        height={200}
                        offset={[-100, 100]}
                        placeholder={<Loading />}>
                        <div className="blog-title">
                            <p style={{ fontSize: 48, fontWeight: 900, fontFamily: 'Work Sans, sans-serif' }}>Some destinations we arrived</p>
                        </div>
                        <GridList cellHeight={400} cols={3} style={{ overflow: 'hidden' }}>
                            {this.state.items.map(item => (
                                <div className="img-item">
                                    <div className="place-name1">
                                        <p style={{ fontSize: 30 }}>{item.name}</p>
                                        <p>{item.descriptions}</p>
                                    </div>
                                    <img src={item.url} width="100%" height="400px" />
                                </div>
                            ))}
                        </GridList>
                    </LazyLoad>
                </div>
                <div className="staff-post">
                    <div className="blog-title">
                        <p style={{ fontSize: 48, fontWeight: 900, fontFamily: 'Work Sans, sans-serif' }}>EXPERIENCES OF US</p>
                    </div>
                    <Slider {...settings}>
                        {this.state.staffs.map(staff => (
                            <div className="comment-item">
                                <img src={staff.url} className="image-comment" alt='' width="250px" height="250px" />
                                <div className="comment-content">
                                    <p style={{ fontSize: 24, fontWeight: 700 }}>{staff.name}</p>
                                    <p>{staff.comments}</p>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        );
    }
}

export default Blog;
