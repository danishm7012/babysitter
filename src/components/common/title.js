import React from 'react'
import './title.css'
import { Image, Row, Col } from 'react-bootstrap'
const title = ({ img }) => {
  return (
    <Row>
      <Col>
        <Image className='service-title' src={img} height='auto' width='100%' />
      </Col>
    </Row>
  )
}

export default title
