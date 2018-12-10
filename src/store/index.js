import { createStore , applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/rootReducer';
import data from '../services/service.js'

export default function configureStore( initialState={} ) {
  console.log(initialState)
  return createStore(
    rootReducer,
    applyMiddleware( thunk, data )
  );
}
