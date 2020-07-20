import React from "react"
import styled from "styled-components"
import Image from "gatsby-image"

const CardWrapper = styled.div`
  width: 100%;
  height: 195px;
  display: flex;
  flex-direction: column;
`
const ImageWrapper = styled.div`
  width: 100%;
  height: 87%;
  overflow: hidden;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
  img {
    position: relative;
    top: 50%;
    transform: translateY(-50%);
  }
`

const ContentWrapper = styled.div`
  width: 100%;
  height: 13%;
  display: flex;
`

const Text = styled.p`
  width: 50%;
  font-size: 14px;
  text-align: ${props => props.align};
`

const CardProject = ({ title, location, image }) => (
  <CardWrapper>
    {console.log(image)}
    <ImageWrapper>
      <Image fixed={image.fixed} />
    </ImageWrapper>
    <ContentWrapper>
      <Text align="left">{title}</Text>
      <Text align="right">{location}</Text>
    </ContentWrapper>
  </CardWrapper>
)

export default CardProject
