import React from 'react'
import {message, notification, Button} from 'antd';
import {actions as appActions} from './app.js';
import * as request from '../utils/fetch-request';
import HTTP_CODE from '../utils/http-code';

//action types
export const types = {
    SET_USER: 'user/SET_USER',
    GET_USER: 'user/GET_USER',
    SHOW_LOGIN: 'user/SHOW_LOGIN',
    SET_PHONE_NUMBER_REGISTERED: 'user/SET_PHONE_NUMBER_REGISTERED',
    SEND_PASS_EMAIL_SUCCESS: 'user/SEND_PASS_EMAIL_SUCCESS',
};

//action creators
export const actions = {
    login: (data) => {
        return dispatch => {
            (async () => {
                dispatch(appActions.startFetch());
                const res = await request.postWithBody('http://127.0.0.1:8080/api/users/login', data);
                if (res.status === HTTP_CODE.OK) {
                    window.localStorage.setItem("jwt", res.body.data.jwtToken);
                    window.localStorage.setItem("id", res.body.data.id);
                    window.localStorage.setItem("userName", res.body.data.username);
                    message.success("登录成功！");
                    window.location.href = '/';
                    dispatch(appActions.finishFetch());
                }
            })();
        }
    },
    register: (data) => {
        return dispatch => {
            (async () => {
                dispatch(appActions.startFetch());
                debugger;
                const res = await request.postWithBody('http://127.0.0.1:8080/api/users/register', data);
                if (res.status === HTTP_CODE.OK) {
                    message.success("注册成功！");
                    dispatch(appActions.finishFetch());
                }
            })();
        }
    },
}
const initialState = {
    user: {},
    isLoginShow: true
};

// reducer
export default function reducer(state = initialState, action) {
    switch (action.type) {
        case types.SET_USER:
            const user = action.payload;
            return {...state, user};
        case types.GET_USER:
            return {...state};
        case types.SHOW_LOGIN:
            const flag = action.payload;
            return {...state, isLoginShow: !flag};
        default:
            return state
    }
}
