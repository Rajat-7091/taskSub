import React from 'react'
import { Carousel } from 'react-bootstrap'
import b1 from '../image/b1.jpg'
import b2 from '../image/b2.jpg'
import b3 from '../image/b3.jpg'
import b4 from '../image/b4.jpg'
function Hero() {
  return (
    <Carousel>
      <Carousel.Item interval={1000} style={{height:"100vh"}}>
        <img
          className="d-block w-100 size"
          src={b1}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100 size"
          src={b2}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 size"
          src={b3}
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 size"
          src={b4}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  )
}

export default Hero