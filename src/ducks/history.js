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

        getFaceHistory : (page=1) => {
            return dispatch => {
                (async () => {
                    const res = await request.get(`./face/getFaceHistory/pageable?page=${--page}`)
                    if (res.status === HTTP_CODE.OK) {
                        dispatch({
                            type: 'REFRESH_OBJECTIVE_QUIZ_PAGEABLE',
                            data: res.body
                        })
                    }
                })()
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
