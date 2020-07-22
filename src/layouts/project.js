import React from "react"
import Image from "gatsby-image"
import { graphql } from "gatsby"
import styled from "styled-components"

export const query = graphql`
  query querySingleProject($id: String!) {
    datoCmsProject(id: { eq: $id }) {
      title
      location
      projectContent {
        content {
          fluid {
            ...GatsbyDatoCmsFluid_tracedSVG
          }
        }
      }
    }
  }
`

const PageWrapper = styled.div`
  height: 60%;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  &:-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    border-radius: 10px;
    background-color: #f5f5f5;
  }

  &::-webkit-scrollbar {
    width: 5px;
    background-color: #f5f5f5;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 5px;
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: #707070;
  }
`

const ImageGallery = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  
`

const StyledImage = styled(Image)`
  width: 800px;
  height: 500px;
  margin-bottom: 50px;
`

const ProjectLayout = ({ data }) => {
  return (
    <>
      <h1>{data.datoCmsProject.title}</h1>
      <p>{data.datoCmsProject.location}</p>
      <PageWrapper>
        <ImageGallery>
          {data.datoCmsProject.projectContent[0].content.map((image, idx) => (
            <StyledImage fluid={image.fluid} key={idx} />
          ))}
        </ImageGallery>
      </PageWrapper>
    </>
  )
}

export default ProjectLayout
