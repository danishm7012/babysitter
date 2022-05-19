import React from 'react'
import FAQData from '../companiesData/FAQ'
import { Col, Row, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const FAQ = () => {
  return (
    <div className='section'>
      <div className='section-title'>
        <h2>Frequently Ask Quesions</h2>
      </div>
      <Container>
        {FAQData.map((ques) => (
          <Row key={ques.Q}>
            <Col>
              <Row>
                {' '}
                <p className='FAQ-Q'>{ques.Q}</p>
              </Row>
              <Row>
                <p className='FAQ-link'>
                  Visit:{' '}
                  <Link to={ques.link} style={{ color: 'blue' }}>
                    Click me!
                  </Link>
                </p>
              </Row>
            </Col>
          </Row>
        ))}
      </Container>
    </div>
  )
}

export default FAQ
