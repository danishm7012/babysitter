import './App.css'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from './components/layout/header'
import Footer from './components/layout/footer'
import Home from './screens/Home'
import FAQ from './screens/FAQ'
import TermnCondition from './screens/TermnCondition'
import privacyPolicy from './screens/privacyPolicy'

import Blogs from './components/Blogs/Blogs'

import ScrollToTop from './components/common/scrollToTop'

import BlogDetail from './components/Blogs/blogDetail'
import SocialShare from './components/socialShare/Share'
import contactUs from './components/contact/contactUs'
import AboutUs from './components/about/aboutUs'

import BankingServices from './components/bankingServices/BankingServices'
import FServices from './components/featuredServices/fServices'
import proServiceDetail from './components/proServiceDetail/proServiceDetail'

function App() {
  Aos.init({ duration: 500, offset: 150 })
  return (
    <Router>
      <ScrollToTop />
      <Header />

      <main>
        <Switch>
          <Route path='/:_id' exact component={proServiceDetail} />

          <Route path='/info/blogs' exact component={Blogs} />
          <Route
            path='/service/banking&finance'
            exact
            component={BankingServices}
          />
          <Route path='/service/PRO' exact component={FServices} />
          <Route path='/info/blogs' exact component={Blogs} />
          <Route path='/info/FAQs' exact component={FAQ} />
          <Route
            path='/info/Terms&conditions'
            exact
            component={TermnCondition}
          />
          <Route path='/info/privacy-policy' exact component={privacyPolicy} />
          <Route path='/info/AboutUs' exact component={AboutUs} />
          <Route path='/info/contact' exact component={contactUs} />
          <Route path='/blogs/:_id' exact component={BlogDetail} />
          <Route path='/' exact component={Home} />
        </Switch>
      </main>
      <Footer />
      <SocialShare />
    </Router>
  )
}

export default App
