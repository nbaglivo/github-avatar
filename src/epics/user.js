import { FETCH_USER, fetchUserFulfilled, fetchUserError } from '../actions/user';
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
			ajax.getJSON(`https://api.github.com/users/${action.payload}`)
			.map(fetchUserFulfilled)
			.catch(error => Observable.of(fetchUserError(error)))
	    )
);
