import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="flex flex-col justify-center items-center text-white mt-40">
      <div>
        <h1 className="text-5xl">I'm Answary</h1>
      </div>
      <div>
        <p>Fullstack Developer</p>
      </div>
    </div>
  </Layout>
)

export default IndexPage
