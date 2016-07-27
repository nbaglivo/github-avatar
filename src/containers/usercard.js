import { connect } from 'react-redux'
import UserCard from '../components/usercard';
import { fetchUser } from '../actions/user';
import { mapStateToUser } from './usermap';

export default connect(mapStateToUser)(UserCard);
