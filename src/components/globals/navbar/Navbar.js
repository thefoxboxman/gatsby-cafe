import React, { Component } from 'react'
import NavbarHeader from './NavbarHeader'
import NavbarLinks from './NavbarLinks'
import NavbarIcons from './NavbarIcons'

export default class navbar extends Component {
	render() {
		return (
			<nav>
				<NavbarHeader/>
				<NavbarLinks/>
				<NavbarIcons/>
			</nav>
		)
	}
}
