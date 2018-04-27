import React from 'react'
import PropTypes from 'prop-types'
import styled, { keyframes } from 'styled-components'


const demoAnimation = keyframes`
  to {
    opacity: 1;
    background-color: hotpink;
    transform: scale(0.5);
  }
`

const StyledEl = styled.h1`
  background-color: turquoise;
  display: block;
  width: 100%;
  margin: auto;
  max-height: 60vh;
  max-width: 80vw;
  opacity: 1;
  padding: 100px 0;
  text-align: center;
  transform: scale(1.5);
  transform-origin: bottom center;
  animation: ${demoAnimation} .5s ease-in-out forwards;

  @media screen and (max-device-width: 736px) and (orientation: landscape) {
    max-height: 40vh;
  }
`

const DemoEl = props => <StyledEl {...props} />

const IndexPage = () => (
  <div>
    <DemoEl>THIS IS A DEMO</DemoEl>
  </div>
)

export default IndexPage
