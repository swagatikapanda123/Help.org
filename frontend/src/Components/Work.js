import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Work = ({ work }) => {
  return (
    <Card className='my-3 p-3 rounded'>
      <Link to={`/work/${work._id}`}>
        <Card.Img src={work.image} variant='top' />
      </Link>
      <Card.Body>
        <Link to={`/work/${work._id}`}>
          <Card.Title as='div'> {work.name} </Card.Title>
        </Link>
      </Card.Body>
    </Card>
  )
}

export default Work
