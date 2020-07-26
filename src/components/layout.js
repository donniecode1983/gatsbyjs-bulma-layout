/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div className={"container mt-2"}>
        <main>{children}</main>
      </div>





      {/*<footer className={"container"}>*/}
      {/*    © {new Date().getFullYear()},{` `}*/}
      {/*      <a href={"https://github.com/donniecode1983/gatsbyjs-bulma-layout"}>Gatsby Bulma Layout</a>*/}
      {/*      <br />*/}
      {/*      Built with*/}
      {/*    {`  `}*/}
      {/*    <a href="https://www.gatsbyjs.org">Gatsby</a>*/}
      {/*  </footer>*/}
        <footer className="footer">
            <div className="content has-text-centered">
                <p>
                    <strong>{data.site.siteMetadata.title}</strong> by <a href="https://github.com/donniecode1983">Donovan Murphy</a>. The source code is
                    licensed { ` ` }
                    <a href="http://opensource.org/licenses/mit-license.php">MIT</a>.
                </p>
            </div>
        </footer>

    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
