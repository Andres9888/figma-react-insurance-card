import React, { useState } from "react"
import { Row, Col } from "react-bootstrap"
import { InsuranceHeadline, Terms, Coverage } from "../components"

import styled from "styled-components"
import { formatDate } from "../helper/formatDate"
export const InsuranceCardBox = ({ policy }) => {
  const [open, setOpen] = useState(false)

  const handleClick = () => {
    setOpen(!open)
  }
  const {
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
            <InsuranceHeadline policy={policy} open={open} />
            <Divider />
            <CoverageContainer>
              <Terms PolicyTerm={formatDate(payment_date)}>Payment date</Terms>
              <VerticalDivider />
              <Coverage
                coverage_start_date={coverage_start_date}
                coverage_end_date={coverage_end_date}
              >
                Coverage dates
              </Coverage>
              <PartnerImageMobile src={partner.logo} alt="logo" />
              <VerticalDivider />
              <Terms PolicyTerm={premium_formatted}>Price/Premium</Terms>
              {renewal && (
                <>
                  <VerticalDivider />
                  <Terms PolicyTerm={renewal}>Renewal date</Terms>
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

  @media (min-width: 835px and max-width: 1287px) {
    height: 168px;
  }

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

const PartnerImageMobile = styled.img`
  width: 89px;
  margin-left: auto;
  @media (min-width: 835px) {
    display: none;
  }
`

const CoverageContainer = styled.div`
  display: flex;
`
