export const FETCH_USER = 'FETCH_USER';
export const FETCH_USER_FULFILLED = 'FETCH_USER_FULFILLED';
export const FETCH_USER_REJECTED = 'FETCH_USER_REJECTED';

export const fetchUser = username => ({ type: FETCH_USER, payload: username });
export const fetchUserFulfilled = payload => ({ type: FETCH_USER_FULFILLED, payload });
export const fetchUserError = error => ({ type: FETCH_USER_REJECTED, payload: error.xhr.response });

import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounce';
import 'rxjs/add/operator/catch';
import { ajax } from 'rxjs/observable/dom/ajax';
import { Observable } from 'rxjs';

export const fetchUserEpic = action$ => (
	action$.ofType(FETCH_USER)
		.debounceTime(500)
		.mergeMap(action =>
			ajax
				.getJSON(`https://api.github.com/users/${action.payload}`)
				.map(fetchUserFulfilled)
				.catch(error => Observable.of(fetchUserError(error)))
	  )
);
