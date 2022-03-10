import * as React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Layout from '../../components/layout'
const BlogPost = ({data}) => {
  const image = getImage(data.mdx.frontmatter.hero_image)

  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>
    <GatsbyImage image={image} alt={data.mdx.frontmatter.hero_image_alt}></GatsbyImage>
      <h3>{data.mdx.frontmatter.title}</h3>
      <p>Posted on: {data.mdx.frontmatter.date}</p>
      <div><MDXRenderer>
              {data.mdx.body}
          </MDXRenderer></div>
    </Layout>
  )
}

export const query = graphql`
  query($id: String) {
    mdx(id: {eq: $id}) {
      body
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        hero_image_alt
        hero_image_credit_link
        hero_image_credit_text
        hero_image {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }`
export default BlogPost