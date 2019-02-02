import React, { Component } from 'react'
import styled from 'styled-components'

import MenuItem from '../MenuPageComponents/MenuItem'

export default class StarterItemsList extends Component {
  state = {
    MenuItem: [
      {
        id: 1,
        name: 'Caesar Salad',
        price: 15,
        blurb:
          'Crisp romaine lettuce tossed with our homemade Caesar dressing, croutons, and shredded parmesan cheese. ',
      },
      {
        id: 2,
        name: 'Spinach Salad',
        price: 8,
        blurb:
          'Fresh spinach, mushrooms, and hard-boiled egg served with warm bacon vinaigrette',
      },
      {
        id: 3,
        name: 'Lobster Bisque',
        price: 10,
        blurb:
          'Fresh minced lobster in a thick, creamy broth with a touch of sherry',
      },
      {
        id: 4,
        name: 'Sydney Rock Oysters (half dozen)',
        price: 25,
        blurb: 'Source direct from the sea at Pambula, South Coast NSW',
      },
      {
        id: 5,
        name: 'Kaluga queen imperial caviar 2.5g',
        price: 24,
        blurb: '',
      },
      {
        id: 6,
        name: 'San choy bau',
        price: 7,
        blurb: 'wagu beef, tiger prawns, peanuts, chilli & witlof',
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
