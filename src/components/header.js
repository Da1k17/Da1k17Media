import React from 'react'
import {Link} from "gatsby"

const header = () => {
      return (
            <header className="header">
                  <div className="container">
                        <div className="site">
                              <Link to={`/`}>
                                    {/* <defs></defs>
                                    <desc>Portfolio</desc> */}
                                    <h1>Portfolio</h1>
                              </Link>
                        </div>
                        <nav className="nav">
                        <ul>
                              <li>
                                    <Link to={`/`}>TOP</Link>
                              </li>
                              <li>
                                    <Link to={`/about/`}>ABOUT</Link>
                              </li>
                              <li>
                                    <Link to={`/blogpost/`}>BLOG</Link>
                              </li>
                              <li>
                                    <Link to={`/contact/`}>CONTACT</Link>
                              </li>
                        </ul>
                        </nav>
                  </div>
            </ header>
      )
}

export default header
