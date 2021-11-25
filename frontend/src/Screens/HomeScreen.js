import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, Card } from 'react-bootstrap'
import Work from '../Components/Work'
import { listWorks } from '../actions/workAction'
import Loader from '../Components/Loader'
import Message from '../Components/Message'
import CarouselComponent from '../Components/CarouselComponent'
import './HomeScreen.css'

const HomeScreen = () => {
  const dispatch = useDispatch()

  const workList = useSelector((state) => state.workList)
  const { loading, error, works } = workList
  useEffect(() => {
    dispatch(listWorks())
  }, [dispatch])

  return (
    <>
      <CarouselComponent />
      {/* <h1>Recent Activities</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'> {error} </Message>
      ) : (
        <Row>
          {works.map((work) => (
            <Col sm={12} md={6} lg={4} xl={2}>
              <Work work={work} />
            </Col>
          ))}
        </Row>
      )} */}

      <div className='row'>
        <div className='col-md-6 col-lg-3 grid-margin stretch-card'>
          <div className='card-home'>
            <div
              className='bg-image hover-overlay ripple'
              data-mdb-ripple-color='light'
            >
              <a href='#!'>
                <div
                  className='mask'
                  style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}
                ></div>
              </a>
            </div>
            <div className='card-body'>
              <h5 className='card-title'>Card title</h5>
              <p className='card-text'>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href='#!' className='btn btn-primary'>
                Button
              </a>
            </div>
          </div>
        </div>

        <div className='col-md-6 col-lg-3 grid-margin stretch-card'>
          <div className='card-home'>
            <div
              className='bg-image hover-overlay ripple'
              data-mdb-ripple-color='light'
            >
              <a href='#!'>
                <div
                  className='mask'
                  style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}
                ></div>
              </a>
            </div>
            <div className='card-body'>
              <h5 className='card-title'>Card title</h5>
              <p className='card-text'>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href='#!' className='btn btn-primary'>
                Button
              </a>
            </div>
          </div>
        </div>

        <div className='col-md-6 col-lg-3 grid-margin stretch-card'>
          <div className='card-home'>
            <div
              className='bg-image hover-overlay ripple'
              data-mdb-ripple-color='light'
            >
              <a href='#!'>
                <div
                  className='mask'
                  style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}
                ></div>
              </a>
            </div>
            <div className='card-body'>
              <h5 className='card-title'>Card title</h5>
              <p className='card-text'>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href='#!' className='btn btn-primary'>
                Button
              </a>
            </div>
          </div>
        </div>

        <div className='col-md-6 col-lg-3 grid-margin stretch-card'>
          <div className='card-home'>
            <div
              className='bg-image hover-overlay ripple'
              data-mdb-ripple-color='light'
            >
              <a href='#!'>
                <div
                  className='mask'
                  style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}
                ></div>
              </a>
            </div>
            <div className='card-body'>
              <h5 className='card-title'>Card title</h5>
              <p className='card-text'>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href='#!' className='btn btn-primary'>
                Button
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default HomeScreen
