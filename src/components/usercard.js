import React from 'react';
import classNames from 'classnames';

import { Avatar } from 'material-ui';
import { withStyles } from 'material-ui/styles';

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
	avatar: {
		width: '120px',
		height: '120px',
		marginBottom: 10
	}
};

function UserCard({ user, classes }) {
	return (
		<div className={classes.card} zDepth={5} rounded={false}>
			<Avatar src={user? user.avatar_url : ''} className={classNames(classes.avatar)}/>
			<div>{user? user.name : ''}</div>
		</div>
	)
}

export default withStyles(styles)(UserCard);
