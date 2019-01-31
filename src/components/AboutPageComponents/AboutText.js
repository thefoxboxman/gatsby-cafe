import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

import { styles } from '../../utils'
import { Section, Title, SectionButton } from '../../utils'



export default class AboutText extends Component {
	render() {
		return <Section>
			<Title message="let me tell you about" title="my skills" />
			<AboutTextWrapper>
				<p className="text">
					Ut magna tempor culpa aliqua adipisicing eu nisi non veniam consequat culpa id dolore. Sunt consequat voluptate duis veniam id fugiat. Reprehenderit ipsum sint amet incididunt aliqua ut incididunt qui eu velit ullamco labore officia in. Consequat pariatur id fugiat anim dolore aliqua amet laborum proident nisi amet id ut. Commodo quis eu labore irure veniam ea consectetur id sint excepteur commodo ea non. Laborum elit et nostrud id adipisicing. Magna incididunt pariatur laborum cillum dolor.
					</p>
				<Link to="/contact" style={{ textDecoration: 'none' }}>
					<SectionButton style={{ margin: '2rem auto' }}>Contact Me</SectionButton>
				</Link>
			</AboutTextWrapper>
		</Section>


	}
}
const AboutTextWrapper = styled.div`
  width: 90vw;
  margin: 2rem auto;
  line-height: 2rem;
  color: ${styles.colors.mainGrey};
  word-spacing: 0.2rem;
  @media (min-width: 768px) {
    width: 70vw;
  }
  @media (min-width: 992px) {
    width: 60vw;
  }
`