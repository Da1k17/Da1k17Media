import React from 'react'
import {graphql, Link} from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
                      
const blog = ({data, location, pageContext}) => {
      return (
            <Layout>
                  <SEO
                  pagetitle={`CATEGORY: ${pageContext.catname}`}
                  pagedesc={`「${pageContext.catname}」カテゴリー記事です`}
                  pagepath={location.pathname}
                  />
                  <section className="content bloglist">
                  <div className="container">
                        <h1 className="bar">CATEGORY: {pageContext.catname}</h1>
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
                        <ul className="pagenation">
                              {!pageContext.isFisrt && (
                                    <li className="prev">
                                          <Link to={
                                                pageContext.currentPage === 2
                                                  ? `/cat/${pageContext.catslug}/`
                                                  : `/cat/${pageContext.catslug}/${pageContext.currentPage - 1}/`
                                                }
                                                rel="prev"
                                          >
                                                <FontAwesomeIcon className="fas fa-chevron-left" />
                                                <span>前のページ</span>
                                          </Link>
                                    </li>
                              )}

                              {!pageContext.isLast && (
                                    <li className="next">
                                    <Link
                                          to={
                                                `/cat/${pageContext.catslug}/${pageContext.currentPage + 1}/`
                                          }
                                          rel="next"
                                    >
                                          <span>次のページ</span>
                                          <FontAwesomeIcon className="fas fa-chevron-right" />
                                    </Link>
                                    </li>
                              )}
                        </ul>
                  </div>
                  </section>
            </Layout>
      )
}

export const query = graphql`
query($catid: String!, $skip: Int!, $limit: Int!) {
      allContentfulBlogPost (
            sort: {order: DESC, fields: publishDate}
            skip: $skip
            limit: $limit
            filter: {category: {elemMatch: {id: {eq: $catid }}}}
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
