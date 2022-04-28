import React from 'react'
import './Header.css'
import Slider from 'react-slick'
import img1 from './Assets/img1.jpg'
import img6 from './Assets/img6.jpg'
import img7 from './Assets/img7.jpg'
import Featured from './Featured';
import Textimg from './Textimg';
// import Footer from './Footer';

const Header = () => {

    var settings = {
      // dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      pauseOnHover: true
      };
  return (
    <>
    <div className="main-contianer">
    {/* <div className="diagonal"> */}
        <div className="img-container">
        <Slider {...settings}>
      <div className='second-container'>
        <img src="https://images.unsplash.com/photo-1613892571289-39d5c649887a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c2FjaGV0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"/>
        <a class="banner-logo" href="#"><h1>sodaG</h1></a>
        <div className="banner-heading">
        <h1 className='banner-text'>Get Fast Relief <br/>From Acidity</h1>
        <h5 className='banner-para'>sodaG get to works in 6 seconds</h5>
        <button className='banner-btn'><span className='btn-text'>Find Out How sodaG Works</span></button>
        </div>
        </div>
      <div className='second-container'>
        <img src="https://images.unsplash.com/photo-1526947425960-945c6e72858f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDh8fHByb2R1Y3QlMjBwaG90b2dyYXBoeXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60" alt="" />
        <a class="banner-logo" href="#"><h1>sodaG</h1></a>
        <div className="banner-heading">
        <h1 className='banner-text'>Get Fast Relief <br/>From Acidity</h1>
        <h5 className='banner-para'>sodaG get to works in 6 seconds</h5>
        <button className='banner-btn'>Find Out How sodaG Works</button>

        </div>
      </div>
      <div className='second-container'>
        
        <img src="https://images.unsplash.com/photo-1501784050997-975d9fdb56d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fHNvZGElMjB3YXRlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60" />
        <a class="banner-logo" href="#"><h1>sodaG</h1></a>
        <div className="banner-heading">
        <h1 className='banner-text'>Get Fast Relief <br/>From Acidity</h1>
        <h5 className='banner-para'>sodaG get to works in 6 seconds</h5>
        <button className='banner-btn'>Find Out How sodaG Works</button>

        </div>
      </div>
    </Slider>
        </div>
    {/* </div> */}
    </div>


<Featured/>
<Textimg/>

</>
  )
}

export default Header