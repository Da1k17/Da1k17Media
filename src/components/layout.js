import React from 'react'
import {Header, Footer} from "./index"
import "./layout.css"

const layout = ({children}) => {
      return (
            <>
                  <Header />

                  {children}

                  <Footer />
            </>
      )
}

export default layout
