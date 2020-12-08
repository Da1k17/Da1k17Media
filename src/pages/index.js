import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"


const Home = ({data}) => {
  return (
    <Layout>
      {/* ヒーローイメージ */}
      <section className="hero">
        <figure>
        <Img fluid={data.file.childImageSharp.fluid} alt="ヒーローイメージ"  style={{height: "100%"}}/>
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
                {/* <Img fluid={} alt=""/> */}
              </figure>
              <h3></h3>
              <p></p>
            </div>
            <div className="detail">
              <figure>
                {/* <Img fluid={} alt=""/> */}
              </figure>
              <h3></h3>
              <p></p>
            </div>
            <div className="detail">
              <figure>
                {/* <Img fluid={} alt=""/> */}
              </figure>
              <h3></h3>
              <p></p>
            </div>
          </div>
        </div>
        </section>
      </Layout>


  )
}

export const query = graphql`
  query {
    file(relativePath: {eq: "hero.jpg"}) {
      childImageSharp {
        fluid(maxWidth: 1600) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
export default Home
