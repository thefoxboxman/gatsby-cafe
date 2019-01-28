import React from 'react'
import styled from 'styled-components'
import {PageHeader} from '../utils/'
import aboutImg from '../images/bcg/aboutBcg.jpeg'

import Layout from '../components/layout'
import SEO from '../components/seo'

const AboutPage = () => (
  <Layout>
    <SEO title="About" keywords={[`gatsby`, `application`, `react`]} />
    <PageHeader img={aboutImg}>
      <h3>About page content</h3>
    </PageHeader>
  </Layout>
)

export default AboutPage