import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { Link } from "gatsby"

const CardLinkWrapper = styled.div`
  height: 410px;
  width: 295px;
  font-size: 35px;
  font-style: italic;
  font-weight: 100;
  margin: 0 20px;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
  cursor: pointer;

  &:hover {
    img {
      transform: scale(1.4);
    }
  }
`
const CardLinkImageWrapper = styled.div`
  width: 100%;
  height: 87%;
  overflow: hidden;
  transition: 2s;
`
const CardLinkContentWrapper = styled.div`
  width: 100%;
  height: 13%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-shadow: 1px 1px rgba(0, 0, 0, 0.1);
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
`

const CardLink = ({ text, image, url }) => (
  <CardLinkWrapper>
    <Link to={url}>
      <CardLinkImageWrapper>
        <Img fixed={image} imgStyle={{ transition: " transform 5s " }} />
      </CardLinkImageWrapper>
      <CardLinkContentWrapper>{text}</CardLinkContentWrapper>
    </Link>
  </CardLinkWrapper>
)

export default CardLink
