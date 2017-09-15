import React from 'react';
import classNames from 'classnames';

import { Avatar } from 'material-ui';
import { CircularProgress } from 'material-ui/Progress';
import { withStyles } from 'material-ui/styles';
import { red } from 'material-ui/colors';

const styles = {
	card: {
		height: 200,
		width: 200,
		padding: 20,
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
	},
	avatarWrapper: {
		position: 'relative',
	},
	avatar: {
		width: '120px',
		height: '120px',
		marginBottom: 10
	},
	progress: {
		color: red[500],
		position: 'absolute',
		top: -2,
		left: -2,
	}
};



function UserCard({ user, loading, classes }) {
	return (
		<div className={classes.card} zDepth={5} rounded={false}>
			<div className={classes.avatarWrapper} >
				<Avatar src={user? user.avatar_url : ''} className={classNames(classes.avatar)}/>
				{ loading && <CircularProgress size={124} className={classes.progress} /> }
			</div>
			<div>{user? user.name : ''}</div>
		</div>
	)
}

export default withStyles(styles)(UserCard);
