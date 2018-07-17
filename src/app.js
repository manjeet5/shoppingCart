import React from 'react';
import ReactDOM from 'react-dom';
import Banner from './components/banner';
import LandingButton from './components/landingButton';
const buttonStructure = {display: 'flex',
	height:'50vh',
	justifyContent: 'space-around',
	alignItems:'center'};

	const buttonContainer = {
		flex: '1',
		padding: '10vh 0',
		textAlign: 'center'
	}

export default class App extends React.Component{

	constructor(props){
		super()
	}

	onClick = (e) =>{
		console.log('I was clicked')
	}

	render(){
	 console.log('APPP');
	 return(
		 <div>
			 <Banner content='Shopping Cart' />
			 <div style={buttonStructure}>
				 <LandingButton id='adminPage'
				 	name='Admin' onClick={this.onClick}
					description='Create Items and Coupons to Attract shoppers' />
				 <LandingButton
				 	id='ShoppingCartPage' onClick={this.onClick}
					name='Shopping Cart'
					description='Buy cool stuff from your favorite Vendor' />
			 </div>
		 </div>
	 )
	}

}


ReactDOM.render(<App/>,document.getElementById('app'))
