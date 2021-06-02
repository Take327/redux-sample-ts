import * as actionTypes from './types'

export const plusAction = (value: number): actionTypes.Action => {
    return {
        type: actionTypes.PLUS,
        data: value
    }
};

export const minusAction = (value: number): actionTypes.Action => {
    return {
        type: actionTypes.MINUS,
        data: value
    }
};

export const multiplyAction = (value: number): actionTypes.Action => {
    return {
        type: actionTypes.MULTPLY,
        data: value
    }
};

export const divideAction = (value: number): actionTypes.Action => {
    return {
        type: actionTypes.DIVIDE,
        data: value
    }
};