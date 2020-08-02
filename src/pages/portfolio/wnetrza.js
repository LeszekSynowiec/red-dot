import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"

import CardProject from "../../components/card-project/card-project.component"

const PageWrapper = styled.div`

  width: 100%;
  display: flex;
  padding-top: 10px;
  flex-direction: column;
  align-items: center;
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
