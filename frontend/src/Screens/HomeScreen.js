import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col } from 'react-bootstrap'
import Work from '../Components/Work'
import { listWorks } from '../actions/workAction'
import Loader from '../Components/Loader'
import Message from '../Components/Message'
import CarouselComponent from '../Components/CarouselComponent'

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
      <h1>Recent Activities</h1>
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
      )}
    </>
  )
}

export default HomeScreen
