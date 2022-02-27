import React from 'react'
import {actions as appActions} from './app.js';
import * as request from '../utils/fetch-request';
import HTTP_CODE from '../utils/http-code';


//action types
export const types = {
    GET_FACE_HISTORY: 'history/GET_FACE_HISTORY',
    GET_COPY_MOVE_HISTORY: 'history/GET_COPY_MOVE_HISTORY',
};

export const actions = {
    getFaceHistory: (data) => {
        return dispatch => {
            (async () => {
                dispatch(appActions.startFetch());
                const res = await request.postWithBody('./face/getFaceHistoryByUid', data);
                if (res.status === HTTP_CODE.OK) {
                    dispatch(actions.setFaceHistory(res.body.data))
                    dispatch(appActions.finishFetch());
                }
            })();
        }
    },
    getCopyMoveHistory: (data) => {
        return dispatch => {
            (async () => {
                    dispatch(appActions.startFetch());
                    const res = await request.postWithBody('./cmAndSt/getHistoryByUid', data);
                    if (res.status === HTTP_CODE.OK) {
                        dispatch(actions.setCopyMoveHistory(res.body.data))
                        dispatch(appActions.finishFetch())
                    }
                }
            )();
        }
    },
    setFaceHistory: (history) => {
        return {
            type: types.GET_FACE_HISTORY,
            history: history
        }
    },
    setCopyMoveHistory: (history) => {
        return {
            type: types.GET_COPY_MOVE_HISTORY,
            history: history
        }
    }
}

const initialState = {
    faceHistory: {
        data: {
            list: []
        }
    },
    copyMoveHistory: {
        data: {
            list: []
        }
    }
};

// reducer
export default function reducer(state = initialState, action) {
    switch (action.type) {
        case types.GET_FACE_HISTORY:
            return {...state, faceHistory: action.history};
        case types.GET_COPY_MOVE_HISTORY:

            return {...state, copyMoveHistory: action.history};
        default:
            return state
    }
}
