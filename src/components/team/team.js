import React from 'react'
import Member from './member'

const team = () => {
  return (
    <div id='team' class='team section section-bg'>
      <div class='container' data-aos='fade-up'>
        <div class='section-title'>
          <h2>STRUCTURAL BODY</h2>
          <p>
            NUTRIMENTO helps community grow by assuring their marketing budget
            is invested in the right places, managed by the right experts.
          </p>
        </div>

        <div class='row'>
          <Member
            name='Mr. Rana Husnain'
            designation='Finance director'
            image='/images/team/team-1.jpg'
            facebook='/'
            instagram='/'
            twitter='/'
            linkedIn='/'
          />
          <Member
            name='Ms. Fatima Sohail'
            designation='Managing Coordinator'
            image='/images/team/team-2.jpg'
            facebook='/'
            instagram='/'
            twitter='/'
            linkedIn='/'
          />
          <Member
            name='Ms. Aleema Riaz'
            designation='HR Coordinator'
            image='/images/team/team-4.jpg'
            facebook='/'
            instagram='/'
            twitter='/'
            linkedIn='/'
          />
          <Member
            name='Ms. Arzu Butt'
            designation='Marketing Coordinator'
            image='/images/team/team-2.jpg'
            facebook='/'
            instagram='/'
            twitter='/'
            linkedIn='/'
          />
        </div>
      </div>
    </div>
  )
}

export default team
