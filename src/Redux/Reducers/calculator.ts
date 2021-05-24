import * as actionTypes from '../Actions/types'

const initialAppState = {
    resultValue: 0,
};

const calculator = (state = initialAppState, action: actionTypes.Action) => {
    switch (action.type) {
        case actionTypes.PLUS:
        return {
            ...state,
            resultValue:state.resultValue
        }
    }
}

export default calculator;