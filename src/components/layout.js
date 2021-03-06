import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import '../css/typography.css'
import * as styles from "./layout.module.css"
import { StaticImage } from 'gatsby-plugin-image'

const Layout = ({ pageTitle, children }) => {

  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          description
          title
        }
      }
    }
  `)

  return (
    <div className={styles.container}>
      <title>{pageTitle} | {data.site.siteMetadata.title} </title>
      <div>{data.site.siteMetadata.description}</div>
      <header>
          <div className={styles.headerWrapper}>
              <div className={styles.headerLeft}>
                  <div className={styles.logoWrap}>
                      <Link to="/">
                          {/* <img className="home-logo" src={logo} alt="site logo" /> */}
                          <StaticImage className="home-logo"
                            alt="site logo"
                            src="../images/logo.svg"
                          />
                      </Link>
                  </div>
              </div>
              <nav className={styles.headerRight}>
                <ul>
                  <li><Link to="/area">Area</Link></li>
                  <li><Link to="/offerings">Offerings</Link></li>
                  <li><Link to="/plans">Plans</Link></li>
                  <li><Link to="/details">Details</Link></li>
                  <li><Link to="/blog">Blog</Link>
          </li>
                  </ul>
              </nav>
          </div>
      </header>

      <main>
        <h1>{pageTitle}</h1>
        {children}
      </main>
    </div>
  )
}

export default Layout