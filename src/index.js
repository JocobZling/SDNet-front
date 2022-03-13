import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {HashRouter, Route} from 'react-router-dom';
import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunkMiddleware from 'redux-thunk';
import {app, user,} from './ducks/index'
import {LoginContainer} from './containers/index';
import HomeContainer from "./containers/App";

const reducer = combineReducers({
    app,
    user,
})

const store = createStore(reducer, applyMiddleware(thunkMiddleware));

ReactDOM.render(
    <Provider store={store}>
        <HashRouter>
            <Route path={['/']} exact component={HomeContainer}/>
            <Route
                path={['/index', '/profile', '/password']}
                component={HomeContainer}/>
            <Route path='/login' exact component={LoginContainer}/>
        </HashRouter>
    </Provider>,
    document.getElementById('root')
)
