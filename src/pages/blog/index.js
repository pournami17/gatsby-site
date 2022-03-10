import * as React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../../components/layout'
const BlogPage = ({data}) => {
  return (
    <Layout pageTitle="My Blog Posts">
      
      {data.allMdx.nodes.map( node => (
        <article>
          <h2><Link to={node.slug}>{node.frontmatter.title}</Link></h2>
          <p>{node.frontmatter.date}</p>
          
      </article>
      ))}
      
    </Layout>
  )
}



export const query = graphql`
  query{
    allMdx(sort: {fields: frontmatter___date, order: ASC}) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
        }
        id
        slug
      }
    }
  }
  `

    export default BlogPage