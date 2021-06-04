import * as actionTypes from './types'

export const plusActionCreator = (value: number): actionTypes.Action => {
    return {
        type: actionTypes.PLUS,
        data: value
    }
};

export const minusActionCreator = (value: number): actionTypes.Action => {
    return {
        type: actionTypes.MINUS,
        data: value
    }
};

export const multiplyActionCreator = (value: number): actionTypes.Action => {
    return {
        type: actionTypes.MULTPLY,
        data: value
    }
};

export const divideActionCreator = (value: number): actionTypes.Action => {
    return {
        type: actionTypes.DIVIDE,
        data: value
    }
};