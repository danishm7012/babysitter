import React from 'react'
import FSdata from '../../companiesData/fServices'
import './fServices.css'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const FServices = () => {
  return (
    <div id='services' className='section'>
      <Container>
        <div className='section-title'>
          <h2 className='py-3 text-center pro-h1'>PRO Services in UAE</h2>
          <p>
            When it comes to delivering PRO Services in UAE, our team of expert
            Consultants handhold you throughout the required PRO Service from
            the beginning to the end. Our Consultants here in Dubai offer PRO
            Services to our valuable clients by liaising with the concerned
            Government Authorities.
          </p>
        </div>

        <Row>
          {FSdata.filter((s) => s.category === 'PRO').map((service) => (
            <Col lg={4} md={4} sm={12} xs={12} key={service.name}>
              <Link to={`/${service._id}`}>
                <div className='f-services'>
                  <img
                    className='service-icon'
                    src={service.icon}
                    alt={service.id}
                  />
                  <p>{service.name}</p>
                </div>
              </Link>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  )
}

export default FServices
