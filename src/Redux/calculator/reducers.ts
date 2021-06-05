import * as actionTypes from './types'
import initialState from '../Store/initialState'

const calculatorReducer = (state = initialState.calculator, action: actionTypes.Action): { resultValue: number } => {

    switch (action.type) {
        case actionTypes.PLUS:
            return {
                ...state,
                resultValue: state.resultValue + action.data
            }
        case actionTypes.MINUS:
            return {
                ...state,
                resultValue: state.resultValue - action.data
            }
        case actionTypes.MULTPLY:
            return {
                ...state,
                resultValue: state.resultValue * action.data
            }
        case actionTypes.DIVIDE:
            return {
                ...state,
                resultValue: state.resultValue / action.data
            }
        default: return state;
    }
}

export default calculatorReducer;