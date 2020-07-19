import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"

import CardLink from "../components/card-link/card-link.component"

const ContentWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Portfolio = ({ data }) => {
  return (
    <>
      <ContentWrapper>
          <CardLink
            url="/portfolio/wnetrza"
            text="Wnetrza"
            image={data.allFile.nodes[1].childImageSharp.fixed}
          />
        <CardLink
          text="Wzornictwo"
          url="/portfolio/wzornictwo"
          image={data.allFile.nodes[0].childImageSharp.fixed}
        />
      </ContentWrapper>
    </>
  )
}

export const query = graphql`
  {
    allFile(filter: { name: { regex: "/portfolio/" } }) {
      nodes {
        childImageSharp {
          fixed(width: 295, height: 355, quality: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  }
`

export default Portfolio
