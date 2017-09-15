import React from 'react';
import classNames from 'classnames';

import { TextField, Paper } from 'material-ui';
import { MuiThemeProvider, createMuiTheme, withStyles } from 'material-ui/styles';
import { red } from 'material-ui/colors';

import UserCard from '../containers/usercard';

const styles = {
	main: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		flexDirection: 'column',
		height: '100vh',
		backgroundColor: red[500]
	},
	paper: {
		display: 'flex',
		padding: '20px'
	}
};

const theme = createMuiTheme();

function App({ pushPath, children, classes, onInputChanged }) {
	return (
		<MuiThemeProvider theme={theme}>
			<main className={classes.main} >
				<Paper className={classes.paper} zDepth={4} rounded={false}>
					<TextField label="Write a Github username" onChange={ (event) => onInputChanged(event.target.value) }/>
					<UserCard />
				</Paper>
			</main>
		</MuiThemeProvider>
	)
}

export default withStyles(styles)(App);
