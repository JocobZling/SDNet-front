import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {HashRouter, Route} from 'react-router-dom';
import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunkMiddleware from 'redux-thunk';
import {app, user, detection, history} from './ducks/index';
import HomeContainer from "./containers/App";
import {MyLoginContainer} from "./containers";
import RegisterContainer from "./containers/RegisterContainer";


const reducer = combineReducers({
    app,
    user,
    detection,
    history
})

const store = createStore(reducer, applyMiddleware(thunkMiddleware));

ReactDOM.render(
    <Provider store={store}>
        <HashRouter>
            <Route path={['/']} exact component={HomeContainer}/>
            <Route
                path={['/index', '/profile', '/password', '/splicingDetection', '/videoDetection', '/encryptedImagAnalysis', '/faceHistory']}
                component={HomeContainer}/>
            <Route path='/login' exact component={MyLoginContainer}/>
            <Route path='/register' exact component={RegisterContainer}/>
        </HashRouter>
    </Provider>,
    document.getElementById('root')
)
