import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from './reducers';

const ware = applyMiddleware(thunk);
const enhancer = composeWithDevTools(ware);

const store = createStore(reducers, enhancer);

export default store;
