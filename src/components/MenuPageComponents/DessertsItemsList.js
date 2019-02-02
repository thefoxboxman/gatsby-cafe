import React, { Component } from 'react'
import styled from 'styled-components'

import MenuItem from '../MenuPageComponents/MenuItem'

export default class DessertsItemsList extends Component {
	state = {
		MenuItem: [
			{
				id: 1,
				name: 'Affogato, vanilla bean ice cream & espresso with Amaretto or Frangelico (gf)',
				price: 15,
				blurb:
					' ',
			},
			{
				id: 2,
				name: 'Selection of handmade Kakawa chocolates (gf)',
				price: 18,
				blurb:
					'',
			},
			{
				id: 3,
				name: 'Selection of three cheeses, quince, sea salt bark',
				price: 28,
				blurb:
					'Le Conquérant Camembert, France, pasteurised cows milk, Pyengana clothbound Cheddar, Tasmania, pasteurised cows milk, Berrys Creek Bellingham Blue, Victoria, pasteurised Jersey cows milk',
      },

		],
	}
	render() {
		return (
			<ListWrapper>
				{this.state.MenuItem.map(item => {
					return (
						<MenuItem
							key={item.id}
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

const ListWrapper = styled.div``
