import React from 'react'
import { Link } from 'react-scroll'
import { LinkContainer } from 'react-router-bootstrap'
import { Nav, Navbar, Container, Image } from 'react-bootstrap'
import TopHeader from './HeaaderTop'
function header() {
  return (
    <>
      <TopHeader />
      <Navbar className='navbar' collapseOnSelect expand='lg' variant='light'>
        <Container>
          <Navbar.Brand href='/'>
            <Image
              src='/images/logo1.png'
              alt='ProGcc Logo'
              height='auto'
              width='100'
            />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
          <Navbar.Collapse id='responsive-navbar-nav'>
            <Nav className='ml-auto text-center nav'>
              <Link to='hero'>
                <LinkContainer className='link-container' to='/'>
                  <Nav.Link className='link'> HOME </Nav.Link>
                </LinkContainer>
              </Link>

              <Link to='about'>
                <LinkContainer className='link-container' to='/'>
                  <Nav.Link className='link'> ABOUT US </Nav.Link>
                </LinkContainer>
              </Link>

              {/* <Link to='services'>
                <LinkContainer to='/'>
                  <Nav.Link className='link'> PRO Services </Nav.Link>
                </LinkContainer>
              </Link> */}

              <Link to='bankingServices'>
                <LinkContainer to='/'>
                  <Nav.Link className='link'> Services</Nav.Link>
                </LinkContainer>
              </Link>
              <Link to='team'>
                <LinkContainer to='/'>
                  <Nav.Link className='link'> Team </Nav.Link>
                </LinkContainer>
              </Link>
              <Link to='/'>
                <LinkContainer to='/'>
                  <Nav.Link className='link active'> What's new </Nav.Link>
                </LinkContainer>
              </Link>
              <Link to='contact'>
                <LinkContainer to='/'>
                  <Nav.Link className='contact-btn'> CONTACT US </Nav.Link>
                </LinkContainer>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default header
