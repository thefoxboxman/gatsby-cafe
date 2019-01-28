import React from 'react'
import styled from 'styled-components'
import { PageHeader } from '../utils/'
import menuImg from '../images/bcg/menuBcg.jpeg'



import Layout from '../components/layout'
import SEO from '../components/seo'

const MenuPage = () => (
	<Layout>
		<SEO title="Menu" keywords={[`gatsby`, `application`, `react`]} />
		<PageHeader img={menuImg}>
			<h3>Menu page content</h3>
		</PageHeader>
	</Layout>
)

export default MenuPage
