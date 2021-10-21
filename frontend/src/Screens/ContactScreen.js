import React, { useState } from 'react'
import FormContainer from '../Components/FormContainer'
import { Form, Button, Row, Col, Container } from 'react-bootstrap'

const ContactScreen = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const submitHandler = () => {
    console.log('message submitted')
  }
  return (
    <div>
      <FormContainer>
        <h1>Contact Screen</h1>
        <Form onSubmit={submitHandler}>
          <Form.Group controlId='name'>
            <Form.Label>Name</Form.Label>
            <Form.Control
              type='name'
              placeholder='Enter name'
              value={name}
              onChange={(e) => setName(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Form.Group controlId='email'>
            <Form.Label>Email</Form.Label>
            <Form.Control
              type='email'
              placeholder='Enter Email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Form.Group controlId='message'>
            <Form.Label>Message</Form.Label>
            <Form.Control
              type='message'
              placeholder='Enter message'
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></Form.Control>
          </Form.Group>
        </Form>
        <Button
          type='submit'
          variant='primary'
          className='mx-auto'
          style={{ margin: '10px' }}
        >
          Submit
        </Button>
      </FormContainer>

      <Container style={{ marginTop: '50px' }}>
        <Row>
          <Col md={3}>
            <h3>Reach us at:</h3>
          </Col>
          <Col md={6}>
            {/* <span>
              <i class='fas fa-envelope'></i>
              <a href='mailto:support@gmail.com'>support@gmail.com</a>
            </span>
            <i class='fas fa-phone'></i>
            <p>+91 8658300375</p> */}
            <Row>
              <Col>
                <i class='fas fa-envelope'></i>
                <a
                  href='mailto:support@gmail.com'
                  style={{ marginRight: '10px', textDecoration: 'none' }}
                >
                  {' '}
                  support@gmail.com
                </a>
              </Col>
              <Col>
                <i class='fas fa-phone' style={{ marginRight: '10px' }}>
                  {' '}
                  +91 8658300375
                </i>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default ContactScreen
