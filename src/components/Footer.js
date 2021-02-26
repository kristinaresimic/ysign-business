import React, { Component } from "react";
import {
    Link
  } from "react-router-dom";

const Footer = () =>  {
 {
        return (
            <div className='footer p-5'>
                <div  className="d-flex justify-content-around col-12 col-md-6 col-lg-4 m-auto">
                <Link to='./terms' target='_blank'>
                    <p className='p3 c-white footer-item m-0 p-0 '>Terms & Conditions</p>
                </Link>
                <Link to='./privacy-policy' target="_blank">
                    <p className='p3 c-white footer-item m-0 p-0 '>Privacy Policy</p>
                </Link>
                </div>
            </div>
        );
    }
}
export default Footer;
