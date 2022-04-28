import React from 'react'
import './Youmight.css'

const Youmight = () => {
  return (
    <>
    <div className="you-main-container">
      <div className="you-main-wrapper">

        <div className="you-break-line">
          <h2>
          You Might Also Like
          </h2>
        </div>
        <div className="you-row row" style={{margin:'0'}}>
          <div className="you-colfirst col col-lg-6 col-md-12 col-sm-12">
            <div className="you-firstcol-wrap">
              <div className="you-img-cont">
                <div className="you-img-wrap">
                  <div className="you-img-first"></div>
                </div>
              </div>
              <div className="you-para">
                <h2>
                Understanding<br/> Acidity
                </h2>
                <p>
                Understanding acidity is the first step to living life non-stop.
                </p>
              </div>
            </div>

          </div>
          <div className="you-colsecond col col-lg-6 col-md-12 col-sm-12">
  <div className="you-firstcol-wrap">
              <div className="you-img-cont">
                <div className="you-img-wrap">
                  <div className="you-img-second"></div>
                </div>
              </div>
              <div className="you-para">
                <h2>
                What Is sodaG 
                </h2>
                <p>
                A fast remedy, sodaG gets to work in just 6 seconds and relieves acidity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Youmight