import React from 'react'
import './Featured.css'
import Slider from 'react-slick'
import img2 from './Assets/img2.jpg'
import img3 from './Assets/img3.jpg'
import img4 from './Assets/img4.jpg'
import img5 from './Assets/img5.jpg'


const Featured = () => {

    var settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 5000,
        autoplaySpeed: 5000,
        pauseOnHover: true,
        // cssEase: "linear",
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
      };
  return (
    <div className="article-container">
        <h1>
            Featured Articles
        </h1>

        <div className="carousel-container">
        <Slider {...settings}>
      <div className='img-carousel'>
        <h3 >Heartburn During Pregnancy</h3>
        <img src={img2} alt="img2"/>
      </div>
      <div className='img-carousel'>
        <h3>Gas Relief</h3>
        <img src={img3} alt="" />
      </div>
      <div className='img-carousel'>
        <h3>Understanding Acidity</h3>
        <img src={img4} />
      </div>
      <div className='img-carousel'>
        <h3>Initial symptoms of Acidity</h3>
        <img src={img5} />
      </div>
    </Slider>
        </div>

        <div className="diagonal2">
            <div className="diagonal3"></div>
        </div>
    
    

    </div>
  )
}

export default Featured