import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="About" />
    <div className="hero">
      <div>
        <h1>About</h1>
      </div>
      <div>
        <p>Fullstack Developer</p>
      </div>
    </div>
  </Layout>
)

export default IndexPage
