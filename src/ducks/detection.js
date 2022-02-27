import React from 'react'
import {actions as appActions} from './app.js';
import * as request from '../utils/fetch-request';
import HTTP_CODE from '../utils/http-code';
import {message} from "antd";
import {app} from "./index";


//action types
export const types = {
    SET_FACE_DETECTION: 'detection/SET_FACE_DETECTION',
    SET_ZIP_DETECTION: 'detection/SET_ZIP_DETECTION',
    SET_COPY_MOVE_DETECTION: 'detection/SET_COPY_MOVE_DETECTION',
    SET_COPY_MOVE_SOURCE_DETECTION: 'detection/SET_COPY_MOVE_SOURCE_DETECTION'
};

export const actions = {
    singleCopyMoveImageDetection: (data) => {
        return dispatch => {
            (async () => {
                dispatch(appActions.startFetch());
                const res = await request.postWithBody('./copyMove/copyMoveDetection', data);
                if (res.status === HTTP_CODE.OK) {
                    dispatch(actions.setCopyMoveDetection(res.body))
                    message.success({
                        content: '检测完成',
                        style: {
                            marginTop: '40vh',
                        },
                    })
                    dispatch(appActions.finishFetch());
                }
            })();
        }
    },
    singleCopyMoveAndSourceDetection: () => {
        return dispatch => {
            (async () => {
                dispatch(appActions.startFetch());
                const res = await request.get('/sourceTarget/sourceTargetDetection');
                if (res.status === HTTP_CODE.OK) {
                    dispatch(actions.setCopyMoveAndSourceDetection(res.body))
                }

            })();
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
    detection: {
        msg: ''
    },
    zipDetection: {
        msg: '',
        data:''
    },
    copyMoveDetection: {
        msg: ''
    },
    copyMoveSourceDetection: {
        msg: ''
    }
};

// reducer
export default function reducer(state = initialState, action) {
    switch (action.type) {
        case types.SET_FACE_DETECTION:
            return {...state, detection: action.detection};
        case types.SET_ZIP_DETECTION:
            return {...state, zipDetection: action.detection}
        case types.SET_COPY_MOVE_DETECTION:
            return {...state, copyMoveDetection: action.detection}
        case types.SET_COPY_MOVE_SOURCE_DETECTION:
            return {...state, copyMoveSourceDetection: action.detection}
        default:
            return state
    }
}
