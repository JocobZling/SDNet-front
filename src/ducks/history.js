import React from 'react'
import {actions as appActions} from './app.js';
import * as request from '../utils/fetch-request';
import HTTP_CODE from '../utils/http-code';


//action types
export const types = {
    SET_FACE_HISTORY: 'history/SET_FACE_HISTORY',
};

export const actions = {
    getFaceHistory: (page = 1, userId) => {
        return dispatch => {
            (async () => {
                const res = await request.get(`./api/history/face/pageable/${userId}?page=${--page}`)
                if (res.status === HTTP_CODE.OK) {
                    debugger;
                    dispatch(actions.setFaceHistory(res.body));
                }
            })()
        }
    },
    setFaceHistory: (history) => {
        return {
            type: types.SET_FACE_HISTORY,
            faceHistory: history
        }
    }
}

const initialState = {
    faceHistory: {
        content:[]
    },
};

// reducer
export default function reducer(state = initialState, action) {
    switch (action.type) {
        case types.SET_FACE_HISTORY:
            return {...state, faceHistory: action.faceHistory};
        default:
            return state
    }
}
