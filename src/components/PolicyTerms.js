import React from "react"

import styled from "styled-components"

export const Terms = ({ PolicyTerm, PolicyTermTitle }) => {
  return (
    <PolicyTermsContainer>
      <PolicyTerms>{PolicyTerm}</PolicyTerms>
      <PolicyTermsTitle>{PolicyTermTitle}</PolicyTermsTitle>
    </PolicyTermsContainer>
  )
}
const PolicyTermsContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 835px) {
  }
`

const PolicyTerms = styled.span`
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
    font-size: 16px;
    line-height: 24px;
    margin-top: 16px;
  }
`
const PolicyTermsTitle = styled.span`
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
