import { combineReducers, Reducer } from 'redux';
import calculator from './calculator';

const reducer: Reducer = combineReducers({
    calculator,
});

export default reducer;