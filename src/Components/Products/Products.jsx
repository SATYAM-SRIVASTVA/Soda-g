import React from 'react'
 
import './Products.css'
import Slider from 'react-slick/lib/slider'
const Skew = () => {
    const settings = {
       
        dots: true,
        dotsClass: "slick-dots slick-thumb",
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
      };
  return (
    <div className='Skew'>
        <div className="product-first">
            <div className="product-image-cont">
                
            </div>
        </div>
        <div className="product-second">
            <div className="product-second-cont">
            <div className="product-card-wrapper">
      <div className="product-card-cont row m-0">
        
      <div class="card" >
      <Slider {...settings}>
          
          <div>
          <img src="https://i-cf65.ch-static.com/content/dam/cf-consumer-healthcare/nutrition-eno/en_IN/eno-products/eno-sachet-regular.png?auto=format" alt="..."/>
          </div>
          <div>
          <img src="https://i-cf65.ch-static.com/content/dam/cf-consumer-healthcare/nutrition-eno/en_IN/eno-products/eno-sachet-orange.png?auto=format" alt="..."/>
          </div>
          <div>
          <img src="https://i-cf65.ch-static.com/content/dam/cf-consumer-healthcare/nutrition-eno/en_IN/eno-products/eno-sachet-cola.png?auto=format" class="card-img-top card-image" alt="..."/>
          </div>
        </Slider>
   <div class="card-body">
    <h5 style={{color:"#034EA2"}} class="card-title">ENO Fruit Salt (Sachet)</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-lg  custom-btn">LEARN MORE</a>
  </div>
</div>
<div class="card" >
<Slider {...settings}>
          
          <div>
          <img src="https://i-cf65.ch-static.com/content/dam/cf-consumer-healthcare/nutrition-eno/en_IN/eno-products/eno-bottle-regular.png?auto=format" class="card-img-top card-image" alt="..."/>
          </div>
          <div>
          <img src="https://i-cf65.ch-static.com/content/dam/cf-consumer-healthcare/nutrition-eno/en_IN/eno-products/eno-bottle-lemon.png?auto=format" alt="..."/>
          </div>
          <div>
          <img src="https://i-cf65.ch-static.com/content/dam/cf-consumer-healthcare/nutrition-eno/en_IN/eno-products/eno-bottle-orange.png?auto=format" alt="..."/>
          </div>
        </Slider>
          <div class="card-body">
    <h5 style={{color:"#034EA2"}} class="card-title">ENO Fruit Salt (Bottle)</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn  btn-lg custom-btn">LEARN MORE</a>
  </div>
</div>
      </div></div>
            </div>
        </div>
        <div className="product-third">
        <div className="products-text-wrapper">
      <div className="product-precautions-cont">
        <h2><i style={{color:"#034EA2"}}>Precautions</i></h2>
        <div className="product-li-cont">
        <li>Do not take this medicine for more than 14 days</li>
        <li>In case of overdose, consult a doctor</li>
        <li>Consult your doctor if symptoms persist or worsen</li>
        <li>
          ENO reduces acidity in your stomach, and may interfere with the
          absorption of other medicines.<br/> Please consult your doctor for possible
          drug interactions
        </li>
        <li>Keep out of reach of children</li>
        <li>Do not exceed the maximum dose of 2 sachets/teaspoons a day</li>
        <li>If you’re pregnant or breastfeeding, consult your doctor before taking ENO</li>
        <li>ENO may cause belching, gas, abdominal distension, and mild gastrointestinal irritation</li>
        <li>Do not take ENO if you have any of the following conditions: High blood pressure, Liver,
             heart and kidney problems,<br/>
On a low-sodium diet, Allergic to any ingredients in ENO</li>
        <li>Read label for additional information before using ENO</li>
        </div>
        <h5><i style={{color:"#034EA2"}}>References</i></h5>
        <p style={{color:"#555555",padding:"1rem",fontWeight:"bold"}}>1. A Comparison of the Effect of Regular Eno and Placebo on Intragastric pH in Healthy Fasted Subjects Does not imply relief <a href="" style={{color:"black"}}>https://www.eno.co.in/eno-works-faster-than-fast/</a>
         </p>
      </div>
      </div>
        </div>
    </div>
  )
}

export default Skew