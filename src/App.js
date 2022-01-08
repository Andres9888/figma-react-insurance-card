import React from "react"
import useSWR from "swr"
import axios from "axios"
import { Container } from "react-bootstrap"
import { InsuranceCardBox } from "./components/InsuranceCard"
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
      {policies.map((policy) => {
        return <InsuranceCardBox policy={policy} />
      })}
    </StyledContainer>
  )
}

export default App

const StyledContainer = styled(Container)`
  height: 100vh;
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
