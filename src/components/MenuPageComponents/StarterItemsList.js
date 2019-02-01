import React, { Component } from 'react'
import styled from 'styled-components'

import { styles } from '../../utils'
import MenuItem from '../MenuPageComponents/MenuItem'

export default class StarterItemsList extends Component {

	state = {
		MenuItem: [
			{id:1, 
			name: "Oysters by the Dozen",
			price: 25,
			blurb: "the best Sydney Rock oysters this side of the Murray",
		},
			{
				id: 2,
				name: "Salad",
				price: 12,
				blurb: "rabbit food jkhklhkjhjkhk;l khjhjkh gjh hhjkhkkl",
			},
			{
				id: 3,
				name: "Olives",
				price: 14,
				blurb: "spanish olives jkhklhkjhjkhk;l khjhjkh gjh hhjkhkkl",
			},	
		],
	}
	render() {
		return (
			<ListWrapper>
				<MenuItem name="oysters" price="12" blurb='ajfkldasjfasdl' />
				{this.state.MenuItem.map(item => {
					return (
						<MenuItem key={item.id}
							name={item.name}
							price={item.price}
							blurb={item.blurb}

						/>
					)
				})}
				
			</ListWrapper>
		)
	}
}

const ListWrapper = styled.div`

`