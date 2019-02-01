import React from 'react'
import styled from 'styled-components'

import { styles } from '../../utils'

import StarterItemsList from '../MenuPageComponents/StarterItemsList';


export default function CourseStarters({ title }) {
	return (
		<CourseWrapper>

			<h2 className="title">{title}</h2>
			<div className="underline"></div>
			<StarterItemsList />
		</CourseWrapper>
	)
}

CourseStarters.defaultProps = {
	title: 'starters',
}
const CourseWrapper = styled.div`
  text-align: center;
  padding: 2rem 0rem;
  width: 90vw;
  margin: 0 auto;
  .title {
    letter-spacing: 0.3rem;
    font-size: 2rem;
    margin: 0 auto;
    text-transform: uppercase;
  }
  .underline {
    width: 5rem;
    height: 0.2rem;
    background: ${styles.colors.mainYellow};
    margin: 0.5rem auto;
  }
  @media (min-width: 768px) {
    width: 70vw;
  }
  @media (min-width: 992px) {
    width: 60vw;
  }
`