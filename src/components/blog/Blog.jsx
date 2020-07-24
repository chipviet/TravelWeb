import React, { Component } from 'react';
import "../styles.css"
import Loading from '../loading/Loading';
import { Slide } from 'react-slideshow-image';
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


class Blog extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    "name": 'Thanh Hoa',
                    "url": "https://dulich.petrotimes.vn/stores/news_dataimages/thuyan/032019/23/16/1128_flc-sam-son-resort2a-min.jpg",
                    "thumbnailUrl": "https://via.placeholder.com/150/92c952",
                    "descriptions": "Dat nuoc rau ma"
                },
                {
                    "name": 'Da Nang',
                    "url": "https://media.tacdn.com/media/attractions-splice-spp-674x446/07/17/b0/a8.jpg",
                    "thumbnailUrl": "https://via.placeholder.com/150/771796",
                    "descriptions": "Dat nuoc cua may loz dan ba"
                },
                {
                    "name": 'Da Lat',
                    "url": "https://nhatrangtransferservices.com/wp-content/uploads/2017/08/Transfer-From-Mui-Ne-To-Da-Lat-By-Private-Car.jpg",
                    "thumbnailUrl": "https://via.placeholder.com/150/24f355",
                    "descriptions": "Noi chan rau tot nhat"
                },
                {
                    "name": 'Ha Noi',
                    "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/VNU_lethanhtong_900x600.jpg/220px-VNU_lethanhtong_900x600.jpg",
                    "thumbnailUrl": "https://via.placeholder.com/150/d32776",
                    "descriptions": "Ha noi khong voi duoc dau"
                },
                {
                    "name": 'Sai Gon',
                    "url": "https://vietjet.net/includes/uploads/2018/01/ve-may-bay-dong-hoi-sai-gon-600x376.png",
                    "thumbnailUrl": "https://via.placeholder.com/150/f66b97",
                    "descriptions": "meo meo meo meo meo"
                },
            ],
            staffs: [
                {
                    name: 'Hiếu 2 Mái',
                    comments: 'Xa hoi lay`, chi co lam thi moi co an',
                    url: hieu2
                },
                {
                    name: 'Bổ',
                    comments: 'Đụ mẹ lồn tanle',
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
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            appendDots: dots => {
                return <MagicSliderDots dots={dots} numDotsToShow={4} dotWidth={30} />;
            }
        };
        return (
            <div className="body">
                <div className="slide-container about">
                    <Slide arrows={false} duration={2000} transitionDuration={1000}>
                        <img src='https://toquoc.mediacdn.vn/2020/2/28/hoi-an-ve-dem-1-1582879781297957162122.gif' alt="" width="100%" />
                        <img src='https://btnmt.onecmscdn.com/2018/04/26/anh-1_68.jpg' alt="" width="100%" />
                        <img src="https://cungphuot.info/wp-content/uploads/2019/02/cac-dia-diem-du-lich-o-quang-nam.jpg" alt="" width="100%" height="100%" />
                    </Slide>
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
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                            </div>
                            <div className="blog-img">
                                <img src={blogimg} alt="" className="image1" />
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
                                    <div className="place-name">
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