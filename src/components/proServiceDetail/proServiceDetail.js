import React, { useState, useEffect } from 'react'
import ProServices from '../../companiesData/fServices'
import { Container, Jumbotron, Row, Col } from 'react-bootstrap'
import Title from '../common/title'
import SectionH1 from './sectionH1'
import List from './List'
import orderList from './orderList'
import Section from './section'
import Meta from '../common/Meta'
import './proServiceDetail.css'

const ProServiceDetail = ({ match }) => {
  const ServiceId = match.params._id

  const [Service, setService] = useState({})

  useEffect(() => {
    setService(ProServices.find((s) => s._id === ServiceId))
  }, [ServiceId])

  return (
    <div className=' section proService-detail'>
      <Meta
        title={Service.metaTitle}
        description={Service.metaDesc}
        keywords={Service.metaKeyword}
      />
      <Title img={Service.banner} />
      <Jumbotron>
        <Container>
          <Row>
            <Col>
              <SectionH1 title={Service.name} detail={Service.detail} />
            </Col>
          </Row>
          <Row>
            <Col>
              <List heading={Service.listH} paragraph={Service.listP}></List>
              <div className='detail-list'>
                {Service.list &&
                  Service.list.map((item) => <li key={item}>{item}</li>)}
              </div>
            </Col>
          </Row>

          <Row>
            <Col>
              <Section heading={Service.thirdH} paragraph={Service.thirdP} />
            </Col>
          </Row>
          <Row>
            <Col>
              <Section heading={Service.forthH} paragraph={Service.forthP} />
            </Col>
          </Row>
          {Service.listH2 && (
            <Row>
              <Col>
                <List
                  heading={Service.listH2}
                  paragraph={Service.listP2}
                ></List>
                <div className='detail-list'>
                  {Service.list2 &&
                    Service.list2.map((item) => <li key={item}>{item}</li>)}
                </div>
              </Col>
            </Row>
          )}
          <Row>
            <Col>
              <orderList
                heading={Service.listH2}
                paragraph={Service.listP2}
                list={Service.list2}
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <Section heading={Service.fifthH} paragraph={Service.fifthP} />{' '}
            </Col>
          </Row>
        </Container>
      </Jumbotron>
    </div>
  )
}

export default ProServiceDetail
