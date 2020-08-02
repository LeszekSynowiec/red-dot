import React from "react"
import styled from "styled-components"

import GlobalStyle from "../assets/styles/GlobalStyles"

import Header from "../components/header/Header.component"

const LayOutWrapper = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
`

const DotButton = styled.a`
  width: 84px;
  height: 84px;
  background-color: #8f181a;
  position: absolute;
  border-radius: 50%;
  top: 50px;
  left: 6%;
  opacity: 0.5;
`



const MainLayout = ({ children }) => (
  <>
    <GlobalStyle />
    <LayOutWrapper>
        <Header />
        {children}
    </LayOutWrapper>
  </>
)

export default MainLayout
