import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const ContactPage = () => (
  <Layout>
    <SEO title="Contact" />
    <div className="flex flex-col justify-center items-center text-white mt-40">
      <div>
        <h1 className="text-5xl font-bold">Let's have a chat</h1>
      </div>
      <div>
        <p>Contact</p>
      </div>
    </div>
  </Layout>
)

export default ContactPage
