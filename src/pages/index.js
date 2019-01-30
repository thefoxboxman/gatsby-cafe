import React from 'react'
import styled from 'styled-components'
import {HomeHeader, Banner, BannerButton} from '../utils'
import img from '../images/bcg/homeBcg.jpeg'
import QuickInfo from '../components/HomePageComponents/QuickInfo'
import Gallery from '../components/HomePageComponents/Gallery1'
import Menu from '../components/HomePageComponents/Menu'

import Layout from '../components/layout'
import SEO from '../components/seo'


const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <HomeHeader img={img}>
      <Banner title="gatsby cafe" subtitle="55 pacific avenue, Byron Bay, Australia." >
			<BannerButton style={{margin: `2rem auto`}}>menu</BannerButton>
			</Banner>
    </HomeHeader>
		<QuickInfo />
		<Gallery />
		<Menu />
		
  </Layout>
)


export default IndexPage
