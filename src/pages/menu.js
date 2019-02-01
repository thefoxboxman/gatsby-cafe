import React from 'react'


import { PageHeader, Banner } from '../utils/'
import menuImg from '../images/bcg/menuBcg.jpeg'
import Layout from '../components/layout'
import SEO from '../components/seo'

import CourseStarters from '../components/MenuPageComponents/CourseStarters'
import CourseMains from '../components/MenuPageComponents/CourseMains'
import CourseDesert from '../components/MenuPageComponents/CourseDeserts'

const MenuPage = () => (
	<Layout>
		<SEO title="Menu" keywords={[`gatsby`, `application`, `react`]} />
		<PageHeader img={menuImg}>
			<Banner title="menu" subtitle="dig in" />
		</PageHeader>
		
		<CourseStarters />
		<CourseMains />
		<CourseDesert />
	
			
		
		
	</Layout>
)

export default MenuPage
