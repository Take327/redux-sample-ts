import { combineReducers, } from 'redux';
import textReducer from '../textlist/reducers'
import calculatorReducer from '../calculator/reducers'

const reducer = combineReducers({
    textReducer,
    calculatorReducer
});

export default reducer;