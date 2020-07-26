import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

      <section className="section">
          <div className="container">
              <h1 className="title">Welcome to the Gatsby Bulma Layout</h1>
              <h2 className="subtitle">
                  This Template uses the <a href={"https://bulma.io/"} target={"new"}>Bulma CSS Framework</a>
                  with the <a href={"https://www.gatsbyjs.org/"} target={"new"}>GatsbyJS Static Site Generator</a>.
              </h2>
              <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
                  <Image />
              </div>
          </div>
      </section>
  </Layout>
)

export default IndexPage
