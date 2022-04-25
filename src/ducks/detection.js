import React from 'react'
import {actions as appActions} from './app.js';
import * as request from '../utils/fetch-request';
import HTTP_CODE from '../utils/http-code';

//action types
export const types = {
    BEGIN_DETECTION: 'detection/BEGIN_DETECTION',
    GET_TEXTAREA_VALUE: 'detection/GET_TEXTAREA_VALUE',
    SET_DETECTION_RESULT: 'detection/SET_DETECTION_RESULT',
    CLEAR_STATE: 'detection/CLEAR_STATE',
    SET_DETECTION_ID: 'detection/SET_DETECTION_ID'
};

export const actions = {
    beginDetection: (data, type) => {
        return dispatch => {
            (async () => {
                dispatch(appActions.startFetch());
                const res = await request.get(`./api/face/faceDetection/${data}/${type}`);
                if (res.status === HTTP_CODE.OK) {
                    dispatch(appActions.finishFetch());
                }
            })();
        }
    },
    getDetectionDetail: (data, type) => {
        return dispatch => {
            window.timer = setInterval(async () => {
                dispatch(appActions.startFetch());
                const res = await request.get(`./api/face/detectionDetail/${data}/${type}`);
                if (res.status === HTTP_CODE.OK && res.body.flag === "go on" && res.body.textAreaValue.length) {
                    dispatch(actions.setFaceDetail(res.body.textAreaValue, res.body.flag))
                    dispatch(appActions.finishFetch());
                }
                if (res.status === HTTP_CODE.OK && res.body.flag === "STOP") {
                    clearInterval(window.timer);
                    dispatch(actions.setFaceDetail(res.body.textAreaValue, res.body.flag, res.body.originalBase64))
                    dispatch(actions.setResult(res.body.result, data))
                    dispatch(appActions.finishFetch());
                    window.localStorage.removeItem('detectionId')
                }
            }, 300);
        }
    },
    setFaceDetail: (textAreaValue, flag, originalPath) => {
        let current = 0;
        if (textAreaValue.length > 2 && flag === "go on") {
            current = 1
        }
        if (flag === "STOP") {
            current = 2
        }
        return {
            type: types.GET_TEXTAREA_VALUE,
            textAreaValue: textAreaValue,
            originalPath: originalPath,
            current: current,
        }
    },
    setResult: (result, data) => {
        result[2] = data
        let r1 = result[0].split(",")[0].split("[")[1]
        let r11 = result[0].split(",")[1].split("]")[0]
        let r2 = result[1].split(",")[0].split("[")[1]
        let r22 = result[1].split(",")[1].split("]")[0]
        return {
            type: types.SET_DETECTION_RESULT,
            result: result,
            flag: Number(r1) + Number(r2) <= Number(r11) + Number(r22)
        }
    },
    setClear: () => {
        return {
            textAreaValue: [],
            result: [],
            current: 0,
            originalPath: "",
            flag: "",
            detectionId: 0,
            type: types.CLEAR_STATE,
        }
    },
    setDetectionId: (detectionId) => {
        return {
            detectionId: detectionId,
            type: types.SET_DETECTION_ID
        }
    }
}

const initialState = {
    textAreaValue: [],
    result: [],
    current: 0,
    originalPath: "",
    flag: "",
    detectionId: 0
};

// reducer
export default function reducer(state = initialState, action) {
    switch (action.type) {
        case types.GET_TEXTAREA_VALUE:
            return {
                ...state,
                textAreaValue: action.textAreaValue,
                current: action.current,
                status: action.status,
                originalPath: action.originalPath
            };
        case types.SET_DETECTION_RESULT:
            return {...state, result: action.result, flag: action.flag}
        case types.CLEAR_STATE:
            return {
                ...state,
                result: action.result,
                textAreaValue: action.textAreaValue,
                originalPath: action.originalPath,
                flag: action.flag,
                current: action.current,
                detectionId: action.detectionId
            }
        case types.SET_DETECTION_ID:
            return {
                ...state,
                detectionId: action.detectionId
            }
        default:
            return state
    }
}
