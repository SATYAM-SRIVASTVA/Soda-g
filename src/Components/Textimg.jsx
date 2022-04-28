import React from 'react'
import './Textimg.css'
import img1 from './Assets/img5.jpg'

const Textimg = () => {
  return (

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
  )
}

export default Textimg