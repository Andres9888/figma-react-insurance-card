import React, { useState } from "react"

import { Row, Col } from "react-bootstrap"
import styled from "styled-components"

import { formatDate } from "../../helper/formatDate"
import { InsuranceHeadline, Terms, Coverage } from "./components"

export const InsuranceCardBox = ({ policy }) => {
  const [open, setOpen] = useState(false)

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
        <InsuranceCard
          open={open}
          onClick={() => {
            setOpen(!open)
          }}
        >
          <InsurancePolicy>
            <InsuranceHeadline open={open} policy={policy} />
            <Divider />
            <CoverageContainer>
              <Terms PolicyTerm={formatDate(payment_date)}>Payment date</Terms>
              <VerticalDivider />
              <Coverage
                coverage_end_date={coverage_end_date}
                coverage_start_date={coverage_start_date}
              >
                Coverage dates
              </Coverage>
              <PartnerImageMobile alt="logo" src={partner.logo} />
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
  margin-bottom: 16px;
  width: 100%;
  background-color: #ffffff;
  border: 1px solid #e6e6e6;
  border-radius: 4px;
  box-shadow: ${(properties) =>
    properties.open ? "0px 24px 32px 0px rgba(45, 45, 45, 0.16)" : "none"};
  height: 164px;
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
  border: 1px solid #e0e4e8;
  display: none;
  height: 43px;
  margin-left: 16px;
  margin-right: 16px;
  margin-top: 16px;
  @media (min-width: 835px) {
    display: inline-block;
  }
`

const PartnerImageMobile = styled.img`
  margin-left: auto;
  width: 89px;
  @media (min-width: 835px) {
    display: none;
  }
`

const CoverageContainer = styled.div`
  display: flex;
`
