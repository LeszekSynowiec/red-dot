import React from "react"
import styled from "styled-components"
import Link from 'gatsby'

import img from "../assets/images/35114123_1018408368312691_1864817775642411008_o.png"
import testImg from '../assets/images/35114123_1018408368312691_1864817775642411008_o.svg'

import GlobalStyle from "../assets/styles/GlobalStyles"

import Header from "../components/header/Header.component"

const LayOutWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
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

const ImageBackgroundWrapper = styled.div`
  height: 100%;
  width: 27%;
  background: linear-gradient(
      to right,
      rgba(255, 255, 255, 0) 15%,
      rgba(255, 255, 255, 1)
    ),
    url(${testImg});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`
const ContentWrapper = styled.div`
  width: 73%;
  height: 100%;
`

const MainLayout = ({ children }) => (
  <>
    <GlobalStyle />
    <LayOutWrapper>
      <ImageBackgroundWrapper />
      <DotButton href='/' />
      <ContentWrapper>
        <Header />
        {children}
      </ContentWrapper>
    </LayOutWrapper>
  </>
)

export default MainLayout
