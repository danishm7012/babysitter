import React from 'react'
import { Container, Image, Col, Row } from 'react-bootstrap'

function aboutUs() {
  return (
    <section id='about' className='about section'>
      <div className='section-title container'>
        <h2>About Us</h2>
        <p>
          Trained and experienced staff, Attractive and friendly environment
          Meeting customer needs and expectations Innovation and Perseverance.
          high quality care and education.
        </p>
      </div>
      <Image src='/images/editaboutpic.png' height='auto' width='100%' />
      <Container>
        <Row>
          <Col>
            <h3>Mission</h3>
            <p>
              Our mission is to provide a caring, kind and secure environment
              for children to enjoy suitable play experiences. We provide a
              comprehensive and safe environment for children’s development. To
              build a full child-focused center that helps children to grow
              socially, physically, emotionally and cognitively under the proper
              care and assistance of highly pre-trained sitters within a
              child-friendly and nurturing environment.
            </p>
            <h3>Vision</h3>
            <p>
              “To serve our customers better, to always be relevant and make
              them balanced in their lives about their children and professional
              life”. To provide childcare services that is adjustable to the
              needs of working parents and is provided according to the child's
              needs as decided by parents
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default aboutUs
