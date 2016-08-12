import React from 'react';
import { render } from 'react-dom';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import { Router, browserHistory, Route, IndexRoute } from 'react-router';
import { syncHistoryWithStore, routerReducer, routerMiddleware } from 'react-router-redux';
import { combineEpics, createEpicMiddleware } from 'redux-observable';

import App from './containers/app';
import userReducer from './reducers/user';
import { fetchUser }  from './actions/user';

const routes = (
	<Route path="/" component={App}>
	</Route>
)

const reducer = combineReducers({
	users: userReducer,
	routing: routerReducer
});

const rootEpic = combineEpics(fetchUser);

const epicMiddleware = createEpicMiddleware(rootEpic);

const store = createStore(
	reducer,
	applyMiddleware(thunkMiddleware, routerMiddleware(browserHistory), epicMiddleware)
)

const history = syncHistoryWithStore(browserHistory, store)

render(
	<Provider store={store}>
		<Router history={history} routes={routes} />
	</Provider>,
	document.getElementById('root')
)

// TODO: Use real log.
store.subscribe(function() {
	console.log('state changes newState=%O', store.getState().users.toJS());
});
