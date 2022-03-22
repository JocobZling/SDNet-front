import React from 'react'
import {actions as appActions} from './app.js';
import * as request from '../utils/fetch-request';
import HTTP_CODE from '../utils/http-code';

//action types
export const types = {
    GET_HIST_IMAGE: 'analysis/GET_HIST_IMAGE',
};

export const actions = {
    uploadAndGetHist: (data) => {
        return dispatch => {
            (async () => {
                dispatch(appActions.startFetch());
                const res = await request.postFile('./api/analysis/hist', data);
                if (res.status === HTTP_CODE.OK) {
                    dispatch(actions.getHistImage(res.body))
                    dispatch(appActions.finishFetch());
                }
            })();
        }
    },
    getHistImage: (images) => {
        return {
            type: types.GET_HIST_IMAGE,
            images: images
        }
    },
}

const initialState = {
    images: {
        originalImage: "",
        splitOne: "",
        splitTwo: "",
        originalHist: "",
        histOne: "",
        histTwo: ""
    },
};

// reducer
export default function reducer(state = initialState, action) {
    switch (action.type) {
        case types.GET_HIST_IMAGE:
            return {...state, images: action.images};
        default:
            return state
    }
}
