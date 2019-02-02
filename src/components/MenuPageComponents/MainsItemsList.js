import React, { Component } from 'react'
import styled from 'styled-components'

import MenuItem from './MenuItem'

export default class MainsItemsList extends Component {
  state = {
    MenuItem: [
			{
				id: 1,
				name: 'Cone Bay barramundi',
				price: 40,
				blurb:
					'charcoal roasted cauliflower, turmeric dressing, almonds (gf) ',
			},
			{
				id: 2,
				name: 'Tajima wagyu rump (mb 6, 280g)',
				price: 38,
				blurb:
					'café de Paris butter (gf)',
			},
			{
				id: 3,
				name: 'Tiger prawn linguine ',
				price: 40,
				blurb:
					'cherry tomatoes, basil, chilli, confit garlic, white wine',
			},
			{
				id: 4,
				name: 'Grilled King prawns',
				price: 48,
				blurb: 'capers, lemon, brown butter, espelette pepper (5) (gf)',
			},
			{
				id: 5,
				name: 'surf and turf',
				price: 54,
				blurb: 'Tajima wagyu rump (mb 6, 280g), king prawn, seaweed butter',
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
