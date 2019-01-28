import React from 'react'
import styled from 'styled-components'
import { PageHeader, Banner } from '../utils/'
import menuImg from '../images/bcg/menuBcg.jpeg'



import Layout from '../components/layout'
import SEO from '../components/seo'

const MenuPage = () => (
	<Layout>
		<SEO title="Menu" keywords={[`gatsby`, `application`, `react`]} />
		<PageHeader img={menuImg}>
			<Banner title="menu" subtitle="dig in" />
		</PageHeader>
	</Layout>
)

export default MenuPage
