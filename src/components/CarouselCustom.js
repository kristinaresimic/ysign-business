import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import CarouselFirstSlide from '../img/CarouselFirstSlide.jpg';
import CarouselSecondSlide from '../img/CarouselSecondSlide.jpg';
import CarouselThirdSlide from '../img/CarouselThirdSlide.jpg';


export class CarouselCustom extends Component {
  render() {
    return (
      <Carousel className="carousel ">
        <Carousel.Item className="" interval={5000}>
          <img
            className="d-block w-100"
            src={CarouselFirstSlide}
            alt="First slide"
          />
          <Carousel.Caption >
            <h1 className="h1 c-white fw-700">Buy ySign BIZ Pro</h1>
            <p className="p1 text-left c-white fw-500 m-0 p-0">Get more features with ySign BIZ Pro version with monthly or yearly subscription</p>

           {/*  <div className="carousel-btn d-flex justify-content-center align-items-center mt-3 mt-md-5">
              <a className='p1 c-white fw-500'>Find Out More</a>
            </div> */}
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item className="" interval={5000}>
          <img
            className="d-block w-100"
            src={CarouselSecondSlide}
            alt="Third slide"
          />
          <Carousel.Caption >

            <h1 className="h1 c-white fw-700 m-0 p-0">Simple UI</h1>
            <p className="p1 c-white fw-500 m-0 p-0">Start a Video Webinar, Meeting</p>
            <p className="p1 text-left c-white fw-500 m-0 p-0">or even create a Conference Room with just a few clicks.</p>

           {/*  <div className=" d-flex justify-content-center align-items-center text-center mt-3 mt-md-5">
              <div className="carousel-btn d-flex justify-content-center align-items-center mr-4">
                <a className='p1 c-white fw-500'>Sign Up</a>
              </div>
              <div className="d-flex justify-content-center align-items-center">
                <a className='p1 c-white fw-500 '>Sign In</a>
              </div>
            </div> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="" interval={5000}>
          <img
            className="d-block w-100"
            src={CarouselThirdSlide}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h1 className="h1 c-white fw-700 m-0 p-0">Full Privacy</h1>
            <p className="p1 c-white fw-500 m-0 p-0">Start a Video Webinar, Meeting</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

    )
  }
}
export default CarouselCustom