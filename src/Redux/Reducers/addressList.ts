import * as actionTypes from '../Actions/types'

const initialAppState: { resultValue: string[] } = {
    resultValue: []
};

const addressList = (state = initialAppState, action: actionTypes.AddressAction): { resultValue: string[] } => {

    switch (action.type) {

        case actionTypes.ADD_ADDRESS:
            const newAddressList = state.resultValue.map((value) => {
                return value
            })
            newAddressList.push(action.data)
            return {
                resultValue: newAddressList
            };
    }

    return state;
}

export default addressList;