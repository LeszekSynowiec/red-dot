import React from "react"
import Image from "gatsby-image"
import { graphql } from "gatsby"

export const query = graphql`
  query querySingleProject($id: String!) {
    datoCmsProject(id: { eq: $id }) {
      title
      location
      projectContent {
        content {
          fluid {
            tracedSVG
          }
        }
      }
    }
  }
`

const ProjectLayout = ({ data }) => {
  return (
    <div>
      {console.log(data)}
      <h1>{data.datoCmsProject.title}</h1>
      <p>{data.datoCmsProject.location}</p>
      {data.datoCmsProject.projectContent[0].content.map(image =>
        console.log(image)
      )}
    </div>
  )
}

export default ProjectLayout
