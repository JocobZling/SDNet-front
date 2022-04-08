import React from 'react'
import {actions as appActions} from './app.js';
import * as request from '../utils/fetch-request';
import HTTP_CODE from '../utils/http-code';

//action types
export const types = {
    BEGIN_DETECTION: 'detection/BEGIN_DETECTION',
    GET_TEXTAREA_VALUE: 'detection/GET_TEXTAREA_VALUE',
    SET_DETECTION_RESULT: 'detection/SET_DETECTION_RESULT'
};

export const actions = {
    beginDetection: (data) => {
        return dispatch => {
            (async () => {
                dispatch(appActions.startFetch());
                const res = await request.get(`./api/face/faceDetection/${data}/1`);
                if (res.status === HTTP_CODE.OK) {
                    dispatch(appActions.finishFetch());
                }
            })();
        }
    },
    getDetectionDetail: (data) => {
        return dispatch => {
            window.timer = setInterval(async () => {
                dispatch(appActions.startFetch());
                const res = await request.get(`./api/face/detectionDetail/${data}`);
                if (res.status === HTTP_CODE.OK && res.body.flag === "go on" && res.body.textAreaValue.length) {
                    dispatch(actions.setFaceDetail(res.body.textAreaValue, res.body.flag))
                    dispatch(appActions.finishFetch());
                }
                if (res.status === HTTP_CODE.OK && res.body.flag === "STOP") {
                    clearInterval(window.timer);
                    dispatch(actions.setFaceDetail(res.body.textAreaValue, res.body.flag))
                    dispatch(actions.setResult(res.body.result, data))
                    dispatch(appActions.finishFetch());
                }
            }, 120);
        }
    },
    setFaceDetail: (textAreaValue, flag) => {
        let current = 0;
        let status = ["process", "wait", "wait"]
        if (textAreaValue.length > 30 && flag === "go no") {
            current = 1
            status = ["finish", "process", "wait"]

        } else if (flag === "STOP") {
            current = 2
            status = ["finish", "finish", "finish"]
        }
        return {
            type: types.GET_TEXTAREA_VALUE,
            textAreaValue: textAreaValue,
            current: current,
            status: status
        }
    },
    setResult: (result, data) => {
        result[2] = data
        return {
            type: types.SET_DETECTION_RESULT,
            result: result
        }
    }
}

const initialState = {
    textAreaValue: [],
    result: [],
    current: 0,
    status: ["process", "wait", "wait"]
};

// reducer
export default function reducer(state = initialState, action) {
    switch (action.type) {
        case types.GET_TEXTAREA_VALUE:
            return {...state, textAreaValue: action.textAreaValue, current: action.current, status: action.status};
        case types.SET_DETECTION_RESULT:
            return {...state, result: action.result}
        default:
            return state
    }
}
