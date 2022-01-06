import React from "react"
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
  if (!data) return <div>Loading...</div>
  if (error) return <div>failed to load</div>

  const { policies } = data

  return (
    <StyledContainer fluid>
      <PageTitle>PROTECTION</PageTitle>
      {policies.map(
        ({
          title,
          id,
          description,
          coverage_start_date,
          coverage_end_date,
          partner,
        }) => {
          return (
            <Row>
              <Col>
                <InsuranceCard>
                  <InsurancePolicy>
                    <Title>{title}</Title>
                    <Description>{`${id} | ${description}`}</Description>
                    <Divider />
                    <CoverageContainer>
                      <CoverageDatesContainer>
                        <CoverageDates>{`${coverage_start_date} to ${coverage_end_date}`}</CoverageDates>
                        <CoverageDatesTitle>Coverage dates</CoverageDatesTitle>
                      </CoverageDatesContainer>
                      <PartnerImage src={partner.logo} alt="logo" />
                    </CoverageContainer>
                  </InsurancePolicy>
                </InsuranceCard>
              </Col>
            </Row>
          )
        }
      )}
    </StyledContainer>
  )
}

export default App

const StyledContainer = styled(Container)`
  height: 100%;
  background-color: #f6f6f6;
  padding-right: 16px;
  padding-left: 16px;
`

const PageTitle = styled.h2`
  font-family: brandon-grotesque;
  font-style: normal;
  font-weight: 900;
  font-size: 24px;
  line-height: 30px;
  color: #2d2d2d;
  padding-top: 16px;
  margin-bottom: 8px;
`

const InsuranceCard = styled.div`
  width: 343px;
  height: 164px;
  border: 1px solid #e6e6e6;
  background-color: #ffffff;
  border-radius: 4px;
  margin-bottom: 16px;
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

const Divider = styled.div`
  border-bottom: 1px solid #e0e4e8;
`

const CoverageDates = styled.span`
  margin-top: 8px;
  font-family: brandon-grotesque;
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 24px;
  color: #2d2d2d;
`
const PartnerImage = styled.img`
  width: 89px;
  margin-left: auto;
`
const CoverageDatesTitle = styled.span`
  margin-top: 4px;
  font-family: bitter;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 18px;
  color: #73777c;
`

const CoverageContainer = styled.div`
  display: flex;
`

const CoverageDatesContainer = styled.div`
  flex-direction: column;
  display: flex;
`
