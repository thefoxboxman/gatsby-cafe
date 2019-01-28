import React from 'react'
import styled from 'styled-components'
import { PageHeader } from '../utils/'
import contactImg from '../images/bcg/contactBcg.jpeg'

import Layout from '../components/layout'
import SEO from '../components/seo'

const ContactPage = () => (
	<Layout>
		<SEO title="Contact" keywords={[`gatsby`, `application`, `react`]} />
		<PageHeader img={contactImg}>
			<h3>Contact page content</h3>
		</PageHeader>
	</Layout>
)

export default ContactPage
