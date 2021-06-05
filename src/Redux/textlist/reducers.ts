import * as actionTypes from './types'
import initialState from '../Store/initialState'

const textReducer = (state = initialState.textlist, action: actionTypes.Action): { resultValue: string[] } => {
    switch (action.type) {

        case actionTypes.ADD_TEXT:
            const newTextList = state.resultValue.map((value) => {
                return value
            })
            newTextList.push(action.data)
            return {
                ...state,
                resultValue: newTextList
            };

        default:
            return state;
    }
}

export default textReducer;