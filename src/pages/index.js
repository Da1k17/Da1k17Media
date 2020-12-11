import React from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"


const Home = ({data}) => {
  return (
    <Layout>
      {/* ヒーローイメージ */}
      <section className="hero">
        <figure>
        <Img fluid={data.hero.childImageSharp.fluid} alt="ヒーローイメージ"  style={{height: "100%"}}/>
        </figure>
        <div className="wave">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1366 229.5"
          fill="#fff"
        >
          <path
            d="M1369,6.3C1222.5-12.2,1189.5,8,919.2,96.6C665,179.8,160,141.7-2,53.1v150l1371-14.2V6.3z"
            opacity=".53"
          />
          <path
            d="M1369 229.5V55.8c-9.5-2.4-19.2-4.4-28.9-5.8-196.9-29.9-203.4-15.8-503.9 82.6-219.8 72-627.6 53.2-838.2-10.5v107.4h1371z"
          />
        </svg>
        </div>
        </section>

        {/* サイト概要 */}
        <section className="about">
        <div className="container">
          <h2 className="bar">このサイトについて</h2>
          <div className="details">
            <div className="detail">
              <figure>
                <Img fluid={data.about.childImageSharp.fluid} alt="Aboutページの画像"/>
              </figure>
              <h3>About</h3>
              <p>Aboutページでは、自分のスキルなどの紹介をしています</p>
            </div>
            <div className="detail">
              <figure>
                <Img fluid={data.blog.childImageSharp.fluid} alt="Blogページの画像"/>
              </figure>
              <h3>Blog</h3>
              <p>Blogページでは、自らが作ったプロダクトなどの紹介をしています</p>
            </div>
            <div className="detail">
              <figure>
                <Img fluid={data.contact.childImageSharp.fluid} alt="Contactページの画像"/>
              </figure>
              <h3>Contact</h3>
              <p>Contactページでは、仕事のお問い合わせなどを受け付けています</p>
            </div>
          </div>
        <section>
              <div className="container">
              <h2 className="bar">Recent Posts</h2>
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
          </div>
          </section>
      </Layout>


  )
}

export const query = graphql`
query {
  hero: file(relativePath: {eq: "hero.jpg"}) {
    childImageSharp {
      fluid(maxWidth: 1600) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
about: file(relativePath: {eq: "about.png"}) {
    childImageSharp {
      fluid(maxWidth: 1600) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
blog: file(relativePath: {eq: "blog.png"}) {
    childImageSharp {
      fluid(maxWidth: 1600) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
contact: file(relativePath: {eq: "contact.png"}) {
    childImageSharp {
      fluid(maxWidth: 1600) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
        allContentfulBlogPost (
          sort: {order: DESC, fields: publishDate}
          skip: 0
          limit: 4
    ){
      edges {
        node {
          title
          id
          slug
          eyecatch {
            fluid(maxWidth: 573) {
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
export default Home
