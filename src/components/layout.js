import React from 'react'
import PropTypes from 'prop-types'
import {
	createGlobalStyle
} from 'styled-components'

import Navbar from './globals/navbar/Navbar'
//import './layout.css'

const Layout = ({
	children
}) => {
	return ( <React.Fragment >
		<MyGlobalStyle />
		<Navbar /> 
		{children} 
		</React.Fragment>
	)
}

const MyGlobalStyle = createGlobalStyle `
*{
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}

body {
	font - family: 'Open Sans', sans-serif;
	color: white;
	background: green;
}
`

Layout.propTypes = {
	children: PropTypes.node.isRequired,
}

export default Layout