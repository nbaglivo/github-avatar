import React from 'react';
import classNames from 'classnames';

import { TextField, Paper } from 'material-ui';
import { CircularProgress } from 'material-ui/Progress'
import { MuiThemeProvider, createMuiTheme, withStyles } from 'material-ui/styles';

import UserCard from '../containers/usercard';

const styles = {
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
