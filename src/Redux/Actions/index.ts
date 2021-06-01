import * as actionTypes from './types'
import { Dispatch } from 'redux'

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

export const onAddAddressClick = async (dispatch: Dispatch, value: string) => {

    let test: string = 'a'

    const setTest = () => {
        setTimeout(() => {
            test = 'b'
        }, 200)
    }

    await setTest()

    //検討中。。。。

    await fetch(`https://openapi.city.shizuoka.jp/opendataapi/servicepoint/roadRegulation`)
    dispatch({
        type: actionTypes.ADD_ADDRESS,
        data: test
    })
}