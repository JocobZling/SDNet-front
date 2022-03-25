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
                    console.log(res.body)
                    dispatch(actions.setFaceDetail(res.body.textAreaValue))
                    dispatch(appActions.finishFetch());
                }
                if (res.status === HTTP_CODE.OK && res.body.flag === "STOP") {
                    clearInterval(window.timer);
                    console.log(res.body)
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
    },
    singleFaceImageDetection: (data) => {
        return dispatch => {
            (async () => {
                dispatch(appActions.startFetch());
                const res = await request.postWithBody('./face/userFaceUpLoad', data);
                if (res.status === HTTP_CODE.OK) {
                    dispatch(actions.setFaceDetection(res.body))
                    message.info({
                        content: res.body.msg,
                        style: {
                            marginTop: '40vh',
                        },
                    })
                    dispatch(appActions.finishFetch());
                }
            })();
        }
    },
    copyMoveZipDetection:(data)=>{
      return dispatch  =>{
          (async () => {
              dispatch(appActions.startFetch());
              const res = await request.postWithBody('/cmAndSt/doCMAndSTInBatchByZip', data);
              if (res.status === HTTP_CODE.OK) {
                  dispatch(actions.setZipDetection(res.body))
                  message.info({
                      content: res.body.data,
                      style: {
                          marginTop: '40vh'
                      }
                  })
              }
          })();
      }
    },
    faceZipDetection: (data) => {
        return dispatch => {
            (async () => {
                dispatch(appActions.startFetch());
                const res = await request.postWithBody('./face/doFaceDetInBatchByZip', data);
                if (res.status === HTTP_CODE.OK) {
                    dispatch(actions.setZipDetection(res.body))
                    message.info({
                        content: res.body.data,
                        style: {
                            marginTop: '40vh'
                        }
                    })
                }
            })();
        }
    },
    setCopyMoveDetection: (detection) => {
        return {
            type: types.SET_COPY_MOVE_DETECTION,
            detection: detection
        }
    },
    setFaceDetection: (detection) => {
        return {
            type: types.SET_FACE_DETECTION,
            detection: detection
        }
    },
    setZipDetection: (detection) => {
        return {
            type: types.SET_ZIP_DETECTION,
            detection: detection
        }
    },
    setCopyMoveAndSourceDetection: (detection) => {
        return {
            type: types.SET_COPY_MOVE_SOURCE_DETECTION,
            detection: detection
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
