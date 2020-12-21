import logo from '../assets/images/logo.png';
import banner1 from '../assets/images/banner/banner-full.png';
import banner2 from '../assets/images/banner/shape-1.svg';
import banner3 from '../assets/images/banner/shape-2.svg';
import banner4 from '../assets/images/banner/shape-3.svg';
import banner5 from '../assets/images/banner/shape-4.svg';
import banner6 from '../assets/images/banner/shape-5.svg';

import banner7 from '../assets/images/banner/shape-6.svg';
import banner8 from '../assets/images/banner/shape-7.svg';
import '../assets/css/animate.css';
import '../assets/css/aos.css';
import '../assets/css/bootstrap.min.css';
import '../assets/css/default.css';
import '../assets/css/flaticon.css';
import '../assets/css/font-awesome.min.css';
import '../assets/css/magnific-popup.css';
import '../assets/css/pricing-tab.css';
import '../assets/css/slick.css';
import '../assets/css/style.css';

function Header() {
  return (
    <div className="Header">
    
     <header id="home" class="header-area">
        <div class="navigation fixed-top">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <nav class="navbar navbar-expand-lg">
                            <a
                              class="navbar-brand" 
                              href="index.html"
                            >
                                <img src={logo} alt="Logo" />
                            </a> 

                            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="toggler-icon"></span>
                                <span class="toggler-icon"></span>
                                <span class="toggler-icon"></span>
                            </button>

                            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul class="navbar-nav ml-auto">
                                    <li class="nav-item active"><a class="page-scroll" href="#home">Home</a></li>
                                    <li class="nav-item"><a class="page-scroll" href="#about">About</a></li>
                                    <li class="nav-item"><a class="page-scroll" href="#service">Services</a></li>
                                    <li class="nav-item"><a class="page-scroll" href="#work">Portfolio</a></li>
                                    <li class="nav-item"><a class="page-scroll" href="#team">Team</a></li>
                                    <li class="nav-item"><a class="page-scroll" href="#blog">Blog</a></li>
                                    <li class="nav-item"><a class="page-scroll" href="#contact">Contact</a></li>
                                </ul>
                            </div> 
                            <div class="navbar-btn d-none d-sm-block">
                                <a class="main-btn" href="#">Support</a>
                            </div>
                        </nav> 
                    </div>
                </div> 
            </div> 
        </div> 
        
        <div class="header-content-area">
            <div class="container">
                <div class="row">
                    <div class="col-lg-7">
                        <div class="header-content overflow-hidden">
                            <h5 class="sub-title wow fadeInLeft" data-wow-duration="1s" data-wow-delay="0.5s">Web Design, Branding, UI Design</h5>
                            <h1 class="header-title wow fadeInLeft" data-wow-duration="2s" data-wow-delay="1s">We Are Making Creative Product</h1>
                            <p class="wow fadeInLeft" data-wow-duration="2s" data-wow-delay="1.8s">Lorem ipsum dolor sit ameconecteur adipisicing elit sed do eiusmod.</p>
                            <a class="main-btn wow fadeInUp" data-wow-duration="2s" data-wow-delay="2s" href="#">Contact Us</a>
                        </div> 
                    </div>
                </div> 
            </div> 
            <div class="header-banner">
                <div class="banner-svg">
                    <img src={banner1} alt="banner" />
                    <div class="banner-shape one animation1">
                        <img src={banner2} alt="shape" />
                    </div>
                    <div class="banner-shape tow animation4">
                        <img src={banner3} alt="shape" />
                    </div>
                    <div class="banner-shape three" data-aos="fade-down" data-aos-duration="1000">
                        <img src={banner4} alt="shape" />
                    </div>
                    <div class="banner-shape fore animation2">
                        <img src={banner5} alt="shape" />
                    </div>
                    <div class="banner-shape five animation3">
                        <img src={banner6} alt="shape" />
                    </div>
                    <div class="banner-shape six animation4">
                        <img src={banner7} alt="shape" />
                    </div>
                    <div class="banner-shape saven animation1">
                        <img src={banner8} alt="shape" />
                    </div>
                </div> 
            </div> 
        </div>
    </header>
    <section id="features" class="features-area mt-80">
        <div class="container">
            <div class="features pt-100 pb-130">
                <div class="row justify-content-center">
                    <div class="col-lg-4 col-md-8 col-sm-9">
                        <div class="single-features text-center mt-30">
                            <div class="features-icon">
                                <img src="assets/images/features/icon-1.png" alt="features" />
                            </div>
                            <div class="features-content mt-30">
                                <h4 class="features-title"><a href="#">Business Analysis</a></h4>
                                <p>Lorem ipsum dolor sit ameconecte ur adipisicing elit sed do eiusmod tempor incididunt labore dolore magnad.</p>
                            </div>
                        </div> 
                    </div>
                    <div class="col-lg-4 col-md-8 col-sm-9">
                        <div class="single-features text-center mt-30">
                            <div class="features-icon">
                                <img src="assets/images/features/icon-2.png" alt="features" />
                            </div>
                            <div class="features-content mt-30">
                                <h4 class="features-title"><a href="#">Data Managment</a></h4>
                                <p>Lorem ipsum dolor sit ameconecte ur adipisicing elit sed do eiusmod tempor incididunt labore dolore magnad.</p>
                            </div>
                        </div> 
                    </div>
                    <div class="col-lg-4 col-md-8 col-sm-9">
                        <div class="single-features text-center mt-30">
                            <div class="features-icon">
                                <img src="assets/images/features/icon-3.png" alt="features" />
                            </div>
                            <div class="features-content mt-30">
                                <h4 class="features-title"><a href="#">Friendly Support</a></h4>
                                <p>Lorem ipsum dolor sit ameconecte ur adipisicing elit sed do eiusmod tempor incididunt labore dolore magnad.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="features-man" data-aos="fade-right" data-aos-duration="1000">
                    <img src="assets/images/features/features.svg" alt="features" />
                </div>
            </div>
        </div>
    </section>
    <section id="about" class="about-area pb-130">
        <div class="about-laptop">
            <img data-aos="fade-right" data-aos-duration="1000" src="assets/images/about/loptop.svg" alt="Loptop" />
        </div>
        <div class="container">
            <div class="row justify-content-end">
                <div class="col-lg-6">
                    <div class="about-content">
                        <div class="section-title">
                            <h5 class="sub-title">WELCOME TO Biz CREATIVE AGENCY</h5>
                            <h2 class="title">3 Steps To A Success Product Business.</h2>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temp or incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse is an ultrices gravida. Risus commodo. <br/> <br/> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temp or incididunt ut labore.</p>
                        <ul class="about-list">
                            <li><i class="fa fa-check-circle"></i> Affordable pricing & billing Plans</li>
                            <li><i class="fa fa-check-circle"></i> Built with amazing featues</li>
                            <li><i class="fa fa-check-circle"></i> Easy to edit & User friendly design.</li>
                            <li><i class="fa fa-check-circle"></i> Amazing framework with free plans</li>
                        </ul>
                    </div> 
                </div>
            </div> 
        </div> 
        <div class="about-image">
            <div class="image animation1">
                <img src="assets/images/about/about.png" alt="about" />
            </div>
        </div>
        <div class="about-man">
            <img data-aos="fade-right" data-aos-duration="1000" src="assets/images/about/man.svg" alt="Man" />
        </div> 
    </section>
    <section id="counter" class="counter-area gray-bg pt-100 pb-130">
        <div class="counter-man">
            <img data-aos="fade-right" data-aos-duration="1000" src="assets/images/svg/counter-man.svg" alt="Man" />
        </div>
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-md-4 col-sm-8">
                    <div class="single-counter text-center mt-30">
                        <div class="counter-item">
                            <span><span class="counter">16</span>K</span>
                            <p>Global Customer</p>
                        </div> 
                    </div> 
                </div>
                <div class="col-md-4 col-sm-8">
                    <div class="single-counter text-center mt-30">
                        <div class="counter-item">
                            <span><span class="counter">750</span>+</span>
                            <p>Global Customer</p>
                        </div>
                    </div> 
                </div>
                <div class="col-md-4 col-sm-8">
                    <div class="single-counter text-center mt-30">
                        <div class="counter-item">
                            <span><span class="counter">25</span>+</span>
                            <p>Global Customer</p>
                        </div> 
                    </div> 
                </div>
            </div> 
        </div> 
    </section>
    <section id="service" class="services-area pt-125 pb-130">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-9">
                    <div class="section-title text-center pb-10">
                        <h5 class="sub-title">Our Amazing Services</h5>
                        <h2 class="title">We’r Provided Best Digital Marketing Services!</h2>
                    </div> 
                </div>
            </div> 
            <div class="row">
                <div class="col-lg-5">
                    <div class="nav flex-column services-content mt-50" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                        <a class="active" id="v-pills-application-tab" data-toggle="pill" href="#v-pills-application" role="tab" aria-controls="v-pills-application" aria-selected="true">
                            <div class="single-services">
                                <h4 class="services-title">Application Development</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div> 
                        </a>

                        <a id="v-pills-web-tab" data-toggle="pill" href="#v-pills-web" role="tab" aria-controls="v-pills-web" aria-selected="false">
                            <div class="single-services">
                                <h4 class="services-title">Web Development</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                        </a>

                        <a id="v-pills-uiux-tab" data-toggle="pill" href="#v-pills-uiux" role="tab" aria-controls="v-pills-uiux" aria-selected="false">
                            <div class="single-services">
                                <h4 class="services-title">UI/UX Design</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                        </a>

                        <a id="v-pills-graphic-tab" data-toggle="pill" href="#v-pills-graphic" role="tab" aria-controls="v-pills-graphic" aria-selected="false">
                            <div class="single-services">
                                <h4 class="services-title">Graphic Design</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div> 
                        </a>
                    </div> 
                </div>
                <div class="col-lg-7">
                    <div class="tab-content" id="v-pills-tabContent">
                        <div class="tab-pane fade show active" id="v-pills-application" role="tabpanel" aria-labelledby="v-pills-application-tab">
                            <div class="services-image animation1 mt-50">
                                <img src="assets/images/services.png" alt="Services" />
                            </div> 
                        </div>

                        <div class="tab-pane fade" id="v-pills-web" role="tabpanel" aria-labelledby="v-pills-web-tab">
                            <div class="services-image animation1 mt-50">
                                <img src="assets/images/services.png" alt="Services" />
                            </div>
                        </div>

                        <div class="tab-pane fade" id="v-pills-uiux" role="tabpanel" aria-labelledby="v-pills-uiux-tab">
                            <div class="services-image animation1 mt-50">
                                <img src="assets/images/services.png" alt="Services" />
                            </div> 
                        </div>

                        <div class="tab-pane fade" id="v-pills-graphic" role="tabpanel" aria-labelledby="v-pills-graphic-tab">
                            <div class="services-image animation1 mt-50">
                                <img src="assets/images/services.png" alt="Services" />
                            </div> 
                        </div>
                    </div> 
                </div>
            </div> 
        </div>
        <div class="services-woman">
            <img data-aos="fade-left" data-aos-duration="1000" src="assets/images/svg/services-woman.png" alt="Woman" />
        </div>
    </section> 
    <section id="work" class="work-area gray-bg pt-125 pb-120">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-9">
                    <div class="section-title text-center pb-10">
                        <h5 class="sub-title">Our recent works</h5>
                        <h2 class="title">We’ve Done Lot’s Of Work, Let’s Check Some From Here</h2>
                    </div> 
                </div>
            </div>
            <div class="row">
                <div class="col-lg-12">
                    <div class="work-menu text-center pt-40 pb-30">
                        <ul>
                            <li data-filter="*" class="active">All Works <span>06</span></li>
                            <li data-filter=".design">Design <span>04</span></li>
                            <li data-filter=".development">Development <span>03</span></li>
                            <li data-filter=".branding">Branding <span>03</span></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="row grid">
                <div class="col-lg-4 col-md-6 col-sm-6 design development">
                    <div class="single-work text-center mt-30">
                        <div class="work-image">
                            <img src="assets/images/work/w-1.jpg" alt="Work" />
                            <div class="work-overlay">
                                <ul class="work-icon">
                                    <li><a class="image-popup" href="assets/images/work/w-1.jpg"><i class="fa fa-picture-o"></i></a></li>
                                    <li><a href="#"><i class="fa fa-link"></i></a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="work-content">
                            <h4 class="work-title"><a href="#">YouTube Redesign</a></h4>
                            <span>Design, Branding, Logo</span>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-6 development branding">
                    <div class="single-work text-center mt-30">
                        <div class="work-image">
                            <img src="assets/images/work/w-2.jpg" alt="Work" />
                            <div class="work-overlay">
                                <ul class="work-icon">
                                    <li><a class="image-popup" href="assets/images/work/w-2.jpg"><i class="fa fa-picture-o"></i></a></li>
                                    <li><a href="#"><i class="fa fa-link"></i></a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="work-content">
                            <h4 class="work-title"><a href="#">YouTube Redesign</a></h4>
                            <span>Design, Branding, Logo</span>
                        </div>
                    </div> 
                </div>
                <div class="col-lg-4 col-md-6 col-sm-6 design">
                    <div class="single-work text-center mt-30">
                        <div class="work-image">
                            <img src="assets/images/work/w-3.jpg" alt="Work" />
                            <div class="work-overlay">
                                <ul class="work-icon">
                                    <li><a class="image-popup" href="assets/images/work/w-3.jpg"><i class="fa fa-picture-o"></i></a></li>
                                    <li><a href="#"><i class="fa fa-link"></i></a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="work-content">
                            <h4 class="work-title"><a href="#">YouTube Redesign</a></h4>
                            <span>Design, Branding, Logo</span>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-6 branding design">
                    <div class="single-work text-center mt-30">
                        <div class="work-image">
                            <img src="assets/images/work/w-4.jpg" alt="Work" />
                            <div class="work-overlay">
                                <ul class="work-icon">
                                    <li><a class="image-popup" href="assets/images/work/w-4.jpg"><i class="fa fa-picture-o"></i></a></li>
                                    <li><a href="#"><i class="fa fa-link"></i></a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="work-content">
                            <h4 class="work-title"><a href="#">YouTube Redesign</a></h4>
                            <span>Design, Branding, Logo</span>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-6 design">
                    <div class="single-work text-center mt-30">
                        <div class="work-image">
                            <img src="assets/images/work/w-5.jpg" alt="Work" />
                            <div class="work-overlay">
                                <ul class="work-icon">
                                    <li><a class="image-popup" href="assets/images/work/w-5.jpg"><i class="fa fa-picture-o"></i></a></li>
                                    <li><a href="#"><i class="fa fa-link"></i></a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="work-content">
                            <h4 class="work-title"><a href="#">YouTube Redesign</a></h4>
                            <span>Design, Branding, Logo</span>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-6 branding development">
                    <div class="single-work text-center mt-30">
                        <div class="work-image">
                            <img src="assets/images/work/w-6.jpg" alt="Work" />
                            <div class="work-overlay">
                                <ul class="work-icon">
                                    <li><a class="image-popup" href="assets/images/work/w-6.jpg"><i class="fa fa-picture-o"></i></a></li>
                                    <li><a href="#"><i class="fa fa-link"></i></a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="work-content">
                            <h4 class="work-title"><a href="#">YouTube Redesign</a></h4>
                            <span>Design, Branding, Logo</span>
                        </div>
                    </div>
                </div>
            </div> 
        </div> 
        <div class="work-woman">
            <img data-aos="fade-right" data-aos-duration="1000" src="assets/images/svg/work-man.svg" alt="Man" />
        </div> 
    </section>

     <section id="team" class="team-area pt-125 pb-100">
        <div class="team-man" data-aos="fade-right" data-aos-duration="1000">
            <img src="assets/images/svg/team.png" alt="Man" />
        </div>
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-6">
                    <div class="section-title text-center pb-30">
                        <h5 class="sub-title">Team member</h5>
                        <h2 class="title">Team You Want To Work With Us</h2>
                    </div>
                </div>
            </div>
            <div class="row team-active">
                <div class="col-lg-4">
                    <div class="single-team text-center">
                        <div class="team-image">
                            <img src="assets/images/team/t-1.jpg" alt="Team" />
                        </div>
                        <div class="team-content">
                            <h4 class="team-name"><a href="#">Rolin Marino</a></h4>
                            <span>CEO & Founder</span>
                            <ul>
                                <li><a href="#"><i class="fa fa-facebook-f"></i></a></li>
                                <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                                <li><a href="#"><i class="fa fa-linkedin"></i></a></li>
                                <li><a href="#"><i class="fa fa-google-plus"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="single-team text-center">
                        <div class="team-image">
                            <img src="./assets/images/team/t-2.jpg" alt="Team" />
                        </div>
                        <div class="team-content">
                            <h4 class="team-name"><a href="#">Mostofa Kamal</a></h4>
                            <span>UX Researcher</span>
                            <ul>
                                <li><a href="#"><i class="fa fa-facebook-f"></i></a></li>
                                <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                                <li><a href="#"><i class="fa fa-linkedin"></i></a></li>
                                <li><a href="#"><i class="fa fa-google-plus"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="single-team text-center">
                        <div class="team-image">
                            <img src="assets/images/team/t-3.jpg" alt="Team" />
                        </div>
                        <div class="team-content">
                            <h4 class="team-name"><a href="#">Tahmina Anny</a></h4>
                            <span>UI Designer</span>
                            <ul>
                                <li><a href="#"><i class="fa fa-facebook-f"></i></a></li>
                                <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                                <li><a href="#"><i class="fa fa-linkedin"></i></a></li>
                                <li><a href="#"><i class="fa fa-google-plus"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
     </section>

    <section id="pricing" class="pricing-area gray-bg pt-125 pb-130">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-6">
                    <div class="section-title text-center">
                        <h5 class="sub-title">pricing plan</h5>
                        <h2 class="title">Choose Your Best Pricing Plan</h2>
                    </div>
                </div>
            </div>
            <div class="pricing-card">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="cd-pricing-container cd-has-margins pt-60">
                            <div class="cd-pricing-switcher">
                                <div class="fieldset">
                                    
                                    <label for="yearly-2">Yearly</label>
                                    
                                    <label for="monthly-2">Monthly</label>
                                    <span class="cd-switch"></span>
                                </div>
                            </div>

                            <ul class="cd-pricing-list cd-bounce-invert">
                                <li>
                                    <ul class="cd-pricing-wrapper">
                                        <li data-type="yearly" class="is-visible">
                                            <div class="single-pricing pricing-body text-center mt-30">
                                                <div class="pricing-thumb">
                                                    <img src="assets/images/svg/priceing-1.svg" alt="pricing" />
                                                </div>
                                                <div class="pricing-price mt-30">
                                                    <h2>$25 <span>/yr</span></h2>
                                                    <p>Starter</p>
                                                </div>
                                                <div class="pricing-content mt-25">
                                                    <p class="mb-35">Power And Predictive Dialing Quality & Customer Experience 24/7 phone and email support</p>
                                                    <a class="main-btn" href="#">Buy Now</a>
                                                </div>
                                            </div>
                                        </li>
                                        <li data-type="monthly" class="is-hidden">
                                            <div class="single-pricing pricing-body text-center mt-30">
                                                <div class="pricing-thumb">
                                                    <img src="assets/images/svg/priceing-1.svg" alt="pricing" />
                                                </div>
                                                <div class="pricing-price mt-30">
                                                    <h2>$125 <span>/mo</span></h2>
                                                    <p>Starter</p>
                                                </div>
                                                <div class="pricing-content mt-25">
                                                    <p class="mb-35">Power And Predictive Dialing Quality & Customer Experience 24/7 phone and email support</p>
                                                    <a class="main-btn" href="#">Buy Now</a>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </li>
                                <li class="cd-popular">
                                    <ul class="cd-pricing-wrapper">
                                        <li data-type="yearly" class="is-visible">
                                            <div class="single-pricing pricing-body text-center mt-30">
                                                <div class="pricing-thumb">
                                                    <img src="assets/images/svg/priceing-2.svg" alt="pricing" />
                                                </div>
                                                <div class="pricing-price mt-30">
                                                    <h2>$25 <span>/yr</span></h2>
                                                    <p>Starter</p>
                                                </div>
                                                <div class="pricing-content mt-25">
                                                    <p class="mb-35">Power And Predictive Dialing Quality & Customer Experience 24/7 phone and email support</p>
                                                    <a class="main-btn" href="#">Buy Now</a>
                                                </div>
                                            </div>
                                        </li>
                                        <li data-type="monthly" class="is-hidden">
                                            <div class="single-pricing pricing-body text-center mt-30">
                                                <div class="pricing-thumb">
                                                    <img src="assets/images/svg/priceing-2.svg" alt="pricing" />
                                                </div>
                                                <div class="pricing-price mt-30">
                                                    <h2>$125 <span>/mo</span></h2>
                                                    <p>Starter</p>
                                                </div>
                                                <div class="pricing-content mt-25">
                                                    <p class="mb-35">Power And Predictive Dialing Quality & Customer Experience 24/7 phone and email support</p>
                                                    <a class="main-btn" href="#">Buy Now</a>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <ul class="cd-pricing-wrapper">
                                        <li data-type="yearly" class="is-visible">
                                            <div class="single-pricing pricing-body text-center mt-30">
                                                <div class="pricing-thumb">
                                                    <img src="assets/images/svg/priceing-3.svg" alt="pricing" />
                                                </div>
                                                <div class="pricing-price mt-30">
                                                    <h2>$25 <span>/yr</span></h2>
                                                    <p>Starter</p>
                                                </div>
                                                <div class="pricing-content mt-25">
                                                    <p class="mb-35">Power And Predictive Dialing Quality & Customer Experience 24/7 phone and email support</p>
                                                    <a class="main-btn" href="#">Buy Now</a>
                                                </div>
                                            </div>
                                        </li>
                                        <li data-type="monthly" class="is-hidden">
                                            <div class="single-pricing pricing-body text-center mt-30">
                                                <div class="pricing-thumb">
                                                    <img src="assets/images/svg/priceing-3.svg" alt="pricing" />
                                                </div>
                                                <div class="pricing-price mt-30">
                                                    <h2>$125 <span>/mo</span></h2>
                                                    <p>Starter</p>
                                                </div>
                                                <div class="pricing-content mt-25">
                                                    <p class="mb-35">Power And Predictive Dialing Quality & Customer Experience 24/7 phone and email support</p>
                                                    <a class="main-btn" href="#">Buy Now</a>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section id="testimonial" class="testimonial-area pt-125 pb-130">
        <div class="single-author-left author-one">
            <img src="assets/images/testimonial/ts-1.jpg" alt="Author" />
        </div> 
        <div class="single-author-left author-tow">
            <img src="assets/images/testimonial/ts-2.jpg" alt="Author" />
        </div> 
        <div class="single-author-left author-three">
            <img src="assets/images/testimonial/ts-3.jpg" alt="Author" />
        </div> 
        
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-8">
                    <div class="section-title text-center pb-50">
                        <h5 class="sub-title">client’s feedback</h5>
                        <h2 class="title">You Can See Our Clients Feedback</h2>
                    </div>
                </div>
            </div>
            <div class="row justify-content-center">
                <div class="col-lg-8">
                    <div class="testimonial-active">
                        <div class="single-testimonial text-center">
                            <div class="testimonial-icon">
                                <i class="flaticon-quote"></i>
                            </div>
                            <div class="testimonial-content mt-50">
                                <p>Lorem ipsum dolor sit amet, consectetur scing elit, sed do eiusmod temp or incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse is an ultrices gravida. Risus commodo. consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                <h6 class="name mt-30">Mohammad Mostofa</h6>
                                <span>CEO of uipark</span>
                            </div>
                        </div>
                        <div class="single-testimonial text-center">
                            <div class="testimonial-icon">
                                <i class="flaticon-quote"></i>
                            </div>
                            <div class="testimonial-content mt-50">
                                <p>Lorem ipsum dolor sit amet, consectetur scing elit, sed do eiusmod temp or incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse is an ultrices gravida. Risus commodo. consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                <h6 class="name mt-30">Mohammad Mostofa</h6>
                                <span>CEO of uipark</span>
                            </div>
                        </div> 
                    </div>
                </div>
            </div> 
        </div>
        
        <div class="single-author-right author-one">
            <img src="assets/images/testimonial/ts-4.jpg" alt="Author" />
        </div>
        <div class="single-author-right author-tow">
            <img src="assets/images/testimonial/ts-5.jpg" alt="Author" />
        </div> 
        <div class="single-author-right author-three">
            <img src="assets/images/testimonial/ts-6.jpg" alt="Author" />
        </div>
    </section>

    <section id="blog" class="blog-area gray-bg pt-125 pb-130">
        <div class="blog-man" data-aos="fade-right" data-aos-duration="1000">
            <img src="assets/images/svg/blog.png" alt="Man" />
        </div>
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-6">
                    <div class="section-title text-center pb-30">
                        <h5 class="sub-title">Latest News</h5>
                        <h2 class="title">Our Articles Latest News & Blog</h2>
                    </div>
                </div>
            </div>
            <div class="row justify-content-center">
                <div class="col-lg-4 col-md-8 col-sm-9">
                    <div class="single-blog mt-30">
                        <div class="blog-content">
                            <h4 class="blog-title"><a href="#">Edit when sober. Marketing is the hangover.</a></h4>
                            <p>Lorem ipsum dolor sit amet, ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim.</p>
                        </div>
                        <div class="blog-meta mt-30 d-flex">
                            <div class="blog-author">
                                <img src="assets/images/blog/ba-1.jpg" alt="Addmin" />
                            </div>
                            <div class="meta-title align-self-center">
                                <h6 class="title">Posted by <a href="#">Mohammad</a></h6>
                            </div>
                        </div>
                    </div> 
                </div>
                <div class="col-lg-4 col-md-8 col-sm-9">
                    <div class="single-blog active mt-30">
                        <div class="blog-content">
                            <h4 class="blog-title"><a href="#">Edit when sober. Marketing is the hangover.</a></h4>
                            <p>Lorem ipsum dolor sit amet, ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim.</p>
                        </div>
                        <div class="blog-meta mt-30 d-flex">
                            <div class="blog-author">
                                <img src="assets/images/blog/ba-1.jpg" alt="Addmin" />
                            </div>
                            <div class="meta-title align-self-center">
                                <h6 class="title">Posted by <a href="#">Mohammad</a></h6>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-8 col-sm-9">
                    <div class="single-blog mt-30">
                        <div class="blog-content">
                            <h4 class="blog-title"><a href="#">Edit when sober. Marketing is the hangover.</a></h4>
                            <p>Lorem ipsum dolor sit amet, ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim.</p>
                        </div>
                        <div class="blog-meta mt-30 d-flex">
                            <div class="blog-author">
                                <img src="assets/images/blog/ba-1.jpg" alt="Addmin" />
                            </div>
                            <div class="meta-title align-self-center">
                                <h6 class="title">Posted by <a href="#">Mohammad</a></h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="contact" class="contact-area pt-125 pb-130">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-6">
                    <div class="section-title section-title-2 text-center pb-30">
                        <h5 class="sub-title">contact us</h5>
                        <h2 class="title">Get In Touch</h2>
                    </div>
                </div>
            </div> 
            
            <div class="contact-form">
                <form id="contact-form" action="https://html.codeceil.com/bizto/bizto/assets/contact.php" method="post" data-toggle="validator">
                    <div class="row">
                        <div class="col-lg-6">
                            <div class="single-contact-form form-group">

                                <input type="text" name="name" placeholder="Enter Your Name" data-error="Name is required." required="required" />
                                <div class="help-block with-errors"></div>
                            </div> 
                        </div> 
                        <div class="col-lg-6">
                            <div class="single-contact-form form-group">
                                <input type="email" name="email" placeholder="Enter Your Email" data-error="Valid email is required." required="required" />
                                <div class="help-block with-errors"></div>
                            </div> 
                        </div>
                        <div class="col-lg-6">
                            <div class="single-contact-form form-group">
                                <input type="text" name="number" placeholder="Your Phone Number" data-error="Phone is required." required="required" />
                                <div class="help-block with-errors"></div>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="single-contact-form form-group">
                                <input type="text" name="subject" placeholder="Your Subject" data-error="Subject is required." required="required" />
                                <div class="help-block with-errors"></div>
                            </div>
                        </div>
                        <div class="col-lg-12">
                            <div class="single-contact-form form-group">
                                <textarea name="message" placeholder="Write Your Message" data-error="Please,leave us a message." required="required"></textarea>
                                <div class="help-block with-errors"></div>
                            </div> 
                        </div>
                        <p class="form-message"></p>
                        <div class="col-lg-12">
                            <div class="single-contact-form text-center">
                                <button type="submit" class="main-btn main-btn-2">Send Message</button>
                            </div> 
                        </div>
                    </div>
                </form>
            </div>
        </div>
        <div class="contact-woman" data-aos="fade-left" data-aos-duration="1000">
            <img src="assets/images/svg/contact.png" alt="Woman" />
        </div>
    </section>

    </div>
  );
}

export default Header;