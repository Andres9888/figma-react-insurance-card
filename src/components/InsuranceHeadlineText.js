import React from "react"
import { CircleIcon } from "../components/circle"
import styled from "styled-components"

export const InsuranceHeadline = ({
  open,
  title,
  id,
  description,
  partner,
}) => {
  return (
    <FlexRow>
      <CircleIcon open={open} />
      <FlexColumn>
        <Title>{title}</Title>
        <Description>{`${id} | ${description}`}</Description>
      </FlexColumn>
      <PartnerImage src={partner.logo} alt="logo" />
    </FlexRow>
  )
}

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
  font-size: 12px;
  @media (min-width: 375px) {
    font-size: 14px;
  }
  line-height: 21px;
  margin-bottom: 8px;

  @media (min-width: 835px) {
    margin-bottom: 16px;
  }
  color: #73777c;
`
const PartnerImage = styled.img`
  width: 111px;
  margin-left: auto;
  display: none;
  @media (min-width: 835px) {
    display: flex;
  }
  @media (min-width: 1288px) {
    width: 192px;
    margin-bottom: -80px;
  }
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
