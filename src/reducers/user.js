import Immutable from 'immutable';
import { FETCH_USER_FULFILLED, FETCH_USER, FETCH_USER_ERROR } from '../actions/user'

const initialState = Immutable.fromJS({ loading: false });

const users = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_USER:
			return state.set('loading', true);
		case FETCH_USER_FULFILLED:
			return state
				.set('user', action.payload)
				.set('loading', false);
			case FETCH_USER_ERROR:
				return state.set('loading', false)
		default:
			return state;
	}
};

export default users;
