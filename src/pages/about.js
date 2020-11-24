import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage = () => (
  <Layout>
    <SEO title="About" />
    <div className="flex flex-col justify-center items-center text-white">
      <div>
        <h1 className="text-6xl">About</h1>

        <button className="bg-redd-900 py-2 px-8 focus:outline-none">Resume</button>
      </div>
      <div>
        <p>About</p>
      </div>
    </div>
  </Layout>
)

export default AboutPage
