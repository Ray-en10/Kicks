import React from 'react';
import { FaFacebook, FaTwitter, FaMailBulk } from 'react-icons/fa';
import '../css/footer.css';

function Footer() {
  return (
    <div>
       <footer className="new_footer_area bg_color">
      <div className="new_footer_top">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="f_widget social-widget pl_70 wow fadeInLeft" data-wow-delay="0.8s" style={{ visibility: 'visible', animationDelay: '0.8s', animationName: 'fadeInLeft' }}>
                <h3 className="f-title f_600 t_color f_size_18">Our Social Accounts</h3>
                <div className="f_social_icon">
                <a aria-label="Facebook" className="icon">
                  <FaFacebook />
                </a>
                <a aria-label="Twitter" className="icon">
                  <FaTwitter />
                </a>
                <a aria-label="Gmail" className="icon">
                  <FaMailBulk />
                </a>
                
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer_bg">
          <div className="footer_bg_one"></div>
          <div className="footer_bg_two"></div>
        </div>
      </div>
      <div className="footer_bottom">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-sm-7">
              <p className="mb-0 f_400">© KicksHub Inc.. 2024 All rights reserved.</p>
            </div>
            <div className="col-lg-6 col-sm-5 text-right">
              <p>Made By <b>Rayen Zaghdoudi</b></p>
            </div>
          </div>
        </div>
      </div>
    </footer>
    </div>
  );
}

export default Footer;
