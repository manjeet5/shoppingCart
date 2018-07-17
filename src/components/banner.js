import React from 'react';

let headerStyle={
	fontFamily: 'Helvetica',
	textAlign: 'center',
	fontSize: '3rem',
	background: 'lightgrey',
	margin: '0',
	padding:' 2rem',
	wordWrap:'break-all'
}
const Banner = ({content,...props}) =>{
	return <h1 style={headerStyle}>{content}</h1>
}

export default  Banner;
