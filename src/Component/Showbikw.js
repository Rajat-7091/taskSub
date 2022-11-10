import React from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import { bike } from './bike'

function Showbikw() {
  return (
    <Container className='d-flex '>
    <Row>
      
      {bike.map((item,index)=>{
    return(
      <Col className='mt-5' key={index}>
      <Card style={{ width: '18rem' }}>
        
      <Card.Img variant="top" src={item.image} />
      <Card.Body>
        <Card.Title>{item.name}</Card.Title>
        <Button variant="primary">Buy</Button>
      </Card.Body>
    </Card>
    </Col>
    )
  })}
      
   
    </Row>
  
  </Container>
  )
}

export default Showbikw