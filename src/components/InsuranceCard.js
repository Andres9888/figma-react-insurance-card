import React, { useState } from "react"
import { Row, Col } from "react-bootstrap"
import * as dayjs from "dayjs"
import { InsuranceHeadline } from "./InsuranceHeadlineText"
import { Terms } from "./PolicyTerms"
import { Coverage } from "./CoverageDate"
import styled from "styled-components"
export const InsuranceCardBox = ({ policy }) => {
  const [open, setOpen] = useState(false)

  const handleClick = () => {
    setOpen(!open)
  }
  const {
    title,
    id,
    description,
    coverage_start_date,
    coverage_end_date,
    payment_date,
    partner,
    premium_formatted,
    renewal,
  } = policy

  return (
    <Row>
      <Col>
        <InsuranceCard open={open} onClick={handleClick}>
          <InsurancePolicy>
            <InsuranceHeadline
              open={open}
              title={title}
              id={id}
              description={description}
              partner={partner}
            />
            <Divider />
            <CoverageContainer>
              <Terms
                PolicyTerm={dayjs(payment_date)
                  .format("DD-MMM-YYYY")
                  .toUpperCase()}
                PolicyTermTitle="Payment date"
              />
              <VerticalDivider />
              <Coverage
                coverage_start_date={coverage_start_date}
                coverage_end_date={coverage_end_date}
              >
                Coverage dates
              </Coverage>
              <PartnerImageMobile src={partner.logo} alt="logo" />
              <VerticalDivider />
              <Terms
                PolicyTerm={premium_formatted}
                PolicyTermTitle="Price/Premium"
              />

              {renewal && (
                <>
                  <VerticalDivider />
                  <Terms PolicyTerm={renewal} PolicyTermTitle="Renewal date" />
                </>
              )}
            </CoverageContainer>
          </InsurancePolicy>
        </InsuranceCard>
      </Col>
    </Row>
  )
}

const InsuranceCard = styled.div`
  width: 100%;
  height: 164px;
  border: 1px solid #e6e6e6;
  background-color: #ffffff;
  border-radius: 4px;
  margin-bottom: 16px;
  box-shadow: ${(props) =>
    props.open ? "0px 24px 32px 0px rgba(45, 45, 45, 0.16)" : "none"};

  @media (min-width: 1288px) {
    margin-bottom: 32px;
    height: 165px;
  }
`
const InsurancePolicy = styled.div`
  margin-left: 16px;
  margin-right: 16px;
`

const Divider = styled.div`
  border: 1px solid #e0e4e8;
  @media (min-width: 1288px) {
    width: 77%;
  }
`
const VerticalDivider = styled.div`
  display: none;
  border: 1px solid #e0e4e8;
  height: 43px;
  margin-top: 16px;
  margin-left: 16px;
  margin-right: 16px;
  @media (min-width: 835px) {
    display: inline-block;
  }
`

const CoverageDates = styled.span`
  margin-top: 8px;
  font-family: brandon-grotesque;
  font-style: normal;
  font-weight: 300;
  font-size: 12px;
  @media (min-width: 375px) {
    font-size: 16px;
  }

  line-height: 24px;
  color: #2d2d2d;
  letter-spacing: -0.75px;
  @media (min-width: 835px) {
    margin-top: 16px;
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
  font-size: 10px;

  @media (min-width: 375px) {
    font-size: 12px;
  }

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
