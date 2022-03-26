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
                if (res.status === HTTP_CODE.OK && res.body.flag === "go on") {
                    dispatch(actions.setFaceDetail(res.body.textAreaValue))
                    dispatch(appActions.finishFetch());
                }
                if (res.status === HTTP_CODE.OK && res.body.flag === "STOP") {
                    clearInterval(window.timer);
                    dispatch(actions.setFaceDetail(res.body.textAreaValue))
                    dispatch(actions.setResult(res.body.result))
                    dispatch(appActions.finishFetch());
                }
            }, 30);
        }
    },
    setFaceDetail: (textAreaValue) => {
        return {
            type: types.GET_TEXTAREA_VALUE,
            textAreaValue: textAreaValue
        }
    },
    setResult: (result) => {
        return {
            type: types.SET_DETECTION_RESULT,
            result: result
        }
    }
}

const initialState = {
    textAreaValue: [],
    result: []
};

// reducer
export default function reducer(state = initialState, action) {
    switch (action.type) {
        case types.GET_TEXTAREA_VALUE:
            return {...state, textAreaValue: action.textAreaValue};
        case types.SET_DETECTION_RESULT:
            return {...state, result: action.result}
        default:
            return state
    }
}
