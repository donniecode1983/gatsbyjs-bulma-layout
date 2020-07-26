import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import 'react-bulma-components/dist/react-bulma-components.min.css';

const Header = ({ siteTitle }) => (

  <header>
      <nav className="navbar" role="navigation" aria-label="main navigation" style={{backgroundColor: "rebeccapurple"}}>
          <div className="navbar-brand">
              <a className="navbar-item is-size-3 has-text-white" href="https://bulma.io">
                  {/*<img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" />*/}
                  {siteTitle}
              </a>

              <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false"
                 data-target="navbarBasicExample">
                  <span aria-hidden="true"></span>
                  <span aria-hidden="true"></span>
                  <span aria-hidden="true"></span>
              </a>
          </div>

          <div id="navbarBasicExample" className="navbar-menu">
              <div className="navbar-start">
                  <a className="navbar-item has-text-white">
                      Home
                  </a>

                  <a className="navbar-item has-text-white">
                      Documentation
                  </a>

                  <div className="navbar-item has-dropdown is-hoverable">
                      <a className="navbar-link has-text-white">
                          More
                      </a>

                      <div className="navbar-dropdown">
                          <a className="navbar-item">
                              About
                          </a>
                          <a className="navbar-item">
                              Jobs
                          </a>
                          <a className="navbar-item">
                              Contact
                          </a>
                          <hr className="navbar-divider" />
                              <a className="navbar-item">
                                  Report an issue
                              </a>
                      </div>
                  </div>
              </div>

              <div className="navbar-end">
                  <div className="navbar-item">
                      <div className="buttons">
                          <a className="button is-primary">
                              <strong>Sign up</strong>
                          </a>
                          <a className="button is-light">
                              Log in
                          </a>
                      </div>
                  </div>
              </div>
          </div>
      </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
