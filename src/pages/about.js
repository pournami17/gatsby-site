// Step 1: Import React
import * as React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
// Step 2: Define your component
const AboutPage = () => {
  return (
    
    <main>
   <Layout pageTitle="About">
    <p>Hi there! I'm the proud creator of this site, which I built with Gatsby.</p>
    </Layout>
      {/* <title>About Me</title>
      <h1>About Me</h1>
      <Link to="/">Back to Home</Link>
      <p>Hi there! I'm the proud creator of this site, which I built with Gatsby.</p> */}
    </main>
  )
}
// Step 3: Export your component
export default AboutPage