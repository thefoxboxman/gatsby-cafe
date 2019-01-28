import React from 'react'
import styled from 'styled-components'
import { PageHeader, Banner } from '../utils/'
import contactImg from '../images/bcg/contactBcg.jpeg'

import Layout from '../components/layout'
import SEO from '../components/seo'

const ContactPage = () => (
	<Layout>
		<SEO title="Contact" keywords={[`gatsby`, `application`, `react`]} />
		<PageHeader img={contactImg}>
			<Banner title="contact us" subtitle="we are here for you" />
		</PageHeader>
	</Layout>
)

export default ContactPage
