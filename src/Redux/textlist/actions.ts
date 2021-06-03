import * as actionTypes from './types'

export const addTextAction = (value: string): actionTypes.Action => {
    return {
        type: actionTypes.ADD_TEXT,
        data: value
    }
}