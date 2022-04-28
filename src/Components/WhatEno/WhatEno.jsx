import React from "react";
import img1 from '../Assets/img1.jpg'

import "./WhatEno.css";
import Slider from "react-slick/lib/slider";
const Skew = () => {
  const settings = {
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="Skew">
      <div className="discover-first">
        <div className="discover-image-cont">
          <h1 style={{ color: "white",padding:'1rem' }}>sodaG</h1>
          {/* <div className="discover-text"> */}
            <h1 className="discover-heading" style={{ color: "white" }}>Discover sodaG</h1>
          {/* </div> */}
        </div>
      </div>
      <div className="discover-second">
        <div className="discover-para-cont">
          <div className="icon-cont-wrap row">
            <div className="icon-cont">
              <div className="first-icon-cont">
                <img
                  src="https://i-cf65.ch-static.com/content/dam/cf-consumer-healthcare/nutrition-eno/en_IN/discover-eno/discover-what/desktop/Discover_Icon_Whats.png?auto=format"
                  alt=""
                />
                <h5 style={{ color: "#555555", fontStyle: "italic" }}>
                <a href="" style={{color:'#555555'}}> What is sodaG?</a> 
                </h5>
              </div>
              <div className="first-icon-cont">
                <img
                  src="https://i-cf65.ch-static.com/content/dam/cf-consumer-healthcare/nutrition-eno/en_IN/discover-eno/discover-what/desktop/Discover_Icon_The.png?auto=format"
                  alt=""
                />
                <h5 style={{ color: "#555555", fontStyle: "italic" }}>
                 <a href="" style={{color:'#555555'}}>sodaG Journey</a>
                </h5>
              </div>
            </div>
            <div className="para-one">
              <h5>
                When you are living life to the fullest, the last thing you want
                to worry about is acidity. Don’t hold yourself back. Say no to
                heartburn with ENO.
              </h5>
              <div className="para-two">
                <h5>
                  ENO Fruit Salt contains Svarjiksara (Shudh) and Nimbukamlam
                  (Shushkam), which neutralizes stomach acid on contact. ENO
                  Fruit Salt gets to work faster than leading liquid and tablet
                  antacids.¹ In fact ENO gets to work in just 6 seconds.²
                </h5>
              </div>
              <div className="heading-cont">
                <h2 style={{ color: "#1E3796" }}>Our Purpose</h2>
              </div>
              <div className="para-three">
                <h5>
                  {" "}
                  Make life better and live in the moment with ENO. ENO exists
                  to champion your appetite for life — through speed, efficacy,
                  credibility, and expertise.
                </h5>
                <div className="discover-img-cont"></div>
                <div className="why-cont">
                  <h2 style={{ color: "#1E3796" }}>Why sodaG?</h2>
                </div>
                <h5>
                  Whether it’s acid reflux, or heartburn, get relief fast with
                  ENO. ENO Fruit Salt gets to work faster than leading liquid
                  and tablet antacids.² In fact, ENO gets to work in 6 seconds.²
                </h5>
                <div className="how-cont">
                  <h2 style={{ color: "#1E3796" }}>How sodaG Helps?</h2>
                  <h5>
                    ENO is made with ingredients that dissolve quickly to create
                    an effervescent solution, neutralising stomach acid on
                    contact.
                  </h5>
                  <div className="how-use">
                    <h2 style={{ color: "#1E3796" }}>How To Use sodaG?</h2>
                    <h5>
                      Dissolve one sachet of ENO, or one teaspoon of Eno powder
                      (5 g) in a glass of water (150 ml) and drink up. It is
                      recommended to consume ENO as soon as it has completely
                      dissolved in the water. ENO powder is indicated for adults
                      and children aged 12 years and above.
                    </h5>
                  </div>
                  <div className="note-cont">
                    <h2 style={{ color: "#1E3796" }}>
                      <i>
                        {" "}
                        Note: Do not take ENO if you have any of the following
                        medical conditions
                      </i>
                      <div className="note-li-cont">
                        <li>Liver, heart, kidney problem</li>
                        <li>High blood pressure</li>
                        <li>Allergy to any ingredients of ENO</li>
                        <li>On a low sodium diet</li>
                      </div>
                    </h2>
                  </div>
                  <div className="after-note-para">
                    <h5>
                      Consult your doctor before taking this product if you have
                      an existing medical condition, are on medication, pregnant
                      or breastfeeding. In the event of an overdose, seek
                      immediate medical attention."
                    </h5>
                  </div>
                  <div className="discover-details-cont">
                    <details style={{ color: "#1E3796", fontSize: "1.2rem" }}>
                      <li>
                        Lab studies (data on file) comparing ENO Fruit Salt ENO
                        powder to market leaders in liquid/tablet antacid
                        category for ascertaining time to acid neutralization
                        <a href="">
                          https://www.eno.co.in/eno-works-faster-than-fast/
                        </a>
                      </li>
                      <li>
                        A Comparison of the Effect of Regular Eno and Placebo on
                        Intragastric pH in Healthy Fasted Subjects Does not
                        imply relief
                        <a href="">
                          https://www.eno.co.in/eno-works-faster-than-fast/
                        </a>
                      </li>
                    </details>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="textimg-container">
     <div className="row ">
       <div className="text-container">
         <div className="row g-0">
           <div className="col-md-6 col-sm-12 image-container">
              <img src='https://images.unsplash.com/photo-1637330765988-89f4be4ec090?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c3RvbWFjaCUyMGFjaGV8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60' />
           </div>
           <div className="col-md-6 col-sm-12 heading-container">
              <h1>Did You Know ?</h1>
              <p>People who are overweight or have high BMI are more likely to suffer from acidity.</p>
              <a href=''><button>Learn More</button></a>
           </div>
         </div>
       </div>
     </div>
</div>
    </div>
  );
};

export default Skew;
