import React from 'react'
import Header from "../../Header";
import Slider from 'react-slick'
import img1 from '../../Assets/img1.jpg'
import img6 from '../../Assets/img6.jpg'
import img7 from '../../Assets/img7.jpg'



const file = () => {
    var settings = {
        // dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 4000,
        pauseOnHover: true
    }
  return (
    <>
    <div className="main-contianer">
    <div className="diagonal">
        <div className="img-container">
        <Slider {...settings}>
      <div className='second-container'>
        <img src="https://images.unsplash.com/photo-1630408515760-df2f460465d9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJldmVyYWdlJTIwY2Fuc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60" alt="img2"/>
        <a class="banner-logo" href="#"><h1>sodaG</h1></a>
        <div className="banner-heading">
        <h1 className='banner-text'>Get Fast Relief <br/>From Acidity</h1>
        <h5 className='banner-para'>sodaG get to works in 6 seconds</h5>
        <button className='banner-btn'><span className='btn-text'>Find Out How sodaG Works</span></button>
        </div>
        </div>
      <div className='second-container'>
        <img src={img6} alt="" />
        <a class="banner-logo" href="#"><h1>sodaG</h1></a>
        <div className="banner-heading">
        <h1 className='banner-text'>Get Fast Relief <br/>From Acidity</h1>
        <h5 className='banner-para'>sodaG get to works in 6 seconds</h5>
        <button className='banner-btn'>Find Out How sodaG Works</button>

        </div>
      </div>
      <div className='second-container'>
        
        <img src={img7} />
        <a class="banner-logo" href="#"><h1>sodaG</h1></a>
        <div className="banner-heading">
        <h1 className='banner-text'>Get Fast Relief <br/>From Acidity</h1>
        <h5 className='banner-para'>sodaG get to works in 6 seconds</h5>
        <button className='banner-btn'>Find Out How sodaG Works</button>

        </div>
      </div>
    </Slider>
        </div>
    </div>
    </div>
    </>
  )
}

export default file