import * as actionTypes from '../Actions/types'

const initialAppState: { resultValue: number } = {
    resultValue: 0,
};

const calculator = (state = initialAppState, action: actionTypes.Action): { resultValue: number } => {

    switch (action.type) {
        case actionTypes.PLUS:
            return {
                resultValue: state.resultValue + action.data
            }
        case actionTypes.MINUS:
            return {
                resultValue: state.resultValue - action.data
            }
        case actionTypes.MULTPLY:
            return {
                resultValue: state.resultValue * action.data
            }
        case actionTypes.DIVIDE:
            return {
                resultValue: state.resultValue / action.data
            }
    }

    return state;
}

export default calculator;