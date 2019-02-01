import React from 'react'
import styled from 'styled-components'

import { styles } from '../../utils'

export default function MenuItem({ name, price, blurb}) {
	
	
	return (
	<MenuItemWrapper>
		<div className="text">
			<div className="item-content">
				
				
					<h3 className="name">{name}</h3>
					<h3 className="price" >${price}</h3>
				
			</div>
			<p className="info" > *{blurb}</p>
		</div>
    </MenuItemWrapper>
	)
}

MenuItem.defaultProps = {
	name: 'dish name',
	price: '10',
	blurb: 'the mouth watering description of the tasty dishjfaljlajlfajsjfdj akjalfjsjfldsf  aslkdjakldjflajslfkjasdklfjklas jkajflsjlfakjlfasf;d',
}
const MenuItemWrapper = styled.div`
  @media (min-width: 576px) {
    display: grid;
    grid-template-columns: auto 1fr;
    grid-column-gap: 1rem;
  }

  .item-content {
    display: flex;
    justify-content: space-between;
    font-size: 1rem;
    text-transform: capitalize;
  }
  .name {
    color: ${styles.colors.mainYellow};
    margin-top: 0.5rem;
    padding-left: 1rem;
  }
  .price {
    color: ${styles.colors.mainYellow};
    margin-top: 0.5rem;
    padding-left: 1rem;
  }
  .info {
    margin-top: 0.5rem;
    word-spacing: 0.2rem;
    padding-left: 1rem;
    text-transform: lowercase;
  }
`