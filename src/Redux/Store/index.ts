import reducer from '../Reducers'
import { createStore } from 'redux';

const store = createStore(reducer);

export default store;