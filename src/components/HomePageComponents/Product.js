import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'

import {styles } from '../../utils'

export default function Product({product}) {
	const {name, price, info} = product;
	const {fixed} = product.image;

	return (
	<ProductWrapper>
<div className="text">
<div className="product-content">
	<Img fixed={fixed} className="image" />
	<div>
	<h3 className="name">{name}This the name</h3>
	<h3 className="price" >${price}</h3>
	</div>
</div>
<p className="info" >{info}</p>
</div>



	</ProductWrapper>
	)
}

const ProductWrapper = styled.div`
  @media (min-width: 576px) {
    display: grid;
    grid-template-columns: auto 1fr;
    grid-column-gap: 1rem;
  }
  .image {
    border-radius: 0.5rem;
  }
  .product-content {
    display: flex;
    justify-content: space-between;
    font-size: 1rem;
    text-transform: capitalize;
  }
  .name {
    color: ${styles.colors.mainYellow};
    margin-top: 0.5rem;
    
  }
  .price {
    color: ${styles.colors.mainYellow};
    margin-top: 0.5rem;
  }
	.info{
		margin-top: 0.5rem;
		word-spacing: 0.2rem;
		text-transform: lowercase;
	}
`