import React, { Fragment } from "react"
import useSWR from "swr"
import axios from "axios"
import { Container, Row, Col } from "react-bootstrap"
import styled from "styled-components"

const fetcher = (url) => axios.get(url).then((res) => res.data)
const App = () => {
  const { data, error } = useSWR(
    "https://7946a218-d225-4d0e-80ac-450bbc9713a0.mock.pstmn.io/booking",
    fetcher
  )

  console.log(data)

  return (
    <Fragment>
      <Container fluid>
        <PageTitle>PROTECTION</PageTitle>
        <Row>
          <Col>
            <InsuranceCard>
              <InsurancePolicy>
                <Title>London to Paris</Title>
                <Description>
                  XXXX-XXXX-INS | Baggage Cover ; Gadget Cover ; Health Cover
                </Description>
              </InsurancePolicy>
            </InsuranceCard>
          </Col>
        </Row>
      </Container>
    </Fragment>
  )
}

export default App

const PageTitle = styled.h2`
  font-family: brandon-grotesque;
  font-style: normal;
  font-weight: 900;
  font-size: 24px;
  line-height: 30px;
  color: #2d2d2d;
  margin-top: 16px;
  margin-bottom: 8px;
`

const InsuranceCard = styled.div`
  width: 343px;
  height: 164px;
  border: 1px solid #e6e6e6;
`
const InsurancePolicy = styled.div`
  margin-left: 16px;
  margin-right: 16px;
`
const Title = styled.h3`
  margin-top: 16px;
  margin-bottom: 4px;
  font-size: 18px;
  line-height: 22px;
  font-family: brandon-grotesque;
  font-style: normal;
  font-weight: bold;
  color: #2d2d2d;
`
const Description = styled.p`
  font-family: bitter;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 21px;
  margin-bottom: 8px;
  color: #73777c;
`
