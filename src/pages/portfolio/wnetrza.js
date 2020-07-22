import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"

import CardProject from "../../components/card-project/card-project.component"

const PageWrapper = styled.div`
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

  width: 890px;
  min-height: 60%;
  overflow-y: scroll;
  display: grid;
  padding-top: 10px;
  grid-template-columns: 1fr 1fr;
`

const Wnetrza = ({ data }) => (
  <PageWrapper>
    {data.allDatoCmsProject.nodes.map(project => (
      <CardProject
        url={`/portfolio/wnetrza/${project.id}`}
        key={project.id}
        title={project.title}
        location={project.location}
        image={project.mainPhoto}
      />
    ))}
  </PageWrapper>
)

export const query = graphql`
  {
    allDatoCmsProject {
      nodes {
        id
        title
        location
        mainPhoto {
          fluid {
            ...GatsbyDatoCmsFluid_tracedSVG
          }
        }
      }
    }
  }
`

export default Wnetrza
