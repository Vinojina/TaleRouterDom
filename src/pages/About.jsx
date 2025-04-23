import Service from "../assets/images/services-01.jpg";
import Data from "../assets/images/services-02.jpg";
import Pro from "../assets/images/services-03.jpg";
import Image from "../assets/images/services-04.jpg";
import Left from "../assets/images/left-infos.jpg";
function About(){
  return(
    <>

<div className="services section" id="services">
  <div className="container">
    <div className="row">
      <div className="col-lg-6 offset-lg-6">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-heading">
              <h2>We Provide <em>Different Services</em> &amp;
                <span>Features</span> For Your Agency</h2>
                <div className="line-dec"></div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doers eiusmod.</p>
            </div>
          </div>
          <div className="col-lg-6 col-sm-6">
            <div className="service-item">
              <div className="icon">
                <img src={Service} alt="discover SEO" class="templatemo-feature" />
              </div>
              <h4>Discover More on Latest SEO Trends</h4>
            </div>
          </div>
          <div className="col-lg-6 col-sm-6">
            <div className="service-item">
              <div className="icon">
                <img src={Data} alt="data analysis" class="templatemo-feature" />
              </div>
              <h4>Real-Time Big Data Analysis</h4>
            </div>
          </div>
          <div className="col-lg-6 col-sm-6">
            <div className="service-item">
              <div className="icon">
                <img src={Pro} alt="precise data" class="templatemo-feature" />
              </div>
              <h4>Precise Data Analysis &amp; Prediction</h4>
            </div>
          </div>
          <div className="col-lg-6 col-sm-6">
            <div className="service-item">
              <div className="icon">
                <img src={Image} alt="SEO marketing" class="templatemo-feature" />
              </div>
              <h4>SEO Marketing &amp; Social Media</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
  
<div className="infos section" id="infos">
  <div className="container">
    <div className="row">
      <div className="col-lg-12">
        <div className="main-content">
          <div className="row">
            <div className="col-lg-6">
              <div className="left-image">
                <img src={Left} alt="" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="section-heading">
                <h2>More <em>About Us</em> &amp; What <span>We Offer</span></h2>
                <div className="line-dec"></div>
                <p>You are free to use this template for any purpose. You are not allowed to redistribute the download.</p>
              </div>
              <div className="skills">
                <div className="skill-slide marketing">
                  <div className="fill"></div>
                  <h6>Marketing</h6>
                  <span>90%</span>
                </div>
                <div className="skill-slide digital">
                  <div className="fill"></div>
                  <h6>Ditigal Media</h6>
                  <span>80%</span>
                </div>
                <div className="skill-slide media">
                  <div className="fill"></div>
                  <h6>Social Media Managing</h6>
                  <span>95%</span>
                </div>
              </div>
              <p className="more-info">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doers eiusmod tempor</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<footer>
   <div className="container">
     <div className="col-lg-12">
       <p>Copyright © 2036 <a href="#">Tale SEO Agency</a>. All rights reserved. 
       
       <br />Design: <a href="https://templatemo.com" target="_blank">TemplateMo</a></p>
     </div>
   </div>
 </footer>
  
    </>
  )
}
export default About;