import React, { Component } from 'react';
import "../styles.css"
import Loading from '../loading/Loading'
import { Slide, Fade } from 'react-slideshow-image';
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
                            <p style={{ fontSize: 48, fontWeight: 900, fontFamily: 'Work Sans, sans-serif' }}>POPULAR DESTINATION</p>
                        </div>
                        <Slide pauseOnHover={true} duration={3000} transitionDuration={1000}>
                            <div className='blog-content'>
                                <div className='blog-text'>
                                    <p style={{ fontSize: 26, fontWeigh: 'bold' }}>Quang Nam</p>
                                    <p>A province in the Central region of Vietnam. It is bordered by Thừa Thiên–Huế Province to the north, the nation of Laos to the west, Kon Tum Province to the southwest, Quảng Ngãi Province to the southeast, the South China Sea to the east, and the city of Da Nang to the northeast. It is extremely famous for Quang noodles, Hoi An ancient town and My Son holy land.</p>
                                </div>
                                <div className="blog-img">
                                    <img src="https://cdnmedia.baotintuc.vn/Upload/DMDnZyELa7xUDTdLsa19w/files/2019/12/hoi-an.jpg" alt="" className="image1" />
                                </div>
                            </div>
                            <div className='blog-content'>
                                <div className='blog-text'>
                                    <p style={{ fontSize: 26, fontWeigh: 'bold' }}>Hue</p>
                                    <p>is one of the main properties (called color appearance parameters) of a color, defined technically (in the CIECAM02 model), as "the degree to which a stimulus can be described as similar to or different from stimuli that are described as red, green, blue, and yellow" (which in certain theories of color vision are called unique hues). Hue can typically be represented quantitatively by a single number, often corresponding to an angular position around a central or neutral point or axis on a colorspace coordinate diagram (such as a chromaticity diagram) or color wheel, or by its dominant wavelength or that of its complementary color. The other color appearance parameters are colorfulness, saturation (also known as intensity or chroma), lightness, and brightness.</p>
                                </div>
                                <div className="blog-img">
                                    <img src="https://static.asiawebdirect.com/m/bangkok/portals/vietnam/homepage/hue/first-time/pagePropertiesImage/hue.jpg.jpg" alt="" className="image1" />
                                </div>
                            </div>
                            <div className='blog-content'>
                                <div className='blog-text'>
                                    <p style={{ fontSize: 26, fontWeigh: 'bold' }}>Thanh Hoa</p>
                                    <p>is the capital of Thanh Hóa Province.[1] The city is situated in the east of the province on the Ma River (Sông Mã), about 150 kilometers (93 miles) south of Hanoi and 1560 kilometers (969 miles) north of Ho Chi Minh City. Thanh Hoa became one of the most populous cities in North Central Coast after expanding in 2012, with a population of approximately 400,000. Thanh Hoa township was upgraded to Thanh Hoa City in 1994 and has been the historical center of politics, economy, culture, education and entertainment of Thanh Hóa Province</p>
                                </div>
                                <div className="blog-img">
                                    <img src="https://sanvemaybay.vn/includes/uploads/2019/05/Khu-b%E1%BA%A3o-t%E1%BB%93n-thi%C3%AAn-Nhi%C3%AAn-P%C3%B9-Lu%C3%B4ng-e1557303727777.jpg" alt="" className="image1" />
                                </div>
                            </div>
                        </Slide>
                    </LazyLoad>
                </div>
                <div className="blog-container" ref={this.myRef}>
                    <LazyLoad
                        once={false}
                        height={200}
                        offset={[-100, 100]}
                        placeholder={<Loading />}>
                        <div className="blog-title">
                            <p style={{ fontSize: 48, fontWeight: 900, fontFamily: 'Work Sans, sans-serif' }}>POPULAR FOOD</p>
                        </div>
                        <Fade pauseOnHover duration={3000} transitionDuration={1000}>
                            <div className='blog-content'>
                                <div className='blog-text'>
                                    <p style={{ fontSize: 26, fontWeigh: 'bold' }}>Mi Quang</p>
                                    <p>is a Vietnamese noodle dish that originated from Quảng Nam Province in central Vietnam. In the region, it is one of the most popular and nationally recognized food items, and served on various occasions such as at family parties, death anniversaries, and Tết. Mì Quảng can also be found in many restaurants around the country, and is a popular lunch item.</p>
                                </div>
                                <div className="blog-img">
                                    <img src="https://ganesh.vn/wp-content/uploads/2019/10/cach-nau-mi-quang-tom-suon.jpg" alt="" className="image1" />
                                </div>
                            </div>
                            <div className='blog-content'>
                                <div className='blog-text'>
                                    <p style={{ fontSize: 26, fontWeigh: 'bold' }}>Milk Tea</p>
                                    <p>Refers to several forms of beverage found in many cultures, containing some combination of tea and milk. Beverages vary based on the amount of each of these key ingredients, the method of preparation, and the inclusion of other ingredients (varying from sugar or honey to salt or cardamom).Instant milk tea powder is a mass-produced product.</p>
                                </div>
                                <div className="blog-img">
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Bubble_Tea.png/200px-Bubble_Tea.png" alt="" className="image1" />
                                </div>
                            </div>
                            <div className='blog-content'>
                                <div className='blog-text'>
                                    <p style={{ fontSize: 26, fontWeigh: 'bold' }}>Huda</p>
                                    <p>Is a lager beer produced and bottled in Huế, Vietnam, by Hue Brewery Ltd. The lager won a silver medal at the World Beer Championships in 2013.Huda is available as canned, bottled and draught beer.Hue Brewery Ltd.'s headquarters are located at Nguyen Sinh Cung Street in the city of Huế, Thừa Thiên–Huế Province, on the Perfume River.</p>
                                </div>
                                <div className="blog-img">
                                    <img src="https://sc01.alicdn.com/kf/UT8uY9lXIRXXXcUQpbXK/813015948/UT8uY9lXIRXXXcUQpbXK.png_.webp" alt="" className="image1" />
                                </div>
                            </div>
                        </Fade>

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
                                    <p style={{ fontSize: 16, flex: 1, fontWeight: 'bold' }}>.NET, AI developer</p>
                                </div>
                                <div className="staff-description">
                                    <p>Many years experiences with face, plate license and voices detection. Mastered of using Raspberry and inventing robots.</p>
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