import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Work = ({ blog }) => {
  return (
    <Card className='my-3 p-3 rounded'>
      <Link to={`/blog/${blog._id}`}>
        <Card.Img src={blog.image} variant='top' />
      </Link>
      <Card.Body>
        <Link to={`/blog/${blog._id}`}>
          <Card.Title as='div'> {blog.title} </Card.Title>
          <Card.Text> {blog.article} </Card.Text>
        </Link>
      </Card.Body>
    </Card>
  )
}

export default Work
