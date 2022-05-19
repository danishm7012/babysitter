import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  const submitHandler = (event) => {
    event.preventDefault()
    alert('Thank You for Subscribing us!')
  }
  return (
    <footer
      id='footer'
      data-aos='fade-up'
      data-aos-easing='ease-in-out'
      data-aos-duration='500'
    >
      <div class='footer-newsletter'>
        <div class='container'>
          <div class='row'>
            <div class='col-lg-6'>
              <h4>Our Newsletter</h4>
              <p>
                Enter your email ID to get the latest news and feature stories
                on our businesses, community initiatives, heritage and people.
              </p>
            </div>
            <div class='col-lg-6'>
              <form onSubmit={submitHandler}>
                <input type='email' name='email' />
                <input type='submit' value='Subscribe' />
              </form>
            </div>
          </div>
        </div>
      </div>

      <div class='footer-top'>
        <div class='container'>
          <div class='row'>
            <div class='col-lg-3 col-md-6 footer-links'>
              <h4>Useful Links</h4>
              <ul>
                <li>
                  <i class='bx bx-chevron-right'></i> <Link to='/'>Home</Link>
                </li>
                <li>
                  <i class='bx bx-chevron-right'></i>{' '}
                  <Link to='/info/AboutUs'>About us</Link>
                </li>
                <li>
                  <i class='bx bx-chevron-right'></i>{' '}
                  <Link to='/info/FAQs'>FAQs</Link>
                </li>
                <li>
                  <i class='bx bx-chevron-right'></i>{' '}
                  <Link to='/info/Terms&conditions'>Terms and Conditions</Link>
                </li>
                <li>
                  <i class='bx bx-chevron-right'></i>{' '}
                  <Link to='/info/privacy-policy'>Privacy Policy</Link>
                </li>
              </ul>
            </div>

            <div class='col-lg-3 col-md-6 footer-links'>
              <h4>Our Services</h4>
              <ul>
                <li>
                  <i class='bx bx-chevron-right'></i>{' '}
                  <a href='/'>PRO Service</a>
                </li>
                <li>
                  <i class='bx bx-chevron-right'></i>{' '}
                  <a href='/'>Banking services</a>
                </li>
                <li>
                  <i class='bx bx-chevron-right'></i>{' '}
                  <a href='/'>UAE Office setup</a>
                </li>
                <li>
                  <i class='bx bx-chevron-right'></i> <a href='/'>Licensing</a>
                </li>
                <li>
                  <i class='bx bx-chevron-right'></i>{' '}
                  <a href='/'>Office for Rent</a>
                </li>
              </ul>
            </div>

            <div class='col-lg-3 col-md-6 footer-contact'>
              <h4>Contact Us</h4>
              <p>
                Park Lane Plaza, 12th Floor, Office No. 1213. Down Town Dubai,
                UAE.
                <br />
                P.O. BOX 415253
                <br />
                <br />
                <strong>
                  <i className='fas fa-phone'></i>
                  <i className='fab fa-whatsapp '></i>
                </strong>
                {'   '}
                03027341637
                <br />
                <strong>
                  <i className='fas fa-phone'></i>
                  <i className='fab fa-whatsapp '></i>
                </strong>
                {'   '}
                +971 054 775 7091
                <br />
                <strong>Landline:</strong> +971 4 5891171
                <br />
                <strong>Email:</strong> nutrimento781@gmail.com
                <br />
              </p>
            </div>

            <div class='col-lg-3 col-md-6 footer-info'>
              <h3>About PROGcc</h3>
              <p>
                Our Business Setup Guides give you the answers to the most
                commonly asked questions that we are being asked on setting up
                businesses in the UAE.
              </p>
              <div class='social-links mt-3'>
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
                <a href='/' target='blank' class='pinterest'>
                  <i className='fab fa-pinterest'></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='pt-4 text-white text-center'>
        Copyright &copy; {new Date().getFullYear()}
        <strong>
          <span className='credits'> ProGcc. </span>
        </strong>
        All Rights Reserved.
      </div>
    </footer>
  )
}

export default Footer
