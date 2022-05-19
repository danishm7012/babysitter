import React from 'react'
import { Row, Container, Col } from 'react-bootstrap'

function HeaaderTop() {
  return (
    <div className='top-bar'>
      <Container>
        <Row>
          <Col>
            <p>
              <a href='tel:+971545277366' className='top-link'>
                <i class='fas fa-phone'></i> 03027341637{' '}
              </a>
              <a href='https://api.whatsapp.com/send?phone=+971581439463'>
                <i class='fab fa-whatsapp'></i> 0333 1472568
              </a>
            </p>
          </Col>
          <Col>
            <div className='topSocailLink'>
              <a
                href='https://twitter.com/ProGCC2'
                target='blank'
                class='twitter'
              >
                <i className='fab fa-twitter'></i>
              </a>
              <a
                href='https://www.facebook.com/PRO-GCC-107895398113832'
                target='blank'
                class='facebook'
              >
                <i className='fab fa-facebook-f'></i>
              </a>
              <a
                href='https://www.instagram.com/progcc1/'
                target='blank'
                class='instagram'
              >
                <i className='fab fa-instagram'></i>
              </a>
              <a
                href='https://www.linkedin.com/company/73792623'
                target='blank'
                class='linkedin'
              >
                <i className='fab fa-linkedin-in'></i>
              </a>
              <a
                href='https://www.pinterest.com/progccofficial/'
                target='blank'
                class='pinterest'
              >
                <i className='fab fa-pinterest'></i>
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default HeaaderTop
