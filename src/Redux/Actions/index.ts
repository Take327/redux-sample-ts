import * as actionTypes from './types'


/**
 * 
 * 
 * @param value 
 * @returns 
 */

export const onPlusClick = (value: number): actionTypes.Action => {
    return {
        type: actionTypes.PLUS,
        data: value
    }
};

export const onMinusClick = (value: number): actionTypes.Action => {
    return {
        type: actionTypes.MINUS,
        data: value
    }
};

export const onMultiplyClick = (value: number): actionTypes.Action => {
    return {
        type: actionTypes.MULTPLY,
        data: value
    }
};

export const onDivideClick = (value: number): actionTypes.Action => {
    return {
        type: actionTypes.DIVIDE,
        data: value
    }
};