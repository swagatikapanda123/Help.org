import React from 'react'
import { Carousel } from 'react-bootstrap'

const CarouselComponent = () => {
  return (
    <div>
      <Carousel pause='hover' variant='dark' className='bg-light'>
        <Carousel.Item>
          <img
            className='d-block w-100'
            src='/images/1.png'
            alt='First slide'
          />
          {/* <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item>
          <img
            className='d-block w-100'
            src='/images/2.png'
            alt='Second slide'
          />

          {/* <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption> */}
        </Carousel.Item>
      </Carousel>
    </div>
  )
}

export default CarouselComponent
