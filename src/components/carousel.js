import React from 'react'
import { Link } from 'react-scroll'
function carousel() {
  return (
    <section id='hero' class=' section d-flex align-items-center'>
      <div class='container' data-aos='zoom-out' data-aos-delay='100'>
        <div class='row'>
          <div class='col-xl-6'>
            <h1>
              NUTRIMENTO: Trained and experienced staff, Attractive and friendly
              environment{' '}
            </h1>
            <h2>
              Meeting customer needs and expectations Innovation and
              Perseverance.
            </h2>
            <Link to='contact' class='btn-get-started scrollto'>
              Book An Appointment
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default carousel
