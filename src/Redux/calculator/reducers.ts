import * as actionTypes from './types'

const initialAppState: { resultValue: number } = {
    resultValue: 0,
};

const calculatorReducer = (state = initialAppState, action: actionTypes.Action): { resultValue: number } => {

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