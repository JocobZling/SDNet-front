import React from 'react'
import {message} from 'antd';
import {actions as appActions} from './app.js';
import * as request from '../utils/fetch-request';
import HTTP_CODE from '../utils/http-code';

import {getHeaderFromLocalStorage} from "../utils/fetch-request";


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
                const res = await request.postWithBody('./api/users/login', data);
                if (res.status === HTTP_CODE.OK) {
                    window.localStorage.setItem("jwt", res.body.token);
                    window.localStorage.setItem("user", res.body.user.id);
                    message.success("登录成功！");
                    window.location.href = './';
                    dispatch(appActions.finishFetch());
                }
            })();
        }
    },
    testregist: (data) => {
        return dispatch => {
            (async () => {
                dispatch(appActions.startFetch());
                const res = await request.postWithBody('./api/users/testregist', data);
                if(res.status === HTTP_CODE.OK){
                    window.localStorage.setItem("jwt", res.body.token);
                    window.localStorage.setItem("user", res.body.user.id);
                    message.success("登录成功！");
                    window.location.href = './';
                    dispatch(appActions.finishFetch());
                }
            })();
        }
    },
    register: (data) => {
        return dispatch => {
            (async () => {
                dispatch(appActions.startFetch());
                //  debugger;
                const res = await request.postWithBody('./api/users/register', data);
                if (res.status === HTTP_CODE.OK) {
                    message.success("您已注册成功！");
                    window.localStorage.setItem("jwt", res.body.token);
                    window.localStorage.setItem("user", res.body.user.id);
                    window.location.href = "./"
                    dispatch(appActions.finishFetch());
                } else {
                    message.warn("此邮箱已注册，请登录！");
                    window.location.href = "./login"
                    dispatch(appActions.finishFetch());
                }
            })();
        }
    },
    password: (data) => {
        return dispatch => {
            (async () => {
                dispatch(appActions.startFetch());
                const userId = getHeaderFromLocalStorage('user');
                // debugger;
                const res = await request.update('./api/users/password/' + userId, data);
                if (res.status === HTTP_CODE.NO_CONTENT) {
                    message.success("修改密码成功");
                    dispatch(appActions.finishFetch());
                } else {
                    message.warn("修改密码失败");
                    dispatch(appActions.finishFetch());
                }

            })();
        }
    },
    profile: (data) => {
        return dispatch => {
            (async () => {
                dispatch(appActions.startFetch());
                // debugger;
                const userId = getHeaderFromLocalStorage('user');
                const res = await request.update('./api/users/profile/'+userId, data);
                if (res.status === HTTP_CODE.OK) {
                    message.success("修改个人信息成功");
                    dispatch(appActions.finishFetch());
                } else {
                    message.warn("修改个人信息失败");
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
