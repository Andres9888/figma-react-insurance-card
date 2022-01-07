import React, { useState } from "react"
import { Icon } from "@iconify/react"
import styled from "styled-components"

export const CircleIcon = () => {
  const [open, setOpen] = useState(false)

  const handleClick = () => {
    setOpen(!open)
  }
  return (
    <Circle open={open} onClick={handleClick}>
      <StyledIcon icon="octicon:chevron-right-16" rotate={open ? 1 : 0} />
    </Circle>
  )
}

const Circle = styled.div`
  display: none;
  @media (min-width: 835px) {
    display: flex;
  }
  border-radius: 50%;
  width: 48px;
  height: 48px;
  background: ${(props) => (props.open ? "yellow" : "open")};
  border: 2px solid #ffe600;
  margin-top: 21px;
  margin-right: 16px;
`
const StyledIcon = styled(Icon)`
  display: block;
  margin: auto;
`
