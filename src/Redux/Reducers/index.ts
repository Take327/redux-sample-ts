import { combineReducers, } from 'redux';
import calculator from './calculator';
import addressList from './addressList'

const reducer = combineReducers({
    addressList,
    calculator
});

export default reducer;