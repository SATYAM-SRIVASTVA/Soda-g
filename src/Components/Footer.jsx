import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'


const Footer = () => {
return (
    
<footer class="nb-footer">
<div class="container">
<div class="row m-0">
<div class="col-sm-12">
<div class="about">
  <img src="images/logo.png" class="img-responsive center-block" alt=""/>

  <div class="social-media">
    <ul class="list-inline">
      <li><a href="" title=""><i class="fa fa-facebook"></i></a></li>
      <li><a href="" title=""><i class="fa fa-youtube"></i></a></li>
      <li><a href="" title=""><i class="fa fa-instagram"></i></a></li>
    </ul>
  </div>
</div>
</div>

<div class="col-md-3 col-sm-6">
<div class="footer-info-single">
  <h2 class="title">About Acidity</h2>
  <ul class="list-unstyled">
  
    <li><a href="" title=""><Link  to="/understand"><i class="fa fa-angle-double-right">
      </i>Acidity & Acid Reflex</Link></a></li>
    <li><a href="" title=""><Link  to="/living"><i class="fa fa-angle-double-right">
      </i>Managing Acidity</Link></a></li>
    <li><a href="" title=""><Link  to="/understandheartburn"><i class="fa fa-angle-double-right">
      </i>Other Digestive Conditions</Link></a></li>
    
    <li><a href="" title=""><Link  to="/gas"><i class="fa fa-angle-double-right">
      </i> Digestive Wellness</Link></a></li>
  </ul>
</div>
</div>

<div class="col-md-3 col-sm-6">
<div class="footer-info-single">
  <h2 class="title">Products</h2>
  <ul class="list-unstyled">
    <li><a href="" title=""><Link  to="/sachet"><i class="fa fa-angle-double-right"></i>sodaG Fruit Salt</Link></a></li>
  </ul>
</div>
</div>

<div class="col-md-3 col-sm-6">
<div class="footer-info-single">
  <h2 class="title">Discover sodaG</h2>
  <ul class="list-unstyled">
    <li><a href="" title=""><Link  to="/bottle"><i class="fa fa-angle-double-right"></i>How sodaG Works</Link></a></li>
    <li><a href="" title=""><i class="fa fa-angle-double-right"></i>Our Story</a></li>
    <li><a href="" title=""><i class="fa fa-angle-double-right"></i>Latest Campaigns</a></li>
  </ul>
</div>
</div>

<div class="col-md-3 col-sm-6">
<div class="footer-info-single">
  <h2 class="title">Connect With US</h2>
  <ul class="list-unstyled">
    <li><a href="" title=""><i class="fa fa-angle-double-right"></i>Contact Us</a></li>
    <li><a href="" title=""><i class="fa fa-angle-double-right"></i>Frequently Asked Questions</a></li>
    <li><a href="" title=""><i class="fa fa-angle-double-right"></i>Where To Buy</a></li>
  </ul>
</div>
</div>
</div>
</div>

<section class="copyright">
<div class="container">
<div class="row">
<div class="col-sm-6">
<p>Copyright © 2022. sodaG.</p>
</div>
<div class="col-sm-6"></div>
</div>
</div>
</section>
</footer>
)
}

export default Footer