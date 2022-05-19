import React from 'react'
import Carousel from '../components/carousel'
import Meta from '../components/common/Meta'

import ContactUs from '../components/contact/contactUs'
import CompanySlider from '../components/CompaniesSlider/CompanySlider'
import Fservices from '../components/featuredServices/fServices'
import BankingServices from '../components/bankingServices/BankingServices'
import Team from '../components/team/team'
import About from '../components/about/aboutUs'
import Count from '../components/count/count'
const home = () => {
  return (
    <div id='mainHome'>
      <Meta />
      <Carousel />
      <CompanySlider />

      {/* <Fservices /> */}
      <About />
      <Count />
      <BankingServices />

      <Team />
      <ContactUs />
    </div>
  )
}

export default home
