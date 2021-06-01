import * as actionTypes from './types'
import { Dispatch } from 'redux'
import { resolve } from 'dns';

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

export const onAddAddressClick =async (dispatch: Dispatch, value: string) => {

    await fetch('https://github.co.jp/').then((res)=>{
        dispatch({
            type: actionTypes.ADD_ADDRESS,
            data: '1番'
        })
    })

    //検討中。。。。
    dispatch({
        type: actionTypes.ADD_ADDRESS,
        data: '2番'
    })
}