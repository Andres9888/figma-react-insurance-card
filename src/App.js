import React from "react"
import useSWR from "swr"
import axios from "axios"
import { Container, Row, Col } from "react-bootstrap"
import styled from "styled-components"
import * as dayjs from "dayjs"

import { Icon } from "@iconify/react"
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
          payment_date,
          partner,
          premium_formatted,
          renewal,
        }) => {
          return (
            <Row>
              <Col>
                <InsuranceCard>
                  <InsurancePolicy>
                    <FlexRow>
                      <Circle>
                        <StyledIcon icon="octicon:chevron-right-16" />
                      </Circle>
                      <FlexColumn>
                        <Title>{title}</Title>
                        <Description>{`${id} | ${description}`}</Description>
                      </FlexColumn>
                      <PartnerImage src={partner.logo} alt="logo" />
                    </FlexRow>
                    <Divider />
                    <CoverageContainer>
                      <PaymentDateContainer>
                        <PaymentDates>
                          {dayjs(payment_date)
                            .format("DD-MMM-YYYY")
                            .toUpperCase()}
                        </PaymentDates>
                        <PaymentDateTitle>Payment date</PaymentDateTitle>
                      </PaymentDateContainer>
                      <VerticalDivider />
                      <CoverageDatesContainer>
                        <CoverageDates>{`${dayjs(coverage_start_date)
                          .format("DD-MMM-YYYY")
                          .toUpperCase()} to ${dayjs(coverage_end_date)
                          .format("DD-MMM-YYYY")
                          .toUpperCase()}`}</CoverageDates>
                        <CoverageDatesTitle>Coverage dates</CoverageDatesTitle>
                      </CoverageDatesContainer>
                      <PartnerImageMobile src={partner.logo} alt="logo" />
                      <VerticalDivider />
                      <PriceContainer>
                        <Price>{premium_formatted}</Price>
                        <PriceTitle>Price/Premium</PriceTitle>
                      </PriceContainer>

                      {renewal && (
                        <>
                          <VerticalDivider />
                          <RenewalDateContainer>
                            <RenewalDate>{renewal}</RenewalDate>
                            <RenewalDateTitle>Renewal date</RenewalDateTitle>
                          </RenewalDateContainer>
                        </>
                      )}
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
  padding-right: 5.85%;
  padding-left: 5.85%;
  @media (min-width: 835px and max-width: 1287px) {
    padding-right: 6.82%;
    padding-left: 6.82%;
  }
  @media (min-width: 1288px) {
    padding-right: 6.32%;
    padding-left: 6.32%;
  }
`

const PageTitle = styled.h2`
  font-family: brandon-grotesque;
  font-style: normal;
  font-weight: 900;
  font-size: 24px;
  @media (min-width: 835px and max-width: 1287px) {
    font-size: 32px;
    line-height: 40px;
  }
  @media (min-width: 1288px) {
    padding-top: 48px;
    font-size: 40px;
    line-height: 50px;
    margin-bottom: 24px;
  }

  line-height: 30px;
  color: #2d2d2d;
  padding-top: 16px;
  margin-bottom: 8px;
`

const InsuranceCard = styled.div`
  width: 100%;
  height: 164px;
  border: 1px solid #e6e6e6;
  background-color: #ffffff;
  border-radius: 4px;
  margin-bottom: 16px;
  @media (min-width: 1288px) {
    margin-bottom: 32px;
  }
`

const Circle = styled.div`
  display: none;
  @media (min-width: 835px) {
    display: flex;
  }
  border-radius: 50%;
  width: 48px;
  height: 48px;
  background: none;
  border: 2px solid #ffe600;
  margin-top: 21px;
  margin-right: 16px;
`
const StyledIcon = styled(Icon)`
  display: block;
  margin: auto;
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

  @media (min-width: 835px and max-width: 1287px) {
    font-size: 20px;
    line-height: 30px;
  }
  @media (min-width: 1288px) {
    font-size: 24px;
    line-height: 30px;
  }
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
  @media (min-width: 835px) {
    font-size: 14px;
    line-height: 21px;
  }
  margin-bottom: 8px;
  color: #73777c;
`

const Divider = styled.div`
  border: 1px solid #e0e4e8;
`
const VerticalDivider = styled.div`
  display: none;
  border: 1px solid #e0e4e8;
  height: 43px;
  margin-top: 16px;
  @media (min-width: 835px) {
    display: inline-block;
  }
`
const PaymentDates = styled.span`
  margin-top: 8px;
  font-family: brandon-grotesque;
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 24px;
  color: #2d2d2d;
  display: none;
  text-transform: uppercase;
  @media (min-width: 835px) {
    display: flex;
  }
`

const PaymentDateTitle = styled.span`
  margin-top: 4px;
  font-family: bitter;
  font-size: 12px;
  line-height: 18px;
  color: #73777c;
  display: none;
  @media (min-width: 835px) {
    display: flex;
  }
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
  width: 111px;
  margin-left: auto;
  display: none;
  @media (min-width: 835px) {
    display: flex;
  }
`
const PartnerImageMobile = styled.img`
  width: 89px;
  margin-left: auto;
  @media (min-width: 835px) {
    display: none;
  }
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

const FlexRow = styled.div`
  @media (min-width: 835px) {
    display: flex;
  }
`
const FlexColumn = styled.div`
  @media (min-width: 835px) {
    display: flex;
    flex-direction: column;
  }
`

const PaymentDateContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 835px) {
    margin-right: 16px;
  }
`

const CoverageDatesContainer = styled.div`
  flex-direction: column;
  display: flex;
  margin-right: 16px;
  @media (min-width: 835px) {
    margin-left: 16px;
  }
`

const PriceContainer = styled.div`
  display: none;
  flex-direction: column;
  @media (min-width: 835px) {
    margin-left: 16px;
    margin-right: 16px;
    display: flex;
  }
`

const Price = styled.span`
  margin-top: 8px;
  font-family: brandon-grotesque;
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 24px;
  color: #2d2d2d;
  display: none;
  text-transform: uppercase;
  @media (min-width: 835px) {
    display: flex;
  }
`

const PriceTitle = styled.span`
  margin-top: 4px;
  font-family: bitter;
  font-size: 12px;
  line-height: 18px;
  color: #73777c;
  display: none;
  @media (min-width: 835px) {
    display: flex;
  }
`

const RenewalDateContainer = styled.div`
  display: none;
  flex-direction: column;
  @media (min-width: 835px) {
    margin-left: 16px;
    display: flex;
  }
`

const RenewalDate = styled.span`
  margin-top: 8px;
  font-family: brandon-grotesque;
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 24px;
  color: #2d2d2d;
  display: none;
  text-transform: uppercase;
  @media (min-width: 835px) {
    display: flex;
  }
`

const RenewalDateTitle = styled.span`
  margin-top: 4px;
  font-family: bitter;
  font-size: 12px;
  line-height: 18px;
  color: #73777c;
  display: none;
  @media (min-width: 835px) {
    display: flex;
  }
`
