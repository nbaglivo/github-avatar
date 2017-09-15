import React from 'react';
import Avatar from 'material-ui/Avatar';
import Paper from 'material-ui/Paper';

const style = {
	height: 200,
	width: 200,
	textAlign: 'center',
	padding: 20,
	display: 'inline-block',
};

const avatarStyle = {
	marginBottom: 10
}

const UserCard = ({user}) => (
	<div style={style} zDepth={5} rounded={false}>
		<Avatar
				src={user? user.avatar_url : ''}
				size={120}
				style={avatarStyle}
			/>
		<div>{user? user.name : ''}</div>
	</div>
);

export default UserCard;
