import textReducer from '../textlist/reducers'
import calculatorReducer from '../calculator/reducers'
import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const store = createStore(combineReducers({
    textlist: textReducer,
    calculator: calculatorReducer
}), applyMiddleware(thunk));

export default store;