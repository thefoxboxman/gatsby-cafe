import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import { Link } from 'gatsby'

import { Section, Title, SectionButton } from '../../utils'

import Product from './Product'
const PRODUCTS = graphql`
  {
    items: allContentfulMenu {
      edges {
        node {
          id
          name
          price
          ingredients
          foodPhoto {
            fixed(width: 150, height: 150) {
              ...GatsbyContentfulFixed_tracedSVG
            }
          }
        }
      }
    }
  }
`



export default function Menu() {
	return (
		<Section>
			<Title title="featured items" message="little taste" />
			<ProductList>
				<StaticQuery query={PRODUCTS} render={data => {
					const products = data.items.edges
					return products.map(item => {
						return <Product key={item.node.id} product={item.node} />
					})
				}} />
			</ProductList>
		</Section>
	)
}

const ProductList = styled.div`
margin: 3rem 3rem;
display: grid;
grid-template-columns: 80%;
grid-row-gap: 3rem;

/*@media (min-width:576px){
	grid-template-columns: 80%;
}*/

@media (min-width:760px){
grid-template-columns: repeat(2, 1fr);
justify-content:center;
}

@media (min-width:992px){
grid-template-columns: 1fr 1fr;
grid-gap: 2rem;
}
`