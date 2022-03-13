import React from 'react'
import {actions as appActions} from './app.js';
import * as request from '../utils/fetch-request';
import HTTP_CODE from '../utils/http-code';
import {message} from "antd";
import {app} from "./index";


//action types
export const types = {
    SET_SPLIT_IMAGE: 'detection/SET_SPLIT_IMAGE',
};

export const actions = {
    uploadAndSplitImage: (data) => {
        return dispatch => {
            (async () => {
                dispatch(appActions.startFetch());
                const res = await request.postFile('./api/splicing/encryptedImage/' + 1, data);
                if (res.status === HTTP_CODE.OK) {
                    dispatch(actions.setSplitImage(res.body))
                    dispatch(appActions.finishFetch());
                }
            })();
        }
    },
    setSplitImage: (images) => {
        return {
            type: types.SET_SPLIT_IMAGE,
            images: images
        }
    },
}

const initialState = {
    images: {
        originalImage: "",
        splitOne: "",
        splitTwo: ""
    },
};

// reducer
export default function reducer(state = initialState, action) {
    switch (action.type) {
        case types.SET_SPLIT_IMAGE:
            return {...state, images: action.images};
        default:
            return state
    }
}
