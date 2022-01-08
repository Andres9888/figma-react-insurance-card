import React from "react"
import styled from "styled-components"
import * as dayjs from "dayjs"

export const Coverage = ({
  coverage_start_date,
  coverage_end_date,
  children,
}) => {
  return (
    <CoverageDatesContainer>
      <CoverageDates>{`${dayjs(coverage_start_date)
        .format("DD-MMM-YYYY")
        .toUpperCase()} to ${
        coverage_end_date
          ? dayjs(coverage_end_date).format("DD-MMM-YYYY").toUpperCase()
          : "No Date"
      }`}</CoverageDates>
      <CoverageDatesTitle>{children}</CoverageDatesTitle>
    </CoverageDatesContainer>
  )
}

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

const CoverageDatesContainer = styled.div`
  flex-direction: column;
  display: flex;
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
