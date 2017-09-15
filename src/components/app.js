import React from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';

import UserCard from '../containers/usercard';

const style = {
	main: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		flexDirection: 'column',
		height: '100vh',
		backgroundColor: '#f44336'
	},
	paper: {
		display: 'flex',
		padding: '20px'
	}
};

const App = ({ pushPath, children, onInputChanged }) => (
	<MuiThemeProvider>
		<main style={style.main}>
			<Paper style={style.paper} zDepth={4} rounded={false}>
				<TextField hintText="Write a Github username" onChange={ (event) => onInputChanged(event.target.value) }/>
				<UserCard />
			</Paper>
		</main>
	</MuiThemeProvider>
)

export default App
