import React from 'react'
import {graphql, Link} from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"

const blog = ({data, location}) => {
      return (
            <Layout>
                  <SEO
                  pagetitle="blog"
                  pagedesc="Da1k17's Blog"
                  pagepath={location.pathname}
                  />
                  <section className="content bloglist">
                  <div className="container">
                        <h1 className="bar">RECENT POSTS</h1>
                        <div className="posts">
                              {data.allContentfulBlogPost.edges.map(({node}) => (
                                    <article className="post" key={node.id}>
                                    <Link to={`/blog/post/${node.slug}/`}>
                                    <figure>
                                          <Img
                                                fluid={node.eyecatch.fluid}
                                                alt={node.eyecatch.description}
                                                style={{height: "100%"}}
                                          />
                                    </figure>
                                    <h3>{node.title}</h3>
                                    </Link>
                                    </article>
                               ))}
                        </div>
                  </div>
                  </section>
            </Layout>
      )
}

export const query = graphql`
query($skip: Int!, $limit: Int!) {
      allContentfulBlogPost (
            sort: {order: DESC, fields: publishDate}
            skip: $skip
            limit: $limit
      ){
        edges {
          node {
            title
            id
            slug
            eyecatch {
              fluid(maxWidth: 500) {
                base64
                aspectRatio
                src
                srcWebp
                srcSetWebp
                sizes
              }
              description
            }
          }
        }
      }
    }
`

export default blog
