import logo from '../logo.svg';
import '../assets/css/bootstrap.min.css';
import '../assets/css/font-awesome.min.css';

import '../assets/css/flaticon.css';
import '../assets/css/magnific-popup.css';
import '../assets/css/pricing-tab.css';
import '../assets/css/aos.css';
import '../assets/css/animate.css';
import '../assets/css/slick.css';
import '../assets/css/default.css';
import '../assets/css/style.css';



/*import '../assets/js/bootstrap.min.js';*/
/*import '../assets/js/slick.min.js';*/
/*import '../assets/js/isotope.pkgd.min.js';*/
// import '../assets/js/imagesloaded.pkgd.min.js';
/*import '../assets/js/jquery.magnific-popup.min.js';*/
/*import '../assets/js/ajax-contact.js';*/
/*import '../assets/js/waypoints.min.js';*/
/*import '../assets/js/pricing-tab.js';*/
/*import '../assets/js/scrolling-nav.js';*/
/*import '../assets/js/jquery.easing.min.js';*/
// import '../assets/js/aos.js';
// import '../assets/js/wow.min.js';
/*import '../assets/js/validator.min.js';*/
// import '../assets/js/main.js';
import logo2 from '../assets/images/logo-2.png';

function Fotter() {
  return (
    <div className="Fotter">
      <footer id="footer" class="footer-area">
        <div class="footer-widget pt-80 pb-130">
            <div class="container">
                <div class="row">
                    <div class="col-lg-3 col-md-6 col-sm-12 order-md-0 order-lg-0">
                        <div class="widget-about pt-50">
                            <a href="index.html">
                                <img src={logo2} alt="Logo" />
                            </a>
                            <p class="mt-25">Lorem ipsum dolor sit amet ctetur adipisicing elit. Tempore corrupti ga earum asperiores, alias excepturi sit. Impedit, fugit laudantium.</p>
                        </div> 
                    </div>
                    <div class="col-lg-3 col-md-6 col-sm-6 order-md-2 order-lg-1">
                        <div class="widget-link pt-45">
                            <div class="widget-title pb-20">
                                <h4 class="title">Our Company</h4>
                            </div>
                            <ul>
                                <li><a href="#"><i class="fa fa-angle-right"></i> About Company </a></li>
                                <li><a href="#"><i class="fa fa-angle-right"></i> Our Testimonials</a></li>
                                <li><a href="#"><i class="fa fa-angle-right"></i> Latest News</a></li>
                                <li><a href="#"><i class="fa fa-angle-right"></i> Our Mission</a></li>
                                <li><a href="#"><i class="fa fa-angle-right"></i> Get a Free Quote</a></li>
                            </ul>
                        </div> 
                    </div>
                    <div class="col-lg-3 col-md-6 col-sm-6 order-md-3 order-lg-2">
                        <div class="widget-link pt-45">
                            <div class="widget-title pb-20">
                                <h4 class="title">Our Services</h4>
                            </div>
                            <ul>
                                <li><a href="#"><i class="fa fa-angle-right"></i> Web Design </a></li>
                                <li><a href="#"><i class="fa fa-angle-right"></i> Graphic Design</a></li>
                                <li><a href="#"><i class="fa fa-angle-right"></i> Financial Help</a></li>
                                <li><a href="#"><i class="fa fa-angle-right"></i> App Development</a></li>
                                <li><a href="#"><i class="fa fa-angle-right"></i> Print Design</a></li>
                            </ul>
                        </div> 
                    </div>
                    <div class="col-lg-3 col-md-6 col-sm-12 order-md-1 order-lg-3">
                        <div class="widget-contact pt-45">
                            <div class="widget-title pb-20">
                                <h4 class="title">Contact Us</h4>
                            </div>
                            <div class="widget-info">
                                <p><span>Location:</span> 2750 Quadra Street Victoria, Canada</p>
                                <p><span>Email:</span>info@induxtro.com</p>
                                <p><span>Phone:</span>+324-9442-515</p>
                                <ul class="social mt-30">
                                    <li><a href="#"><i class="fa fa-facebook-f"></i></a></li>
                                    <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                                    <li><a href="#"><i class="fa fa-linkedin"></i></a></li>
                                </ul>
                            </div>
                        </div> 
                    </div>
                </div> 
            </div> 
        </div> 
        <div class="footer-copyright pb-15">
            <div class="container">
                <div class="row">
                    <div class="col-md-5">
                        <div class="copyright pt-15 text-center text-md-left">
                            <p>BizTo © 2019 All Right Reserved</p>
                        </div> 
                    </div>
                    <div class="col-md-7">
                        <div class="copyright-menu text-center text-md-right pt-15">
                            <ul>
                                <li><a href="#">Terms & Condition</a></li>
                                <li><a href="#">Privacy Policy </a></li>
                                <li><a href="#">Help</a></li>
                            </ul>
                        </div>  
                    </div>
               </div>
            </div> 
        </div> 
    </footer>
    <a href="#" class="back-to-top">
        <i class="fa fa-angle-up"></i>
    </a>
    </div>
  );
}

export default Fotter;