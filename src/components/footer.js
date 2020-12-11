import React from 'react'
import {Link} from "gatsby"
import {FontAwesomeIcon} from"@fortawesome/react-fontawesome"
import {faTwitterSquare, faFacebookSquare, faInstagramSquare} from "@fortawesome/free-brands-svg-icons"

const footer = () => {
      return (
      <footer className="footer">
        <div className="container">
          <div className="site">
            <Link to={`/`}>
              <p>Portfolio</p>
            </Link>
          </div>
          <ul className="sns">
            <li>
              <a href="https://twitter.com/">
                <FontAwesomeIcon icon={faTwitterSquare} />
                <span className="sr-only">Twitter</span>
              </a>
            </li>
            <li>
              <a href="https://facebook.com/">
                <FontAwesomeIcon icon={faFacebookSquare} />
                <span className="sr-only">Facebook</span>
              </a>
            </li>
            <li>
              <a href="http://instagram.com/">
                <FontAwesomeIcon icon={faInstagramSquare} />
                <span className="sr-only">Instagram</span>
              </a>
            </li>
          </ul>
        </div>
      </footer>
      )
}

export default footer

