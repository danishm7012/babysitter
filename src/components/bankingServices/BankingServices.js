import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import AllServices from '../../companiesData/fServices'
import './banking.css'
const data = [
  {
    id: 1,
    title: 'Little Rainbows',
  },
  {
    id: 2,
    title: 'Unicorn Kids.',
  },
  {
    id: 3,
    title: 'Just for Babies.',
  },
  {
    id: 4,
    title: "Toddlers' Paradise.",
  },
  {
    id: 5,
    title: 'Nannies That Care.',
  },
  {
    id: 6,
    title: 'Tiny Treasures.',
  },
  {
    id: 7,
    title: 'Kids Haven.',
  },
  {
    id: 8,
    title: "Safe n' Happy.",
  },
  {
    id: 9,
    title: 'Safe n’ Happy',
  },
  {
    id: 10,
    title: 'The Cuddle Crew',
  },
]
const BankingServices = () => {
  return (
    <div id='bankingServices' className='section banking-h1'>
      <Row>
        <Col>
          <div className='section-title container'>
            <h2>Baby Sitting and expense management</h2>
          </div>
        </Col>
      </Row>
      <Container>
        <Row>
          {AllServices.filter((service) => service.category === 'Banking').map(
            (s) => (
              <Col lg={4}>
                {/* <Link to={`${s._id}`}> */}
                <Link to={``}>
                  <Card className='banking-servcie'>
                    <Card.Title>
                      <img className='banking-icon' src={s.icon} alt={s.id} />
                      {s.name}
                    </Card.Title>
                  </Card>
                </Link>
              </Col>
            )
          )}
        </Row>
      </Container>
    </div>
  )
}

export default BankingServices
