import React from 'react';

const ButtonContainer = {
	flex: '1',
	padding: '10vh 0',
	textAlign: 'center'
}

const descriptionStyle={
	fontFamily:'helvetica',
	letterSpacing:'0.1rem',
	padding: '0.5rem'
}

const buttonStyle={
	padding:'1rem',
	background:'#0490ff',
	color:'white',
	fontFamily:'Helvetica',
	borderRadius:'0.5rem',
	fontSize: '1rem',
	wordWrap: 'break-word'
}

const LandingButton = ({name,description,id,onClick,...props}) =>{
	return <div style={ButtonContainer}>
			<button style={buttonStyle} id={id} onClick={(e)=>onClick(e)}> {name} </button>
			{description?<p style={descriptionStyle} id={id}>{description}</p> : ''}
	</div>
}
 export default LandingButton;
