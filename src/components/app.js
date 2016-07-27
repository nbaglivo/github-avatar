import React from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';

import UserCard from '../containers/usercard';

const style = {
	display: 'flex',
	alignItems: 'center',
	flexDirection: 'column'
};

const App = ({ pushPath, children, onInputChanged }) => (
	<MuiThemeProvider>
		<main style={style}>
			<TextField hintText="Write a Github username" onChange={ (event) => onInputChanged(event.target.value) }/>
			<UserCard />
		</main>
	</MuiThemeProvider>
)

export default App
