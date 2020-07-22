import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import Image from "gatsby-image"

const CardWrapper = styled(Link)`
  width: 376px;
  height: 195px;
  display: flex;
  flex-direction: column;
  margin-bottom: 25px;
  cursor: pointer;
  overflow: hidden;
  box-shadow: 0 3px 6px rgba(0, 0 , 0, 0.16);
`
const StyledImage = styled(Image)`
  transition: all 3s;
  background-color: #8f181a;



  &:hover {
    transform: scale(1.3);
    background-color: #8f181a;
  }
`

const ContentWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 35px;
  display: flex;
  justify-content: space-around;
  background-color: white;

`

const Text = styled.p`
  position: relative;
  top: -10px;
  width: 45%;
  font-size: 14px;
  text-align: ${props => props.align};

`

const CardProject = ({ title, location, image, url }) => (
  <CardWrapper to={url}>
    <StyledImage
      fluid={image.fluid}
      fadeIn={true}
    />
    <ContentWrapper>
      <Text align="left">{title}</Text>
      <Text align="right">{location}</Text>
    </ContentWrapper>
  </CardWrapper>
)

export default CardProject
