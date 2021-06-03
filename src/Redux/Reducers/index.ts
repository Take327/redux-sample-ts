import { combineReducers, } from 'redux';
import calculator from './calculator';
import addressList from './addressList'
import textReducer from '../textlist/reducers'

const reducer = combineReducers({
    addressList,
    calculator,
    textReducer
});

export default reducer;