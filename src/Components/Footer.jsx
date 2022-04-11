import React from 'react';
import { NavLink } from 'react-router-dom';


const Footer = () => (
    <footer>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
            <p className='connect'>CONNECT WITH US</p>
            
              <div className="footer-container">
                  <div className="left-col">
                     {/* Footer links  */}
                      <div className="social-media">
                        <a href="https://www.facebook.com" className="fa fa-facebook" target="_blank" aria-label="facebook" rel="noopener"></a>
                        <a href="https://twitter.com" className="fa fa-twitter" target="_blank" aria-label="Twitter" rel="noopener"></a>
                        <a href="https://www.instagram.com" className="fa fa-instagram" target="_blank" aria-label="instagram" rel="noopener"></a>
                        <a href="https://youtube.com" className="fa fa-youtube" target="_blank" aria-label="google" rel="noopener"></a>
                      </div>

                      {/* Copyright footer section */}

                      <p className="copyrights">Copyright &copy; 2022, GRUBHUB ALL RIGHTS RESERVED</p>
                      </div>

                      {/* Discount Section */}
                      <div className="right-col">
                          <p>HAVE ANY ISSUES WITH YOUR ORDER?</p>
                     
                    <ul className='footerContact'>
                        <li ><NavLink exact ={true} to ="/ContactUs">CONTACT US</NavLink></li>
                    </ul>
                
                  </div>
              </div>
          </footer>
)

export default Footer