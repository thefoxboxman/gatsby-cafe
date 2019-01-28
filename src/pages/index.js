import React from 'react'
import styled from 'styled-components'
import {HomeHeader, Banner} from '../utils'
import img from '../images/bcg/homeBcg.jpeg'


import Layout from '../components/layout'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <HomeHeader img={img}>
      <Banner title="eatery" subtitle="555 main street, Santa Monica." />
    </HomeHeader>
  </Layout>
)


export default IndexPage
