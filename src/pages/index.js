import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="hero text-white">
      <div>
        <h1 className="text-6xl">Hi, IamAnswary</h1>
      </div>
      <div>
        <p>Fullstack Developer</p>
      </div>
    </div>
  </Layout>
)

export default IndexPage
